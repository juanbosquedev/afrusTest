import { useContext } from "react";
import { Usuariocontext } from "./context/Usuariocontext";

//para consumir la información de usuario, utilizamos useContext
export const Home = () => {
  const { usuario } = useContext(Usuariocontext); //hay que pasarle puntualmente el contexto que queremos consumir, puede haber muchos contextos
  //useContext nos sirve para consumir información que nos provee una capa externa, se puede consumir en cualquie ruta de routes
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre:</th>
          <th scope="col">Technología</th>
          <th scope="col">Mail</th>
          <th scope="col">Redes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{usuario.name}</th>
          <td>{usuario.tech}</td>
          <td>{usuario.mail}</td>
          <td>{usuario.redes}</td>
        </tr>
      </tbody>
    </table>
  );
};
