import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {ItemsContainer} from "./components/ItemsContainer/ItemsContainer.jsx";
import {CheckoutPage} from "./views/CheckoutPage.jsx";
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Routes} from "react-router-dom"
import {StorePage} from "./views/StorePage.jsx";

const App = () => {
  const router = createBrowserRouter(
      createRoutesFromElements(
          <>
              <Route path="/" element={<StorePage/>} />
              <Route path="/checkout" element={<CheckoutPage/>} />
          </>
      )
  )
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
