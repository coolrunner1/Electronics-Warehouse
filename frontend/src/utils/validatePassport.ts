export const validatePassport = (passport: string) => {
    return ((/^\d+$/.test(passport) && passport.length < 10) || passport === '');
}