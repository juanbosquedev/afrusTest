import { useForm } from "./Forms/customHook/useForm";
import { useReducer } from "react";
const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Explicar Reducers",
    finalizada: false,
  },
];

// const agregarTarea = {
//   type: "[TAREA] Agregar Tarea", // SUELE SER UN STRING
//   payload: nuevaTarea,
// };

// const editarTarea = {
//   type: "[TAREA] Editarar Tarea",
//   payload: nuevaTarea,
// };
// const eliminarTarea = {
//   type: "[TAREA] Eliminar Tarea",
//   payload: nuevaTarea,
// };
// const borrarTarea = {
//   type: "[TAREA] Borrar Tarea",
//   payload: nuevaTarea,
// };

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREA] Agregar Tarea":
      return [...state, action.payload];

    case "[TAREA] Editar Tarea":
    //   console.log("Editar");
    //   return [...state, action.payload]

    case "[TAREA] Eliminar Tarea":
    //   console.log('Eliminar')

    // return [...state, action.payload]

    case "[TAREA] Borrar Tarea":
      //   console.log('Borrar')

      // return [...state, action.payload]

      return [];

    default:
      break;
  }
  return state;
  //   if (action.type === "[TAREA] Agregar Tarea") {
  //     return [...state, action.payload];
  //   }otra forma de hacerlo es con if
};

export const TaskList = () => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);
  const { tarea, forms, onInputChange } = useForm({ tarea: "" });

  const agregarTarea = (event) => {
    event.preventDefault();
    if (forms.tarea === "") return;
    const tarea = {
      id: new Date().getTime(),
      tarea: forms.tarea,
      finalizada: false,
    };
    const action = {
      type: "[TAREA] Agregar Tarea",
      payload: tarea,
    };

    dispatch(action);
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

      <hr />
      <ul>
        {state.map((item) => {
          return (
          <li key={item.id} className="list-group">
            {item.tarea}
            {item.finalizada? '✅':'❌'}
            </li>
       ) })}
      </ul>
    </>
  );
};
