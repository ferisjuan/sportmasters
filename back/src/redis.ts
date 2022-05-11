import Redis from 'ioredis';

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_URL = process.env.REDIS_URL || `redis://${REDIS_HOST}:${REDIS_PORT}`;

export const redis = new Redis(REDIS_URL, {
    tls: {
        rejectUnauthorized: false,
    }
});
