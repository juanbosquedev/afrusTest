import { useFetchData } from "./useFetch";
export const FetchCustomHook = () => {
  const { data, isLoading, errors } = useFetchData(
    "https://jsonplaceholder.org/users"
  );
  return (
    <>
      <h1>LISTA DE USUARIOAS</h1>
      {isLoading ? (
        <h4>cargando..</h4>
      ) : errors ? (
        <h4>a ocurrido un error: {errors}</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">websit</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => {
                return(
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstname}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>)
              })}
          </tbody>
        </table>
      )}
    </>
  );
};
