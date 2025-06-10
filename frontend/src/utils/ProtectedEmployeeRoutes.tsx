import {Navigate, Outlet} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {User} from "../types/User.ts";
import {EmployeeHeader} from "../components/Header/EmployeeHeader.tsx";
import {EMPLOYEE_ROLE} from "../constants/roles.ts";

export const ProtectedEmployeeRoutes = () => {
    const user = useAuthUser<User>();

    return user
        ?
        user.user_id === EMPLOYEE_ROLE ?
            <>
                <EmployeeHeader />
                <Outlet />
            </>
            : <Navigate to={'/'}/>
        : <Navigate to="/login" />;
}