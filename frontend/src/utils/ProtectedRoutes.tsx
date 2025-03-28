import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoutes = () => {
    const user = useSelector((state) => state.user);

    return user.userInfo ? <Outlet /> : <Navigate to="/login" />;
}