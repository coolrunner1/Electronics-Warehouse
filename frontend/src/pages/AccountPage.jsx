import {setUser} from "../slices/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {BlueButton} from "../components/Global/BlueButton.jsx";

export const AccountPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const user = useSelector(state => state.user.userInfo);

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    }

    useEffect(() => {
        setLogin(user.login);
    }, [])

    return (
        <>
            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    My account
                                </h6>
                                <div className="flex">
                                    <BlueButton name={"Save"}/>
                                    <button
                                        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button" onClick={() => {dispatch(setUser(null)); navigate("/login")}}>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    User Information
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Username
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value={login} onChange={onLoginChange}/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Email address
                                            </label>
                                            <input type="email"
                                                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="jesse@example.com"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                First Name
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="Lucky"/>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                   htmlFor="grid-password">
                                                Last Name
                                            </label>
                                            <input type="text"
                                                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                   value="Jesse"/>
                                        </div>
                                    </div>
                                </div>

                                {user.client_id !== null &&
                                    <>
                                        <hr className="mt-6 mb-3 border-b-1 border-blueGray-300"/>
                                        <div className="flex justify-between">
                                            <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                                                Client Information
                                            </h6>
                                            <BlueButton name={"Save"}/>
                                        </div>

                                        <div className="flex flex-wrap mt-6">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password">
                                                        Address
                                                    </label>
                                                    <input type="text"
                                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                           value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password">
                                                        City
                                                    </label>
                                                    <input type="email"
                                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                           value="New York"/>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password">
                                                        Country
                                                    </label>
                                                    <input type="text"
                                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                           value="United States"/>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password">
                                                        Postal Code
                                                    </label>
                                                    <input type="text"
                                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                           value="Postal Code"/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}