import Header from '@/components/base/header'
import { CiLogo } from '@/components/base/icon'

/**
 * 홈 헤더.
 */
const HomeHeader = () => {
  return (
    <Header
      left1={<CiLogo />}
      // right1={
      //   <Button onClick={() => window.alert('준비 중입니다.')}>
      //     <AlarmIcon />
      //   </Button>
      // }
      // right2={
      //   <Button onClick={() => window.alert('준비 중입니다.')}>
      //     <SearchIcon />
      //   </Button>
      // }
    />
  )
}

export default HomeHeader
