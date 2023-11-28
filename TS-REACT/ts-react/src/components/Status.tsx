type Statusprops = {
  status: string;
};

export const Status = (props: Statusprops) => {
  let message;
  if (props.status === "Loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "Data fetched succesfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Loading</h2>
      <h2>Data fetched succesfully!</h2>
      <h2>Error fetching data</h2>
    </div>
  );
};
