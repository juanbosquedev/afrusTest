import { NavBar } from "./components/navBar";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { UsuarioProvider } from "../context/UsuarioProvider";

export const AppRoute = () => {
  return (
    <UsuarioProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        {/*por si le ponemos mal la ruta */}
      </Routes>
      <hr />
      </UsuarioProvider>
  );
};
