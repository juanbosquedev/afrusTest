import React, { useState } from "react";
import { Form } from "./form";
export const Component = () => {
  const list = [
    { name: "REact1", vist: true },
    { name: "REact2", vist: true },
    { name: "REact3", vist: true },
    { name: "REact4", vist: false },
  ];
  const [agregar, setAgregar] = useState(list);
  const agregarts = (valor) => {
    let val = valor.trim()
    if (val< 1) return;
    const envio = {
      name: val,
      visto: false,
    };
    setAgregar([...agregar, envio]);
  };

  const show = agregar.map((it) => {
    return <li key={React.useId}>{it.name}</li>;
  });
  return (
    <div>
      component
      <h6>{show}</h6>
      <Form agregator={agregarts} />{" "}
      {/* <Form agregator={setAgregar}  /> esta forma de pasar parte del componente al hijo para que maneje la modificación no es buena practca, es mejor pasarle una función para ese fin que tome
      el valor del hijo*/}
    </div>
  );
};
