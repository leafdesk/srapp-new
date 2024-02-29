'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/base/navbar'

import {
  ROUTE_HOME,
  ROUTE_ONE_MINUTE_GRACE,
  ROUTE_ONLINE_CONTENTS,
  ROUTE_PRAISE_CONTENTS,
  ROUTE_RETURN_TO_THE_WORD_LECTURE,
  ROUTE_SERMON,
  ROUTE_SITE_MAP_MENU,
  ROUTE_WEEKDAY_PRAYER,
} from '@/constants/routes'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true)

  useEffect(() => {
    const isBibleRoute = /\/bible\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+/.test(
      // router.asPath
      pathname,
    )
    const isHymnRoute = /\/hymn\/[a-zA-Z0-9]+/.test(pathname)
    const shouldShowNavbar =
      [
        ROUTE_HOME,
        ROUTE_SERMON,
        ROUTE_SITE_MAP_MENU,
        ROUTE_ONE_MINUTE_GRACE,
        ROUTE_ONLINE_CONTENTS,
        ROUTE_PRAISE_CONTENTS,
        ROUTE_WEEKDAY_PRAYER,
        ROUTE_RETURN_TO_THE_WORD_LECTURE,
      ].includes(pathname) ||
      isBibleRoute ||
      isHymnRoute

    console.log(isBibleRoute, isHymnRoute, shouldShowNavbar)

    setIsNavbarVisible(shouldShowNavbar)
  }, [pathname])

  return (
    <section>
      {children}
      {isNavbarVisible && <Navbar />}
    </section>
  )
}

export default PageLayout
