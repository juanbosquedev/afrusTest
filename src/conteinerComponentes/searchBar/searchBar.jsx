import Style from "./searchBar.module.css"
export default function SearchBar() {

  
  return (
  
    <form className={Style.search_form}>
      <input
        id="input"
        type="text"
        placeholder="Book..."
        value=""
      
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}

