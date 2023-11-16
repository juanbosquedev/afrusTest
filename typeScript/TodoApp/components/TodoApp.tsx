import { useState } from "react";

import ListaTareas from './ListaTareas'


export const TodoApp = () => {

const[newTask, setNewTask]=useState<string>("")
const[listTask, setListTask]=useState<string[]>([])

  const handleAddTask =()=>{
 if(newTask.trim() === "")return // si esta vacio lo devuelve
  //trim por si deja espacios en los costados para que los borre
  setListTask(tareaAnteriores => [...tareaAnteriores, newTask]);
  setNewTask("");
  }
  const handleDeleteTask =(index:number)=>{
setListTask(prevTasks =>prevTasks.filter((_,i)=> i!== index))//_ indica que el valor task no se va a utilizar
  }
return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="flex">
        <input type="text" value={newTask} 
        onChange={(e)=>setNewTask(e.target.value)} 
        placeholder="Nueva Tarea" ></input>
      <button onClick={handleAddTask}>Agregar Tarea</button>
{newTask}
      </div>
      <ListaTareas listaTareas={listTask} borrarTareas={(index)=>handleDeleteTask(index)}/>
    </div>
  );
};

