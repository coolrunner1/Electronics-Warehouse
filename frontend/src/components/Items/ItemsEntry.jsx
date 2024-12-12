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

export const ItemsEntry = (props) => {
    const [model, setModel] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState("");
    const [defaultCategory, setDefaultCategory] = useState(-1);
    const [category, setCategory] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setModel(props.item.model);
        setManufacturer(props.item.manufacturer);
        setPrice('$'+props.item.unit_price);
        console.log(props.categories)
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
        setCategory(e.target.value);
    }

    const onPriceChange = (e) => {
        /*if (!(/^[+-]?\d+(\.\d+)?$/.test(e.target.value.substring(1, e.target.value.length)))) {
            return;
        }*/
        if (price[0] !== '$') {
            setPrice('$'+e.target.value);
            return;
        }
        setPrice(e.target.value);
    }

    const onClickArrival = () => {
        /*if (props.user.user_id !== 99999) {
            axios.delete("http://localhost:8000/users/"+props.user.user_id)
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        }
        setTimeout(()=>dispatch(setUserRefresh(true)), 500);*/
    }

    const onClickEdit = () => {
        /*const requestBody = {
            user_id: props.user_id,
            role_id: role,
            client_id: client,
            login: model,
            password: password,
            image_path: props.user.image_path,
            full_name: manufacturer,
            email: email,
            phone_number: parseInt(number.slice(2, number.length)),
            passport: passport,
        }
        if (props.user.user_id === 99999) {
            axios.post("http://localhost:8000/users", requestBody)
                .then((res) => console.log(res))
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 409) {
                        alert(err.response.data.message);
                    }
                });
            setTimeout(()=>dispatch(setUserRefresh(true)), 1000);
        } else {
            axios.put("http://localhost:8000/users/"+props.user.user_id, requestBody)
                .then((res) => {
                    console.log(res);
                    setPassword('');
                })
                .catch((err) => {
                    console.error(err);
                    if (err.response.status === 409) {
                        alert(err.response.data.message);
                    }
                });
            setTimeout(()=>dispatch(setUserRefresh(true)), 1000);
        }*/
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
                        {props.item.model !== '' && <RedButton onButtonClick={onClickArrival} name={"New arrival"}/>}
                    </div>
                </Td>
            </Tr>
        </>
    )
}

ItemsEntry.propTypes = {
    item: PropTypes.object,
    categories: PropTypes.array,
}