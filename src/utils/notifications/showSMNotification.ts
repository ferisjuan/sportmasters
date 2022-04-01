import { showNotification } from '@mantine/notifications'
import { types } from './types.description'

export const showSMNotification = (message: string, type: keyof typeof notification.ENUM): void =>
    showNotification({
        autoClose: 2000,
        color: types[type].color,
        id: types[type].id,
        loading: types[type].loading,
        message,
        title: types[type].title,
    })
