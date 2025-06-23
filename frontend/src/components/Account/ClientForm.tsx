import {ChangeEvent, useEffect, useState} from "react";
import {FormInput} from "../Global/FormInput.tsx";
import {BlueButton} from "../Global/BlueButton";
import {validateEmail} from "../../utils/validateEmail";
import {validatePhoneNumber} from "../../utils/validatePhoneNumber";
import {validatePostalCode} from "../../utils/validatePostalCode";
import {User} from "../../types/User.ts";
import {getMyClient, updateMyClient} from "../../api/clients.ts";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "../../api/queryClient.ts";
import {useTranslation} from "react-i18next";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

export const ClientForm = () => {
    const {t} = useTranslation();
    const user = useAuthUser<User>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const [refresh, setRefresh] = useState(false);

    const {data, refetch} = useQuery({
        queryFn: getMyClient,
        queryKey: ['my-client'],
    })

    useEffect(() => {
        if (!user) return;
        queryClient.removeQueries({queryKey: ['client', user.client_id]});
        refetch();
    }, [refresh]);

    useEffect(() => {
        if (!data) {
            return;
        }
        setName(data.name);
        setEmail(data.email);
        setPhone('+7' + data.phone_number);
        setAddress(data.address);
        setCity(data.city);
        setRegion(data.region);
        setCountry(data.country);
        setPostalCode(data.postal_code);
    }, [data]);

    const onSaveClick = async () => {
        if (!data) return;
        if (!user || !user.client_id) return;

        if (!name || !address || !city || !country || !postalCode) {
            alert(t('not-all-fields-filled'));
            return;
        }

        if (!validateEmail(email)) {
            alert(t('invalid-email'));
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

        const res = await updateMyClient(requestBody);
        if (res.status === 200) {
            alert(t('client-update-success'));
        }

        await setRefresh(!refresh);
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

    return (
        <>
            <hr className="mt-6 mb-3 border-b-1 border-blueGray-300"/>
            <div className="flex justify-between">
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                    {t('client-info')}
                </h6>
                <BlueButton name={t('save')} onClick={onSaveClick}/>
            </div>

            <div className="flex flex-wrap mt-6">
                <FormInput name={t('organization-name')} placeholder={t('enter-name')} value={name} onChange={onNameChange} />
                <FormInput name={"Email"} placeholder={t('enter-email')} value={email} onChange={onEmailChange} />
                <FormInput name={t('phone-number')} placeholder={t('enter-phone')} value={phone} onChange={onPhoneChange} />
                <FormInput name={t('address')} placeholder={t('enter-address')} value={address} onChange={onAddressChange} />
                <FormInput name={t('city')} placeholder={t('enter-city')} value={city} onChange={onCityChange} />
                <FormInput name={t('region')} placeholder={t('enter-region')} value={region} onChange={onRegionChange} />
                <FormInput name={t('country')} placeholder={t('enter-country')} value={country} onChange={onCountryChange} />
                <FormInput name={t('postal-code')} placeholder={t('enter-zipcode')} value={postalCode.toString()} onChange={onPostalCodeChange} />
            </div>
        </>
    )
}