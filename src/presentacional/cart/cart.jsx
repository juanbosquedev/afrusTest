
import PropTypes from 'prop-types'; // Importa PropTypes
import Style from './cart.module.css';

function Cart({ cart, totalItems }) {
  return (
    <div className={Style.cart}>
      <h2>Carrito de Compras</h2>
      <p>Cantidad de Libros en el Carrito: {totalItems}</p>
      <ul className={Style.cart_conteiner}>
        {cart && cart.map((book) => (
          <div key={book.id} className={Style.cart_card}>
          <h6 >{book.title}</h6>
          <img src={book.img}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

// Agrega PropTypes para validar las props
Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object), // cart debe ser un array de objetos
  totalItems: PropTypes.number, // totalItems debe ser un número
};

export default Cart;
