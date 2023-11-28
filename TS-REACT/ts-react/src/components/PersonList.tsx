type listProps = {
  list: {
    first: string;
    last: string;
  }[]; //indicamos que es un array de objetos
};
export const PersonList = (props: listProps) => {
  return (
    <div>
      PersonList
      {props.list.map((el) => {
        return (
          <>
            <h1>{el.first}</h1>
            <h1>{el.last}</h1>
          </>
        );
      })}
    </div>
  );
};
