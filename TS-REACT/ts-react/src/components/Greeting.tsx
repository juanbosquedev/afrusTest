type GreetingProps = {
  name: string;
  years: number;
};
export const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <div>Greeting {props.name}</div>
      <div>you already have {props.years}</div>
    </div>
  );
};
