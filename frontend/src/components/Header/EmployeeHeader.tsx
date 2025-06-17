import {WarehouseLogo} from "./WarehouseLogo";
import {OrdersButton} from "./OrdersButton";
import {AccountButton} from "./AccountButton.tsx";
import {ClientsButton} from "./ClientsButton";
import {SuppliersButton} from "./SuppliersButton";
import {SearchBar} from "../Global/SearchBar";
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { Header } from "./Header.tsx";

export function EmployeeHeader() {
    const {t} = useTranslation();
    const [searchPath, setSearchPath] = useState("employee/items");
    const [searchPlaceholder, setSearchPlaceholder] = useState(t('search-items'));
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/employee/items") {
            setSearchPath("employee/items");
            setSearchPlaceholder(t('search-items'))
        } else if (location.pathname === "/employee/orders") {
            setSearchPath("employee/orders");
            setSearchPlaceholder(t('search-orders'))
        }

    }, [location]);

    return (
        <>
            <Header>
                <WarehouseLogo location={"employee/items"}/>
                <SearchBar
                    customClassName={"hidden sm:flex"}
                    pathname={searchPath}
                    placeholder={searchPlaceholder}
                />
                <ClientsButton/>
                <SuppliersButton/>
                <OrdersButton pathname={"employee/orders"}/>
                <AccountButton location={'/employee/account'}/>
            </Header>
            <div className='sm:hidden p-4 bg-[#ebe9e5] dark:bg-gray-950'>
                <SearchBar
                    pathname={searchPath}
                    placeholder={searchPlaceholder}
                />
            </div>
        </>
    )
}