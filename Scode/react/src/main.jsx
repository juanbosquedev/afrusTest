import React from "react";
import ReactDOM from "react-dom/client";

// import {Component }from "./formMain";
// import { Fetch } from "./fetching/fetchMain";

// import "./style.css";
import "./index.css"
// import { HooksApp } from "./Hooks/HooksMain";
// import { FormsMain } from "./Forms/FormsMain";
import { FetchCustomHook } from "./fetchCustomHook/fetchCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FetchCustomHook/>
    {/* <FormsMain/> */}
    {/* <HooksApp/> */}
    {/* <Component /> */}
    {/* <Fetch /> */}
  </React.StrictMode>
);
