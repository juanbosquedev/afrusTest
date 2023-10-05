import { useState} from "react";
import getInfo from "./functions/getInfo.js";

import Cart from "../../presentacional/cart/cart.jsx";
import Discunt from "../discunt/disctun.jsx";
import BooksCard from "../../presentacional/booksCard/booksCard.jsx";
import Nav from "../../presentacional/nav/nav.jsx";

import Style from "./home.module.css";

function Home() {
  //validaación de formulario, filtado, animaciones, paginado, favoritos

  const { VITE_API_URL } = import.meta.env;

  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const fetchBooks = async () => {
    try {
      const response = await fetch(VITE_API_URL);
      const data = await response.json();
      if (data.items) {
        //función para tomar solamente las propiedades que queremos
        const filterInfo = data.items.map((el) => getInfo(el, console.log(el)));
        return setBooks(filterInfo);
      }
    } catch (error) {
      alert("Error al obtener libros", error);
    }
  };
 
    if (books.length === 0) {
      fetchBooks();
    }

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    setTotalItems(updatedCart.length);
  };

  return (
    <>
      <body>
        <header>
          <h1>Bienvenido a Mi Tienda de Libros</h1>
        </header>
        <section>
          <Nav />
        </section>
        <div className="App">
          <div className={Style.home_accesories}>

          <Discunt />
          <Cart cart={cart} totalItems={totalItems} />
          </div>
          <BooksCard books={books}  addToCart={addToCart} />
        </div>
      </body>
    </>
  );
}

export default Home;
