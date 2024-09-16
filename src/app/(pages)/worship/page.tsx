'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import TopBar from '@/components/base/top-bar'
import Spinner from '@/components/base/spinner'
import { ROUTE_SERMON_DETAIL } from '@/constants/routes'

interface VideoData {
  videoId: string
  title: string
  thumbnails: string
  publishedAt: string
}

const WorshipPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [kind, setKind] = useState<string>('def') // 기본값 'def'
  const queryKind = searchParams.get('kind')

  useEffect(() => {
    const queryKind = searchParams.get('kind')
    setKind(queryKind || 'def') // query.kind가 있으면 사용하고, 없으면 'def'
  }, [searchParams])

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  // 주일설교
  const API_URL_DEF = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`
  // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
  const API_URL_SUN = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpYimHvy4t59nrd_rp7ZS7ym`
  // 수요예배
  const API_URL_WED = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZRwb9UsDgmMOJ3ex2VchNy`

  const [mainData, setMainData] = useState<VideoData>({
    videoId: '',
    title: '',
    thumbnails: '',
    publishedAt: '',
  })
  const [listData, setListData] = useState<any[]>([])
  const [sermon, setSermon] = useState<string>(kind)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getData = async (sermon: string) => {
    let apiData: AxiosResponse<any>

    if (sermon === 'sun') {
      apiData = await axios.get(API_URL_SUN)
      const splitTitle = apiData.data.items[0].snippet.title.split('|')
      const splitDate = apiData.data.items[0].snippet.publishedAt.split('T')
      const videoDate = splitDate[0].split('-')

      setMainData({
        videoId: apiData.data.items[0].snippet.resourceId.videoId,
        title: splitTitle[0],
        thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
        publishedAt: videoDate[0] + '. ' + videoDate[1] + '. ' + videoDate[2],
      })
    } else if (sermon === 'wed') {
      apiData = await axios.get(API_URL_WED)
      if (apiData.data.items[0].snippet.title.includes('수요예배')) {
        const splitTitle = apiData.data.items[0].snippet.title.split('|')
        const splitDate = apiData.data.items[0].snippet.publishedAt.split('T')
        const videoTitle = splitTitle[0]
        const videoDate = splitDate[0].split('-')

        setMainData({
          videoId: apiData.data.items[0].snippet.resourceId.videoId,
          title: videoTitle,
          thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
          publishedAt: videoDate[0] + '. ' + videoDate[1] + '. ' + videoDate[2],
        })
      } else {
        const splitTitle = apiData.data.items[1].snippet.title.split('|')
        const splitDate = apiData.data.items[1].snippet.publishedAt.split('T')
        const videoTitle = splitTitle[0]
        const videoDate = splitDate[0].split('-')

        setMainData({
          videoId: apiData.data.items[1].snippet.resourceId.videoId,
          title: videoTitle,
          thumbnails: apiData.data.items[1].snippet.thumbnails.medium?.url,
          publishedAt: videoDate[0] + '. ' + videoDate[1] + '. ' + videoDate[2],
        })
      }
    } else {
      apiData = await axios.get(API_URL_DEF)
      const splitTitle = apiData.data.items[0].snippet.title.split('-')
      const splitDate = apiData.data.items[0].snippet.publishedAt.split('T')
      const videoTitle = splitTitle[1]?.split('|') || ''
      const videoDate = splitDate[0].split('-')

      setMainData({
        videoId: apiData.data.items[0].snippet.resourceId.videoId,
        title: videoTitle[0],
        thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
        publishedAt: videoDate[0] + '. ' + videoDate[1] + '. ' + videoDate[2],
      })
    }
    setListData(apiData.data.items)
    setIsLoading(false)
  }

  useEffect(() => {
    getData(sermon)
  }, [sermon])

  useEffect(() => {
    setSermon(kind)
  }, [router])

  const opts = {
    width: '320px',
    height: '200px',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  }

  return (
    <>
      {/* sub_container */}
      <div className="bg-[#f8f8f8]">
        <div className="">
          <TopBar
            left={<div className="h-12 w-12" />}
            center={
              <h3 className="text-base font-medium text-[#222222]">예배</h3>
            }
            right={<div className="h-12 w-12" />}
          />

          <div className="">
            <ul className="flex h-16 items-center justify-center">
              <li
                onClick={() => {
                  if (sermon != 'def') {
                    setSermon('def')
                    setIsLoading(true)
                  }
                }}
                className={`${sermon == 'def' ? 'on' : ''} px-2.5`}
              >
                주일설교
              </li>
              <li
                onClick={() => {
                  if (sermon != 'sun') {
                    setSermon('sun')
                    setIsLoading(true)
                  }
                }}
                className={`${sermon == 'sun' ? 'on' : ''} px-2.5`}
              >
                1,3부 예배
              </li>
              <li
                onClick={() => {
                  if (sermon != 'wed') {
                    setSermon('wed')
                    setIsLoading(true)
                  }
                }}
                className={`${sermon == 'wed' ? 'on' : ''} px-2.5`}
              >
                수요예배
              </li>
            </ul>
          </div>
        </div>

        {isLoading === true ? (
          <div className="w-full flex justify-center pb-10">
            <Spinner size={8} />
          </div>
        ) : (
          <>
            <div className="section pt0 subborder">
              {/* 상단 메인 영상 */}
              <div className="pb-10">
                {/* <YouTube
                  videoId={mainData.videoId}
                  opts={opts}
                  containerClassName="iframe_wrap"
                /> */}
                <div
                  onClick={() => {
                    console.log(
                      `${ROUTE_SERMON_DETAIL}?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}&kind=${sermon}`,
                    )
                    router.push(
                      `${ROUTE_SERMON_DETAIL}?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}&kind=${sermon}`,
                      ROUTE_SERMON_DETAIL,
                    )
                  }}
                >
                  <img style={{ width: '100%' }} src={mainData?.thumbnails} />
                </div>
                <div className="flex gap-2 text-sm">
                  {/* <Share
                    title={mainData.title}
                    thum="/images/kakao_def_new.jpg"
                    vid={mainData.videoId}
                  /> */}
                  <div
                    className="tit"
                    onClick={() => {
                      router.push(
                        `${ROUTE_SERMON_DETAIL}?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}&kind=${sermon}`,
                        ROUTE_SERMON_DETAIL,
                      )
                    }}
                  >
                    {mainData.title}
                  </div>
                  <div className="date">{mainData.publishedAt}</div>
                  {sermon != 'wed' && (
                    <div className="preacher">설교 : 김성현 목사</div>
                  )}
                </div>
              </div>
            </div>

            {/* 하단 리스트 */}
            <div className="section subbordert pt15">
              <ul className="grid gap-8">
                {listData.map((doc, i) => {
                  let splitListDate = doc.snippet.publishedAt.split('T')
                  let ListDate = splitListDate[0].split('-')
                  let ListTitle = doc.snippet.title
                  let lDate =
                    ListDate[0] + '. ' + ListDate[1] + '. ' + ListDate[2]
                  if (i == 0 && sermon != 'sun') {
                    return false
                  }
                  if (sermon == 'wed' && !ListTitle.includes('수요예배')) {
                    return false
                  }
                  return (
                    <li
                      key={doc.id}
                      onClick={() => {
                        router.push(
                          `${ROUTE_SERMON_DETAIL}?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${sermon}`,
                          ROUTE_SERMON_DETAIL,
                        )
                      }}
                      className=""
                    >
                      <div className="tit_box">
                        <div className="tit">{ListTitle}</div>
                        <div className="flex gap-2">
                          <div className="text-sm text-[#888]">
                            {ListDate[0] +
                              '. ' +
                              ListDate[1] +
                              '. ' +
                              ListDate[2]}
                          </div>
                          {sermon != 'wed' && (
                            <div className="text-sm text-[#888]">
                              설교 : 김성현 목사
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="w-[82px]">
                        <img src="/icons/ico_play.svg" alt="play" />
                      </div> */}
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default WorshipPage
