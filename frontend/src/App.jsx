import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {CheckoutPage} from "./components/Pages/CheckoutPage.jsx";
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom"
import {StorePage} from "./components/Pages/StorePage.jsx";
import {AccountPage} from "./components/Pages/AccountPage.jsx";
import {PageNotFound} from "./components/Pages/PageNotFound.jsx";
import {LoginPage} from "./components/Pages/LoginPage.jsx";

const App = () => {
  return (
    <>
        <>
            <BrowserRouter>
                {location.pathname !== '/' && <Header />}
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/store" element={<StorePage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                    <Route path="/account" element={<AccountPage/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    </>
  )
}

export default App
