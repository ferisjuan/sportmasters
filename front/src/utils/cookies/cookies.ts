// @vendors
import cookie from 'react-cookies'

export const setSessionCookie = (reqCookie: Record<string, unknown>): void => {
    cookie.save(import.meta.env.REACT_APP_SESSION_COOKIE_NAME, reqCookie, {})
}

export const getSessionCookie = (): Record<string, unknown> => {
    return cookie.load(import.meta.env.REACT_APP_SESSION_COOKIE_NAME)
}
