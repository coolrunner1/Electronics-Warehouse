import {OrderHistoryItem} from "./OrderHistoryItem.jsx";
import PropTypes from "prop-types";
import {OrderReturnHistoryItem} from "./OrderReturnHistoryItem.jsx";
import {useSelector} from "react-redux";
import {NewOrderReturn} from "./NewOrderReturn.jsx";

export const OrderReturnsHistoryTable = (props) => {
    const itemReturn = useSelector((state) => state.returns.itemReturn)

    return (
        <>
            <table className="w-full text-md shadow-md rounded mb-4">
                <thead className="border-b">
                <tr>
                    {['Name', 'Price per unit', 'Quantity', 'Total price', 'Status', 'Reason', 'Description', 'Date', '']
                        .map((item, index) => (
                            <th key={index} scope="col" className="text-left p-3 px-4">{item}</th>
                        ))}
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <OrderReturnHistoryItem key={index} item={item}/>
                ))}
                {itemReturn !== null && (
                    <NewOrderReturn/>
                )}
                </tbody>
            </table>
        </>
    )
}

OrderReturnsHistoryTable.propTypes = {
    items: PropTypes.array,
}
/*
* import {OrderHistoryItem} from "./OrderHistoryItem.jsx";
import PropTypes from "prop-types";

export const OrderHistoryTable = (props) => {
    return (
        <>
            <table className="w-full text-md shadow-md rounded mb-4">
                <thead className="border-b">
                <tr>
                    <th scope="col" className="text-left p-3 px-4">Product</th>
                    <th scope="col" className="text-left p-3 px-4">Price</th>
                    <th scope="col" className="text-left p-3 px-4">Status</th>
                    <th scope="col" className="text-left p-3 px-4">Info</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, index) => (
                    <OrderHistoryItem key={index} item={item} />
                ))}
                </tbody>
            </table>
        </>
    )
}

OrderHistoryTable.propTypes = {
    items: PropTypes.array,
}*/
/*
import PropTypes from "prop-types";

export const OrderHistoryItem = (props) => {
    return (
        <>
            <tr>
                <td>
                    <div className="flex justify-center m-3"><img
                        alt="Black tee with intersecting red, white, and green curved lines on front."
                        src="https://tailwindui.com/plus/img/ecommerce-images/order-history-page-04-product-01.jpg"
                        className="w-full rounded-lg sm:w-40"/>
                    </div>
                    <div>
                        <div>{props.item.model}</div>
                        <div>$36.00</div>
                    </div>
                </td>
                <td>$36.00</td>
                <td>Delivered Jan 25, 2021</td>
                <td><a href="#" className="bbl">View<span> Product</span><span className="i">, Men's 3D Glasses Artwork Tee</span></a>
                </td>
            </tr>
        </>
    )
}

OrderHistoryItem.propTypes = {
    item: PropTypes.object,
}*/