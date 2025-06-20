import {SearchBar} from "../Global/SearchBar";
import {WarehouseLogo} from "./WarehouseLogo";
import { useTranslation } from "react-i18next";
import {ThemeButton} from "./ThemeButton.tsx";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";
import {HeaderButton} from "./HeaderButton.tsx";
import {OrdersSVG} from "../SVGs/OrdersSVG.tsx";
import {AccountSVG} from "../SVGs/AccountSVG.tsx";
import {useNavigate} from "react-router-dom";
import {CartSVG} from "../SVGs/CartSVG.tsx";
import {ArticlesSVG} from "../SVGs/ArticlesSVG.tsx";
import { HomeSVG } from "../SVGs/HomeSVG.tsx";
import {LocationSVG} from "../SVGs/LocationSVG.tsx";

export function UserHeader() {
    const {t} = useTranslation();
    const navigate = useNavigate();

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
                    pathname={'store'}
                    placeholder={t('search-items')}
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