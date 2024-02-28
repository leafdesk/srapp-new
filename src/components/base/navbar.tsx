'use client'

import useScrollDetector from '@/hooks/use-scroll-detector'

type NavbarProps = {
  left1?: React.ReactNode
  left2?: string
  right1?: React.ReactNode
  right2?: React.ReactNode
  flexibleHeight?: boolean
}

/**
 * 앱 상단 바.
 */
const Navbar = ({
  left1,
  left2,
  right1,
  right2,
  flexibleHeight = false,
}: NavbarProps) => {
  const { isSmall } = useScrollDetector()

  const height = flexibleHeight && isSmall ? 'h-10' : 'h-16'
  const shadow =
    flexibleHeight && isSmall ? 'shadow-[0_4px_20px_0_rgba(0,0,0,0.24)]' : ''

  return (
    <>
      <section className="fixed w-full z-50 bg-white">
        <div
          className={`flex items-center justify-between px-1 overflow-y-hidden transition-all duration-300 ${height} ${shadow}`}
        >
          <div className="flex items-center">
            {left1 ? <>{left1}</> : null}
            {left2 ? (
              <span className="pl-1 font-medium text-lg">{left2}</span>
            ) : null}
          </div>
          <div className="flex">
            {right1 ? <>{right1}</> : null}
            {right2 ? <>{right2}</> : null}
          </div>
        </div>
      </section>

      {/* blank */}
      <div className="h-16" />
    </>
  )
}

export default Navbar
