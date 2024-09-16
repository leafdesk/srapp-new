import { ReactNode } from 'react'

type TopBarProps = {
  left: ReactNode
  center: ReactNode
  right: ReactNode
}

const TopBar = ({ left, center, right }: TopBarProps) => {
  return (
    <>
      <div className="fixed w-full z-50 bg-white">
        <div className="flex items-center justify-between h-[60px] px-1">
          {left}
          {center}
          {right}
        </div>
      </div>

      {/* blank */}
      <div className="h-[60px]" />
    </>
  )
}
export default TopBar
