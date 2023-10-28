import SearchBar from "../../conteinerComponentes/searchBar/searchBar";
import Style from "./nav.module.css";
import img from "../../assets/logo.png";
export default function Nav() {
  return (
    <div className={Style.containar_nav}>
      <img src={img} className={Style.logo} alt="logo" />
      <SearchBar />
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Catálogo</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  );
}
