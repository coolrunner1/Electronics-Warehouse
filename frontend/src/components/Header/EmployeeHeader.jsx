import {SearchBar} from "../Global/SearchBar.jsx";
import {WarehouseLogo} from "./WarehouseLogo.jsx";
import {CartButton} from "./CartButton.jsx";
import {OrdersButton} from "./OrdersButton.jsx";
import {AccountButton} from "../Global/AccountButton.jsx";

export function EmployeeHeader() {
    return (
        <>
            <header className="header flex flex-row gap-x-5 p-4 bg-gray-100 dark:bg-gray-950">
                <WarehouseLogo/>
                <SearchBar/>
                <CartButton/>
                <OrdersButton/>
                <AccountButton/>
            </header>

        </>
    )
}