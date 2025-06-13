import {useNavigate} from "react-router-dom";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useTranslation} from "react-i18next";
import {login} from "../api/auth"
import {useAuthInterceptor} from "../hooks/useAuthInterceptor.ts";

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
                console.log(res);
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
                /*if (res.data.user.role_id === 1) {
                    navigate("/admin/users");
                } else if (res.data.user.role_id === 2) {
                    navigate("/store");
                } else {
                    navigate("/employee/items");
                }*/
            })
    };

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginInput(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="text-white min-h-screen flex flex-col justify-center sm:py-12" style={{backgroundImage: `url('login-bg.png')`}}>
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md rounded-lg shadow backdrop-blur-xl bg-[#0000001f]">
                    <h1 className="font-bold text-center text-2xl mb-5">{t('shop-title')}</h1>
                    <div className="w-full">
                        <div className="px-5 py-7">
                            <label className="font-semibold text-sm pb-1 block">{t('login')}</label>
                            <input
                                type="text"
                                onChange={handleLoginChange}
                                onKeyDown={keyPressHandler}
                                className="bg-[#1447e65f] border border-[#1447e65f] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            />
                            <label className="font-semibold text-sm pb-1 block">{t('password')}</label>
                            <input
                                type="password"
                                onChange={handlePasswordChange}
                                onKeyDown={keyPressHandler}
                                className="bg-[#1447e65f] border border-[#1447e65f] rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            />
                            <button type="button"
                                    onClick={handleClick}
                                    className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span className="inline-block mr-2">{t('log-in')}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" className="w-4 h-4 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}