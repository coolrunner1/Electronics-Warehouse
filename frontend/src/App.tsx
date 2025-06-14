import {CartPage} from "./pages/CartPage.tsx";
import {
    Route,
    Routes,
    BrowserRouter, Navigate
} from "react-router-dom"
import {StorePage} from "./pages/StorePage";
import {AccountPage} from "./pages/AccountPage";
import {PageNotFound} from "./pages/PageNotFound";
import {LoginPage} from "./pages/LoginPage";
import {OrderUserHistory} from "./pages/OrderUserHistory";
import {UsersPage} from "./pages/Admin/UsersPage.tsx";
import {ProtectedAdminRoutes} from "./utils/ProtectedAdminRoutes.tsx";
import {ItemsPage} from "./pages/Employee/ItemsPage.tsx";
import {ClientsPage} from "./pages/Employee/ClientsPage.tsx";
import {SuppliersPage} from "./pages/Employee/SuppliersPage.tsx";
import {OrdersPage} from "./pages/Employee/OrdersPage.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./api/queryClient";
import "./i18n";
import {CheckoutPage} from "./pages/CheckoutPage.tsx";
import {ProtectedEmployeeRoutes} from "./utils/ProtectedEmployeeRoutes.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {ProtectedUserRoutes} from "./utils/ProtectedUserRoutes.tsx";
import {useAuthInterceptor} from "./hooks/useAuthInterceptor.ts";
import {RegistrationPage} from "./pages/RegistrationPage.tsx";

const App = () => {
    useAuthInterceptor();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route element={<ProtectedUserRoutes/>}>
                        <Route path="/store" element={<StorePage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                        <Route path="/account" element={<AccountPage/>}/>
                        <Route path="/orderhistory" element={<OrderUserHistory/>}/>
                    </Route>
                    <Route element={<ProtectedAdminRoutes/>}>
                        <Route path="/admin/users" element={<UsersPage/>}/>
                        <Route path="/admin/account" element={<AccountPage/>}/>
                    </Route>
                    <Route element={<ProtectedEmployeeRoutes/>}>
                        <Route path="/employee/items" element={<ItemsPage/>}/>
                        <Route path="/employee/clients" element={<ClientsPage/>}/>
                        <Route path="/employee/suppliers" element={<SuppliersPage/>}/>
                        <Route path="/employee/orders" element={<OrdersPage/>}/>
                        <Route path="/employee/account" element={<AccountPage/>}/>
                    </Route>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegistrationPage/>}/>
                    <Route path="/404" element={<PageNotFound/>}/>
                    <Route path="*" element={<Navigate to="/404" replace/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
