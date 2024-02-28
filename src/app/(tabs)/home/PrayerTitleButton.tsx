import Button, { OPACITY_ONLY } from '@/components/base/Button'
import { ROUTE_OFFICIAL_PRAYER_TITLE } from '@/constants/routes'

/**
 * 교회를 위한 기도제목 바로가기 버튼.
 */
const PrayerTitleButton = () => {
  return (
    <Button href={ROUTE_OFFICIAL_PRAYER_TITLE} option={OPACITY_ONLY}>
      <div
        className={`w-screen flex items-center justify-between px-7 h-16 bg-[#88629B]`}
      >
        <span className="text-base font-medium text-white">
          교회를 위한 기도제목 바로가기
        </span>

        <div className='w-4 h-4 bg-[url("/icons/right_arrow_white.svg")] bg-no-repeat bg-contain bg-center' />
      </div>
    </Button>
  )
}

export default PrayerTitleButton
