import { v4 } from 'uuid'
import { redis } from '../redis'

export const createConfirmationUrl = async (userId: string) => {
    const token = v4()

    await redis.set(token, userId, "EX", 60 * 15) // 15 min expiration

    return `${process.env.FRONT_URL}/user/confirm/${token}`
}
