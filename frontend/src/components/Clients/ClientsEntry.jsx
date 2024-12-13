import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setTableRefresh} from "../../slices/tableSlice.js";
import {Td, Tr} from "react-super-responsive-table";
import {BlueButton} from "../Global/BlueButton.jsx";
import {RedButton} from "../Global/RedButton.jsx";
import PropTypes from "prop-types";
import {TableTextInput} from "../Global/TableTextInput.jsx";

export const ClientsEntry = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setFullName(props.client.name);
        setEmail(props.client.email);
        setNumber('+7' + props.client.phone_number);
        setAddress(props.client.address);
        setCity(props.client.city);
        setCountry(props.client.country);
        setPostalCode(props.client.postal_code);
    }, [props.client]);

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

    const onAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const onCityChange = (e) => {
        setCity(e.target.value);
    }

    const onCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const onPostalCodeChange = (event) => {
        if ((/^\d+$/.test(event.target.value) && event.target.value.length < 8) || event.target.value === '') {
            setPostalCode(parseInt(event.target.value));
        }
    }

    const onClickDelete = () => {
        dispatch(setTableRefresh(true));
    }

    const onClickEdit = () => {
        if (!fullName || !address || !city || !country || !postalCode) {
            alert("Not all fields are filled!");
            return;
        }

        if (!email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            alert("Email is invalid!");
            dispatch(setTableRefresh(true));
            return;
        }

        const requestBody = {
            name: fullName,
            phone_number: parseInt(number.slice(2, number.length)),
            address: address,
            email: email,
            city: city,
            country: country,
            postal_code: postalCode
        }
        if (props.client.client_id === 99999) {
            axios.post("http://localhost:8000/clients", requestBody)
                .then((res) => console.log(res))
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 409) {
                        alert(err.response.data.message);
                    }
                });
        } else {
            axios.put("http://localhost:8000/clients/"+props.client.client_id, requestBody)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 409) {
                        alert(err.response.data.message);
                    }
                });
        }
        setTimeout(()=>dispatch(setTableRefresh(true)), 500);
    }

    return (
        <>
            <Tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
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
                    <TableTextInput value={address} onChange={onAddressChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={city} onChange={onCityChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={country} onChange={onCountryChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={postalCode.toString()} onChange={onPostalCodeChange}/>
                </Td>
                <Td className="p-3 px-5 flex justify-end">
                    <BlueButton onButtonClick={onClickEdit} name={"Save"}/>
                    {props.client.client_id === 99999 &&
                        <RedButton onButtonClick={onClickDelete} name={"Delete"}/>
                    }
                </Td>
            </Tr>
        </>
    )
}

ClientsEntry.propTypes = {
    client: PropTypes.object,
};