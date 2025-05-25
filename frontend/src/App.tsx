import {UserHeader} from "./components/Header/UserHeader";
import {CheckoutPage} from "./pages/CheckoutPage";
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
import {AdminDashboardPage} from "./pages/AdminDashboardPage";
import {ProtectedRoutes} from "./utils/ProtectedRoutes";
import {useSelector} from "react-redux";
import {EmployeeHeader} from "./components/Header/EmployeeHeader";
import {ItemsPage} from "./pages/ItemsPage";
import {ClientsPage} from "./pages/ClientsPage";
import {SuppliersPage} from "./pages/SuppliersPage";
import {AdminHeader} from "./components/Header/AdminHeader";
import {OrdersPage} from "./pages/OrdersPage";
import {RootState} from "./state/store";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./api/queryClient";
import "./i18n";

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
      </QueryClientProvider>
  )
}

export default App
