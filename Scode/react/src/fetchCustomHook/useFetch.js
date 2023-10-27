import { useState, useEffect } from "react";

export const useFetchData = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const fetcher = async () => {
    try {
      
      const response = await fetch(url);
      const datas = await response.json();

      setState({
    
        data:datas,
        isLoading: false,
        errors:false,
      });
    } catch (error) {
      setState({
       
        data:null,
        isLoading: false,
        errors: error,
      });
    }
  };
 useEffect(() => {
    if (!url) return;
    fetcher();

 
  }, [url]);
  return {
    ...state
  };
};
