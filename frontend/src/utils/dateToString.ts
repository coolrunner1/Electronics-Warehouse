export const dateToString = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB") + " " + new Date(dateString).toLocaleTimeString("en-GB")
}