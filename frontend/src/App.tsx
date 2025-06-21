import {CartPage} from './pages/User/CartPage.tsx'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import {ShopPage} from './pages/User/ShopPage.tsx'
import {AccountPage} from './pages/AccountPage'
import {PageNotFound} from './pages/PageNotFound'
import {LoginPage} from './pages/LoginPage'
import {OrderUserHistory} from './pages/User/OrderUserHistory.tsx'
import {UsersPage} from './pages/Admin/UsersPage.tsx'
import {ProtectedAdminRoutes} from './utils/ProtectedAdminRoutes.tsx'
import {ItemsPage} from './pages/Employee/ItemsPage.tsx'
import {ClientsPage} from './pages/Employee/ClientsPage.tsx'
import {SuppliersPage} from './pages/Employee/SuppliersPage.tsx'
import {OrdersPage} from './pages/Employee/OrdersPage.tsx'
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from './api/queryClient'
import './i18n'
import {CheckoutPage} from './pages/User/CheckoutPage.tsx'
import {ProtectedEmployeeRoutes} from './utils/ProtectedEmployeeRoutes.tsx'
import {MainPage} from './pages/MainPage.tsx'
import {ProtectedUserRoutes} from './utils/ProtectedUserRoutes.tsx'
import {RegistrationPage} from './pages/RegistrationPage.tsx'
import {ItemEditPage} from './pages/Employee/ItemEditPage.tsx'
import {ArticlesEditPage} from './pages/Admin/ArticlesEditPage.tsx'
import {ArticlesPage} from "./pages/User/ArticlesPage.tsx";
import {ShopItemPage} from "./pages/User/ShopItemPage.tsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setFlagsFromLocalStorage} from "./slices/flagsSlice.ts";
import {HomePage} from "./pages/User/HomePage.tsx";
import {ArticlePage} from "./pages/User/ArticlePage.tsx";
import {ContactUsPage} from "./pages/User/ContactUsPage.tsx";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFlagsFromLocalStorage());
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<MainPage/>}
                    />
                    <Route element={<ProtectedUserRoutes/>}>
                        <Route
                            path='/home'
                            element={<HomePage/>}
                        />
                        <Route
                            path='/contact-us'
                            element={<ContactUsPage/>}
                        />
                        <Route
                            path='/store'
                            element={<ShopPage/>}
                        />
                        <Route
                            path='/store/:id'
                            element={<ShopItemPage/>}
                        />
                        <Route
                            path='/cart'
                            element={<CartPage/>}
                        />
                        <Route
                            path='/checkout'
                            element={<CheckoutPage/>}
                        />
                        <Route
                            path='/account'
                            element={<AccountPage/>}
                        />
                        <Route
                            path='/orders'
                            element={<OrderUserHistory/>}
                        />
                        <Route
                            path='/articles'
                            element={<ArticlesPage/>}
                        />
                        <Route
                            path='/articles/:id'
                            element={<ArticlePage/>}
                        />
                    </Route>
                    <Route element={<ProtectedAdminRoutes/>}>
                        <Route
                            path='/admin/users'
                            element={<UsersPage/>}
                        />
                        <Route
                            path='/admin/account'
                            element={<AccountPage/>}
                        />
                        <Route
                            path='/admin/articles'
                            element={<ArticlesEditPage/>}
                        />
                    </Route>
                    <Route element={<ProtectedEmployeeRoutes/>}>
                        <Route
                            path='/employee/items'
                            element={<ItemsPage/>}
                        />
                        <Route
                            path='/employee/items/:id'
                            element={<ItemEditPage/>}
                        />
                        <Route
                            path='/employee/clients'
                            element={<ClientsPage/>}
                        />
                        <Route
                            path='/employee/suppliers'
                            element={<SuppliersPage/>}
                        />
                        <Route
                            path='/employee/orders'
                            element={<OrdersPage/>}
                        />
                        <Route
                            path='/employee/account'
                            element={<AccountPage/>}
                        />
                    </Route>
                    <Route
                        path='/login'
                        element={<LoginPage/>}
                    />
                    <Route
                        path='/register'
                        element={<RegistrationPage/>}
                    />
                    <Route
                        path='/404'
                        element={<PageNotFound/>}
                    />
                    <Route
                        path='*'
                        element={
                            <Navigate
                                to='/404'
                                replace
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
