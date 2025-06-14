import {useNavigate} from "react-router-dom";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useTranslation} from "react-i18next";
import {useAuthInterceptor} from "../hooks/useAuthInterceptor.ts";
import {AuthInput} from "../components/Auth/AuthInput.tsx";
import {AuthButton} from "../components/Auth/AuthButton.tsx";
import {LanguageSelector} from "../components/Global/LanguageSelector.tsx";
import {validatePhoneNumber} from "../utils/validatePhoneNumber.ts";
import {validatePassport} from "../utils/validatePassport.ts";
import {validateEmail} from "../utils/validateEmail.ts";
import {register} from "../api/auth.ts";
import {validatePostalCode} from "../utils/validatePostalCode.ts";

export const RegistrationPage = () => {
    const [loginInput, setLoginInput] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("+7");
    const [passport, setPassport] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const [loginIsInvalid, setLoginIsInvalid] = useState(false);
    const [nameIsInvalid, setNameIsInvalid] = useState(false);
    const [phoneIsInvalid, setPhoneIsInvalid] = useState(false);
    const [passportIsInvalid, setPassportIsInvalid] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
    const [countryIsInvalid, setCountryIsInvalid] = useState(false);
    const [regionIsInvalid, setRegionIsInvalid] = useState(false);
    const [cityIsInvalid, setCityIsInvalid] = useState(false);
    const [addressIsInvalid, setAddressIsInvalid] = useState(false);
    const [postalCodeIsInvalid, setPostalCodeIsInvalid] = useState(false);

    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const { t } = useTranslation();
    const signIn = useSignIn();

    useAuthInterceptor();

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (page === 0) {
                handleNextClick();
            } else {
                handleRegistrationClick();
            }
        }
    }

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePhoneNumber(e.target.value)) {
            setPhone(e.target.value);
        }
    }

    const handlePassportChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePassport(e.target.value)) {
            setPassport(e.target.value);
        }
    }

    const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePostalCode(e.target.value)) {
            setPostalCode(e.target.value);
        }
    }

    const validTimeout = 3000;

    const handleNextClick = () => {
        let valid = true;

        if (!loginInput) {
            setLoginInput(t('empty-field'));
            setLoginIsInvalid(true);
            setTimeout(() => {
                setLoginInput("");
                setLoginIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (!name) {
            setName(t('empty-field'));
            setNameIsInvalid(true);
            setTimeout(() => {
                setName("");
                setNameIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (!passport) {
            setPassport(t('empty-field'));
            setPassportIsInvalid(true);setTimeout(() => {
                setPassport("");
                setPassportIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (Number(phone) < 99999999 || !validatePhoneNumber(phone)) {
            setPhone(t('invalid-phone'));
            setPhoneIsInvalid(true);
            setTimeout(() => {
                setPhone("+7");
                setPhoneIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (!validateEmail(email)) {
            setEmailIsInvalid(true);
            setEmail(t('invalid-email'));
            setTimeout(() => {
                setEmail("");
                setEmailIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (password !== confirmPassword) {
            setPasswordIsInvalid(true);
            const msg = t('passwords-no-match');
            setPassword(msg);
            setConfirmPassword(msg);
            setTimeout(() => {
                setPassword("");
                setConfirmPassword("");
                setPasswordIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (password.length < 8) {
            setPasswordIsInvalid(true);
            const msg = t('password-too-short');
            setPassword(msg);
            setConfirmPassword(msg);setTimeout(() => {
                setPassword("");
                setConfirmPassword("");
                setPasswordIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (valid) {
            setPage(1);
        }
    }

    const handleRegistrationClick = () => {
        let valid = true;
        if (!country) {
            setCountry(t('empty-field'));
            setCountryIsInvalid(true);
            setTimeout(() => {
                setCountry("");
                setCountryIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (!region) {
            setRegion(t('empty-field'));
            setRegionIsInvalid(true);
            setTimeout(() => {
                setRegion("");
                setRegionIsInvalid(false);
            }, validTimeout)
            valid = false;
        }

        if (!city) {
            setCity(t('empty-field'));
            setCityIsInvalid(true);
            setTimeout(() => {
                setCity("");
                setCityIsInvalid(false);
            }, validTimeout)
            valid = false;
        }

        if (!address) {
            setAddress(t('empty-field'));
            setAddressIsInvalid(true);
            setTimeout(() => {
                setAddress("");
                setAddressIsInvalid(false);
            }, validTimeout)
            valid = false;
        }

        if (!postalCode) {
            setPostalCode(t('empty-field'));
            setPostalCodeIsInvalid(true);
            setTimeout(() => {
                setPostalCode("");
                setPostalCodeIsInvalid(false);
            }, validTimeout);
            valid = false;
        }

        if (!valid) {
            return;
        }


        const requestBody = {
            login: loginInput,
            full_name: name,
            email: email,
            phone_number: phone,
            passport: Number(passport),
            password: password,
            city: city,
            region: region,
            country: country,
            address: address,
            postal_code: Number(postalCode),
        }
        register(requestBody)
            .then((res) => {
                const success = signIn({
                    auth: {
                        token: res.data.token,
                        type: 'Bearer',
                    },
                    refresh: null,
                    userState: res.data.user,
                });
                if (!success) {
                    return;
                }
                navigate("/");
            })
    }

    return (
        <div className="text-white min-h-screen flex flex-col justify-center sm:py-12" style={{backgroundImage: `url('login-bg.png')`}}>
            <div className='absolute top-0 left-0 m-5'>
                <button
                    className="p-2 rounded-lg shadow backdrop-blur-xl bg-[#0000001f] hover:bg-[#0000003f] transition duration-200"
                    onClick={() => navigate("/")}
                >
                    {t('home')}
                </button>
            </div>
            <div className='absolute top-0 right-0 m-5'>
                <LanguageSelector
                    className={"p-2 rounded-lg shadow backdrop-blur-xl bg-[#0000001f] hover:bg-[#0000003f] transition duration-200"}
                />
            </div>
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md rounded-lg shadow backdrop-blur-xl bg-[#0000001f]">
                <h1 className="font-bold text-center text-2xl mb-5">{t('shop-title')}</h1>
                <div className="w-full">
                    <h3 className='font-bold text-center'>{t('have-account')}
                        <a
                            href=''
                            onClick={() => navigate("/login")}
                            className='text-blue-200 hover:text-blue-400 transition duration-200'
                        >
                            {' '+t('login-now')}
                        </a>
                    </h3>
                    {page === 0 &&
                        <div className="px-5 py-7">
                            <AuthInput
                                invalid={loginIsInvalid}
                                label={t('login')}
                                value={loginInput}
                                type={'text'}
                                onChange={(e) => setLoginInput(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={nameIsInvalid}
                                label={t('full-name')}
                                value={name}
                                type={'text'}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={phoneIsInvalid}
                                label={t('phone-number')}
                                value={phone}
                                type={'text'}
                                onChange={handlePhoneChange}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={emailIsInvalid}
                                label={'Email'}
                                value={email}
                                type={'email'}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={passportIsInvalid}
                                label={t('passport')}
                                value={passport}
                                type={'text'}
                                onChange={handlePassportChange}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={passwordIsInvalid}
                                label={t('password')}
                                value={password}
                                type={'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={passwordIsInvalid}
                                label={t('confirm-password')}
                                value={confirmPassword}
                                type={'password'}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthButton
                                label={t('next')}
                                handleClick={handleNextClick}
                            />
                        </div>
                    }
                    {page === 1 &&
                        <div className="px-5 py-7">
                            <AuthInput
                                invalid={countryIsInvalid}
                                label={t('country')}
                                value={country}
                                type={'text'}
                                onChange={(e) => setCountry(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={regionIsInvalid}
                                label={t('region')}
                                value={region}
                                type={'text'}
                                onChange={(e) => setRegion(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={cityIsInvalid}
                                label={t('city')}
                                value={city}
                                type={'text'}
                                onChange={(e) => setCity(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={addressIsInvalid}
                                label={t('address')}
                                value={address}
                                type={'text'}
                                onChange={(e) => setAddress(e.target.value)}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthInput
                                invalid={postalCodeIsInvalid}
                                label={t('postal-code')}
                                value={postalCode}
                                type={'text'}
                                onChange={handlePostalCodeChange}
                                onKeyDown={keyPressHandler}
                            />
                            <AuthButton
                                label={t('back')}
                                hideSVG={true}
                                handleClick={() => setPage(0)}
                            />
                            <div className={"py-2"}></div>
                            <AuthButton
                                label={t('register')}
                                handleClick={handleRegistrationClick}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}