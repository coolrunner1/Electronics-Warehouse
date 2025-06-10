import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import {CartButton} from "./CartButton";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "./AccountButton.tsx";
import { useTranslation } from "react-i18next";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";

export function UserHeader() {
    const {t} = useTranslation();

    return (
        <header className="header flex flex-row gap-x-5 p-4 bg-[#ebe9e5] dark:bg-gray-950">
            <WarehouseLogo location={"store"}/>
            <SearchBar pathname={'store'} placeholder={t('search-items')} />
            <CartButton/>
            <OrdersButton pathname={'orderhistory'}/>
            <AccountButton location={'/account'}/>
            <LanguageSelector/>
        </header>
    )
}