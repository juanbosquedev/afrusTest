type OscarProps={
    children:React.ReactNode, // type of react component; es un tipo proveido por React types package 
}
//optional tye, a veeces pasa que un component prop no tiene que ser pasado, y si no pasamos algo ts lanza error
// para que no lance error agregamos una question mark al final de la key para indicar que es opcional name?:string (por ej)
export const Oscar = (props:OscarProps) => {
  return (
    <div></div>
  )
}
