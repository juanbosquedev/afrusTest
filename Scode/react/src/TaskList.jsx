
import { useForm } from "./Forms/customHook/useForm";
const initialState = [
  {
    id: 1,
    tarea: "Explicar Reducers",
    finalizada: false,
  },
];

const nuevaTarea = {
  id: 2,
  tarea: "Explicar useReducer",
  finalizada: false,
};

// const agregarTarea = {
//   actyon: "[TAREA] Agregar Tarea", // SUELE SER UN STRING
//   payload: nuevaTarea,
// };
 

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREA] Agregar Tarea":
        return [...state, action.payload]
    case "[TAREA] Editar Tarea":
        console.log('Editar')
        // return [...state, action.payload]

    case "[TAREA] Eliminar Tarea":
        console.log('Eliminar')

        // return [...state, action.payload]

    case "[TAREA] Borrar Tarea":
        console.log('Borrar')

        // return [...state, action.payload]

      return[]

    default:
      break;
  }
  //   if (action.type === "[TAREA] Agregar Tarea") {
  //     return [...state, action.payload];
  //   }otra forma de hacerlo es con if
  return state;
};



export const TaskList = () => {
    const const [state, dispatch] = useReducer(tareaReducer=initialState)
const {tarea, forms, onInputChange}=useForm({tarea:''})
 
const agregarTarea = (event)=>{
    event.preventDefault();
    console.log(forms)
    // type: "[TAREA] Agregar Tarea";
    // payload: nuevaTarea;
  };
return (
    <>
      <div>TaskList</div>
      <form onSubmit={agregarTarea}>
        <div className="mb-3">
          <label htmlFor="tarea" className="form-label">
            tara
          </label>
          <input
            type="text"
            className="form-control"
            // id="tarea"
            name="tarea"
            placeholder="tarea"
            value={tarea}
            onChange={onInputChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <hr><ul></ul></hr>
    </>
  );
};
