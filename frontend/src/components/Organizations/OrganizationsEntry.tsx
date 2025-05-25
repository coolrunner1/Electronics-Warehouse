import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setTableRefresh} from "../../slices/tableSlice";
import {Td, Tr} from "react-super-responsive-table";
import {BlueButton} from "../Global/BlueButton";
import {RedButton} from "../Global/RedButton";
import {TableTextInput} from "../Global/TableTextInput";
import {validateEmail} from "../../utils/validateEmail";
import {validatePhoneNumber} from "../../utils/validatePhoneNumber";
import {validatePostalCode} from "../../utils/validatePostalCode";
import {Organization} from "../../types/Organization";
import {createClient, updateClient} from "../../api/clients.ts";
import {createSupplier, updateSupplier} from "../../api/suppliers.ts";
import {useTranslation} from "react-i18next";

export const OrganizationsEntry = (
    props: {
        organization: Organization,
        organization_id: number,
        organization_type: string,
    }
) => {
    const [fullName, setFullName] = useState(props.organization.name);
    const [email, setEmail] = useState(props.organization.email);
    const [number, setNumber] = useState('+7' + props.organization.phone_number);
    const [address, setAddress] = useState(props.organization.address);
    const [city, setCity] = useState(props.organization.city);
    const [region, setRegion] = useState(props.organization.region);
    const [country, setCountry] = useState(props.organization.country);
    const [postalCode, setPostalCode] = useState(props.organization.postal_code);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePhoneNumber(e.target.value)) {
            setNumber(e.target.value);
        }
    }

    const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

    const onCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const onRegionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegion(e.target.value);
    }

    const onCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    }

    const onPostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (validatePostalCode(e.target.value)) {
            if (isNaN(parseInt(e.target.value))) {
                setPostalCode(0);
                return;
            }
            setPostalCode(parseInt(e.target.value));
        }
    }

    const onClickDelete = () => {
        dispatch(setTableRefresh(true));
    }

    const onClickEdit = async () => {
        if (!fullName || !address || !city || !country || !postalCode) {
            alert("Not all fields are filled!");
            return;
        }

        if (!validateEmail(email)) {
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
            region: region,
            country: country,
            postal_code: postalCode
        }
        if (props.organization_id === 99999) {
            if (props.organization_type === 'clients') {
                await createClient(requestBody);
            } else {
                await createSupplier(requestBody);
            }
        } else {
            if (props.organization_type === 'clients') {
                await updateClient(requestBody, props.organization_id);
            } else {
                await updateSupplier(requestBody, props.organization_id);
            }
        }
        await dispatch(setTableRefresh(true));
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
                    <TableTextInput value={region} onChange={onRegionChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={country} onChange={onCountryChange}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={postalCode.toString()} onChange={onPostalCodeChange}/>
                </Td>
                <Td className="p-3 px-5 flex justify-end">
                    <BlueButton onClick={onClickEdit} name={t('save')}/>
                    {props.organization_id === 99999 &&
                        <RedButton onClick={onClickDelete} name={t('delete')}/>
                    }
                </Td>
            </Tr>
        </>
    )
}