import { useState } from "react";

export const useCounter = (initialValue) => {
  const [contador, setContador]= useState(initialValue = 0);

  const incrementar = (val=1)=>{
    setContador(contador + val)
  }
  const decrementar = (val=1)=>{
    if(contador<1)return
    setContador(contador - val)
  }
  const resetear = ()=>{
    setContador(0)
  }
  
    return {
    contador,
    incrementar,
    decrementar,
    resetear,
  };
};
