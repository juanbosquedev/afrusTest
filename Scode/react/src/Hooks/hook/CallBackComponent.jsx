import { Increment } from "./Increment";
import { useState, useCallback } from "react";

export const CallBackComponent = () => {
  // a incrementar le pasamos una función, va a hacer la función que el hijo se reenderice cada vez que la función cambia
  //la función cambia mediante cada utilización, cambia el lugar de memoria, con el useMemo, no funciona la morización y hay que utilizar el useCallBack

  const [counter, setCounter] = useState(0);

  //   const patherIncrementator = (val) => {
  //     setCounter(counter + val);
  //     console.log(counter)
  //   }; useCallback memoriza funciones, mientras que useMemo memoriza valores

  const patherIncrementator = useCallback ((val) => {
    // setCounter(counter + val); si lo ponemos así, memoriza counter y no incrementa más, memoriza un solo valor
    setCounter(contador=> contador+val) //con este metodo traemos el valor previo, memoriza el setCounter, pero no memoriza el counter
    console.log(counter);
  },[])
  return (
    <div>
      CallBackComponent {counter}
      <Increment increment={patherIncrementator} /> {/*con react memo memoriza la función que le pasamos por aca
      memorizamos lo que ingresa por aquí y la callback linea 17 setcounter
      hay veces que desetructurando el código, que se encarge solamente de presentar, como hicimos con custom hooks, evitamos que re renderice y el uso de useCallback */}
    </div>
  );
};
