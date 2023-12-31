// import { useContext } from "react";
import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

export const CartProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar Compra":
     
        return [...state, action.payload];
  
      case "[CARRITO] Aumentar Cantidad":
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item.id === action.payload && item.cantidad > 0)
            return { ...item, cantidad: cant };
          return item;
        });
  
      case "[CARRITO] Disminuir Cantidad":
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant };
          return item;
        });
          
      case "[CARRITO] Eliminar Compra":
        return state.filter((compra) => compra.id !== action.payload);
  
      default:
        return state;
    }
  };

  const [ listaCompras, dispatch ] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  console.log(listaCompras, " soy listas compras en cartProvider(reducer");
  return (
    <CartContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
