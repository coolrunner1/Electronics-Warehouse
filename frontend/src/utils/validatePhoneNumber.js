export const validatePhoneNumber = (phoneNumber) => {
    return /^\d+$/.test(phoneNumber.substring(1, phoneNumber.length)) && phoneNumber.length < 12
}