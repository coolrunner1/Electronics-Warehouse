import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import Select from "react-select";

export const UserEntry = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState('');
    const [passport, setPassport] = useState("");
    const [defaultRole, setDefaultRole] = useState(-1);

    useEffect(() => {
        setLogin(props.user.login);
        setPassword(props.user.password);
        setFullName(props.user.full_name);
        setEmail(props.user.email);
        setNumber('+7' + props.user.phone_number);
        setPassport(props.user.passport.toString().substring(0, 4)
            + " " + props.user.passport.toString().substring(5, props.user.password.length));
        props.roles.forEach(role => {
            console.log(role, props.user.role_id);
            if (role.value === props.user.role_id) {
                setDefaultRole(role.value-1);
            }
        })
        console.log(props.roles[defaultRole])
    }, [defaultRole]);

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
        if (/^\d+$/.test(event.target.value.substring(2, event.target.value.length)) && event.target.value.length < 12) {
            setNumber(event.target.value);
        }
    }

    const onPassportChange = (event) => {
        if (/^\d+$/.test(event.target.value.substring(0, 4) + event.target.value.substring(5, event.target.value.length))
            && event.target.value.length < 12) {
            setPassport(event.target.value);
        }
    }

    const onRoleChange = (event) => {

    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            display: 'flex',
            flexWrap: 'nowrap',
            color: "black",
        }),
        menu: (provided) => ({
            ...provided,
            color: "black",
        }),
    };

    return (
        <>
            <tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
                <td className="p-3 px-5">
                    <input type="text" value={login} onChange={onLoginChange} className="bg-transparent"/>
                </td>
                <td className="p-3 px-5">
                    <input type="text" value={password} onChange={onPasswordChange} className="bg-transparent" readOnly={false}/>
                </td>
                <td className="p-3 px-5">
                    <input type="text" value={fullName} onChange={onNameChange}  className="bg-transparent"/>
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
                    { defaultRole === -1 ? null : (
                        <Select
                            options={props.roles}
                            onChange={onRoleChange}
                            styles={customStyles}
                            defaultValue={props.roles[defaultRole]}
                        />
                    )}
                </td>
                <td className="p-3 px-5">
                    {/*<select value="user.company" className="bg-transparent">
                        {props.roles.map((role) => (<option value="user" key="as">user</option>))}
                    </select>*/}
                </td>
                <td className="p-3 px-5 flex justify-end">
                    <button type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save
                    </button>
                    <button type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

UserEntry.propTypes = {
    user: PropTypes.object,
    roles: PropTypes.array,
};