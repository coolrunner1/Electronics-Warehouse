import {WarehouseLogo} from "./WarehouseLogo";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "../Global/AccountButton";
import {ClientsButton} from "./ClientsButton";
import {SuppliersButton} from "./SuppliersButton";
import {SearchBar} from "../Global/SearchBar";

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