import {BlueButton} from "../Global/BlueButton.jsx";
import {AccountInput} from "./AccountInput.jsx";
import {useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

export const ClientForm = () => {
    const user = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        axios.get("http://localhost:8000/clients/"+user.client_id)
            .then(res => {
                console.log(res.data.rows[0]);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <hr className="mt-6 mb-3 border-b-1 border-blueGray-300"/>
            <div className="flex justify-between">
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                    Client Information
                </h6>
                <BlueButton name={"Save"}/>
            </div>

            <div className="flex flex-wrap mt-6">
                <AccountInput name={"Name"} placeholder={"Enter name"} /*value={name} onChange={onNameChange} *//>
                <AccountInput name={"Email address"} placeholder={"Enter email address"} /*value={email} onChange={onEmailChange}*/ />
                <AccountInput name={"Phone number"} placeholder={"Enter phone number"} /*value={phone} onChange={onPhoneChange}*/ />
                <AccountInput name={"Address"} placeholder={"Enter address"} /*value={address} onChange={onAddressChange}*/ />
                <AccountInput name={"City"} placeholder={"Enter city"} /*value={city} onChange={onCityChange}*/ />
                <AccountInput name={"Region"} placeholder={"Enter region"} /*value={region} onChange={onRegionChange}*/ />
                <AccountInput name={"Country"} placeholder={"Enter country"} /*value={country} onChange={onCountryChange}*/ />
                <AccountInput name={"Postal code"} placeholder={"Enter postal code"} /*value={postalCode} onChange={onPostalCodeChange}*/ />
            </div>
        </>
    )
}