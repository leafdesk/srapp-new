'use client'

import Button from '@/components/base/button'
import { BackIcon } from '@/components/base/icon'
import TopBar from '@/components/base/top-bar'
import { ROUTE_SERMON } from '@/constants/routes'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import useSWR from 'swr'
import WeeklyOrder from './weekly-order'
import WeeklySummary from './weekly-summary'
import YouTube from 'react-youtube'
import Spinner from '@/components/base/spinner'

const WorshipDetailPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // searchParams에서 필요한 쿼리 값 가져오기
  const vdate = searchParams.get('vdate')
  const vid = searchParams.get('vid')
  const vtit = searchParams.get('vtit')
  const kind = searchParams.get('kind') || 'def'

  const { data } = useSWR(vdate ? `/api/weekly/date?pdate=${vdate}` : null)

  // 예배 종류에 따른 텍스트 정의
  const ser_kind: Record<string, string> = {
    def: '주일설교',
    sun: '1,3부 예배',
    tue: '환언특강',
    wed: '수요예배',
    fri: '금요기도회',
  }

  const [tabKind, setTabKind] = useState('ord')

  const opts = {
    width: '320px',
    height: '200px',
    playerVars: {
      loop: 1,
      controls: 1,
    },
  }
  const [youtubeTarget, setYoutubeTarget] = useState<any>(null)
  const [isMute, setIsMute] = useState(false)
  const onPlayerReady = (event: any) => {
    event.target.mute()
    event.target.setVolume(0)
    event.target.playVideo()
    setYoutubeTarget(event.target)
    setIsMute(true)
  }

  useEffect(() => {
    setTabKind('ord')
  }, [router])

  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center pb-10">
          <Spinner size={8} />
        </div>
      }
    >
      <div className="sub_container sermon_detail">
        <TopBar
          left={
            <Button href={`${ROUTE_SERMON}?kind=${kind}`}>
              <BackIcon />
            </Button>
          }
          center={
            <h3 className="text-base font-medium text-[#222222]">
              {ser_kind[kind]}
            </h3>
          }
          right={<div className="h-12 w-12" />}
        />

        <div className="movie_wrap">
          {isMute && (
            <div
              onClick={() => {
                youtubeTarget.unMute()
                youtubeTarget.setVolume(100)
                setIsMute(false)
              }}
              style={{
                position: 'absolute',
                zIndex: '10',
                padding: '15px',
              }}
            >
              <img
                style={{ width: '50%' }}
                src="/images/btn_mute.png"
                alt="음소거"
              />
            </div>
          )}
          <YouTube
            videoId={vid || ''}
            opts={opts}
            // containerClassName="iframe_wrap"
            onReady={onPlayerReady}
          />
          <div className="info">
            {/* <Share
            title={router.query.vtit}
            thum="/images/kakao_def_new.jpg"
            vid={router.query.vid}
          /> */}
            <div className="tit">
              <a href="pages#">{vtit || ''}</a>
            </div>
            <div className="date">{vdate || ''}</div>
          </div>
        </div>

        {(kind == 'def' || kind == 'sun') && data?.weekly[0] && (
          <div className="section">
            <ul className="tab_area">
              <li
                onClick={() => {
                  if (tabKind != 'ord') {
                    setTabKind('ord')
                  }
                }}
                className={tabKind == 'ord' ? 'on' : ''}
              >
                예배순서
              </li>
              <li
                onClick={() => {
                  if (tabKind != 'ser') {
                    setTabKind('ser')
                  }
                }}
                className={tabKind == 'ser' ? 'on' : ''}
              >
                설교요지
              </li>
            </ul>
            <div className="tab_con">
              {tabKind == 'ord' && <WeeklyOrder data={data?.weekly[0]} />}
              {tabKind == 'ser' && <WeeklySummary data={data?.weekly[0]} />}
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}

export default WorshipDetailPage
