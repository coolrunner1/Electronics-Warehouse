import {WarehouseLogo} from "./WarehouseLogo";
import {SearchBar} from "../Global/SearchBar";
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { Header } from "./Header.tsx";
import {AccountSVG} from "../SVGs/AccountSVG.tsx";
import {HeaderButton} from "./HeaderButton.tsx";
import {OrdersSVG} from "../SVGs/OrdersSVG.tsx";
import {SuppliersSVG} from "../SVGs/SuppliersSVG.tsx";
import {ClientsSVG} from "../SVGs/ClientsSVG.tsx";

export function EmployeeHeader() {
    const {t} = useTranslation();
    const [searchPath, setSearchPath] = useState("employee/items");
    const [searchPlaceholder, setSearchPlaceholder] = useState(t('search-items'));
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/employee/items") {
            setSearchPath("employee/items");
            setSearchPlaceholder('search-items');
        } else if (location.pathname === "/employee/orders") {
            setSearchPath("employee/orders");
            setSearchPlaceholder('search-orders');
        } else if (location.pathname === "/employee/clients") {
            setSearchPath("employee/clients");
            setSearchPlaceholder('search-clients');
        } else if (location.pathname === "/employee/suppliers") {
            setSearchPath("employee/suppliers");
            setSearchPlaceholder('search-suppliers');
        }
    }, [location]);

    return (
        <>
            <Header>
                <WarehouseLogo
                    title={t('items')}
                    location={"employee/items"}
                />
                <SearchBar
                    customClassName={"hidden sm:flex"}
                    pathname={searchPath}
                    placeholder={searchPlaceholder}
                />
                <HeaderButton
                    title={t('clients')}
                    onClick={() => navigate("/employee/clients")}
                    logo={<ClientsSVG/>}
                />
                <HeaderButton
                    title={t('suppliers')}
                    onClick={() => navigate("/employee/suppliers")}
                    logo={<SuppliersSVG/>}
                />
                <HeaderButton
                    title={t('orders')}
                    onClick={() => navigate("/employee/orders")}
                    logo={<OrdersSVG/>}
                />
                <HeaderButton
                    title={t('my-account')}
                    onClick={() => navigate("/employee/account")}
                    logo={<AccountSVG/>}
                />
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