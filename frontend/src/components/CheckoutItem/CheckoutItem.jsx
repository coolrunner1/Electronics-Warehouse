import {useState} from "react";

export const CheckoutItem = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div
                className="justify-between mb-6 rounded-lg  p-6 shadow-md sm:flex sm:justify-start">
                <img
                    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="product-image" className="w-full rounded-lg sm:w-40"/>
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold light:text-gray-900">Nike Air Max 2019</h2>
                        <p className="mt-1 text-xs light:text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center ">
                                        <span
                                            className="cursor-pointer rounded-l py-1 px-3.5 duration-100 bg-blue-500 hover:bg-blue-600 hover:text-blue-50" onClick={decrement}> - </span>
                            <input className="h-8 w-8 text-center text-xs outline-none"
                                   value={count} readOnly={true}/>
                            <span
                                className="cursor-pointer rounded-r  py-1 px-3 duration-100 bg-blue-500 hover:bg-blue-600 hover:text-blue-50" onClick={increment}> + </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">259.000 ₭</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor"
                                 className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}