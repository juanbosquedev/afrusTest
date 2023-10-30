//componente que provee a los hijos, recibe a través de las props children
//vamos a recibir a los childrens y con el provider vamos a proveer a todos los hijos que se van a desplegar por dentro de alguna información
import { Usuariocontext } from "./Usuariocontext"
import { useState } from "react"


export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario]=useState({})
    return (
     
<Usuariocontext.Provider value={{usuario, setUsuario}}> {/* pasamos un objeto, y con par clave valor, podemos agregar propiedades, pasamos usuario por que es igual la propiedad que el argumento,
 pero si fuese otro el caso esría usuario: lo que fuere; ahora todos los childrens van a tener disponible el usuario, en vez de pasar usuario de padre a hijo, de hijo a nieto etc, 
 aqui proveemos todo hacia abajo
 set usuario no se pasa de esta forma, se pasa con validaciones para no darle libertad a los hijos de poner cualquier cosa*/}
    {children}
</Usuariocontext.Provider> )
}