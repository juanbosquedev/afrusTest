type ButtonsProps = {
  variant: "primary" | "secondary";
  children:string
} & Omit<React.ComponentProps<'button'>,'children'>
export const CustomButton = ({ variant, children, ...rest }: ButtonsProps) => {
  return <button className={`class-with-${variant}`} {...rest}>{children}</button>;
};
