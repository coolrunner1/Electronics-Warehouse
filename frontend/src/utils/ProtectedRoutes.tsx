import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {RootState} from "../state/store.ts";

export const ProtectedRoutes = () => {
    const user = useSelector((state: RootState) => state.user);

    return user.userInfo ? <Outlet /> : <Navigate to="/login" />;
}