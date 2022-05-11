export const getInitials = (name: string, lastName: string): string => {
    return `${name.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`
}
