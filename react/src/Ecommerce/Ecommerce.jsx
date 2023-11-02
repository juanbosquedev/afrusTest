import { Navigate, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import { ProductProvider } from "./context/ProductProvider";
import { CartPage } from "./pages/CartPage";
import { ComprasPage } from "./pages/ComprasPage";
import { NavBar } from "./components/NavBar";

export const Ecommerce = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBar></NavBar>
          <div className="container">
        <Routes>

          <Route path='/' element={<ComprasPage></ComprasPage>}></Route>
          <Route path='/cart' element={<CartPage></CartPage>}></Route>
          <Route path='/*' element={<Navigate to='/'/>}></Route>
        </Routes>
          </div>
      </CartProvider>
    </ProductProvider>
  );
};
