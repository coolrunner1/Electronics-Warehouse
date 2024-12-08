import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {CheckoutPage} from "./components/Pages/CheckoutPage.jsx";
import {
    Route,
    Routes,
    BrowserRouter, Navigate
} from "react-router-dom"
import {StorePage} from "./components/Pages/StorePage.jsx";
import {AccountPage} from "./components/Pages/AccountPage.jsx";
import {PageNotFound} from "./components/Pages/PageNotFound.jsx";
import {LoginPage} from "./components/Pages/LoginPage.jsx";
import {OrderUserHistory} from "./components/Pages/OrderUserHistory.jsx";
import {AdminDashboardPage} from "./components/Pages/AdminDashboardPage.jsx";

const App = () => {
  return (
    <>
        <BrowserRouter>
            {/*
            this is a temporary measure
            */}
            {(location.pathname !== '/' && location.pathname !== '/404' && location.pathname !== '/admin') && <Header />}
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/store" element={<StorePage/>} />
                <Route path="/checkout" element={<CheckoutPage/>} />
                <Route path="/account" element={<AccountPage/>} />
                <Route path="/orders" element={<OrderUserHistory/>} />
                <Route path="/admin" element={<AdminDashboardPage/>} />
                <Route path="/404" element={<PageNotFound/>} />
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
