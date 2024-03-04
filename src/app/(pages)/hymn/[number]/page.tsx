'use client'

import { DropdownToggleIcon } from '@/components/base/icon'
import Top from '@/components/base/top'
import hymn from '@/constants/hymn'
import useLocalStorage from '@/hooks/use-local-storage'
import localStorageKey from '@/constants/local-storage-key'
// import HomeBar from '@/src/components/HomeBar'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import useHeaderTitle from '@/hooks/use-header-title'
import HymnHeader from './hymn-header'
import HymnLyrics from './hymn-lyrics'
import HymnSelect from './hymn-select'
import HymnSettings from './hymn-settings'

const HymnPage = ({ params }: { params: { number: string } }) => {
  const router = useRouter()
  // const { number } = router.query
  const number = params.number
  const hymnNumber = Number(number)
  const topRef = useRef<HTMLDivElement | null>(null)

  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const [isHymnSettingsOpen, setIsHymnSettingsOpen] = useState(false)
  const [isHymnSelectOpen, setIsHymnSelectOpen] = useState(false)
  const [showAppBarTitle, setShowAppBarTitle] = useState(false)

  const [hymnFontSize, setHymnFontSize] = useState(() => {
    const fontSize = getLocalStorageData(localStorageKey.HYMN_FONT_SIZE)
    return fontSize ? fontSize : 0
  })

  /**
   * 글자 크기 조절.
   * TODO: hymnFontSize, bibleFontSize custom hook 통합.
   */
  const handleHymnFontSize = (isPlus: boolean) => {
    if (isPlus) {
      if (hymnFontSize >= 4) return
      const size = hymnFontSize + 1
      setHymnFontSize(size)
    } else {
      if (hymnFontSize <= 0) return
      const size = hymnFontSize - 1
      setHymnFontSize(() => size)
    }
  }

  useEffect(() => {
    setLocalStorageData(localStorageKey.HYMN_FONT_SIZE, hymnFontSize)
  }, [hymnFontSize])

  useEffect(() => {
    setLocalStorageData(localStorageKey.HYMN_NUMBER, number)
  }, [router])

  const topText = hymn[hymnNumber]?.title
    ? `${number}장 ${hymn[hymnNumber]?.title}`
    : null

  const parsingValues = parseHymnLyrics(hymn[hymnNumber]?.lyrics)
  // console.log(
  //   '🚀 ~ file: [number].jsx:17 ~ HymnPage ~ parsingValues:',
  //   parsingValues,
  // )

  useHeaderTitle(topRef, setShowAppBarTitle)

  return (
    <>
      {/* 찬송가 페이지 헤더 */}
      <HymnHeader
        topText={topText}
        showTitle={showAppBarTitle}
        setIsHymnSelectOpen={setIsHymnSelectOpen}
        setIsHymnSettingsOpen={setIsHymnSettingsOpen}
      />

      {/* 상단 제목 : 찬송가 선택 드롭다운 */}
      <Top
        ref={topRef}
        bottom={4}
        text1={
          <div
            className={`flex items-center gap-3 ${
              showAppBarTitle && 'opacity-0'
            }`}
            onClick={() => setIsHymnSelectOpen(true)}
          >
            <span className="inline-block truncate">{topText}</span>
            {topText && <DropdownToggleIcon />}
          </div>
        }
      />

      {/* 찬송가 선택 모달창 (전체화면) */}
      {isHymnSelectOpen && (
        <HymnSelect
          setIsHymnSelectOpen={setIsHymnSelectOpen}
          hymnNumber={hymnNumber}
        />
      )}

      {/* 악보 */}
      <img
        src={`/images/hymn/${number}.gif`}
        alt={`찬송가 ${number}장`}
        // src={
        //   number
        //     ? `http://sungrak.or.kr/sr/board_data/song_data/${number}.gif`
        //     : null
        // }
      />

      {/* divider */}
      <div className="h-2.5 bg-[#f5f5f5]" />

      {/* 가사 */}
      <HymnLyrics parsingValues={parsingValues} hymnFontSize={hymnFontSize} />

      {/* 찬송가 설정 모달창 */}
      {isHymnSettingsOpen && (
        <HymnSettings
          setIsOpen={setIsHymnSettingsOpen}
          hymnFontSize={hymnFontSize}
          handleHymnFontSize={handleHymnFontSize}
          setHymnFontSize={setHymnFontSize}
        />
      )}

      {/* 하단 메뉴 바 */}
      {/* <HomeBar /> */}
    </>
  )
}

export default HymnPage

function parseHymnLyrics(originalText: string) {
  if (!originalText) {
    return
  }
  const lines = originalText.split('\n')
  const parsedLyrics: any = []
  let isChorusNext = false

  lines.forEach((line) => {
    // 후렴 태그 확인
    if (line.trim() === '[후렴]') {
      isChorusNext = true // 다음 줄이 후렴구임을 표시
    }
    // 후렴 구절인 경우
    else if (isChorusNext) {
      const content = line.trim()
      if (content) {
        parsedLyrics.push({ type: 'chorus', content })
      }
      isChorusNext = false // 후렴구 추가 후 플래그 초기화
    }
    // 절인 경우
    else if (/\d+\./.test(line)) {
      const content = line.replace(/\d+\.\s*/, '').trim()
      if (content) {
        parsedLyrics.push({ type: 'verse', content })
      }
    }
    // 아멘인 경우
    else if (line.includes('아멘')) {
      parsedLyrics.push({ type: 'amen', content: '아멘' })
    }
  })

  return parsedLyrics
}
