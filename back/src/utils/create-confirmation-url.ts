// @vendors
import { v4 } from 'uuid'

// @constants
import { CONFIRM_USER_PREFIX } from '../constants'

// @redis
import { redis } from '../redis'

export const createConfirmationUrl = async (userId: string) => {
    const token = v4()

    await redis.set(`${CONFIRM_USER_PREFIX}${token}`, userId, "EX", 60 * 60 * 24) // 24 hours expiration

    return `${process.env.FRONT_URL}/user/confirm/${token}`
}
