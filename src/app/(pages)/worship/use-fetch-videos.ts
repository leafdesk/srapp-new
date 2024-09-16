import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

interface VideoData {
  videoId: string
  title: string
  thumbnails: string
  publishedAt: string
}

export type SermonType = 'def' | 'sun' | 'wed'

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY

const API_URLS = {
  def: `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`,
  sun: `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpYimHvy4t59nrd_rp7ZS7ym`,
  wed: `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZRwb9UsDgmMOJ3ex2VchNy`,
}

export const useFetchVideos = (sermon: SermonType) => {
  const [mainData, setMainData] = useState<VideoData | null>(null)
  const [listData, setListData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getData = async (sermon: SermonType) => {
    setIsLoading(true)
    let apiData: AxiosResponse<any>

    try {
      apiData = await axios.get(API_URLS[sermon])

      // 데이터 파싱 로직
      const items = apiData.data.items
      // 메인 데이터 설정
      const mainItem = items[0]
      const splitTitle = mainItem.snippet.title.split('|')
      const splitDate = mainItem.snippet.publishedAt.split('T')
      const videoDate = splitDate[0].split('-')

      setMainData({
        videoId: mainItem.snippet.resourceId.videoId,
        title: splitTitle[0],
        thumbnails: mainItem.snippet.thumbnails.medium.url,
        publishedAt: `${videoDate[0]}. ${videoDate[1]}. ${videoDate[2]}`,
      })

      // 리스트 데이터 설정
      setListData(items)
    } catch (error) {
      console.error('Error fetching videos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData(sermon)
  }, [sermon])

  return { mainData, listData, isLoading }
}
