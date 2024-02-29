type ContainerProps = {
  children: React.ReactNode
  top?: number | string
  bottom?: number | string
  sides?: number | string
  gap?: number | string
  className?: string
  row?: boolean
}

const Container = ({
  children,
  top,
  bottom,
  sides,
  gap,
  className,
  row,
}: ContainerProps) => {
  return (
    <div
      className={`pt-${typeof top === 'number' ? top : '[' + top + ']'}
      pb-${typeof bottom === 'number' ? bottom : '[' + bottom + ']'}
      px-${typeof sides === 'number' ? sides : '[' + sides + ']'}
      gap-${typeof gap === 'number' ? gap : '[' + gap + ']'}
      flex ${row ? '' : 'flex-col'} ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
