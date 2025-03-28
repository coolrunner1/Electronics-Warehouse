import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import {CartButton} from "./CartButton";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "../Global/AccountButton";

export function UserHeader() {
    return (
        <>
            <header className="header flex flex-row gap-x-5 p-4 bg-gray-100 dark:bg-gray-950">
                <WarehouseLogo location={"store"}/>
                <SearchBar pathname={'store'} placeholder={"Search items.."} />
                <CartButton/>
                <OrdersButton pathname={'orderhistory'}/>
                <AccountButton/>
            </header>

        </>
    )
}