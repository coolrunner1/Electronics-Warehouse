import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setTableRefresh} from "../slices/tableSlice.js";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {RedButton} from "../components/Global/RedButton.jsx";
import {BlueButton} from "../components/Global/BlueButton.jsx";
import {ClientsEntry} from "../components/Clients/ClientsEntry.jsx";
import {NewRemoveButtons} from "../components/Global/NewRemoveButtons.jsx";

export const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    const tableRefresh = useSelector((state) => state.table.tableRefresh);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/clients")
            .then((response) => setClients(response.data.rows))
            .catch((error) => {
                console.error('Error fetching clients:', error);
                setClients([]);
            });
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    const onNewClick = () => {
        if (clients[0].client_id === 99999) {
            setClients(clients.splice(1))
            return;
        }
        setClients([{
            client_id: 99999,
            name: "Example Name",
            phone_number: 777777777,
            address: "123 Example St",
            email: "example@example.com",
            city: "Example City",
            country: "Example Country",
            postal_code: 999999
        }, ...clients]);
    }

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    Clients
                </h1>
                <div className="px-4 py-4 flex overflow-auto ">
                    {clients.length === 0
                        ? <div className="text-center text-xl">No clients found.</div>
                        :
                        <Table className="w-full text-md shadow-md rounded mb-4">
                            <Thead>
                                <Tr className="border-b">
                                    {
                                        ['Name', 'Email', 'Phone Number', 'Address', 'City', 'Country', 'Postal Code']
                                            .map((item, index) => (<Th key={index}>{item}</Th>))
                                    }
                                    <Th>
                                        <NewRemoveButtons id={clients[0].client_id} onNewClick={onNewClick} />
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {clients.map((client) => (
                                    <ClientsEntry client={client} key={client.client_id}/>
                                ))}
                            </Tbody>
                        </Table>
                    }

                </div>
            </div>
        </>
    )
}