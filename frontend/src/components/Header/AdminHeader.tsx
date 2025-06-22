import {useTranslation} from 'react-i18next'
import {SearchBar} from "../Global/SearchBar.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header} from "./Header.tsx";
import {HeaderButton} from "./HeaderButton.tsx";
import {AdminSVG} from "../SVGs/AdminSVG.tsx";
import {ArticlesSVG} from "../SVGs/ArticlesSVG.tsx";
import {AccountSVG} from "../SVGs/AccountSVG.tsx";

export const AdminHeader = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const [searchPath, setSearchPath] = useState("admin/users");
    const [searchPlaceholder, setSearchPlaceholder] = useState(t('search-users'));
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/admin/users") {
            setSearchPath("admin/users");
            setSearchPlaceholder('search-users')
        } else if (location.pathname === "/admin/articles") {
            setSearchPath("admin/articles");
            setSearchPlaceholder('search-articles')
        }

    }, [location]);

    return (
        <>
            <Header>
                <HeaderButton
                    title={t('users')}
                    onClick={() => navigate("/admin/users")}
                    logo={<AdminSVG/>}
                />
                <SearchBar
                    customClassName={"hidden sm:flex"}
                    pathname={searchPath}
                    placeholder={searchPlaceholder}
                />
                <HeaderButton
                    title={t('news')}
                    onClick={() => navigate("/admin/articles")}
                    logo={<ArticlesSVG/>}
                />
                <HeaderButton
                    title={t('my-account')}
                    onClick={() => navigate("/admin/account")}
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
