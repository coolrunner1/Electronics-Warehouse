import {useSelector} from "react-redux";

export const CheckoutInformationContainer = () => {
    const {quantity, amount} = useSelector((state) => state.cart);
    return (
        <>
            {quantity === 0
                ? <div></div> :
                <div className="mt-6 h-full rounded-lg p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Items in cart</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{quantity}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">${amount}</p>
                        </div>
                    </div>
                    <button
                        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out
                    </button>
                </div>
            }

        </>
    )
}