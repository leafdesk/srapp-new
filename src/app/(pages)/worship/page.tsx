// pages/worship/page.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import TopBar from '@/components/base/top-bar'
import Spinner from '@/components/base/spinner'
import { SermonType, useFetchVideos } from './use-fetch-videos'
import VideoList from './video-list'
import MainVideo from './main-video'

function isSermonType(value: any): value is SermonType {
  return value === 'def' || value === 'sun' || value === 'wed'
}

const WorshipContent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [sermon, setSermon] = useState<SermonType>('def')

  useEffect(() => {
    const queryKind = searchParams.get('kind')
    if (isSermonType(queryKind)) {
      setSermon(queryKind)
    } else {
      setSermon('def')
    }
  }, [searchParams])

  const { mainData, listData, isLoading } = useFetchVideos(sermon)

  const sermonKinds: SermonType[] = ['def', 'sun', 'wed']

  return (
    <div className="bg-[#f8f8f8]">
      <TopBar
        left={<div className="h-12 w-12" />}
        center={<h3 className="text-base font-medium text-[#222222]">예배</h3>}
        right={<div className="h-12 w-12" />}
      />

      {/* 탭 메뉴 */}
      <div className="">
        <ul className="flex h-16 items-center justify-center">
          {sermonKinds.map((kind) => (
            <li
              key={kind}
              onClick={() => setSermon(kind)}
              className={`${sermon === kind ? 'on' : ''} px-2.5 cursor-pointer`}
            >
              {kind === 'def'
                ? '주일설교'
                : kind === 'sun'
                ? '1,3부 예배'
                : '수요예배'}
            </li>
          ))}
        </ul>
      </div>

      {/* 로딩 스피너 또는 콘텐츠 */}
      {isLoading ? (
        <div className="w-full flex justify-center pb-10">
          <Spinner size={8} />
        </div>
      ) : (
        <>
          {/* 메인 비디오 */}
          {mainData && <MainVideo mainData={mainData} sermon={sermon} />}

          {/* 비디오 리스트 */}
          <VideoList listData={listData} sermon={sermon} />
        </>
      )}
    </div>
  )
}

// Suspense로 WorshipContent 감싸기
const WorshipPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorshipContent />
    </Suspense>
  )
}

export default WorshipPage
