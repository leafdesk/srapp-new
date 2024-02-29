'use client'

import { useState } from 'react'
import TodayTitle from './today-title'
// import Select from '@/components/base/Select'
// import useSWRInfinite from 'swr/infinite'
// import useSWR from 'swr'
import InfiniteScroll from '@/components/base/infinite-scroll'
import useContentsInfinite from '@/hooks/use-contents-infinite'
import Spinner from '@/components/base/spinner'

const Today = () => {
  // const { data } = useSWR('/api/contents?kind=feed');
  // subKind -> departments 구분.

  const departments = [
    '전체',
    '어린이부',
    '중등부',
    '고등부',
    '대학부',
    '청년부',
    'LSS',
  ]

  const [filter, setFilter] = useState(departments[0])

  const {
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
  } = useContentsInfinite('/api/contents/infinite')

  return (
    <>
      <TodayTitle
        title="성락교회 투데이"
        description="오늘도 성락교회 콘텐츠와 함께하세요!"
      />

      {/* 부서 선택 탭 */}
      {/* <Select.Department departments={departments} setFilter={setFilter} /> */}

      {size === 1 && isValidating ? (
        <div className="w-full flex justify-center pb-10">
          <Spinner size={8} />
        </div>
      ) : (
        <InfiniteScroll
          contents={contents}
          isEmpty={isEmpty}
          isFetching={isFetching}
          lastContentElementRef={lastContentElementRef}
          mutate={mutate}
          size={size}
          setSize={setSize}
          isLoadingMore={isLoadingMore}
          isReachingEnd={isReachingEnd}
          isRefreshing={isRefreshing}
        />
      )}
    </>
  )
}

export default Today
