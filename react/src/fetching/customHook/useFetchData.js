import { useState, useEffect } from "react";
import { get } from "../helpers/fetchData";
export const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const obtener = async () => {
    const { data, isLoading } = await get(endPoint);
    setData(data), setIsLoading(isLoading);
  };

  useEffect(() => {
    obtener();

    //no se usa async await en el useEffect, es syncronic o manejamos una promesa o una función por fuera
    //async
    //   get(endPoint)
    //   .then(res=>{
    //     setData(res.data),
    //     setIsLoading(res.isLoading)
    //   })
    return () => {
      setData([]);
      setIsLoading(false);
    };
  }, [endPoint]);
  return {
    data,
    isLoading,
  };
};
