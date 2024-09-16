'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

import WorshipDetailHeader from './worship-detail-header'
import WorshipVideo from './worship-video'
import WorshipInfo from './worship-info'

const WorshipDetailPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // searchParams에서 필요한 쿼리 값 가져오기
  const vdate = searchParams.get('vdate')
  const vid = searchParams.get('vid')
  const vtit = searchParams.get('vtit')
  const kind = searchParams.get('kind') || 'def'

  const { data } = useSWR(vdate ? `/api/weekly/date?pdate=${vdate}` : null)
  const [tabKind, setTabKind] = useState('ord')

  useEffect(() => {
    setTabKind('ord')
  }, [router])

  return (
    <div className="sub_container sermon_detail">
      {/* 앱 상단 바 */}
      <WorshipDetailHeader kind={kind} />

      {/* 예배 영상 */}
      <WorshipVideo vid={vid} vtit={vtit} vdate={vdate} />

      {/* 예배 순서 & 설교 요지 */}
      <WorshipInfo
        kind={kind}
        data={data}
        tabKind={tabKind}
        setTabKind={setTabKind}
      />
    </div>
  )
}

export default WorshipDetailPage
