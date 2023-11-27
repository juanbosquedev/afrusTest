interface PersonProps {
    name:string,
    lastname:string
}

export const Person = (props:PersonProps) => {
  return (
    <div>Person{props.name} {props.lastname}</div>
  )
}
