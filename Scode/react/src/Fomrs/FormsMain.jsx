import { useState } from "react";


export const FormsMain = () => {
  const [formState, setFormState] = useState({
    user: "Juan Bosque",
    email: "juan_bosque@hotmail.com",
    password: 1234,
  });

  const { user, email, password } = formState;
  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
     [name]:value
    })
  };
  return (
    <div>
      FromsMain
      <p>
        <h4>INGRESÁ TU VALOR</h4>
        <input></input>
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            User
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            placeholder="user"
            value={user}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="e-mail"
            value={email}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={password}
            onChange={onInputChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
