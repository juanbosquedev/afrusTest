import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const ComprasPage = () => {
  const {listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra}=useContext(CartContext)

  const {product} = useContext(ProductContext)
console.log(listaCompras, " soy listas compras en compras")
  const handleAgregar=(compra)=>{agregarCompra(compra)}
  const handleDisminuir=(id)=>{disminuirCantidad(id)}
  const handleAumentar=(id)=>{aumentarCantidad(id)}
  const handleEliminar=(id)=>{eliminarCompra(id)}

  return (
    <>
      <div>Compras</div>
      <hr />
      {product?.map(prod=>{
return (

  <Card 
  key={prod.id} 
  imagen={prod.image} 
  titulo={prod.title} 
  descripcion={prod.description} 
  precio={prod.price} 
  handleAgregar={()=>handleAgregar(prod)} 
  handleEliminar={()=>handleEliminar(prod.id)}
  handleAumentar={()=>handleAumentar(prod.id)}
  handleDisminuir={()=>handleDisminuir(prod.id)}
  />
)
      })}
    </>
  );
};
