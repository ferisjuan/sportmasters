import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'invoice' },
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
    ],
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(
                format.colorize({ all: true }),
                format.ms(),
                format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
            ),
        })
    )
}