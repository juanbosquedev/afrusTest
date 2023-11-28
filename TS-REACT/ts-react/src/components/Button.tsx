//typado de eventos, sino devuelve nada el evento, pasamos un arrow function que devuelve oun void
//otra variante de typado de evento es cuando necesitamos pasar el Evento en si atraves del handlerClick
//el tipo del evento lo definimos con React type; que es un evento del mouse
interface ButtonProps{
    // handleClick:()=>void,
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number)=>void,

}

export const Button = (props:ButtonProps) => {
  return (
    <div onClick={(event)=>props.handleClick(event,1)}>Button</div>
  )
}
