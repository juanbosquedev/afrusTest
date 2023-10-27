
import React from "react"
export const Increment = React.memo(({increment}) => {

    //increment es una función y cada vez que se ejecuta se redibuja el componente, es decir se redibuja el botton, lo cual no tiene sentido
    //lo más práctico es guardar la función. con useCallback memoria la función y no renderiza
  return (
    <div>Increment

        <button onClick={()=>increment(10)}>+ 1</button> {/*le pasamos parametros al padre desde el hijo*/} 
    </div>
  )
}
)