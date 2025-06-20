import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Select from "react-select";
import {customStyles} from "../../utils/customStyles";
import {BlueButton} from "../Global/BlueButton";
import {RedButton} from "../Global/RedButton";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";
import {setTableRefresh} from "../../slices/tableSlice";
import {TableTextInput} from "../Global/TableTextInput";
import {dateToString} from "../../utils/dateToString";
import {ItemInShop} from "../../types/Item";
import {ValueLabel} from "../../types/ValueLabel";
import {useTranslation} from "react-i18next";
import {addNewArrival, createItem, updateItem} from "../../api/items.ts";
import {YellowButton} from "../Global/YellowButton.tsx";
import {useNavigate} from "react-router-dom";
import {NEW_ENTRY} from "../../constants/newEntry.ts";

export type ItemsEntryProps = {
    item: ItemInShop,
    categories: ValueLabel<number>[],
    suppliers: ValueLabel<number>[],
}

export const ItemsEntry = (
    props: ItemsEntryProps
) => {
    const [modelEN, setModelEN] = useState("");
    const [modelRU, setModelRU] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(0);
    const [createArrival, setCreateArrival] = useState(false);
    const [newQuantity, setNewQuantity] = useState(1);
    const [supplier, setSupplier] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        setModelEN(props.item.modelEN);
        setModelRU(props.item.modelRU);
        setManufacturer(props.item.manufacturer);
        setPrice('$'+props.item.unit_price);
    }, [props.item]);

    const onCategoryChange = (e: any) => {
        setCategory(e.value);
    }

    const onSupplierChange = (e: any) => {
        setSupplier(e.value);
    }

    const onPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (price[0] !== '$') {
            setPrice('$'+e.target.value);
            return;
        }
        setPrice(e.target.value);
    }

    const onClickArrival = () => {
        if (!props.suppliers) {
            alert(t('no-suppliers'));
            return;
        }
        setCreateArrival(!createArrival);
    }

    const onQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < 1 || value > 1000000000) {
            return;
        }
        setNewQuantity(value);
    }

    const onClickPostArrival = async () => {
        const requestBody = {
            newQuantity: newQuantity,
            supplierId: supplier,
        }
        await addNewArrival(requestBody, props.item.item_id)
            .then(() => alert(t('arrival-success')))
        await setCreateArrival(false);
        await dispatch(setTableRefresh(true));
    }

    const onClickEdit = async () => {
        if (manufacturer === "" || modelEN === "" || modelRU === "") {
            alert(t('fill-manufacturer-model'));
            return;
        }

        const requestBody = {
            category_id: category,
            manufacturer: manufacturer,
            modelEN: modelEN,
            modelRU: modelRU,
            unit_price: parseFloat(price.slice(1)),
        }

        if (props.item.item_id === NEW_ENTRY) {
            await createItem(requestBody)
                .then(() => alert(t('item-create-success')));
        } else {
            await updateItem(requestBody, props.item.item_id)
                .then(() => alert(t('item-update-success')))
                .catch(err => {
                    if (err.response.status === 404) {
                        alert(t('item-not-found'));
                    }
                })
        }

        await dispatch(setTableRefresh(true));
    }

    return (
        <>
            <Tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
                <Td className="p-3">
                    <TableTextInput value={modelEN} onChange={(e) => setModelEN(e.target.value)}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={modelRU} onChange={(e) => setModelRU(e.target.value)}/>
                </Td>
                <Td className="p-3">
                    <TableTextInput value={manufacturer} onChange={e =>  setManufacturer(e.target.value)}/>
                </Td>
                <Td className="p-3">
                    {props.categories &&
                        <Select
                            options={props.categories}
                            onChange={onCategoryChange}
                            defaultValue={props.categories.find(category => category.value === props.item.category_id)}
                            styles={customStyles}
                            maxMenuHeight={250}
                        />
                    }
                </Td>
                <Td className="p-3">
                    <TableTextInput value={price} onChange={onPriceChange}/>
                </Td>
                <Td className="p-3">
                    {props.item.units_in_stock}
                </Td>
                <Td className="p-3">
                    {props.item.faulty_units}
                </Td>
                <Td className="p-3">
                    {props.item.date_of_arrival && dateToString(props.item.date_of_arrival)}
                </Td>
                <Td className="p-3">
                    <div className="flex justify-end items-center">
                        <BlueButton onClick={onClickEdit} name={t('save')}/>
                        {props.item.item_id !== NEW_ENTRY && <YellowButton name={t('edit-page')} onClick={() => {navigate(`/employee/items/${props.item.item_id}`)}}/>}
                        {props.item.modelEN && props.item.modelRU && <RedButton onClick={onClickArrival} name={ !createArrival ? t('add-arrival') : t('remove-arrival')}/>}
                    </div>
                </Td>
                <Td className="p-3">
                    {createArrival && (
                        <>
                            <div className="flex justify-end items-center">
                                <Select
                                    options={props.suppliers}
                                    onChange={onSupplierChange}
                                    defaultValue={props.suppliers[0]}
                                    styles={customStyles}
                                    maxMenuHeight={250}
                                />
                                <input type="number" min={1} value={newQuantity} onChange={onQuantityChange}
                                       className="bg-transparent m-3"/>
                                <BlueButton onClick={onClickPostArrival} name={t('create')}/>
                            </div>
                        </>
                    )}
                </Td>
            </Tr>
        </>
    )
}