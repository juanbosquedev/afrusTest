type TextProps<E extends React.ElementType>={
    size?: 'sm'|'md'|'lg'
    color?:'primary'|'secondary'
    children: React.ReactNode
    as?:E // necesitamos un generic Element type
  }
  type TextPropsOwn<E extends React.ElementType> = TextProps<E> & Omit<React.ComponentProps<E>, keyof TextProps<E>>
export const Text =<E extends React.ElementType='div' >({size,color,children,as}:TextPropsOwn<E>) => {
 const Component = as || 'div'
  return (
    <Component className={ `class-with-${color}`}>{children}</Component>
  )
}
