import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setTableRefresh} from "../slices/tableSlice.js";
import {OrganizationsTable} from "../components/Organizations/OrganizationsTable.jsx";

export const SuppliersPage = () => {
    const [suppliers, setSuppliers] = useState([]);
    const tableRefresh = useSelector((state) => state.table.tableRefresh);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:8000/suppliers")
            .then((response) => setSuppliers(response.data.rows
                .map((supplier) => ({
                    organization_id: supplier.supplier_id,
                    name: supplier.name,
                    phone_number: supplier.phone_number,
                    address: supplier.address,
                    email: supplier.email,
                    city: supplier.city,
                    region: supplier.region,
                    country: supplier.country,
                    postal_code: supplier.postal_code,
                }))))
            .catch((error) => {
                console.error('Error fetching suppliers:', error);
                setSuppliers([]);
            });
        dispatch(setTableRefresh(false));
    }, [tableRefresh]);

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    Suppliers
                </h1>
                <div className="px-4 py-4 flex overflow-auto ">
                    {suppliers.length === 0
                        ? <div className="text-center text-xl">No suppliers found.</div>
                        : <OrganizationsTable organizations={suppliers} organizations_type={"suppliers"} />
                    }

                </div>
            </div>
        </>
    )
}