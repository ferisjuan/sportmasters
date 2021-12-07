export const formatDate = (seconds: number): string => {
    const date = new Date(seconds)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${day}/${month}/${year}`
}
