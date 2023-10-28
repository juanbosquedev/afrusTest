import { useState } from "react";
import propTypes from "prop-types"; 

export const Form = ({agregator}) => {
  const [inptValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
};
const handleSubmit = (e)=>{
    // const envio ={
    //     name:inptValue,
    //     visto:false
    // };
    // agregator(Oldarray=>[...Oldarray, envio]); está logica es mejor que la maneje el padre que el hijo pase el dato nomas
    e.preventDefault()
     agregator(inptValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="elements"
        value={inptValue}
        onChange={onInputChange}
      ></input>
     <p> {inptValue}</p>
    </form>
  );
};


Form.propTypes={
    agregator: propTypes.func.isRequired,
}