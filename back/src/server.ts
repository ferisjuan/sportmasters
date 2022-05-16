// @vendors
import "reflect-metadata"
import "dotenv/config"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from 'type-graphql'
import Express from 'express'
import connectRedis from 'connect-redis'
import session from 'express-session'

// @context
import { prisma } from './context'

// @generated
import { PlayerCrudResolver, SchoolCrudResolver, SchoolRelationsResolver, UserCrudResolver } from './generated/typegraphql-prisma.ts'

// @logger
import { logger } from './logger'

// @schema
import { ChangePasswordResolver, ConfirmUserResolver, ForgotPassword, LogoutResolver, SigninResolver, SignupResolver } from './modules'

// @redis
import { redis } from './redis'

// @utils
import { appliedResolversEnhanceMap } from './enhance-maps'

const main = async () => {
    appliedResolversEnhanceMap()

    const schema = await buildSchema({
        resolvers: [
            ChangePasswordResolver,
            ConfirmUserResolver,
            ForgotPassword,
            LogoutResolver,
            PlayerCrudResolver,
            SchoolCrudResolver,
            SchoolRelationsResolver,
            SigninResolver,
            SignupResolver,
            UserCrudResolver,
        ],
    })

    const apolloServer = new ApolloServer({
        context: ({ req, res }) => ({
            prisma,
            req,
            res
        }),
        logger: logger.child({ module: 'apollo' }),
        formatError: (error) => {
            logger.error(error)

            return error
        },
        schema,
    })

    const app = Express()
    const RedisStore = connectRedis(session)


    app.use(
        session({
            store: new RedisStore({
                client: redis,
            }),
            name: process.env.SESSION_COOKIE_NAME,
            secret: process.env.SESSION_SECRET!,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: parseInt(process.env.SESSION_MAX_AGE, 10),
            },
        })
    )

    await apolloServer.start()

    const corsOptions = {
        credentials: true,
        origin: process.env.CORS_ORIGIN || '*',
    }

    apolloServer.applyMiddleware({ app, path: '/graphql', cors: corsOptions })

    app.listen(process.env.PORT || 4000, () => {
        logger.info(`🚀 Server ready at http//:localhost${process.env.PORT || 4000
            }/graphql`)
    })
}

main()
