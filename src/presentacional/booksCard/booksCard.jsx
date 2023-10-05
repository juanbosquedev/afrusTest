import Style from "./booksCard.module.css";
import PropTypes from "prop-types";

export default function BooksCard({ books, addToCart }) {
  
  return (
    <div className={Style.book_container}>
      {books &&
        books.map((book) => (
          <div key={book.id} >
            <div className={Style.book_card}>
              <img src={book.img} alt={book.title} />
              <div className={Style.book_card_content}>
                <h3>{book.title}</h3>
                <p className={Style.text}>{book.description}</p>
                <button
                  className={Style.book_btn}
                  onClick={() => addToCart(book)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

BooksCard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};
