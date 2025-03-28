import {useEffect, useState} from "react";
import axios from "axios";

export const OrderClientInfo = (
    props: {
        clientId: number;
    }
) => {
    const [client, setClient] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/clients/' + props.clientId)
            .then(res => setClient(res.data.rows[0]))
            .catch(err => console.error(err));
    }, []);
    return (
        <>
            {client &&
                <>
                    <div className="text-center">Client: {client.name}</div>
                    <div className="text-center">Email: {client.email}</div>
                    <div className="text-center">Phone number: +7{client.phone_number}</div>
                    <div className="text-center">Address: {client.postal_code+" "+client.address+" "+client.city+" "+client.region+" "+client.country}</div>
                </>
            }
        </>
    )
}