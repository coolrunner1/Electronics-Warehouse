import {AdminButton} from './AdminButton.tsx'
import {AccountButton} from './AccountButton.tsx'
import {useTranslation} from 'react-i18next'
import {LanguageSelector} from '../Global/LanguageSelector.tsx'
import {NewsButton} from './NewsButton.tsx'
import {SearchBar} from "../Global/SearchBar.tsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const AdminHeader = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const [searchPath, setSearchPath] = useState("admin/users");
    const [searchPlaceholder, setSearchPlaceholder] = useState(t('search-users'))

    useEffect(() => {
        if (location.pathname === "/admin/users") {
            setSearchPath("admin/users");
            setSearchPlaceholder(t('search-users'))
        } else if (location.pathname === "/admin/articles") {
            setSearchPath("admin/articles");
            setSearchPlaceholder(t('search-articles'))
        }

    }, [location]);

    return (
        <header className="header flex flex-row gap-x-5 p-4 bg-[#ebe9e5] dark:bg-gray-950">
            <AdminButton/>
            <SearchBar pathname={searchPath} placeholder={searchPlaceholder} />
            <NewsButton location='/admin/articles'/>
            <AccountButton location={'/admin/account'}/>
            <LanguageSelector/>
        </header>
    )
}
