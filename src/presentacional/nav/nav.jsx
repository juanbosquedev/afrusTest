import SearchBar from "../../conteinerComponentes/searchBar/searchBar";
import  Style from "./nav.module.css"
import img from "../../assets/logo.png"
export default function Nav() {
  return (
    <div className={Style.containar_nav}>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Catálogo</a>
        <a href="#">Contacto</a>
      </nav>
      <div>
      <SearchBar />
        </div>
      <img src={img} alt="logo"/>
    </div>
  );
}
