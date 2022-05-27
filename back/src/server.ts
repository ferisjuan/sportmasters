// @vendors
import 'reflect-metadata'
import 'dotenv/config'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { expressjwt as jwt } from 'express-jwt'
import connectRedis from 'connect-redis'
import Express from 'express'
import session from 'express-session'

// @context
import { prisma } from './context'

// @enhance maps
import { modelsEnhanceMap, resolversEnhanceMap } from './enhance-maps'

// @generated
import { applyModelsEnhanceMap, applyResolversEnhanceMap, resolvers } from './generated/typegraphql-prisma.ts'

// @logger
import { logger } from './logger'

// @schema
import {
    ChangePasswordResolver,
    ConfirmUserResolver,
    ForgotPassword,
    LogoutResolver,
    SigninResolver,
    SignupResolver,
} from './modules'

// @redis
import { redis } from './redis'

const main = async () => {
    applyModelsEnhanceMap(modelsEnhanceMap)
    applyResolversEnhanceMap(resolversEnhanceMap)

    const schema = await buildSchema({
        resolvers: [
            ...resolvers,
            ChangePasswordResolver,
            ConfirmUserResolver,
            ForgotPassword,
            LogoutResolver,
            SigninResolver,
            SignupResolver,
        ],
    })

    const apolloServer = new ApolloServer({
        context: ({ req, res }) => ({
            prisma,
            req,
            res,
        }),
        logger: logger.child({ module: 'apollo' }),
        formatError: error => {
            logger.error(error)

            return error
        },
        schema,
    })

    await apolloServer.start()

    const app = Express()
    const path = '/graphql'
    const RedisStore = connectRedis(session)

    app.use(
        session({
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging',
                sameSite: 'lax',
                maxAge: parseInt(process.env.SESSION_MAX_AGE, 10),
            },
            name: process.env.SESSION_COOKIE_NAME,
            resave: false,
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET,
            store: new RedisStore({
                client: redis,
            }),
            unset: 'destroy',
        }),
    )

    app.use(
        path,
        jwt({
            algorithms: ['HS256'],
            secret: process.env.JWT_SECRET,
            credentialsRequired: false,
        }),
    )

    const corsOptions = {
        credentials: true,
        methods: ['P`OST', 'OPTIONS'],
        origin: process.env.CORS_ORIGIN || '*',
    }

    apolloServer.applyMiddleware({
        app,
        path,
        cors: corsOptions,
    })

    app.listen(process.env.PORT || 4000, () => {
        logger.info(`🚀 Server ready at http//:localhost${process.env.PORT || 4000}/graphql`)
    })
}

main()
