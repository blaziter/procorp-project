export const DateNow = () => {
    return new Date().toISOString().split('T')[0]
}