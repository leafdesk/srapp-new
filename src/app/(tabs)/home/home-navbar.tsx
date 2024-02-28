import Navbar from '@/components/base/navbar'
import { CiLogo } from '@/components/base/icon'

/**
 * 홈 페이지 앱 바.
 */
const HomeNavbar = () => {
  return (
    <Navbar
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

export default HomeNavbar
