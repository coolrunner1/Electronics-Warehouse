export const validatePassport = (passport) => {
    return (/^\d+$/.test(passport) && passport.length < 10);
}