import Style from "./booksCard.module.css"

export default function booksCard ({books, addToCart}){
    return (
        <div className={Style.container}>
        {books &&
          books.map((book) => (
            <div
              key={book.id}
              title={book.description}
              className={Style.book}
            >
              <img src={book.img} alt={book.title} />
              <h2>{book.title}</h2>
              <p></p>
              <button onClick={() => addToCart(book)}>
                Agregar al carrito
              </button>
            </div>
          ))}
      </div>

    )
}