import { RefObject, useEffect } from 'react'

const useHeaderTitle = (
  ref: RefObject<HTMLElement>,
  setIsHeaderTitleVisible: (isVisible: boolean) => void,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsHeaderTitleVisible(!entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '-90px 0px 0px 0px',
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, setIsHeaderTitleVisible])
}

export default useHeaderTitle
