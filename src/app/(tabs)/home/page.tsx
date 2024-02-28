import HomeAppBar from './HomeAppBar'
import Jumbotron from './Jumbotron'
import PrayerTitleButton from './PrayerTitleButton'

const HomePage = () => {
  return (
    <>
      {/* 앱 상단 바 */}
      <HomeAppBar />

      {/* 대형 슬라이드 (메인 배너) */}
      <Jumbotron />

      {/* 교회 기도제목 */}
      <PrayerTitleButton />
    </>
  )
}

export default HomePage
