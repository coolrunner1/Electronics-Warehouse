import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import Select from "react-select";
import {customStyles} from "../../utils/customStyles.js";
import {BlueButton} from "../Global/BlueButton.jsx";
import {RedButton} from "../Global/RedButton.jsx";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";
import PropTypes from "prop-types";
import {setTableRefresh} from "../../slices/tableSlice.js";

export const ItemsEntry = (props) => {
    const [model, setModel] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState("");
    const [defaultCategory, setDefaultCategory] = useState(-1);
    const [category, setCategory] = useState(0);
    const [createArrival, setCreateArrival] = useState(false);
    const [newQuantity, setNewQuantity] = useState(1);
    const [supplier, setSupplier] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        setModel(props.item.model);
        setManufacturer(props.item.manufacturer);
        setPrice('$'+props.item.unit_price);
    }, [props.item]);

    useEffect(() => {
        props.categories.forEach(category => {
            if (category.value === props.item.category_id) {
                setDefaultCategory(category.value-1);
                setCategory(category.value);
            }
        })
    }, [props.categories])

    const onModelChange = (e) => {
        setModel(e.target.value);
    }

    const onManufacturerChange = (e) => {
        setManufacturer(e.target.value);
    }

    const onCategoryChange = (e) => {
        setCategory(e.value);
    }

    const onSupplierChange = (e) => {
        setSupplier(e.value);
    }

    const onPriceChange = (e) => {
        if (price[0] !== '$') {
            setPrice('$'+e.target.value);
            return;
        }
        setPrice(e.target.value);
    }

    const onClickArrival = () => {
        setCreateArrival(!createArrival);
    }

    const onQuantityChange = (e) => {
        setNewQuantity(e.target.value);
    }

    const onClickPostArrival = () => {
        const requestBody = {
            newQuantity: newQuantity,
            supplierId: supplier,
        }
        axios.post("http://localhost:8000/items/"+props.item.item_id+"/suppliers", requestBody)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        setCreateArrival(false);
        dispatch(setTableRefresh(true));
    }

    const onClickEdit = () => {
        if (manufacturer === "" || model === "") {
            alert("Fill out manufacturer and model fields first!");
            return;
        }

        const requestBody = {
            category_id: category,
            manufacturer: manufacturer,
            model: model,
            unit_price: parseFloat(price.slice(1)),
        }

        if (props.item.item_id === 99999) {
            axios.post("http://localhost:8000/items/", requestBody)
                .then((res) => console.log(res))
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 500) {
                        alert(err.response.data.message);
                    }
                });
        } else {
            axios.put("http://localhost:8000/items/"+props.item.item_id, requestBody)
                .then((res) => console.log(res))
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 500) {
                        alert(err.response.data.message);
                    }
                });
        }

        setTimeout(() => dispatch(setTableRefresh(true)), 500);
    }

    return (
        <>
            <Tr className="border-b hover:bg-orange-100 dark:hover:bg-blue-600">
                <Td className="p-3">
                    <input type="text" value={model} onChange={onModelChange} className="bg-transparent"/>
                </Td>
                <Td className="p-3">
                    <input type="text" value={manufacturer} onChange={onManufacturerChange} className="bg-transparent"/>
                </Td>
                <Td className="p-3">
                    {defaultCategory !== -1 &&
                        <Select
                            options={props.categories}
                            onChange={onCategoryChange}
                            defaultValue={props.categories[defaultCategory]}
                            styles={customStyles}
                            maxMenuHeight={250}
                        />
                    }

                </Td>
                <Td className="p-3">
                    <input type="text" value={price} onChange={onPriceChange} className="bg-transparent"/>
                </Td>
                <Td className="p-3">
                    {props.item.status}
                </Td>
                <Td className="p-3">
                    {props.item.units_in_stock}
                </Td>
                <Td className="p-3">
                    {props.item.faulty_units}
                </Td>
                <Td className="p-3">
                    <div className="flex justify-end items-center">
                        <BlueButton onButtonClick={onClickEdit} name={"Save"}/>
                        {props.item.model !== '' && <RedButton onButtonClick={onClickArrival} name={ !createArrival ? "Add to arrival" : "Remove arrival"}/>}
                        {createArrival && (
                            <>
                                <Select
                                    options={props.suppliers}
                                    onChange={onSupplierChange}
                                    defaultValue={props.suppliers[0]}
                                    styles={customStyles}
                                    maxMenuHeight={250}
                                />
                                <input type="number" min={1} value={newQuantity} onChange={onQuantityChange} className="bg-transparent m-3"/>
                                <BlueButton onButtonClick={onClickPostArrival} name={"Create"}/>
                            </>
                        )}
                    </div>
                </Td>
            </Tr>
        </>
    )
}

ItemsEntry.propTypes = {
    item: PropTypes.object,
    categories: PropTypes.array,
    suppliers: PropTypes.array,
}