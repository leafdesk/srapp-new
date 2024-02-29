import Spinner from '@/components/base/spinner'
import VideoCard from '@/components/base/video-card'

type InfiniteScrollTestBarProps = {
  mutate: () => void
  size: number
  setSize: (size: number) => void
  contents: any[] // Replace `any` with the specific type of your content
  isLoadingMore?: boolean
  isReachingEnd?: boolean
  isRefreshing?: boolean
}

const InfiniteScrollTestBar = ({
  mutate,
  size,
  setSize,
  contents,
  isLoadingMore,
  isReachingEnd,
  isRefreshing,
}: InfiniteScrollTestBarProps) => {
  return (
    <>
      <div className="w-full h-8 fixed flex justify-between bg-gray-300 z-50">
        <button>
          페이지: {size} / 항목: {isLoadingMore ? '...' : contents.length}개
        </button>

        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
          className="bg-blue-600 text-white"
        >
          {isLoadingMore
            ? 'loading...'
            : isReachingEnd
            ? 'no more issues'
            : 'load more'}
        </button>
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? 'refreshing' : 'refresh'}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
      </div>

      {/* blank */}
      <div className="block h-8" />
    </>
  )
}

type InfiniteScrollProps = {
  mutate: () => void
  size: number
  setSize: (size: number) => void
  contents: any[] // Replace `any` with the specific type of your content
  isLoadingMore?: boolean
  isEmpty?: boolean
  isReachingEnd?: boolean
  isRefreshing?: boolean
  isFetching: boolean
  lastContentElementRef:
    | ((node: HTMLElement | null) => void)
    | React.RefObject<HTMLDivElement>
  testMode?: boolean // 테스트를 위해 추가.
}

const InfiniteScroll = ({
  mutate,
  size,
  setSize,
  contents,
  isLoadingMore,
  isEmpty,
  isReachingEnd,
  isRefreshing,
  isFetching,
  lastContentElementRef,
  testMode = false, // 테스트를 위해 추가.
}: InfiniteScrollProps) => {
  return (
    <>
      {testMode && (
        <InfiniteScrollTestBar
          mutate={mutate}
          size={size}
          setSize={setSize}
          contents={contents}
          isLoadingMore={isLoadingMore}
          isReachingEnd={isReachingEnd}
          isRefreshing={isRefreshing}
        />
      )}

      {isEmpty ? <p>콘텐츠를 찾지 못했습니다.</p> : null}

      {contents.map((content, index) => {
        if (contents.length === index + 1) {
          return (
            <div key={content.id} ref={lastContentElementRef}>
              <VideoCard content={content} />
            </div>
          )
        } else {
          return (
            <div key={content.id}>
              <VideoCard content={content} />
            </div>
          )
        }
      })}

      {isFetching && (
        <div className="w-full flex justify-center pb-4">
          <Spinner size={8} />
        </div>
      )}
    </>
  )
}

export default InfiniteScroll
