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
        aggregateSchool: [UseMiddleware(isAuth)],
        createManySchool: [UseMiddleware(isAuth)],
        deleteManySchool: [UseMiddleware(isAuth)],
        deleteSchool: [UseMiddleware(isAuth)],
        findFirstSchool: [UseMiddleware(isAuth)],
        groupBySchool: [UseMiddleware(isAuth)],
        school: [UseMiddleware(isAuth)],
        schools: [UseMiddleware(isAuth)],
        updateManySchool: [UseMiddleware(isAuth)],
        updateSchool: [UseMiddleware(isAuth)],
        upsertSchool: [UseMiddleware(isAuth)],
    },
    User: {
        _all: [UseMiddleware(isAuth)]
    }
})
