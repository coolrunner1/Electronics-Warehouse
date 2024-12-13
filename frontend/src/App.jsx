import './App.css'
import {UserHeader} from "./components/Header/UserHeader.jsx";
import {CheckoutPage} from "./pages/CheckoutPage.jsx";
import {
    Route,
    Routes,
    BrowserRouter, Navigate
} from "react-router-dom"
import {StorePage} from "./pages/StorePage.jsx";
import {AccountPage} from "./pages/AccountPage.jsx";
import {PageNotFound} from "./pages/PageNotFound.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {OrderUserHistory} from "./pages/OrderUserHistory.jsx";
import {AdminDashboardPage} from "./pages/AdminDashboardPage.jsx";
import {ProtectedRoutes} from "./utils/ProtectedRoutes.jsx";
import {useSelector} from "react-redux";
import {EmployeeHeader} from "./components/Header/EmployeeHeader.jsx";
import {ItemsPage} from "./pages/ItemsPage.jsx";
import {ClientsPage} from "./pages/ClientsPage.jsx";
import {SuppliersPage} from "./pages/SuppliersPage.jsx";
import {AdminHeader} from "./components/Header/AdminHeader.jsx";
import {OrdersPage} from "./pages/OrdersPage.jsx";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
        <BrowserRouter>
            {(user.userInfo !== null && user.userInfo.role_id === 1) && <AdminHeader />}
            {(user.userInfo !== null && user.userInfo.role_id === 2) && <UserHeader />}
            {(user.userInfo !== null && user.userInfo.role_id === 3) && <EmployeeHeader />}
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/store" element={<StorePage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                    <Route path="/account" element={<AccountPage/>} />
                    <Route path="/orderhistory" element={<OrderUserHistory/>} />
                    <Route path="/admin" element={<AdminDashboardPage/>} />
                    <Route path="/items" element={<ItemsPage/>} />
                    <Route path="/clients" element={<ClientsPage/>} />
                    <Route path="/suppliers" element={<SuppliersPage/>} />
                    <Route path="/orders" element={<OrdersPage/>} />
                </Route>
                <Route path="/404" element={<PageNotFound/>} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
