export const Age = (date: string | null | undefined): number => {
    if (!date) return 0
    const today = new Date()
    const birthday = new Date(date)
    let age = today.getFullYear() - birthday.getFullYear()
    const month = today.getMonth() - birthday.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--
    }

    return age
}
