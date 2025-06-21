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
                <HeaderButton
                    onClick={() => navigate("/employee/clients")}
                    logo={<ClientsSVG/>}
                />
                <HeaderButton
                    onClick={() => navigate("/employee/suppliers")}
                    logo={<SuppliersSVG/>}
                />
                <HeaderButton
                    onClick={() => navigate("/employee/orders")}
                    logo={<OrdersSVG/>}
                />
                <HeaderButton
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