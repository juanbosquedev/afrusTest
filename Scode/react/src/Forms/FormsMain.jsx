import { useForm } from "./customHook/useForm";
export const FormsMain = () => {
  const initialForm = {
    user: "",
    email: "",
    password: "",
  };

  const { forms, onInputChange, onSubmit } = useForm(initialForm);
  const { user, email, password } = forms;


  return (
    <div>
      FormsMain
     
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            User
          </label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
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
            name="email"
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
            name="password"
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
