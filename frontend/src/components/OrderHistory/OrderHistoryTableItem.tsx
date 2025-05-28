import {setItemReturn} from "../../slices/returnsSlice";
import {useDispatch, useSelector} from "react-redux";
import {BlueButton} from "../Global/BlueButton";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Td, Tr} from "react-super-responsive-table";
import {RootState} from "../../state/store";
import {Item} from "../../types/Item";
import {useTranslation} from "react-i18next";

export const OrderHistoryTableItem = (
    props: {
        item: Item,
        status: string,
        userRole: number,
    }
) => {
    const dispatch = useDispatch();
    const itemReturn = useSelector((state: RootState) => state.returns.itemReturn);
    const {t} = useTranslation();

    const onReturnClick = () => {
        if (itemReturn === null) {
            if (props.item.quantity <= props.item.returned_units) {
                alert(t('all-return-error'));
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
                                src={`${import.meta.env.VITE_BASE_URL}/${props.item.image_path}`}
                                className="w-full rounded-lg sm:w-40"/>)
                        }

                    </div>
                    <div>{props.item.model}</div>
                </Td>
                {[props.item.manufacturer, '$'+props.item.unit_price, props.item.quantity,
                    '$'+(props.item.unit_price * props.item.quantity).toFixed(2)]
                    .map((item, index) => (<Td className="p-3" key={index}>{item}</Td>))}
                {(props.status === 'Delivered' && props.userRole === 2) && (
                    <Td className="p-3">
                        <BlueButton onClick={onReturnClick} name={t('return-button')}/>
                    </Td>
                )
                }
            </Tr>
        </>
    )
}