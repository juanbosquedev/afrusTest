import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const CartPage = () => {
  const {
    listaCompras,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CartContext);
  const calcularTotal=()=>{
    return listaCompras.reduce((total, item)=> total+ item.price * item.cantidad, 0).toFixed(2) //corta en dos decimales
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras?.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-outiline-primary"
                    onClick={() => disminuirCantidad(item.id)}
                  >
                    -
                  </button>
                  <button className="btn btn-primary">{item.cantidad}</button>

                  <button
                    className="btn btn-outiline-primary"
                    onClick={() => aumentarCantidad(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarCompra(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
          <th><b>TOTAL:</b></th>
          <td>${calcularTotal()}</td>
          <td></td>
          <td></td>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={print}>COMPRAR</button>
      </div>
    </>
  );
};
