import {WarehouseLogo} from "./WarehouseLogo.jsx";
import {OrdersButton} from "./OrdersButton.jsx";
import {AccountButton} from "../Global/AccountButton.jsx";
import {ClientsButton} from "./ClientsButton.jsx";
import {SuppliersButton} from "./SuppliersButton.jsx";
import {SearchBar} from "../Global/SearchBar.jsx";

export function EmployeeHeader() {
    return (
        <>
            <header className="header flex flex-row gap-x-5 p-4 bg-gray-100 dark:bg-gray-950">
                <WarehouseLogo location={"items"}/>
                <SearchBar pathname={"orders"} placeholder={"Search orders.."} />
                <ClientsButton/>
                <SuppliersButton/>
                <OrdersButton pathname={"orders"}/>
                <AccountButton/>
            </header>

        </>
    )
}