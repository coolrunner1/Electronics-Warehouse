import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {CheckoutPage} from "./views/CheckoutPage.jsx";
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom"
import {StorePage} from "./views/StorePage.jsx";
import {AccountPage} from "./views/AccountPage.jsx";
import {PageNotFound} from "./views/PageNotFound.jsx";

const App = () => {
  return (
    <>
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<StorePage/>} />
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
