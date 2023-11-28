import { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}
export const User = () => {
//   const [user, setUser] = useState<AuthUser | null>(null); //podemos inicializar con null, pero previo le tenemos que decir<> que puede tener varlo null o AuthUser
//type assertion
const [user, setUser] = useState<AuthUser >({} as AuthUser); //podemos inicializar con null, pero previo le tenemos que decir<> que puede tener varlo null o AuthUser
//con esta forma podemos acceder al email o name, si los hay, sin name?, email?
  //le estamos diciendo que el objeto vacio es de tipo AuthUser
const handleLoggin = () => {
    setUser({
      name: "Juan",
      email: "juan_bosque@hotmail.com",
    });
  };
//   const handleLoggOut = () => {
//     setUser();
//   };

  return (
    <>
      <button onClick={handleLoggin}>Login</button>
      {/* <button onClick={handleLoggOut}>Login</button> */}

      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>

    </>
  );
};
