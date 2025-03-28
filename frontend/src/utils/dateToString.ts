export const dateToString = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB") + " " + new Date(dateString).toLocaleTimeString("en-GB")
}