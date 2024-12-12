import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {AccountButton} from "../components/Global/AccountButton.jsx";
import {BlueButton} from "../components/Global/BlueButton.jsx";
import {UserEntry} from "../components/Admin/UserEntry.jsx";
import {ItemsEntry} from "../components/Items/ItemsEntry.jsx";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {setTableRefresh} from "../slices/tableSlice.js";
import {RedButton} from "../components/Global/RedButton.jsx";

export const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const tableRefresh = useSelector((state) => state.table);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/items")
            .then((response) => setItems(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setItems([]);
            });
        dispatch(setTableRefresh(false));
        axios.get("http://localhost:8000/categories")
            .then((response) => setCategories(response.data.rows.map((category) => ({value: category.category_id, label: category.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setCategories([]);
            });
        /*dispatch(setUserRefresh(false));
        axios.get("http://localhost:8000/roles/")
            .then((response) => setRoles(response.data.rows.map((role) => ({value: role.role_id, label: role.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setRoles([]);
            });
        axios.get("http://localhost:8000/clients/")
            .then((response) => setClients(response.data.rows.map((client) => ({value: client.client_id, label: client.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setClients([]);
            });*/
    }, []);

    const onNewClick = () => {
        if (items[0].item_id === 99999) {
            setItems(items.splice(1))
            return;
        }
        setItems([{
            item_id: 99999,
            model: '',
            manufacturer: '',
            category_id: 1,
            unit_price: 0.0,
        }, ...items]);
    }

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    Items
                </h1>
                <div className="px-4 py-4 flex overflow-auto ">
                    {items.length === 0
                        ? <div className="text-center text-xl">No items found.</div>
                        :
                        <Table className="w-full text-md shadow-md rounded mb-4">
                            <Thead>
                                <Tr className="border-b">
                                    {
                                        ['Model', 'Manufacturer', 'Category', 'Price', 'Status', 'Units in stock', 'Faulty units']
                                            .map((item, index) => (<Th key={index}>{item}</Th>))
                                    }
                                    <Th>
                                        {items[0].item_id === 99999
                                            ? <RedButton onButtonClick={onNewClick} name={"Remove"}/>
                                            : <BlueButton onButtonClick={onNewClick} name={"New"}/>}
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                            {items.map((item) => (
                                <ItemsEntry item={item} categories={categories} key={item.item_id}/>
                            ))}
                            </Tbody>
                        </Table>
                    }

                </div>
            </div>
        </>
    )
}