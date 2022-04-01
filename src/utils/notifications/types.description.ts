export const types: Record<keyof typeof notification.ENUM, notification.Type> = {
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
    SUCCESS: {} as notification.Type,
    WARNING: {} as notification.Type,
}
