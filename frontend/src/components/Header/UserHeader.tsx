import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import {CartButton} from "./CartButton";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "./AccountButton.tsx";
import { useTranslation } from "react-i18next";
import {Header} from "./Header.tsx";
import {ArticlesButton} from "./ArticlesButton.tsx";

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
                    <ArticlesButton location={'articles'}/>
                    <AccountButton location={'/account'}/>
                </div>
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