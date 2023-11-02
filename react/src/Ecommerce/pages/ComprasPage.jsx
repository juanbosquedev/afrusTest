import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const ComprasPage = () => {
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
    <>
      <div>Compras</div>
      <hr />
      <Card />
    </>
  );
};
