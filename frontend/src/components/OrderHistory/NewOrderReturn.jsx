import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {NumberToggle} from "../Global/NumberToggle.jsx";
import {BlueButton} from "../Global/BlueButton.jsx";
import {RedButton} from "../Global/RedButton.jsx";
import {setItemReturn} from "../../slices/returnsSlice.js";
import Select from "react-select";
import axios from "axios";
import {customStyles} from "../../global/customStyles.js";
import {setUserRefresh} from "../../slices/usersSlice.js";

export const NewOrderReturn = () => {
    const itemReturn = useSelector((state) => state.returns.itemReturn);
    const dispatch = useDispatch();
    const [reasons, setReasons] = useState([]);
    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:8000/enums/returnreasons")
            .then((response) => setReasons(response.data.rows
                .map((item, index) => ({value: index+1, label: item.unnest}))))
            .catch((error) => {
                console.error(error);
            })
    }, []);

    const increment = () => {
        if (quantity < itemReturn.quantity - itemReturn.returned_units) {
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const onSaveClick = () => {
        if (description === "" && reason === "") {
            alert("Select a reason for return and write a description!");
            return;
        } else if (reason === "") {
            alert("Select a reason for return!");
            return;
        } else if (description === "") {
            alert("Please write a description");
            return;
        }

        const requestBody = {
            orderProductId: itemReturn.order_product_id,
            quantity: quantity,
            reason: reason,
            description: description,
        }
        axios.post("http://localhost:8000/orders/"+itemReturn.order_id+"/returns", requestBody)
            .then((response) => console.log(response))
            .catch((error) => {
                console.error(error);
            });
        setTimeout(()=>dispatch(setItemReturn(null)), 500);
    }

    const onDeleteClick = () => {
        dispatch(setItemReturn(null))
    }

    const onReasonChange = (e) => {
        setReason(e.label);
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));
    return (
        <>
            <tr>
                <td>
                    <div className="flex justify-center m-3">
                        {itemReturn.image_path === null
                            ? (<img
                                alt={itemReturn.model.toLowerCase()}
                                src="/placeholder.png"
                                className="w-full rounded-lg sm:w-40"/>)
                            : (<img
                                alt={itemReturn.model.toLowerCase()}
                                src={itemReturn.image_path}
                                className="w-full rounded-lg sm:w-40"/>)
                        }

                    </div>
                    <div>{itemReturn.model}</div>
                </td>
                <td>${itemReturn.unit_price}</td>
                <td>
                    <NumberToggle increment={increment} decrement={decrement} value={quantity}/>
                </td>
                <td>${(itemReturn.unit_price * itemReturn.quantity).toFixed(2)}</td>
                <td>Pending</td>
                <td>
                    <Select
                        options={reasons}
                        defaultValue={1}
                        onChange={onReasonChange}
                        styles={customStyles}
                        readOnly={true}
                    />
                </td>
                <td>
                    <textarea maxLength='255' onChange={onDescriptionChange} value={description}></textarea>
                </td>
                <td>{date}</td>
                <td>
                    <BlueButton onButtonClick={onSaveClick} name="Save"/>
                </td>
                <td>
                    <RedButton onButtonClick={onDeleteClick} name="Delete"/>
                </td>
            </tr>
        </>
    )
};
