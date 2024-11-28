import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {CheckoutPage} from "./views/CheckoutPage.jsx";
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom"
import {StorePage} from "./views/StorePage.jsx";

const App = () => {
  return (
    <>
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<StorePage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    </>
  )
}

export default App
