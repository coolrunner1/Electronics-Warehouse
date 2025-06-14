import {useNavigate} from "react-router-dom";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useTranslation} from "react-i18next";
import {login} from "../api/auth"
import {useAuthInterceptor} from "../hooks/useAuthInterceptor.ts";
import {AuthInput} from "../components/Auth/AuthInput.tsx";
import {AuthButton} from "../components/Auth/AuthButton.tsx";
import {LanguageSelector} from "../components/Global/LanguageSelector.tsx";

export const LoginPage = () => {
    const [loginInput, setLoginInput] = useState("");
    const [password, setPassword] = useState("");
    const { t } = useTranslation();
    const signIn = useSignIn();

    useAuthInterceptor();

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const navigate = useNavigate();

    const handleClick = () => {
        const requestBody = {
            login: loginInput,
            password: password,
        }
        login(requestBody)
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
    };

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginInput(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
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
                    <h3 className='font-bold text-center'>{t('no-account')}
                        <a
                            href=''
                            onClick={() => navigate("/register")}
                            className='text-blue-200 hover:text-blue-400 transition duration-200'
                        >
                            {' '+t('register-now')}
                        </a>
                    </h3>
                    <div className="px-5 py-7">
                        <AuthInput
                            label={t('login')}
                            type={'text'}
                            value={loginInput}
                            onChange={handleLoginChange}
                            onKeyDown={keyPressHandler}
                        />
                        <AuthInput
                            label={t('password')}
                            type={'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            onKeyDown={keyPressHandler}
                        />
                        <AuthButton
                            label={t('log-in')}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}