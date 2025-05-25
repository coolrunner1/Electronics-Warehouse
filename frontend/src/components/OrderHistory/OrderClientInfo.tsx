import {useQuery} from "@tanstack/react-query";
import {getClient} from "../../api/clients.ts";
import {useTranslation} from "react-i18next";

export const OrderClientInfo = (
    props: {
        clientId: number;
    }
) => {
    const {
        data,
    } = useQuery({
        queryFn: getClient,
        queryKey: ['client', props.clientId],
    })

    const {t} = useTranslation();

    return (
        <>
            {data &&
                <>
                    <div className="text-center">{t('client')}: {data.name}</div>
                    <div className="text-center">Email: {data.email}</div>
                    <div className="text-center">{t('phone-number')}: +7{data.phone_number}</div>
                    <div className="text-center">{t('address')}: {data.postal_code+" "+data.address+" "+data.city+" "+data.region+" "+data.country}</div>
                </>
            }
        </>
    )
}