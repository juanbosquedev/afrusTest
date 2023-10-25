import React from "react";
import ReactDOM from "react-dom/client";

// import {Component }from "./formMain";
// import { Fetch } from "./fetching/fetchMain";

// import "./style.css";
import "./index.css"
// import { HooksApp } from "./Hooks/HooksMain";
import { FormsMain } from "./Fomrs/FormsMain";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormsMain/>
    {/* <HooksApp/> */}
    {/* <Component /> */}
    {/* <Fetch /> */}
  </React.StrictMode>
);
