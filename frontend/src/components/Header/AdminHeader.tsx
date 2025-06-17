import {AdminButton} from './AdminButton.tsx'
import {AccountButton} from './AccountButton.tsx'
import {useTranslation} from 'react-i18next'
import {ArticlesButton} from './ArticlesButton.tsx'
import {SearchBar} from "../Global/SearchBar.tsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header} from "./Header.tsx";

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
        <>
            <Header>
                <AdminButton/>
                <SearchBar
                    customClassName={"hidden sm:flex"}
                    pathname={searchPath}
                    placeholder={searchPlaceholder}
                />
                <ArticlesButton location='/admin/articles'/>
                <AccountButton location={'/admin/account'}/>
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
