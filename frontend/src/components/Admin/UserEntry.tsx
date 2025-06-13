import {ChangeEvent, useEffect, useState} from "react";
import Select, {SingleValue} from "react-select";
import {useDispatch} from "react-redux";
import {setTableRefresh} from "../../slices/tableSlice";
import {BlueButton} from "../Global/BlueButton";
import {RedButton} from "../Global/RedButton";
import {customStyles} from "../../utils/customStyles";
import {Td, Tr} from "react-super-responsive-table";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {TableTextInput} from "../Global/TableTextInput";
import {validateEmail} from "../../utils/validateEmail";
import {validatePhoneNumber} from "../../utils/validatePhoneNumber";
import {validatePassport} from "../../utils/validatePassport";
import {User} from "../../types/User";
import {ValueLabel} from "../../types/ValueLabel";
import {useTranslation} from "react-i18next";
import {USER_ROLE} from "../../constants/roles.ts";
import {createUser, deleteUser, updateUser} from "../../api/users.ts";

export type UserEntryProps = {
    user: User,
    roles: ValueLabel<number>[],
    clients: ValueLabel<number>[],
};

export const UserEntry = (
    props: UserEntryProps
) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passport, setPassport] = useState(0);
    const [defaultRole, setDefaultRole] = useState(-1);
    const [defaultClient, setDefaultClient] = useState(-1);
    const [role, setRole] = useState(-1);
    const [client, setClient] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    useEffect(() => {
        setLogin(props.user.login);
        setFullName(props.user.full_name);
        setEmail(props.user.email);
        setPhoneNumber(props.user.phone_number);
        setPassport(props.user.passport);
    }, [props.user]);

    useEffect(() => {
        props.roles.forEach(role => {
            if (role.value === props.user.role_id) {
                setDefaultRole(role.value - 1);
                setRole(role.value);
            }
        });
    }, [props.roles]);

    useEffect(() => {
        if (props.user.client_id !== null) {
            props.clients.forEach(client => {
                if (client.value === props.user.client_id) {
                    setDefaultClient(client.value - 1);
                }
            })
        }
    }, [props.clients]);

    useEffect(() => {
        setRefreshing(!refreshing);
    }, [defaultClient])

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePhoneNumber(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    }

    const onPassportChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePassport(e.target.value)) {
            if (isNaN(parseInt(e.target.value))) {
                setPassport(0);
                return;
            }
            setPassport(parseInt(e.target.value));
        }
    }

    const onRoleChange = (e: SingleValue<ValueLabel<number>> ) => {
        if (!e) return;
        setRole(e.value);
    }

    const onClientChange = (e: SingleValue<ValueLabel<number>>) => {
        if (!e) return;
        setClient(e.value);
    }

    const onClickDelete = async () => {
        if (props.user.user_id !== 99999) {
            await deleteUser(props.user.user_id)
                .then(() => dispatch(setTableRefresh(true)));
        }
    }

    const onClickEdit = async () => {
        if (!validateEmail(email)) {
            alert("Email is invalid!");
            dispatch(setTableRefresh(true));
            return;
        }

        const requestBody = {
            user_id: props.user.user_id,
            role_id: role,
            client_id: client,
            login: login,
            password: password,
            image_path: props.user.image_path,
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            passport: passport,
        }
        if (props.user.user_id === 99999) {
            await createUser(requestBody)
                .then(() => dispatch(setTableRefresh(true)));
        } else {
            await updateUser(props.user.user_id, requestBody)
                .then(() => dispatch(setTableRefresh(true)));
        }
    }

    return (
        <>
            <Tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
                <Td className="p-3">
                    <TableTextInput value={login} onChange={onLoginChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={password} onChange={onPasswordChange} placeholder={t('enter-new-password')}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={fullName} onChange={onNameChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={email} onChange={onEmailChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={phoneNumber} onChange={onNumberChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={passport.toString()} onChange={onPassportChange}/>
                </Td>
                <Td className="p-3">
                    { defaultRole !== -1 &&
                        <Select
                            options={props.roles}
                            onChange={onRoleChange}
                            styles={customStyles}
                            defaultValue={props.roles[defaultRole]}
                            maxMenuHeight={250}
                        />
                    }
                </Td>
                <Td className="p-3 px-5">
                    { (role === USER_ROLE || defaultClient !== -1) && (
                        <Select
                            options={props.clients}
                            onChange={onClientChange}
                            styles={customStyles}
                            defaultValue={props.clients[defaultClient]}
                        />
                    )}

                </Td>
                <Td className="p-3 px-5 flex justify-end">
                    <BlueButton onClick={onClickEdit} name={t('save')}/>
                    <RedButton onClick={onClickDelete} name={t('delete')}/>
                </Td>
            </Tr>
        </>
    )
}