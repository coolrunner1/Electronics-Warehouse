import './App.css'
import {Header} from "./components/Header/Header.jsx";
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

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
        <BrowserRouter>
            {(user.userInfo !== null && user.userInfo.role_id === 2) && <Header />}
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/store" element={<StorePage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                    <Route path="/account" element={<AccountPage/>} />
                    <Route path="/orders" element={<OrderUserHistory/>} />
                    <Route path="/admin" element={<AdminDashboardPage/>} />
                </Route>
                <Route path="/404" element={<PageNotFound/>} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
