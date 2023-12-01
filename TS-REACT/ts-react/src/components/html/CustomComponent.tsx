import { Greeting } from "../Greeting"

export const CustomComponent = (props:React.ComponentProps<typeof Greeting>) => { //esto es por si queremos utilizar el mismo typado de otro componente
  return (
    <div>CustomComponent{props.name}</div>//así props. vemos las propiedades del componente greeting
  )
}
