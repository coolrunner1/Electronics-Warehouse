import {useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {BlueButton} from "../components/Global/BlueButton";
import {FormInput} from "../components/Global/FormInput.tsx";
import {ClientForm} from "../components/Account/ClientForm";
import {validateEmail} from "../utils/validateEmail";
import {validatePhoneNumber} from "../utils/validatePhoneNumber";
import {validatePassport} from "../utils/validatePassport";
import {RedButton} from "../components/Global/RedButton";
import {useTranslation} from "react-i18next";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {User} from "../types/User.ts";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import {patchMyUser} from "../api/users.ts";
import useSignIn from "react-auth-kit/hooks/useSignIn";

export const AccountPage = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [passport, setPassport] = useState(0);

    const user = useAuthUser<User>();
    const isAuthenticated = useIsAuthenticated();
    const signIn = useSignIn();
    const signOut = useSignOut();

    useEffect(() => {
        if (!user) {
            return;
        }
        setLoginInput(user.login);
        setName(user.full_name);
        setEmail(user.email);
        setPhone(user.phone_number);
        setPassport(user.passport);
    }, [user]);

    const onSubmit = async () => {
        if (!validateEmail(email)) {
            alert("Please enter a valid email");
            return;
        }

        if (!user) {
            return;
        }

        const requestBody = {
            login: loginInput,
            password: password || undefined,
            full_name: name,
            email: email,
            phone_number: phone,
            passport: passport,
        }

        const result = await patchMyUser(requestBody);
        if (!result) {
            alert(t('something-went-wrong'));
            return;
        }
        signOut();

        const success = signIn({
            auth: {
                token: result.data.token,
                type: 'Bearer',
            },
            refresh: null,
            userState: result.data.user,
        });

        if (!success) {
            alert(t('something-went-wrong'));
            return;
        }

        alert(t('user-update-success'));
    }

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginInput(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePhoneNumber(e.target.value)) {
            setPhone(e.target.value);
        }
    }

    const onPassportChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePassport(e.target.value)) {
            setPassport(parseInt(e.target.value));
        }
    }

    return (
        <>
            {isAuthenticated && user &&
                <section className="py-1">
                    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                        <div
                            className="bg-light-default dark:bg-dark-default relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-blueGray-700 text-xl font-bold">
                                        {t('my-account')}
                                    </h6>
                                    <div>
                                        <BlueButton name={t('save')} onClick={onSubmit} />
                                        <RedButton name={t('log-out')} onClick={() => {signOut(); navigate('/login')}} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form>
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                        {t('user-info')}
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <FormInput name={t('login')} placeholder={t('enter-new-login')} value={loginInput} onChange={onLoginChange} />
                                        <FormInput name={t('new-password')} placeholder={t('enter-new-password')} value={password} onChange={onPasswordChange} />
                                        <FormInput name={t('full-name')} placeholder={t('enter-full-name')} value={name} onChange={onNameChange} />
                                        <FormInput name={"Email"} placeholder={t('enter-email')} value={email} onChange={onEmailChange} />
                                        <FormInput name={t('phone-number')} placeholder={t('enter-number')} value={phone} onChange={onPhoneChange} />
                                        <FormInput name={t('passport')} placeholder={t('enter-passport')} value={passport.toString()} onChange={onPassportChange} />
                                    </div>

                                    {user.client_id !== null &&
                                        <ClientForm/>
                                    }

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {!isAuthenticated &&
                <div className="flex flex-col gap-5 items-center mx-auto">
                    <div className="mt-10 text-center text-2xl">{t('only-for-authed-users')}</div>
                    <div>
                        <BlueButton name={t('log-in')} onClick={() => navigate('/login')}/>
                        <RedButton name={t('register')} onClick={() => navigate('/register')}/>
                    </div>
                </div>
            }
        </>
    )
}