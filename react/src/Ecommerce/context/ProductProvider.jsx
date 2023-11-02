import { ProductContext } from "./ProductContext";
import { useState, useEffect } from "react";

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};
