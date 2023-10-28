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
  console.log(state);
  switch (action.type) {
    case "[TAREA] Agregar Tarea":
      return [...state, action.payload];

    case "[TAREA] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        }
        return tarea;
      });
    case "[TAREA] Borrar Tarea":
      return state.filter((tarea) => tarea.id !== action.payload);

    case "[TAREA] Resetear Tarea":
      return [];

    //   console.log('Borrar')

    // return [...state, action.payload]

    // return [];

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

  const finalizarTarea = ({ id }) => {
    const action = {
      type: "[TAREA] Finalizar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const borrarTarea = ({ id }) => {
    const action = {
      type: "[TAREA] Borrar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const resetTareas = () => {
    const action = {
      type: "[TAREA] Resetear Tarea",
      payload:''
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
        <button type='button' onClick={resetTareas} className="btn btn-danger">{/*el boton sino le ponemos type=button, por defecto es submit y presiona al formulzario */}
          Reset
        </button>
      </form>

      <hr />
      <ul className="list-group">
        {state.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{item.tarea}</span>
              <span>
                <input
                  type="checkbox"
                  value={item.finalizada}
                  onChange={() => finalizarTarea(item)}
                />
                {item.finalizada ? "✅" : "⛔"}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    borrarTarea(item);
                  }}
                >
                  {"🗑"}
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
