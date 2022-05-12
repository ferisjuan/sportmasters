// @vendors
import { UseMiddleware } from 'type-graphql'

// @middlewares
import { isAuth } from '../middleware'

// @generated
import { applyResolversEnhanceMap } from '../generated/typegraphql-prisma.ts'

export const appliedResolversEnhanceMap = () => applyResolversEnhanceMap({
    Player: {
        _all: [UseMiddleware(isAuth)]
    },
    School: {
        _all: [UseMiddleware(isAuth)]
    },
    User: {
        _all: [UseMiddleware(isAuth)]
    }
})
