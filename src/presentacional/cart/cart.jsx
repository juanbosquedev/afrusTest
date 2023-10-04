
import PropTypes from 'prop-types'; // Importa PropTypes
import Style from './cart.module.css';

function Cart({ cart, totalItems }) {
  return (
    <div className={Style.cart}>
      <h2>Carrito de Compras</h2>
      <p>Cantidad de Libros en el Carrito: {totalItems}</p>
      <ul>
        {cart && cart.map((book) => (
          <li key={book.id}>{book.title}</li>
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
