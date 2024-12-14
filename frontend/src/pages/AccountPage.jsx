import {setUser} from "../slices/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {BlueButton} from "../components/Global/BlueButton.jsx";
import {AccountInput} from "../components/Account/AccountInput.jsx";
import {ClientForm} from "../components/Account/ClientForm.jsx";
import axios from "axios";
import {validateEmail} from "../utils/validateEmail.js";
import {validatePhoneNumber} from "../utils/validatePhoneNumber.js";
import {validatePassport} from "../utils/validatePassport.js";

export const AccountPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [passport, setPassport] = useState(0);
    const user = useSelector(state => state.user.userInfo);

    useEffect(() => {
        setLogin(user.login);
        setName(user.full_name);
        setEmail(user.email);
        setPhone('+7'+user.phone_number);
        setPassport(user.passport);
    }, [user]);

    const onSubmit = async () => {
        if (!validateEmail(email)) {
            alert("Please enter a valid email");
            return;
        }

        const requestBody = {
            user_id: user.user_id,
            role_id: user.role_id,
            client_id: user.client_id,
            login: login,
            password: password,
            image_path: user.image_path,
            full_name: name,
            email: email,
            phone_number: parseInt(phone.slice(2, phone.length)),
            passport: passport,
        }

        await axios.put("http://localhost:8000/users/"+user.user_id, requestBody)
            .then((res) => {
                console.log(res);
                setPassword('');
            })
            .catch((err) => {
                console.error(err);
                if (err.response.status === 409) {
                    alert(err.response.data.message);
                }
            });

        await axios.get("http://localhost:8000/users/"+user.user_id)
            .then((res) => {
                dispatch(setUser(res.data.rows[0]));
                if (res.status === 200) {
                    alert("User has been updated successfully.");
                }
            })
            .catch((err) => {console.log(err)});
    }

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPhoneChange = (e) => {
        if (validatePhoneNumber(e.target.value)) {
            setPhone(e.target.value);
        }
    }

    const onPassportChange = (e) => {
        if (validatePassport(e.target.value)) {
            setPassport(parseInt(e.target.value));
        }
    }

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
                                    <BlueButton name={"Save"} onClick={onSubmit} />
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
                                    <AccountInput name={"Login"} placeholder={"Enter new login"} value={login} onChange={onLoginChange} />
                                    <AccountInput name={"New password"} placeholder={"Enter new password"} value={password} onChange={onPasswordChange} />
                                    <AccountInput name={"Full name"} placeholder={"Enter full name"} value={name} onChange={onNameChange} />
                                    <AccountInput name={"Email address"} placeholder={"Enter email address"} value={email} onChange={onEmailChange} />
                                    <AccountInput name={"Phone number"} placeholder={"Enter phone number"} value={phone} onChange={onPhoneChange} />
                                    <AccountInput name={"Passport"} placeholder={"Enter passport"} value={passport} onChange={onPassportChange} />
                                </div>

                                {user.client_id !== null &&
                                    <ClientForm/>
                                }

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}