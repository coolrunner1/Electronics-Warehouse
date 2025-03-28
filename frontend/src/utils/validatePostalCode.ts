export const validatePostalCode = (postalCode) => {
    return ((/^\d+$/.test(postalCode) && postalCode.length < 8) || postalCode === '');
}