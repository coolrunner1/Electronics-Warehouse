import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import {CartButton} from "./CartButton";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "./AccountButton.tsx";
import { useTranslation } from "react-i18next";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";
import {Header} from "./Header.tsx";

export function UserHeader() {
    const {t} = useTranslation();

    return (
        <>
            <Header>
                <WarehouseLogo location={"store"}/>
                <SearchBar
                    customClassName={"hidden sm:flex"}
                    pathname={'store'}
                    placeholder={t('search-items')}
                />
                <div className="flex gap-x-5">
                    <CartButton/>
                    <OrdersButton pathname={'orderhistory'}/>
                    <AccountButton location={'/account'}/>
                </div>
                <LanguageSelector/>
            </Header>
            <div className='sm:hidden p-4 bg-[#ebe9e5] dark:bg-gray-950'>
                <SearchBar
                    pathname={'store'}
                    placeholder={t('search-items')}
                />
            </div>
        </>
    )
}