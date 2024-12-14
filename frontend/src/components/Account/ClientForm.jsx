import {BlueButton} from "../Global/BlueButton.jsx";
import {AccountInput} from "./AccountInput.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {validatePhoneNumber} from "../../utils/validatePhoneNumber.js";
import {validatePostalCode} from "../../utils/validatePostalCode.js";
import {validateEmail} from "../../utils/validateEmail.js";

export const ClientForm = () => {
    const user = useSelector((state) => state.user.userInfo);
    const [client, setClient] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/clients/"+user.client_id)
            .then(res => {
                setClient(res.data.rows[0]);
            })
            .catch(err => console.error(err));
    }, [refresh]);

    useEffect(() => {
        if (!client) {
            return;
        }
        setName(client.name);
        setEmail(client.email);
        setPhone('+7'+client.phone_number);
        setAddress(client.address);
        setCity(client.city);
        setRegion(client.region);
        setCountry(client.country);
        setPostalCode(client.postal_code);
    }, [client]);

    const onSaveClick = async () => {
        if (!name || !address || !city || !country || !postalCode) {
            alert("Not all fields are filled!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email");
            return;
        }

        const requestBody = {
            name: name,
            phone_number: parseInt(phone.slice(2, phone.length)),
            address: address,
            email: email,
            city: city,
            region: region,
            country: country,
            postal_code: postalCode
        }

        await axios.put("http://localhost:8000/clients/"+client.client_id, requestBody)
            .then((res) => {
                console.log(res);
                alert("Client was successfully updated");
            })
            .catch((err) => {
                console.error(err);
                if (err.response.status === 409) {
                    alert(err.response.data.message);
                }
            });

        await setRefresh(!refresh);
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

    const onAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const onCityChange = (e) => {
        setCity(e.target.value);
    }

    const onRegionChange = (e) => {
        setRegion(e.target.value);
    }

    const onCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const onPostalCodeChange = (e) => {
        if (validatePostalCode(e.target.value)) {
            if (isNaN(parseInt(e.target.value))) {
                setPostalCode(0);
                return;
            }
            setPostalCode(parseInt(e.target.value));
        }
    }

    return (
        <>
            <hr className="mt-6 mb-3 border-b-1 border-blueGray-300"/>
            <div className="flex justify-between">
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                    Client Information
                </h6>
                <BlueButton name={"Save"} onClick={onSaveClick}/>
            </div>

            <div className="flex flex-wrap mt-6">
                <AccountInput name={"Name"} placeholder={"Enter name"} value={name} onChange={onNameChange} />
                <AccountInput name={"Email address"} placeholder={"Enter email address"} value={email} onChange={onEmailChange} />
                <AccountInput name={"Phone number"} placeholder={"Enter phone number"} value={phone} onChange={onPhoneChange} />
                <AccountInput name={"Address"} placeholder={"Enter address"} value={address} onChange={onAddressChange} />
                <AccountInput name={"City"} placeholder={"Enter city"} value={city} onChange={onCityChange} />
                <AccountInput name={"Region"} placeholder={"Enter region"} value={region} onChange={onRegionChange} />
                <AccountInput name={"Country"} placeholder={"Enter country"} value={country} onChange={onCountryChange} />
                <AccountInput name={"Postal code"} placeholder={"Enter postal code"} value={postalCode.toString()} onChange={onPostalCodeChange} />
            </div>
        </>
    )
}