import HomeNavbar from './home-navbar'
import Jumbotron from './jumbotron'
import PrayerTitleButton from './prayer-title-button'

const HomePage = () => {
  return (
    <>
      {/* 앱 상단 바 */}
      <HomeNavbar />

      {/* 대형 슬라이드 (메인 배너) */}
      <Jumbotron />

      {/* 교회 기도제목 */}
      <PrayerTitleButton />
    </>
  )
}

export default HomePage
