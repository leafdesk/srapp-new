'use client'

import { useRouter } from 'next/navigation'

const STRING_OPACITY = 'active:opacity-50 '
const STRING_SCALE =
  'transform transition-transform duration-200 ease-in-out active:scale-[97%] active:inset-0 '

export const DEFAULT_ANIMATION = 0
export const OPACITY_ONLY = 1

type ButtonProps = {
  href?: string
  onClick?: () => void // onClick 이벤트 핸들러 타입 정의
  children?: React.ReactNode // React 컴포넌트의 자식 요소들
  className?: string
  option?: number
}

/**
 * 버튼.
 */
const Button = ({
  href,
  onClick,
  children,
  className,
  option = DEFAULT_ANIMATION,
}: ButtonProps) => {
  const router = useRouter()

  const animation =
    option === DEFAULT_ANIMATION
      ? STRING_OPACITY + STRING_SCALE
      : option === OPACITY_ONLY
      ? STRING_OPACITY
      : ''

  return (
    <div
      className={`${animation} flex items-center ${className}`}
      onClick={() => {
        href && router.push(href)
        onClick && onClick()
      }}
    >
      {children}
    </div>
  )
}

export default Button
