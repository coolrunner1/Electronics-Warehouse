import {WarehouseLogo} from "./WarehouseLogo.jsx";
import {OrdersButton} from "./OrdersButton.jsx";
import {AccountButton} from "../Global/AccountButton.jsx";
import {ClientsButton} from "./ClientsButton.jsx";

export function EmployeeHeader() {
    return (
        <>
            <header className="header flex flex-row gap-x-5 p-4 bg-gray-100 dark:bg-gray-950">
                <WarehouseLogo location={"items"}/>
                <div className="w-full"></div>
                <ClientsButton/>
                <OrdersButton/>
                <AccountButton/>
            </header>

        </>
    )
}