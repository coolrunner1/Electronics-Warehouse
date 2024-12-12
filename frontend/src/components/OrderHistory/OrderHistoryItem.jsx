import PropTypes from "prop-types";
import {setItemReturn} from "../../slices/returnsSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {BlueButton} from "../Global/BlueButton.jsx";


export const OrderHistoryItem = (props) => {
    const dispatch = useDispatch();
    const itemReturn = useSelector((state) => state.returns.itemReturn);

    const onReturnClick = () => {
        if (itemReturn === null) {
            if (props.item.quantity <= props.item.returned_units) {
                alert("You have already returned all items.");
                return;
            }
            dispatch(setItemReturn(props.item));
            return;
        }
        alert("Finish filing previous return first!");
    }

    return (
        <>
            <tr>
                <td>
                    <div className="flex justify-center m-3">
                        {props.item.image_path === null
                            ? (<img
                                alt={props.item.model.toLowerCase()}
                                src="/placeholder.png"
                                className="w-full rounded-lg sm:w-40"/>)
                            : (<img
                                alt={props.item.model.toLowerCase()}
                                src={props.item.image_path}
                                className="w-full rounded-lg sm:w-40"/>)
                        }

                    </div>
                    <div>{props.item.model}</div>
                </td>
                <td>{props.item.manufacturer}</td>
                <td>${props.item.unit_price}</td>
                <td>{props.item.quantity}</td>
                <td>${(props.item.unit_price * props.item.quantity).toFixed(2)}</td>
                {props.status === 'Delivered' && (
                    <td>
                        <BlueButton onButtonClick={onReturnClick} name={"Return"}/>
                    </td>
                )
                }
            </tr>
        </>
    )
}

OrderHistoryItem.propTypes = {
    item: PropTypes.object,
    status: PropTypes.string,
}