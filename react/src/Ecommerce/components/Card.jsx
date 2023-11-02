import "./Cards.css";
import PropTypes from "prop-types";
import { useState } from "react";
export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleAumentar, handleDisminuir, handleEliminar}) => {
  const [added, setAdded] = useState(false);
  const clickAgregar = () => {
    handleAgregar();
    setAdded(!added);
  };
  const clickQuitar = () => {
    handleEliminar();
    setAdded(!added);
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  imagen: PropTypes.any.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
  precio: PropTypes.any,
};
