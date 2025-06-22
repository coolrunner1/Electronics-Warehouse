import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import { useTranslation } from "react-i18next";
import {ThemeButton} from "./ThemeButton.tsx";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";
import {HeaderButton} from "./HeaderButton.tsx";
import {OrdersSVG} from "../SVGs/OrdersSVG.tsx";
import {AccountSVG} from "../SVGs/AccountSVG.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {CartSVG} from "../SVGs/CartSVG.tsx";
import {ArticlesSVG} from "../SVGs/ArticlesSVG.tsx";
import { HomeSVG } from "../SVGs/HomeSVG.tsx";
import {LocationSVG} from "../SVGs/LocationSVG.tsx";
import {useEffect, useState} from "react";

export function UserHeader() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [searchPath, setSearchPath] = useState("store");
    const [searchPlaceholder, setSearchPlaceholder] = useState(t('search-items'));
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/store") {
            setSearchPath("store");
            setSearchPlaceholder('search-items');
        } else if (location.pathname === "/articles") {
            setSearchPath("articles");
            setSearchPlaceholder('search-articles');
        }
    }, [location]);

    return (
        <>
            <div className="md:hidden min-h-screen h-full px-10"></div>
            <header className="flex flex-col md:flex-row md:justify-between fixed md:relative top-0 left-0 min-h-screen md:min-h-auto gap-5 p-4 bg-[#ebe9e5] dark:bg-gray-950">
                <WarehouseLogo
                    title={t('shop')}
                    location={"store"}
                />
                <SearchBar
                    customClassName={"hidden md:flex"}
                    pathname={searchPath}
                    placeholder={searchPlaceholder}
                />
                <HeaderButton
                    title={t('home-page')}
                    onClick={() => navigate("/home")}
                    logo={<HomeSVG/>}
                />
                <HeaderButton
                    title={t('news')}
                    onClick={() => navigate("/articles")}
                    logo={<ArticlesSVG/>}
                />
                <HeaderButton
                    title={t('contact-us')}
                    onClick={() => navigate("/contact-us")}
                    logo={<LocationSVG/>}
                />
                <HeaderButton
                    title={t('cart')}
                    onClick={() => navigate("/cart")}
                    logo={<CartSVG/>}
                />
                <HeaderButton
                    title={t('order-history')}
                    onClick={() => navigate("/orders")}
                    logo={<OrdersSVG/>}
                />
                <HeaderButton
                    title={t('my-account')}
                    onClick={() => navigate("/account")}
                    logo={<AccountSVG/>}
                />
                <ThemeButton/>
                <LanguageSelector/>
            </header>
        </>
    )
}