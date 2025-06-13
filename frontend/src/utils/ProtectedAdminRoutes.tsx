import {Navigate, Outlet} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {User} from "../types/User.ts";
import {AdminHeader} from "../components/Header/AdminHeader.tsx";
import {ADMIN_ROLE} from "../constants/roles.ts";

export const ProtectedAdminRoutes = () => {
    const user = useAuthUser<User>();

    return user
        ?
        user.role_id === ADMIN_ROLE ?
            <>
                <AdminHeader />
                <Outlet />
            </>
            : <Navigate to={'/'}/>
        : <Navigate to="/login" />;
}