import { useEffect, useState } from 'react'

const useScrollDetector = (threshold = 60, dragThreshold = 5) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let isDragging = false // 드래그 여부를 판단하는 상태.

    // 페이지 최하단 여부를 확인
    const isBottom = () => {
      return (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      )
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingDown = lastScrollY < currentScrollY
      const draggedEnough =
        Math.abs(currentScrollY - lastScrollY) > dragThreshold // 충분한 드래그 발생 여부
      const atBottom = isBottom() // 페이지 최하단 여부

      if (draggedEnough) {
        isDragging = true

        if (!atBottom || (atBottom && !scrollingDown)) {
          // 페이지 최하단에서의 반동이 아니면 상태 변경
          setIsScrollingDown(scrollingDown)

          if (scrollingDown && currentScrollY >= threshold) {
            setIsSmall(true)
          } else if (!scrollingDown && isDragging) {
            setIsSmall(false)
          }
        }
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold, dragThreshold])

  return {
    isScrollingDown,
    isSmall,
  }
}

export default useScrollDetector
