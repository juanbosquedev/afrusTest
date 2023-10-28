import propTypes from "prop-types";
import { useFetchData } from "./customHook/useFetchData";

export const ApiHandler = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);
  return (
    <div>
      {isLoading ? (
        <p>cargando..</p>
      ) : endPoint === "users" ? (
        data.map((us) => <li key={us.id}>{us.firstname}</li>)
      ) : (
        data.map((us) => <li key={us.id}>{us.comment}</li>)
      )}
    </div>
  );
};

ApiHandler.propTypes = {
  endPoint: propTypes.string.isRequired,
};
