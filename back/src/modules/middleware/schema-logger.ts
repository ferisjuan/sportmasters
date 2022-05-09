import { logger } from '../../logger'
import { MiddlewareFn } from 'type-graphql';
import { Context } from '../../context';

export const schemaLogger: MiddlewareFn<Context> = async ({ info }, next) => {
    logger.info(`Excecuting query: ${info.fieldName}`)

    return next()
}
