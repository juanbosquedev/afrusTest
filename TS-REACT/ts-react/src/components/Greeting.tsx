type GreetingProps = {
  // se recominedo usar type cuando estas utilizando aplicaciones y interfaces cuando estás utilizando librerias
  name: string;
  years: number;
  isLogged: boolean;
};
export const Greeting = (props: GreetingProps) => {
  return (
    <div>
      {props.isLogged ? (
        <>
          <div>Greeting {props.name}</div>
          <div>you already are {props.years} old</div>
        </>
      ) : (
        <h2>"Welcome guest"</h2>
      )}
    </div>
  );
};
