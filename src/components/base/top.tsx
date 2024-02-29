import { forwardRef } from 'react'

type TopProps = {
  text1?: React.ReactNode
  text2?: string
  bottom?: number
}

const Top = forwardRef<HTMLDivElement, TopProps>(
  ({ text1, text2, bottom = 7 }, ref) => {
    return (
      <div ref={ref} className="pb-7 px-5 gap-1 flex">
        <h3 className="font-medium text-2xl text-[#222222]">{text1}</h3>
        <span className="font-normal text-base text-[#666666]">{text2}</span>
      </div>
    )
  },
)

export default Top

// <Container ref={ref} bottom={bottom} sides={5} gap={1}>
// TODO: styles/tailwind(deprecated) => inline styles
