interface containerProps{
    styles:React.CSSProperties
}
export const Container = (props:containerProps) => {
  return (
    <div style={props.styles}>text content</div>
  )
}
