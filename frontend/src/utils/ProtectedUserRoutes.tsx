import {Navigate, Outlet} from "react-router-dom";
import {UserHeader} from "../components/Header/UserHeader.tsx";
import {User} from "../types/User.ts";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {USER_ROLE} from "../constants/roles.ts";
import {SearchBar} from "../components/Global/SearchBar.tsx";
import {useTranslation} from "react-i18next";

export const ProtectedUserRoutes = () => {
    const user = useAuthUser<User>();
    const {t} = useTranslation();

    return user
        ?
        user.role_id === USER_ROLE
            ?
            <>
                <div className="flex flex-row md:flex-col">
                    <UserHeader />
                    <Outlet />
                </div>
            </>
            : <Navigate to={'/'}/>
        :
        <>
            <div className='md:hidden p-4 bg-[#ebe9e5] dark:bg-gray-950'>
                <SearchBar
                    pathname={'store'}
                    placeholder={t('search-items')}
                />
            </div>
            <div className="flex flex-row md:flex-col">
                <UserHeader />
                <Outlet />
            </div>
        </>;
}