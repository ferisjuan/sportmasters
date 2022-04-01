export const types: Record<keyof typeof notification.ENUM, notification.Type> = {
    INFO: {
        id: 'info-notification',
        title: 'Información',
        color: 'teal',
        loading: false,
    },
    ERROR: {
        id: 'error-notification',
        title: 'Error',
        color: 'red',
        loading: false,
    },
    LOADING: {
        id: 'loading-notification',
        title: 'Cargando datos',
        color: 'blue',
        loading: true,
    },
    SUCCESS: {} as notification.Type,
    WARNING: {} as notification.Type,
}
