
import './App.css'
import { Greeting } from './components/Greeting';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';


function App() {

const PersonName={
  first:"Juan",
  last:"Bosque"
}

const nameList=[{
  first:"whine",
  last:"Rooney"
}, {
  first:"Mel",
  last:"Gibson"
},{
  first:"Juan",
  last:"Macri"
}]
  return (
    <>
    <Person name={PersonName}></Person>
     <Greeting name="Juan" years={38} isLogged={false}></Greeting>
     <PersonList list={nameList}></PersonList>
    </>
  )
}

export default App
