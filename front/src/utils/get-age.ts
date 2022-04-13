export const getAge = (seconds: number): string => {
    const age = new Date(seconds)
    return `${age.getFullYear()}`
}
