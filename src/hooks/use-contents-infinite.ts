import useSWRInfinite from 'swr/infinite'
import { useCallback, useRef, useState } from 'react'

const PAGE_SIZE = 10
const MAX_ITEMS = 100
const MAX_PAGES = Math.ceil(MAX_ITEMS / PAGE_SIZE)

const useContentsInfinite = (url: string) => {
  const { data, mutate, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (index) => {
        return `${url}?limit=${PAGE_SIZE}&page=${index + 1}`
      },
      (url) => fetch(url).then((res) => res.json()),
    )

  const contents = data ? [].concat(...data) : []
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    data &&
    (data[data.length - 1]?.length < PAGE_SIZE || contents.length >= MAX_ITEMS)
  const isRefreshing = isValidating && data && data.length === size

  const [isFetching, setIsFetching] = useState(false)

  const loadMore = () => {
    if (!isFetching && size < MAX_PAGES) {
      setIsFetching(true)
      setSize(size + 1).then(() => setIsFetching(false))
    }
  }

  const observer = useRef<IntersectionObserver | null>(null)

  const lastContentElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isFetching) {
        return
      }
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          !isFetching &&
          !isValidating &&
          !isReachingEnd
        ) {
          loadMore()
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [isFetching, isValidating, isReachingEnd],
  )

  return {
    data,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading,

    contents,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
    isFetching,

    lastContentElementRef,
  }
}

export default useContentsInfinite
