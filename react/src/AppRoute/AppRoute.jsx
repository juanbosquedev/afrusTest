import { NavBar } from "./components/navBar"
import { Routes, Route } from "react-router-dom"
export const AppRoute = () => {
  return (
    <>
<NavBar/>
<Routes>
<Route  path='/'></Route>
<Route  path='/contact'></Route>
<Route  path='/about'></Route>
<Route></Route>

</Routes>
    <hr/>
    </>
  )
}
