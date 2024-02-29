import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NavbarTab from './navbar-tab'
import useLocalStorage from '@/hooks/use-local-storage'
import localStorageKey from '@/constants/local-storage-key'
import useScrollDetector from '@/hooks/use-scroll-detector'
import { isIOS } from 'react-device-detect'

import {
  ROUTE_BIBLE,
  ROUTE_CONTENTS_FEED,
  ROUTE_HOME,
  ROUTE_HYMN,
  ROUTE_ONLINE_CONTENTS,
  ROUTE_SERMON,
  ROUTE_SITE_MAP_MENU,
  ROUTE_WEEKDAY_PRAYER,
} from '@/constants/routes'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  /**
   * BOTTOM_PADDING_IOS, BOTTOM_PADDING_DEFAULT 차이와
   * BibleFloatingButton.jsx 에서 MARGIN_BOTTOM_IOS, MARGIN_BOTTOM_DEFAULT 차이는 동일해야 함.
   */
  const BOTTOM_PADDING_IOS = 'pb-6'
  const BOTTOM_PADDING_DEFAULT = 'pb-[9px]'

  // 초기 상태를 설정할 때 isIOS를 사용하여 적절한 패딩 값을 설정
  // const initialPadding = isClientIOS
  //   ? BOTTOM_PADDING_IOS
  //   : BOTTOM_PADDING_DEFAULT

  // 클라이언트 사이드에서만 isIOS 값을 설정합니다.
  const [isClientIOS, setIsClientIOS] = useState(false)
  const [bottomPadding, setBottomPadding] = useState(BOTTOM_PADDING_DEFAULT)

  const { getLocalStorageData } = useLocalStorage()
  const book = getLocalStorageData(localStorageKey.BIBLE_BOOK) || '1'
  const chapter = getLocalStorageData(localStorageKey.BIBLE_CHAPTER) || '1'
  const hymnNumber = getLocalStorageData(localStorageKey.HYMN_NUMBER) || '1'

  const pathNameSplit = pathname.split('/')
  const contentPages = [
    ROUTE_CONTENTS_FEED,
    ROUTE_ONLINE_CONTENTS,
    ROUTE_WEEKDAY_PRAYER,
    ROUTE_WEEKDAY_PRAYER,
  ]

  const { isSmall } = useScrollDetector()

  const SAFE_AREA_PADDING = 'safe-area-padding'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClientIOS(isIOS)
    }
  }, [])

  useEffect(() => {
    if (isClientIOS) {
      setBottomPadding(() => BOTTOM_PADDING_IOS)
    }
  }, [isClientIOS])

  return (
    <>
      {/* blank */}
      <div className="h-[98px]" />

      <section
        className={`${SAFE_AREA_PADDING} ${bottomPadding} fixed bottom-0 grid grid-cols-5 border-t border-[#D9D9D9] rounded-t-xl bg-white z-50 w-full pt-[9px] shadow-[0_-4px_15px_-8px_rgba(0,0,0,0.3)] transition duration-300 ${
          pathNameSplit[1] === ROUTE_BIBLE.substring(1) && isSmall // 성경 페이지에서만 하향 스크롤 시 Navbar 숨김.
            ? 'translate-y-full'
            : 'translate-y-0'
        }`}
      >
        <NavbarTab
          text="홈"
          path={ROUTE_HOME}
          icon={
            pathname === ROUTE_HOME
              ? '/icons/nav_home_on.svg'
              : '/icons/nav_home.svg'
          }
        />
        <NavbarTab
          text="예배"
          path={ROUTE_SERMON}
          icon={
            pathname === ROUTE_SERMON
              ? '/icons/nav_worship_on.svg'
              : '/icons/nav_worship.svg'
          }
        />
        <NavbarTab
          text="성경"
          path={`${ROUTE_BIBLE}/${book}/${chapter}`}
          icon={
            pathNameSplit[1] === ROUTE_BIBLE.substring(1)
              ? '/icons/nav_bible_on.svg'
              : '/icons/nav_bible.svg'
          }
        />
        <NavbarTab
          text="찬송가"
          path={`${ROUTE_HYMN}/${hymnNumber}`}
          icon={
            pathNameSplit[1] === ROUTE_HYMN.substring(1)
              ? '/icons/nav_hymn_on.svg'
              : '/icons/nav_hymn.svg'
          }
        />
        {/* <NavbarTab
          text="피드"
          path={ROUTE_CONTENTS_FEED}
          icon={
            contentPages.includes(router.pathname)
              ? '/icons/nav_feed_on.svg'
              : '/icons/nav_feed.svg'
          }
        /> */}
        <NavbarTab
          text="전체보기"
          path="/menu"
          icon={
            pathname === ROUTE_SITE_MAP_MENU
              ? '/icons/nav_all_on.svg'
              : '/icons/nav_all.svg'
          }
        />
      </section>
    </>
  )
}
