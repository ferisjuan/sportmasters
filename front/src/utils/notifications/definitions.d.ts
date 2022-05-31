declare namespace notification {
    type Type = {
        id: string
        title: string
        color: string
        loading: boolean
    }

    enum ENUM {
        ERROR = 'ERROR',
        INFO = 'INFO',
        LOADING = 'LOADING',
        SUCCESS = 'SUCCESS',
        WARNING = 'WARNING',
    }
}
