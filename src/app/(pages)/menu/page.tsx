'use client'

import Top from '@/components/base/top'
import Divider from '@/components/base/divider'
// import HomeBar from '@components/HomeBar'
import { useRef, useState } from 'react'
import MenuHeader from './menu-header'
import QuickMenu from './quick-menu'
import AccordionMenu from './accordion-menu'
import FooterMenu from './footer-menu'
import useHeaderTitle from '@/hooks/use-header-title'

const MenuPage = () => {
  const topText = '전체보기'
  const topRef = useRef<HTMLDivElement | null>(null)

  const [showAppBarTitle, setShowAppBarTitle] = useState<boolean>(false)

  useHeaderTitle(topRef, setShowAppBarTitle)

  return (
    <>
      {/* 메뉴 페이지 헤더 */}
      <MenuHeader topText={topText} showTitle={showAppBarTitle} />

      {/* 상단 제목 */}
      <Top
        ref={topRef}
        text1={
          <div
            className={`flex items-center gap-3 ${
              showAppBarTitle && 'opacity-0'
            }`}
          >
            {topText}
          </div>
        }
      />

      {/* 빠른 접근 메뉴 */}
      <QuickMenu />

      {/* 구분선 */}
      <Divider />

      {/* 아코디언(드롭다운) 메뉴 */}
      <AccordionMenu />

      {/* 바닥글 메뉴 */}
      <FooterMenu />

      {/* 하단 메뉴 바 */}
      {/* <HomeBar /> */}
    </>
  )
}

export default MenuPage
