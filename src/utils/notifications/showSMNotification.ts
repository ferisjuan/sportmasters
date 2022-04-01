import { showNotification } from '@mantine/notifications'
import { NOTIFICATION_ENUM } from './enums'
import { types } from './types.description'

export const showSMNotification = (message: string, type: keyof typeof NOTIFICATION_ENUM): void =>
    showNotification({
        id: types[type].id,
        autoClose: 2000,
        title: types[type].title,
        message,
        color: types[type].color,
    })
