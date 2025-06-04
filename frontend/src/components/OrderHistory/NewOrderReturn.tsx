import {ChangeEvent, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NumberToggle} from "../Global/NumberToggle";
import {BlueButton} from "../Global/BlueButton";
import {RedButton} from "../Global/RedButton";
import {setItemReturn} from "../../slices/returnsSlice";
import Select from "react-select";
import axios from "axios";
import {customStyles} from "../../utils/customStyles";
// @ts-ignore
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";
import {RootState} from "../../state/store";
import {useTranslation} from "react-i18next";
import {ItemInOrder} from "../../types/Item.ts";
import {useGetMappedEnums} from "../../hooks/useGetMappedEnums.ts";
import {getReturnStatuses} from "../../api/enums.ts";


/*
ToDo: Refactor
*/
export const NewOrderReturn = () => {
    const itemReturn = useSelector((state: RootState): ItemInOrder | null => state.returns.itemReturn);
    const dispatch = useDispatch();
    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const {t} = useTranslation();

    const {mappedEnum: reasons} = useGetMappedEnums(getReturnStatuses, ['return-statuses'])

    const increment = () => {
        if (!itemReturn) return;
        if (quantity < itemReturn.quantity - itemReturn.returned_units) {
            setQuantity(quantity+1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const onSaveClick = async () => {
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

        if (!itemReturn) return;

        const requestBody = {
            orderProductId: itemReturn.order_product_id,
            quantity: quantity,
            reason: reason,
            description: description,
        }
        await axios.post("http://localhost:8000/orders/"+itemReturn.order_id+"/returns", requestBody)
            .then((response) => console.log(response))
            .catch((error) => {
                console.error(error);
            });
        await dispatch(setItemReturn(null));
    }

    const onDeleteClick = () => {
        dispatch(setItemReturn(null))
    }

    const onReasonChange = (e: any) => {
        setReason(e.value);
    }

    const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const date = useRef(new Date().toLocaleDateString("en-GB"));
    return (
        <>
            {itemReturn &&
                <Tr>
                    <Td>
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
                    </Td>
                    <Td>${itemReturn.unit_price}</Td>
                    <Td>
                        <NumberToggle increment={increment} decrement={decrement} value={quantity}/>
                    </Td>
                    <Td>${(itemReturn.unit_price * quantity).toFixed(2)}</Td>
                    <Td>
                        <textarea className="max-w-44 sm:max-w-full" maxLength={255} onChange={onDescriptionChange} value={description}></textarea>
                    </Td>
                    <Td>{date.current}</Td>
                    <Td>
                        {reasons &&
                            <Select
                                options={reasons}
                                onChange={onReasonChange}
                                styles={customStyles}
                            />
                        }
                    </Td>
                    <Td>{t('pending')}</Td>
                    <Td>
                        <BlueButton onClick={onSaveClick} name={t('add')}/>
                    </Td>
                    <Td>
                        <RedButton onClick={onDeleteClick} name={t('delete')}/>
                    </Td>
                </Tr>
            }
        </>
    )
};
