import {useNavigate} from "react-router-dom";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useDispatch} from "react-redux";
import {setUser} from "../slices/userSlice";

export const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const signIn = useSignIn();

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    const navigate = useNavigate();

    const handleClick = () => {
        const requestBody = {
            login: login,
            password: password,
        }
        axios.post("http://localhost:8000/login", requestBody)
            .then((res) => {
                console.log(res);
                signIn({
                    auth: {
                        token: res.data.token,
                        type: 'Bearer',
                    },
                    userState: res.data.user,
                })
                dispatch(setUser(res.data.user));
                if (res.data.user.role_id === 1) {
                    navigate("/admin");
                } else if (res.data.user.role_id === 2) {
                    navigate("/store");
                } else {
                    navigate("/items");
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            });
    };

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <h1 className="font-bold text-center text-2xl mb-5">Electronics Warehouse</h1>
                    <div className="shadow w-full rounded-lg">
                        <div className="px-5 py-7">
                            <label className="font-semibold text-sm pb-1 block">Login</label>
                            <input type="text" onChange={handleLoginChange} onKeyDown={keyPressHandler} className="border dark:border-gray-500 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                            <label className="font-semibold text-sm pb-1 block">Password</label>
                            <input type="password" onChange={handlePasswordChange} onKeyDown={keyPressHandler} className="border dark:border-gray-500 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"/>
                            <button type="button"
                                    onClick={handleClick}
                                    className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span className="inline-block mr-2">Login</span>
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