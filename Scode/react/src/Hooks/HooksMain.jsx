import { useCounter } from "./hook/useCounter";
export const HooksApp = () => {
  

  const {contador, incrementar, resetear, decrementar}=useCounter(0);
  return (
    <div>
      <h3>HooksApp</h3>
    
      <p>CONTADOR: {contador}</p>
      <button className="btn btn-primary" onClick={()=>{decrementar()}}>-</button>
      <button className="btn btn-danger" onClick={()=>{resetear()}}>reset</button>
      <button className="btn btn-primary" onClick={()=>{incrementar()}}>+</button>
    </div>
  );
};
