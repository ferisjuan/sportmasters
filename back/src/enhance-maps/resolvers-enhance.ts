import { applyResolversEnhanceMap } from '@generated/type-graphql'
import { UseMiddleware } from 'type-graphql'
import { isAuth } from '../modules/middleware'

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
