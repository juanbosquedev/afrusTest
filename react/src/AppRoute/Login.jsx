import {  useContext } from "react";
import { useForm } from "../Forms/customHook/useForm";

import { Usuariocontext } from "../context/Usuariocontext";

export const Login = () => {
    const initialForm ={
        name:'',
        tech:'',
        mail:'',
        redes:'',

    }

    const { forms,  name, tech, mail, redes, onInputChange} = useForm(initialForm);
    const {setUsuario} = useContext(Usuariocontext)
    const onSubmit = (e)=>{
        e.preventDefault(),
        setUsuario(forms)
    }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="name"
          value={name}
          onChange={onInputChange}
        >
        </input>
      </div>
    
      <div className="mb-3">
        <label htmlFor="mail" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="mail"
          name="mail"
          placeholder="name"
          value={mail}
          onChange={onInputChange}
        >
        </input>
      </div>
      <div className="mb-3">
        <label htmlFor="tech" className="form-label">
          Technología
        </label>
        <input
          type="text"
          className="form-control"
          id="tech"
          name="tech"
          placeholder="tech"
          value={tech}
          onChange={onInputChange}
        >
        </input>
      </div>
      <div className="mb-3">
        <label htmlFor="Redes" className="form-label">
          Redes
        </label>
        <input
          type="text"
          className="form-control"
          id="redes"
          name="redes"
          placeholder="nets"
          value={redes}
          onChange={onInputChange}
        >
        </input>
      </div>
      <button  type="submit" className="btn btn-primary">Registrar</button>

    </form>
  );
};
