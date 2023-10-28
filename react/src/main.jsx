import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { AppRoute } from "./AppRoute/AppRoute";
import { BrowserRouter } from "react-router-dom";

// import {Component }from "./formMain";
// import { Fetch } from "./fetching/fetchMain";

// import "./style.css";
// import { HooksApp } from "./Hooks/HooksMain";
// import { FormsMain } from "./Forms/FormsMain";
// import { HeavyCalcs } from "./HeavyCalcsUseMemo/HeavyCalcs";
// import { FetchCustomHook } from "./fetchCustomHook/fetchCustomHook";
// import { TaskList } from "./TaskList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRoute/>
    </BrowserRouter>
    {/* <TaskList/> */}
    {/* <HeavyCalcs/> */}
    {/* <FetchCustomHook/> */}
    {/* <FormsMain/> */}
    {/* <HooksApp/> */}
    {/* <Component /> */}
    {/* <Fetch /> */}
  </React.StrictMode>
);
