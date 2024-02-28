import AppBar from '@/components/base/AppBar'
import { CiLogo } from '@/components/base/Icon'

/**
 * 홈 페이지 앱 바.
 */
const HomeAppBar = () => {
  return (
    <AppBar
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

export default HomeAppBar
