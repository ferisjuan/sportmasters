import { logger } from '../../logger'
import { MiddlewareFn } from 'type-graphql';
import { Context } from '../../context';

export const schemaLogger: MiddlewareFn<Context> = async ({ info }, next) => {
    logger.info(`Field name: ${info.fieldName}`)

    return next()
}
