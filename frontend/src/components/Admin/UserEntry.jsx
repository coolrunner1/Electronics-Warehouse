import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import Select from "react-select";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setTableRefresh} from "../../slices/tableSlice.js";
import {BlueButton} from "../Global/BlueButton.jsx";
import {RedButton} from "../Global/RedButton.jsx";
import {customStyles} from "../../utils/customStyles.js";
import {Td, Tr} from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {TableTextInput} from "../Global/TableTextInput.jsx";

export const UserEntry = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState('');
    const [passport, setPassport] = useState(0);
    const [defaultRole, setDefaultRole] = useState(-1);
    const [defaultClient, setDefaultClient] = useState(-1);
    const [role, setRole] = useState(-1);
    const [client, setClient] = useState(0);
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLogin(props.user.login);
        setFullName(props.user.full_name);
        setEmail(props.user.email);
        setNumber('+7' + props.user.phone_number);
        setPassport(props.user.passport);
    }, [props.user]);

    useEffect(() => {
        props.roles.forEach(role => {
            if (role.value === props.user.role_id) {
                setDefaultRole(role.value-1);
                setRole(role.value);
            }
        });
    }, [props.roles]);

    useEffect(() => {
        if (props.user.client_id !== null) {
            props.clients.forEach(client => {
                if (client.value === props.user.client_id) {
                    setDefaultClient(client.value-1);
                }
            })
        }
    }, [props.clients]);

    useEffect(() => {
        setRefreshing(!refreshing);
    }, [defaultClient])

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onNameChange = (e) => {
        setFullName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onNumberChange = (event) => {
        if (/^\d+$/.test(event.target.value.substring(1, event.target.value.length)) && event.target.value.length < 12) {
            setNumber(event.target.value);
        }
    }

    const onPassportChange = (event) => {
        if (/^\d+$/.test(event.target.value)
            && event.target.value.length < 10) {
            setPassport(parseInt(event.target.value));
        }
    }

    const onRoleChange = (e) => {
        setRole(e.value);
    }

    const onClientChange = (e) => {
        setClient(e.value);
    }

    const onClickDelete = async () => {
        if (props.user.user_id !== 99999) {
            await axios.delete("http://localhost:8000/users/"+props.user.user_id)
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        }
        await dispatch(setTableRefresh(true));
    }

    const onClickEdit = async () => {
        if (!email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            alert("Email is invalid!");
            dispatch(setTableRefresh(true));
            return;
        }

        const requestBody = {
            user_id: props.user_id,
            role_id: role,
            client_id: client,
            login: login,
            password: password,
            image_path: props.user.image_path,
            full_name: fullName,
            email: email,
            phone_number: parseInt(number.slice(2, number.length)),
            passport: passport,
        }
        if (props.user.user_id === 99999) {
            await axios.post("http://localhost:8000/users", requestBody)
                .then((res) => console.log(res))
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 409) {
                        alert(err.response.data.message);
                    }
                });
            await dispatch(setTableRefresh(true))
        } else {
            await axios.put("http://localhost:8000/users/"+props.user.user_id, requestBody)
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
            await dispatch(setTableRefresh(true));
        }
    }

    return (
        <>
            <Tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
                <Td className="p-3">
                    <TableTextInput value={login} onChange={onLoginChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={password} onChange={onPasswordChange} placeholder={"Enter new password"}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={fullName} onChange={onNameChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={email} onChange={onEmailChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={number} onChange={onNumberChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={passport.toString()} onChange={onPassportChange}/>
                </Td>
                <Td className="p-3">
                    { defaultRole === -1 ? null : (
                        <Select
                            options={props.roles}
                            onChange={onRoleChange}
                            styles={customStyles}
                            defaultValue={props.roles[defaultRole]}
                            maxMenuHeight={250}
                        />
                    )}
                </Td>
                <Td className="p-3 px-5">
                    { (role !== 2 && defaultClient === -1) ? null : (
                        <Select
                            options={props.clients}
                            onChange={onClientChange}
                            styles={customStyles}
                            defaultValue={props.clients[defaultClient]}
                            readOnly={true}
                        />
                    )}

                </Td>
                <Td className="p-3 px-5 flex justify-end">
                    <BlueButton onClick={onClickEdit} name={"Save"}/>
                    <RedButton onClick={onClickDelete} name={"Delete"}/>
                </Td>
            </Tr>
        </>
    )
}

UserEntry.propTypes = {
    user: PropTypes.object,
    roles: PropTypes.array,
    clients: PropTypes.array,
    user_id: PropTypes.number,
};