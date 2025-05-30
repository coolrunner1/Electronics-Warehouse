import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {ItemsEntry} from "../components/Items/ItemsEntry";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {setTableRefresh} from "../slices/tableSlice";
import {NewRemoveButtons} from "../components/Global/NewRemoveButtons";
import {RootState} from "../state/store";
import {Category} from "../types/Category";
import {ItemInShop} from "../types/Item";
import {ValueLabel} from "../types/ValueLabel";
import {Supplier} from "../types/Supplier.ts";
import {useTranslation} from "react-i18next";

export const ItemsPage = () => {
    const [items, setItems] = useState<ItemInShop[]>([]);
    const [categories, setCategories] = useState<ValueLabel[]>([]);
    const [suppliers, setSuppliers] = useState<ValueLabel[]>([]);
    const tableRefresh = useSelector((state: RootState) => state.table.tableRefresh);
    const dispatch = useDispatch();
    const {i18n, t} = useTranslation();

    useEffect(() => {
        axios.get("http://localhost:8000/items")
            .then((response) => setItems(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setItems([]);
            });
        dispatch(setTableRefresh(false));
        axios.get("http://localhost:8000/api/v1/categories")
            .then((response) => setCategories(response.data.map((category: Category) => ({value: category.category_id, label: i18n.language === 'ru' ? category.nameRU : category.nameEN}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setCategories([]);
            });

        axios.get("http://localhost:8000/suppliers")
            .then((response) => setSuppliers(response.data.rows.map((supplier: Supplier) => ({value: supplier.supplier_id, label: supplier.name}))))
            .catch((error) => {
                console.error('Error fetching items:', error);
                setSuppliers([]);
            })
    }, [tableRefresh]);

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
            status: "",
            date_of_arrival: "",
            units_in_stock: 0,
            faulty_units: 0
        }, ...items]);
    }

    return (
        <>
            <div>
                <h1 className="text-3xl text-center p-4">
                    {t('items')}
                </h1>
                <div className="px-4 py-4 flex overflow-auto ">
                    {items.length === 0
                        ? <div className="text-center text-xl">{t('no-items')}</div>
                        :
                        <Table className="w-full text-md shadow-md rounded mb-4">
                            <Thead>
                                <Tr className="border-b">
                                    {
                                        [t('model'), t('manufacturer'), t('category'), t('price'), t('status'), t('units-in-stock'), t('faulty-units'), t('last-arrival')]
                                            .map((item, index) => (<Th key={index}>{item}</Th>))
                                    }
                                    <Th>
                                        <NewRemoveButtons id={items[0].item_id} onNewClick={onNewClick} />
                                    </Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                            {items.map((item) => (
                                <ItemsEntry item={item} categories={categories} suppliers={suppliers} key={item.item_id}/>
                            ))}
                            </Tbody>
                        </Table>
                    }

                </div>
            </div>
        </>
    )
}