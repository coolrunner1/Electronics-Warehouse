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

export function UserHeader() {
    const {t} = useTranslation();
    const navigate = useNavigate();

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
                <HeaderButton
                    onClick={() => navigate("/home")}
                    logo={<HomeSVG/>}
                />
                <HeaderButton
                    onClick={() => navigate("/articles")}
                    logo={<ArticlesSVG/>}
                />
                <HeaderButton
                    onClick={() => navigate("/cart")}
                    logo={<CartSVG/>}
                />
                <HeaderButton
                    onClick={() => navigate("/orders")}
                    logo={<OrdersSVG/>}
                />
                <HeaderButton
                    onClick={() => navigate("/account")}
                    logo={<AccountSVG/>}
                />
                <ThemeButton/>
                <LanguageSelector/>
            </header>
        </>
    )
}