import PropTypes from "prop-types";

export const OrderHistoryItem = (props) => {
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
                    <td></td>
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