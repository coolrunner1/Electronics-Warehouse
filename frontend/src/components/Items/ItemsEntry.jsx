import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setUserRefresh} from "../../slices/usersSlice.js";
import Select from "react-select";
import {customStyles} from "../../utils/customStyles.js";
import {BlueButton} from "../Global/BlueButton.jsx";
import {RedButton} from "../Global/RedButton.jsx";

export const ItemsEntry = (props) => {
    const [model, setModel] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState('');
    const [passport, setPassport] = useState(0);
    const [defaultRole, setDefaultRole] = useState(-1);
    const [defaultClient, setDefaultClient] = useState(-1);
    const [role, setRole] = useState(-1);
    const [client, setClient] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setModel(props.user.login);
        setManufacturer(props.user.full_name);
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

    const onModelChange = (e) => {
        setModel(e.target.value);
    }

    const onManufacturerChange = (e) => {
        setManufacturer(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onNumberChange = (event) => {
        if (/^\d+$/.test(event.target.value.substring(2, event.target.value.length)) && event.target.value.length < 12) {
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

    const onClickDelete = () => {
        if (props.user.user_id !== 99999) {
            axios.delete("http://localhost:8000/users/"+props.user.user_id)
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        }
        setTimeout(()=>dispatch(setUserRefresh(true)), 500);
    }

    const onClickEdit = () => {
        if (!email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            alert("Email is invalid!");
            dispatch(setUserRefresh(true));
            return;
        }

        const requestBody = {
            user_id: props.user_id,
            role_id: role,
            client_id: client,
            login: model,
            password: password,
            image_path: props.user.image_path,
            full_name: manufacturer,
            email: email,
            phone_number: parseInt(number.slice(2, number.length)),
            passport: passport,
        }
        if (props.user.user_id === 99999) {
            axios.post("http://localhost:8000/users", requestBody)
                .then((res) => console.log(res))
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 409) {
                        alert(err.response.data.message);
                    }
                });
            setTimeout(()=>dispatch(setUserRefresh(true)), 1000);
        } else {
            axios.put("http://localhost:8000/users/"+props.user.user_id, requestBody)
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
            setTimeout(()=>dispatch(setUserRefresh(true)), 1000);
        }
    }

    return (
        <>
            <tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
                <td className="p-3 px-5">
                    <input type="text" value={model} onChange={onModelChange} className="bg-transparent"/>
                </td>
                <td className="p-3 px-5">
                    <BlueButton name={'Upload image'}/>
                </td>
                <td className="p-3 px-5">
                    <input type="text" value={manufacturer} onChange={onManufacturerChange} className="bg-transparent"/>
                </td>
                <td className="p-3 px-5">
                    <Select
                        options={props.roles}
                        onChange={onRoleChange}
                        styles={customStyles}
                        defaultValue={props.roles[defaultRole]}
                        maxMenuHeight={250}
                    />
                </td>
                <td className="p-3 px-5">
                    <input type="text" value={email} onChange={onEmailChange} className="bg-transparent"/>
                </td>
                <td className="p-3 px-5">
                    <input type="text" value={number} onChange={onNumberChange} className="bg-transparent"/>
                </td>
                <td className="p-3 px-5">
                    <input type="text" value={passport} onChange={onPassportChange} className="bg-transparent"/>
                </td>
                <td className="p-3 px-5">
                    {defaultRole === -1 ? null : (
                        <Select
                            options={props.roles}
                            onChange={onRoleChange}
                            styles={customStyles}
                            defaultValue={props.roles[defaultRole]}
                            maxMenuHeight={250}
                        />
                    )}
                </td>
                <td className="p-3 px-5">
                    {role !== 2 ? null : (
                        <Select
                            options={props.clients}
                            onChange={onClientChange}
                            styles={customStyles}
                            defaultValue={props.clients[defaultClient]}
                            readOnly={true}
                        />
                    )}

                </td>
                <td className="p-3 px-5 flex justify-end">
                    <BlueButton onButtonClick={onClickEdit} name={"Save"}/>
                    <RedButton onButtonClick={onClickDelete} name={"Delete"}/>
                </td>
            </tr>
        </>
    )
}