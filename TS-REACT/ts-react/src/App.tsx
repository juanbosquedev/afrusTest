
import './App.css'
import { Greeting } from './components/Greeting';
import { Person } from './components/Person';


function App() {

const Persons={
  name:"Juan",
  lastname:"Bosque"
}
  return (
    <>
    <Person name={Persons.name} lastname={Persons.lastname}></Person>
     <Greeting name="Juan" years={38} isLogged={false}></Greeting>
    </>
  )
}

export default App
