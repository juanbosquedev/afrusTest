import React from "react";
import { Tarea } from "./Tarea";
type Props = {
  listaTareas: string[];
  borrarTareas: (index: number) => void;
};
const ListaTareas = ({ listaTareas, borrarTareas }: Props) => {
  return (
    <div className="taskList">
      {listaTareas.map((task, index) => {return (
        <Tarea
          key={index}
          task={task}
          borrarTareas={() => borrarTareas(index)}
        ></Tarea>
      )})}
    </div>
  );
};

export default ListaTareas;
