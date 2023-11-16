import React from "react";

type Props = {
  task: string;
  borrarTareas: () => void;
};

export const Tarea = ({ task, borrarTareas }: Props) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={borrarTareas}>Borrar Tarea</button>
    </div>
  );
};

