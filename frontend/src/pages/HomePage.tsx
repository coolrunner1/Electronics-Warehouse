import {useEffect} from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {useNavigate} from "react-router-dom";
import { User } from "../types/User";
import {ADMIN_ROLE, EMPLOYEE_ROLE} from "../constants/roles.ts";
import {useAuthInterceptor} from "../hooks/useAuthInterceptor.ts";

export const HomePage = () => {
    const user = useAuthUser<User>();
    const navigate = useNavigate();

    useAuthInterceptor();

    useEffect(() => {
        if (!user) {
            navigate("/store");
            return;
        }
        if (user.role_id === ADMIN_ROLE) {
            navigate("/admin/users");
        } else if (user.role_id === EMPLOYEE_ROLE) {
            navigate("/employee/items");
        } else {
            navigate("/store");
        }

    }, [user]);

    return (
        <></>
    );
};