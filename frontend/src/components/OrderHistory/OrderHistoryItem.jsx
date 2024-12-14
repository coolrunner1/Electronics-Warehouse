import PropTypes from "prop-types";
import {setItemReturn} from "../../slices/returnsSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {BlueButton} from "../Global/BlueButton.jsx";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";

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
            <Tr>
                <Td>
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
                </Td>
                {[props.item.manufacturer, '$'+props.item.unit_price, props.item.quantity, '$'+(props.item.unit_price * props.item.quantity).toFixed(2)]
                    .map((item, index) => (<Td className="p-3" key={index}>{item}</Td>))}
                {props.status === 'Delivered' && (
                    <Td className="p-3">
                        <BlueButton onClick={onReturnClick} name={"Return"}/>
                    </Td>
                )
                }
            </Tr>
        </>
    )
}

OrderHistoryItem.propTypes = {
    item: PropTypes.object,
    status: PropTypes.string,
}