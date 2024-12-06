import {SearchBar} from "./SearchBar.jsx";
import {WarehouseLogo} from "./WarehouseLogo.jsx";
import {CartButton} from "./CartButton.jsx";
import {OrdersButton} from "./OrdersButton.jsx";
import {AccountButton} from "./AccountButton.jsx";
import {useEffect, useState} from "react";

export function Header() {
    const [allowRender, setAllowRender] = useState(true);

    useEffect(() => {
        setAllowRender(window.location.pathname !== '/' && window.location.pathname !== '/404');
    }, []);

    return (
        <>
            {allowRender ? (
                <header className="header flex flex-row gap-x-5 p-4 bg-gray-100 dark:bg-gray-950">
                    <WarehouseLogo/>
                    <SearchBar/>
                    <CartButton/>
                    <OrdersButton/>
                    <AccountButton/>
                </header>
                ) : null
            }

        </>
    )
}