import { useState } from "react";
import Style from "./discunt.module.css"
export default function Discunt() {
    const [originalPrice, setOriginalPrice] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState("");
    const [finalPrice, setFinalPrice] = useState(null);
  
    const calcularDescuento = () => {
      const price = parseFloat(originalPrice);
      const percentage = parseFloat(discountPercentage);
  
      if (!isNaN(price) && !isNaN(percentage)) {
        const discountAmount = (price * percentage) / 100;
        const finalPrice = price - discountAmount;
        setFinalPrice(finalPrice.toFixed(2));
      } else {
        setFinalPrice(null);
      }
    };
  return (
    <div className={Style.container}>
      <div className={Style.calculator}>
        <h1>Calculadora de Descuentos</h1>
        <div className={Style["input-group"]}>
          <label htmlFor="originalPrice">Precio Original:</label>
          <input
            type="number"
            id="originalPrice"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            required
          />
        </div>
        <div className={Style['input-group']}>
          <label htmlFor="discountPercentage">Porcentaje de Descuento:</label>
          <input
            type="number"
            id="discountPercentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            required
          />
        </div>
        <button onClick={calcularDescuento}>Calcular Descuento</button>
        {finalPrice !== null && (
          <div id="result" className={Style.result}>Precio Final con Descuento: ${finalPrice}</div>
        )}
      </div>
    </div>
  );
}
