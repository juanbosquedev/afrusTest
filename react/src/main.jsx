import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import { AppRoute } from "./AppRoute/AppRoute";
import { BrowserRouter } from "react-router-dom";
import { Ecommerce } from "./Ecommerce/Ecommerce";

// import { MovieApp } from "./MovieApp/MovieApp";
// import {WheatherApp} from './wheatherApp/WheatherApp'
// import './wheatherApp/styles.module.css'
// import {Component }from "./formMain";
// import { Fetch } from "./fetching/fetchMain";

// import "./style.css";
// import { HooksApp } from "./Hooks/HooksMain";
// import { FormsMain } from "./Forms/FormsMain";
// import { HeavyCalcs } from "./HeavyCalcsUseMemo/HeavyCalcs";
// import { FetchCustomHook } from "./fetchCustomHook/fetchCustomHook";
// import { TaskList } from "./TaskList";
//al userProvider se puede colocar en cualquier lado, ej debajo de StrictMode, debajo de BrowserRouter etc
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
    <Ecommerce/>
    {/* <MovieApp/> */}
    {/* <WheatherApp/> */}
      {/* <AppRoute />       provee información que la familia de componentes necesita que tenga hacia abajo */}

      {/* <TaskList/> */}
      {/* <HeavyCalcs/> */}
      {/* <FetchCustomHook/> */}
      {/* <FormsMain/> */}
      {/* <HooksApp/> */}
      {/* <Component /> */}
      {/* <Fetch /> */}
    </BrowserRouter>
  </React.StrictMode>
);
