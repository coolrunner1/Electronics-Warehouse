import {UserHeader} from "./components/Header/UserHeader";
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
import {ProtectedRoutes} from "./utils/ProtectedRoutes";
import {useSelector} from "react-redux";
import {EmployeeHeader} from "./components/Header/EmployeeHeader";
import {ItemsPage} from "./pages/Employee/ItemsPage.tsx";
import {ClientsPage} from "./pages/Employee/ClientsPage.tsx";
import {SuppliersPage} from "./pages/Employee/SuppliersPage.tsx";
import {AdminHeader} from "./components/Header/AdminHeader";
import {OrdersPage} from "./pages/Employee/OrdersPage.tsx";
import {RootState} from "./state/store";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./api/queryClient";
import "./i18n";
import {CheckoutPage} from "./pages/CheckoutPage.tsx";

const App = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              {(user.userInfo !== null && user.userInfo.role_id === 1) && <AdminHeader />}
              {(user.userInfo !== null && user.userInfo.role_id === 2) && <UserHeader />}
              {(user.userInfo !== null && user.userInfo.role_id === 3) && <EmployeeHeader />}
              <Routes>
                  <Route path="/" element={<LoginPage/>} />
                  <Route path="/login" element={<LoginPage/>} />
                  <Route element={<ProtectedRoutes/>}>
                      <Route path="/store" element={<StorePage/>} />
                      <Route path="/cart" element={<CartPage/>} />
                      <Route path="/checkout" element={<CheckoutPage/>}/>
                      <Route path="/account" element={<AccountPage/>} />
                      <Route path="/orderhistory" element={<OrderUserHistory/>} />
                      <Route path="/admin/users" element={<UsersPage/>} />
                      <Route path="/employee/items" element={<ItemsPage/>} />
                      <Route path="/employee/clients" element={<ClientsPage/>} />
                      <Route path="/employee/suppliers" element={<SuppliersPage/>} />
                      <Route path="/employee/orders" element={<OrdersPage/>} />
                  </Route>
                  <Route path="/404" element={<PageNotFound/>} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
