type HorizontalPosittion='left'|'center'|'right'

type VerticalPosition = 'top'|'center'|'bottom'

type ToastProps ={
    position: Exclude<`${HorizontalPosittion} - ${VerticalPosition}`, 'center-center' >|'center' //exclude para excluir algún tipo de valor, luego con el center del último le indicamos que un center puede ser tipo de valor
} // ts infiere en position todas las posibles combinaciones
export const Toast = ({position}:ToastProps) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
