// @vendors
import { UseMiddleware } from 'type-graphql'

// @generated
import { ModelConfig, ModelsEnhanceMap, ResolversEnhanceMap } from '../generated/typegraphql-prisma.ts'

// @middlewares
import { isAuth } from '../middleware'

const schoolConfig: ModelConfig<"School"> = {
    fields: {
        address: [UseMiddleware(isAuth)],
        id: [UseMiddleware(isAuth)],
        phone: [UseMiddleware(isAuth)],
        players: [UseMiddleware(isAuth)],
        tier: [UseMiddleware(isAuth)],
        users: [UseMiddleware(isAuth)],
    }
}

export const modelsEnhanceMap: ModelsEnhanceMap = {
    School: schoolConfig,
}

export const resolversEnhanceMap: ResolversEnhanceMap = {
    Player: {
        _all: [UseMiddleware(isAuth)]
    },
    User: {
        _all: [UseMiddleware(isAuth)]
    }
}
