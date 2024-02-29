import HomeHeader from './home-header'
import Jumbotron from './jumbotron'
import PrayerTitleButton from './prayer-title-button'
import QuickMenu from './quick-menu'
import Today from './today'

const HomePage = () => {
  return (
    <>
      {/* 홈 페이지 헤더 */}
      <HomeHeader />

      {/* 대형 슬라이드 (메인 배너) */}
      <Jumbotron />

      {/* 교회 기도제목 */}
      <PrayerTitleButton />

      {/* 퀵 메뉴 */}
      <QuickMenu />

      {/* 성락 공지사항 */}
      {/*<Notice />*/}

      {/* 성락교회 투데이 */}
      <Today />

      {/* 주중 콘텐츠 */}
      {/*<WeekdayContent />*/}

      {/* 교회 표어 */}
      {/*<div className="mdbanner">*/}
      {/*    <img src="/images/banner_23.jpg" />*/}
      {/*</div>*/}

      {/* 은혜로운 찬양 */}
      {/*<Praise />*/}

      {/* 성락교회 미래세대 */}
      {/*<Department />*/}

      {/* blank */}
      {/* <div className="h-16" /> */}
    </>
  )
}

export default HomePage
