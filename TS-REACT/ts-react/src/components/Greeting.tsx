type GreetingProps = {
  // se recominedo usar type cuando estas utilizando aplicaciones y interfaces cuando estás utilizando librerias
  name: string;
  years?: number;
  isLogged: boolean;
};
// export const Greeting = ({name, years, isLogged}: GreetingProps) => {se pueden desestructurar las propiedads con {}
export const Greeting = (props: GreetingProps) => {
  const {years =0}=props//desesructuramos, y pasamos valor 0 por defecto en caso de no recibir valor
    return (
    <div>
      {props.isLogged ? (
        <>
          <div>Greeting {props.name}</div> {/*si desestructuramos iria {name} no {props.name}*/}
          <div>you already are {props.years} old</div>
        </>
      ) : (
        <h2>"Welcome guest"</h2>
      )}
    </div>
  );
};
