import {useNavigate} from "react-router-dom";

export const ClientsButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/clients');
    };

    return (
        <>
            <button onClick={handleClick} className="bg-cart dark:bg-cart-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 font-semibold py-3 px-3 border border-gray-50 dark:border-gray-950 rounded shadow">
                <div className="text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-black dark:fill-gray-100" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                    </svg>
                </div>
            </button>
        </>
    )
}