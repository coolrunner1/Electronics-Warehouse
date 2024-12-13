import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setTableRefresh} from "../slices/tableSlice.js";
import {OrganizationsTable} from "../components/Organizations/OrganizationsTable.jsx";

export const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    const tableRefresh = useSelector((state) => state.table.tableRefresh);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/clients")
            .then((response) => setClients(response.data.rows
                .map((client) => ({
                    organization_id: client.client_id,
                    name: client.name,
                    phone_number: client.phone_number,
                    address: client.address,
                    email: client.email,
                    city: client.city,
                    region: client.region,
                    country: client.country,
                    postal_code: client.postal_code,
                }))))
            .catch((error) => {
                console.error('Error fetching clients:', error);
                setClients([]);
            });
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    Clients
                </h1>
                <div className="px-4 py-4 flex overflow-auto ">
                    {clients.length === 0
                        ? <div className="text-center text-xl">No clients found.</div>
                        : <OrganizationsTable organizations={clients} organizations_type="clients" />
                    }

                </div>
            </div>
        </>
    )
}