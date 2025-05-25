import {setUser} from "../slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {BlueButton} from "../components/Global/BlueButton";
import {AccountInput} from "../components/Account/AccountInput";
import {ClientForm} from "../components/Account/ClientForm";
import axios from "axios";
import {validateEmail} from "../utils/validateEmail";
import {validatePhoneNumber} from "../utils/validatePhoneNumber";
import {validatePassport} from "../utils/validatePassport";
import {RedButton} from "../components/Global/RedButton";
import {RootState} from "../state/store";
import {useTranslation} from "react-i18next";

export const AccountPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [passport, setPassport] = useState(0);
    const user = useSelector((state: RootState) => state.user.userInfo);

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

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
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
            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    {t('my-account')}
                                </h6>
                                <div>
                                    <BlueButton name={t('save')} onClick={onSubmit} />
                                    <RedButton name={t('log-out')} onClick={() => {dispatch(setUser(null)); navigate("/login")}} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    {t('user-info')}
                                </h6>
                                <div className="flex flex-wrap">
                                    <AccountInput name={t('login')} placeholder={t('enter-new-login')} value={login} onChange={onLoginChange} />
                                    <AccountInput name={t('new-password')} placeholder={t('enter-new-password')} value={password} onChange={onPasswordChange} />
                                    <AccountInput name={t('full-name')} placeholder={t('enter-full-name')} value={name} onChange={onNameChange} />
                                    <AccountInput name={"Email"} placeholder={t('enter-email')} value={email} onChange={onEmailChange} />
                                    <AccountInput name={t('phone-number')} placeholder={t('enter-number')} value={phone} onChange={onPhoneChange} />
                                    <AccountInput name={t('passport')} placeholder={t('enter-passport')} value={passport.toString()} onChange={onPassportChange} />
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