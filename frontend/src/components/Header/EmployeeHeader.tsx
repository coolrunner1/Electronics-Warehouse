import {WarehouseLogo} from "./WarehouseLogo";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "./AccountButton.tsx";
import {ClientsButton} from "./ClientsButton";
import {SuppliersButton} from "./SuppliersButton";
import {SearchBar} from "../Global/SearchBar";
import { useTranslation } from "react-i18next";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";

export function EmployeeHeader() {
    const {t} = useTranslation();

    return (
        <header className="header flex flex-row gap-x-5 p-4 bg-[#ebe9e5] dark:bg-gray-950">
            <WarehouseLogo location={"employee/items"}/>
            <SearchBar pathname={"employee/orders"} placeholder={t('search-orders')} />
            <ClientsButton/>
            <SuppliersButton/>
            <OrdersButton pathname={"employee/orders"}/>
            <AccountButton location={'/employee/account'}/>
            <LanguageSelector/>
        </header>
    )
}