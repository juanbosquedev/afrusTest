import {useState} from 'react'
export const Loggin = () => {
    const [isLoggin,setisLoggin]=useState(false)//ts infiere que el valor inicial es un boolean, entonces si en vez de pasar un valor boolean pasamos un 0 que js lo toma como falsa, ts arroja error
    //por que no es un boolean, es un number
    //con useState mayormente no hay que typar por que ts infiere el valor
  const handleLoggin = () => {setisLoggin(true)};
  const handleLoggOut = () => {setisLoggin(false)};

  return (
    <>
      <button onClick={handleLoggin}>Login</button>
      <button onClick={handleLoggOut}>Login</button>

      <div>User is {isLoggin? 'user Logg in':'userLoggout'}</div>
    </>
  );
};
