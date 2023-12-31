import "./App.css";
import { Button } from "./components/Button";
import { Greeting } from "./components/Greeting";
import { Heading } from "./components/Heading";
import { Input } from "./components/InputEvent";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generic/List";
import { RandomNumber } from "./components/restriccions/RandomNumber";
import { Toast } from "./components/templateLiterals.tsx/Toast";
import { CustomButton } from "./components/Button";
import { Text } from "./components/polymorphic/Text";
// import {InputEvent} from './components/'

function App() {
  const PersonName = {
    first: "Juan",
    last: "Bosque",
  };

  const nameList = [
    {
      first: "whine",
      last: "Rooney",
    },
    {
      first: "Mel",
      last: "Gibson",
    },
    {
      first: "Juan",
      last: "Macri",
    },
  ];
  return (
    <>
      <Person name={PersonName}></Person>
      <Greeting name="Juan" years={38} isLogged={false}></Greeting>
      <PersonList list={nameList}></PersonList>
      <Status status="Loading" />
      <Oscar>
        <Heading>Oscar goest to Leonardo Di Caprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button clicked", event, id)}
      />{" "}
      {/*podemos utilizar el parámetro del evento en el cuerpo de la funcion
       */}
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black" }} />
      {/*si pasamos una propiedad o un valor incorrecto, no css, ts lanza error */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
      <Private isLoggedIn={true} Component={Profile}></Private>
   <List items={['Batman','Superman','Wonder Woman']} onClick={(item)=>console.log(item)}/>
   <List items={[1,2,3]} onClick={(item)=>console.log(item)}/>
    <RandomNumber value={10} isPositive/>
    <Toast position='center - bottom'/>

    <CustomButton variant="primary"></CustomButton>
    <Text as='h1' size="lg">heading</Text>
    <Text as='p' size="md">paragraph</Text>
    <Text as='label' size="sm" color="secondary">label</Text>
   
    </>
  );
}

export default App;
//estudiaro no me quedo claro, pasar un componente como prop, generic props
//restricning props, template literals, and exclude utility types, Omit, extract props, and polimorphic component