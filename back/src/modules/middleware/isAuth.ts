import { MiddlewareFn } from 'type-graphql';
import { Context } from '../../context';

export const isAuth: MiddlewareFn<Context> = async ({ context: { req } }, next) => {
    if (!req.session.userId) throw new Error('You are not authenticated')

    return next()
}
