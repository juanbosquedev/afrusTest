// import './styles.css'

import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CartPage } from "./pages/CartPage";
import { ComprasPage } from "./pages/ComprasPage";

export const Ecommerce = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPage/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
};
