import {CheckoutItemsContainer} from "../components/Checkout/CheckoutItemsContainer";
import {CheckoutInformationContainer} from "../components/Checkout/CheckoutInformationContainer";

export const CheckoutPage = () => {
    return (
        <>
            <div className="pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <CheckoutItemsContainer/>
                    <CheckoutInformationContainer/>
                </div>
            </div>
        </>
    )
}