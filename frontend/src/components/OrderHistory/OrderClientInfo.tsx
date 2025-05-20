import {useQuery} from "@tanstack/react-query";
import {getClient} from "../../api/clients.ts";

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

    return (
        <>
            {data &&
                <>
                    <div className="text-center">Client: {data.name}</div>
                    <div className="text-center">Email: {data.email}</div>
                    <div className="text-center">Phone number: +7{data.phone_number}</div>
                    <div className="text-center">Address: {data.postal_code+" "+data.address+" "+data.city+" "+data.region+" "+data.country}</div>
                </>
            }
        </>
    )
}