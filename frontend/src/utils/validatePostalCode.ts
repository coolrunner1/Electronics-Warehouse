export const validatePostalCode = (postalCode: string) => {
    return ((/^\d+$/.test(postalCode) && postalCode.length < 8) || postalCode === '');
}