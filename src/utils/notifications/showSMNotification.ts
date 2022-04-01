import { showNotification } from '@mantine/notifications'

enum NOTIFICATION_TYPES {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO',
}

type Type = {
    id: string
    title: string
    color: string
}

const types: Record<keyof typeof NOTIFICATION_TYPES, Type> = {
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
    SUCCESS: {} as Type,
    WARNING: {} as Type,
}

export const showSMNotification = (message: string, type: keyof typeof NOTIFICATION_TYPES): void =>
    showNotification({
        id: types[type].id,
        autoClose: 2000,
        title: types[type].title,
        message,
        color: types[type].color,
    })
