import { useReducer } from "react";
const initialState = { count: 0 };
interface StateProps {
  count: number;
}
type CounterProps = {
  type: "increment" | "decrement"; // para mejorar el tipado podemos pasar templates literales en vez de string, por que si pongo "lo que quiero", va a ser un string y no va a haber error
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type actionProps = ResetAction | CounterProps;
function reducer(state: StateProps, action: actionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState); //el tipo de dispatch es inferido por ts, si le haces hover te muestra el tipo (React.Dispatch<actionProps>)
  return (
    <>
      <div>Counter: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })} />
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })} />
      <button onClick={() => dispatch({ type: "reset" })} />
    </>
  );
};
