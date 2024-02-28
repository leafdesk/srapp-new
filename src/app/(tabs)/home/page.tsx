import HomeAppBar from './HomeAppBar'
import Jumbotron from './Jumbotron'

const HomePage = () => {
  return (
    <>
      {/* 앱 상단 바 */}
      <HomeAppBar />

      {/* 대형 슬라이드 (메인 배너) */}
      <Jumbotron />
    </>
  )
}

export default HomePage
