import {Navigate, Outlet} from "react-router-dom";
import {UserHeader} from "../components/Header/UserHeader.tsx";
import {User} from "../types/User.ts";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {USER_ROLE} from "../constants/roles.ts";

export const ProtectedUserRoutes = () => {
    const user = useAuthUser<User>();

    return user
        ?
        user.user_id === USER_ROLE
            ?
            <>
                <UserHeader />
                <Outlet />
            </>
            : <Navigate to={'/'}/>
        :
        <>
            <UserHeader />
            <Outlet />
        </>;
}