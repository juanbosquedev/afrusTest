type ListProps<T>={
    items:T[]//generic type
    onClick:(value:T)=>void
}
export const List =<T extends {}> ({items,onClick}:ListProps<T>) => {
  return (
    <div><h1>List </h1>
    {items.map((item,index)=>{
        return(
            <div key={index} onClick={()=>onClick(item)}></div>
        )
    })}</div>
  )
}
