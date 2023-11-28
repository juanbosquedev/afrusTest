
import './App.css'
import { Greeting } from './components/Greeting';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';


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
     <Status status='Loading'/>
    <Oscar>
     <Heading>Oscar goest to Leonardo Di Caprio</Heading>

    </Oscar>
    </>
  )
}

export default App
