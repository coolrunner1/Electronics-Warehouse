import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import {CartButton} from "./CartButton";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "./AccountButton.tsx";
import { useTranslation } from "react-i18next";
import {ArticlesButton} from "./ArticlesButton.tsx";
import {ThemeButton} from "./ThemeButton.tsx";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";
import {HomeButton} from "./HomeButton.tsx";

export function UserHeader() {
    const {t} = useTranslation();

    return (
        <>
            <div className="md:hidden min-h-screen h-full px-10"></div>
            <header className="flex flex-col md:flex-row md:justify-between fixed md:relative top-0 left-0 min-h-screen md:min-h-auto gap-5 p-4 bg-[#ebe9e5] dark:bg-gray-950">
                <WarehouseLogo location={"store"}/>
                <SearchBar
                    customClassName={"hidden md:flex"}
                    pathname={'store'}
                    placeholder={t('search-items')}
                />
                <HomeButton/>
                <ArticlesButton location={'articles'}/>
                <CartButton/>
                <OrdersButton pathname={'orderhistory'}/>
                <AccountButton location={'/account'}/>
                <ThemeButton/>
                <LanguageSelector/>
            </header>
        </>
    )
}