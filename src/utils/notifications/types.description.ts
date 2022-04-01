import { NOTIFICATION_ENUM } from './enums'

export const types: Record<keyof typeof NOTIFICATION_ENUM, Notification.Type> = {
    INFO: {
        id: 'info-notification',
        title: 'Información',
        color: 'teal',
    },
    ERROR: {
        id: 'error-notification',
        title: 'Error',
        color: 'red',
    },
    SUCCESS: {} as Notification.Type,
    WARNING: {} as Notification.Type,
}
