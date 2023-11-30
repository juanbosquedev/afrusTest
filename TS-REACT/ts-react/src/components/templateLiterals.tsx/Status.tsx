type StatusProps={
    status: 'loading' | 'success'| 'error'
}
export const Status = (props:StatusProps) => {
  let message
  if(props.status === 'loading'){
    message='loading'
  } else if(props.status === 'success'){
    message= 'Tada fetched successfully!'
  } else if(props.status==='error'){
    message = 'Error fectching data'
  }
    return (
    <div>Status - {message}</div>
  )
}
