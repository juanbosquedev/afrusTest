import { useContext } from "react";
import { UserContext } from "./UserContext";
export const User = () => {
  const userContext = useContext(UserContext);

  const handleLoggin = () => {
    userContext?.setUser({
      name: "Juan",
      email: "Bosque",
    });
  };
  const handleLoggOut = () => {
    userContext?.setUser(null);
  };

  return (
    <>
      <button onClick={handleLoggin}>Login</button>
      <button onClick={handleLoggOut}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is{userContext?.user?.email}</div>
    </>
  );
};
