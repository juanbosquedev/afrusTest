import { useState } from "react";
import { ApiHandler } from "./apiHandler";

export const Fetch = () => {
  const [boolean, setBoolean] = useState(true);
  const [endPoint, setEndPoint] = useState("");

  const handlerEndPoint = () => {
    setBoolean(!boolean);
    boolean ? setEndPoint("users") : setEndPoint("comments");
  };
  //   useEffect(()=>{
  //     get()
  //   },[]) solo tiene sentido usar useEffect si tenemos alguna dependencia de datos que cambie
  //   const handlerFetch = () => {
  //     return get();
  //   };
  return (
    <div>
      lista de usuarios
      <ApiHandler endPoint={endPoint} />
      <button onClick={handlerEndPoint}>llamado api de: {endPoint}</button>
    </div>
  );
};
