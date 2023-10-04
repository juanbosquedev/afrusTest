import SearchBar from "../../conteinerComponentes/searchBar/searchBar";
import  "./nav.module.css"
export default function Nav() {
  return (
    <>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Catálogo</a>
        <a href="#">Contacto</a>

      <SearchBar />
      <div>yo voy a ser un logo</div>
      </nav>
    </>
  );
}
