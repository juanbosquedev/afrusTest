
//omit keywords remove the specify property
type InputProps=React.ComponentProps<'input'>
export const Input = (props:InputProps) => {
  return (
<input {...props}></input>  )//para envolver html elements
}
