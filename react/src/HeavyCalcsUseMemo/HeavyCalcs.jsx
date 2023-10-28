import { useState, useMemo } from "react";




export const HeavyCalcs = () => {
    const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
  const [show, setShow] = useState(true);
  // USAMOS useMemo para evitar que por acada renderizado que produce el show and hide, calcule o ejecute de vuelta la función
//   const getCalculo = (numList) => {
//     console.log("calculo")
//   return numList.reduce((a, b) => a * b); con esta forma cada vez que aprieto el botón de show vuelve a calcular
const getCalculo =(numList)=> useMemo( () => { //callback que memoriza
    console.log("calculo")
  return numList.reduce((a, b) => a * b);


}, [numList]);//solo si cambia la num list se ejecuta, sino memoriza, dependencia
  const numAdd = () => {
    setNumList([...numList, numList[numList.length - 1] + 1]);
  };
  return (
    <>
      <h2>Cálculo</h2>
      <p>{getCalculo(numList)}</p>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? "show" : "hide"}</button>
      <button className="btn btn-primary" onClick={() => numAdd()}>Agregar Número</button>
    </>
  );
};
