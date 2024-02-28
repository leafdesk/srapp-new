import Image from 'next/image'

type IconProps = {
  src: string
  size?: number
  className?: string
}

/**
 * 아이콘.
 */
const Icon = ({ src, size = 48, className }: IconProps) => {
  return (
    <Image
      src={src}
      width={size}
      height={size}
      className={className}
      alt={src}
    />
  )
}

export default Icon

/**
 * CI 로고.
 */
export const CiLogo = () => (
  <Image
    src={'/images/ci_sungrak.svg'}
    width={170}
    height={60}
    alt="성락교회 SUNGRAK CHURCH"
  />
)

/**
 * 검색 아이콘.
 */
export const SearchIcon = () => <Icon src={'/icons/icon_search.svg'} />

/**
 * 검색 아이콘. (검색창 내부)
 */
export const SearchInputIcon = () => (
  <Icon src={'/icons/icon_search_input.svg'} size={20} />
)

/**
 * 알림 아이콘.
 */
export const AlarmIcon = () => <Icon src={'/icons/icon_alarm.svg'} />

/**
 * 뒤로가기 아이콘.
 */
export const BackIcon = () => <Icon src={'/icons/icon_back.svg'} />

/**
 * 복사 아이콘.
 */
export const CopyIcon = () => <Icon src={'/icons/icon_copy.svg'} />

/**
 * 다운로드 아이콘.
 */
export const DownloadIcon = () => <Icon src={'/icons/icon_download.svg'} />

/**
 * 재생 아이콘. (small, black)
 */
export const PlayIconSmallBlack = () => (
  <Icon src={'/icons/icon_play_small_black.svg'} size={14} />
)

/**
 * 재생 아이콘. (small, white)
 */
export const PlayIconSmallWhite = () => (
  <Icon src={'/icons/icon_play_small_white.svg'} size={14} />
)

/**
 * 닫기 아이콘. X Mark.
 */
export const CloseIcon = () => <Icon src={'/icons/icon_close.svg'} />

/**
 * 성경 아이콘.
 */
export const BibleIcon = () => (
  <Icon src={'/icons/icon_quick_bible1.svg'} size={40} />
)

/**
 * 주보 아이콘.
 */
export const WeeklyIcon = () => (
  <Icon src={'/icons/icon_quick_weekly.svg'} size={40} />
)

/**
 * 설교 아이콘.
 */
export const SermonIcon = () => (
  <Icon src={'/icons/icon_quick_sermon.svg'} size={40} />
)

/**
 * 찬양 아이콘.
 */
export const PraiseIcon = () => (
  <Icon src={'/icons/icon_quick_praise.svg'} size={40} />
)

/**
 * 하향 화살표 아이콘.
 */
export const ArrowDownIcon = () => (
  <Icon src={'/icons/icon_arrow_down.svg'} size={24} />
)

/**
 *  상향 화살표 아이콘.
 */
export const ArrowUpIcon = () => (
  <Icon src={'/icons/icon_arrow_down.svg'} size={24} className="rotate-180" />
)

/**
 * 우향 화살표 아이콘.
 */
export const ArrowRightIcon = ({ size = 20 }) => (
  <Icon src={'/icons/icon_arrow_right.svg'} size={size} />
)

/**
 * 홈 아이콘.
 */
export const HomeIcon = () => <Icon src={'/icons/icon_home.svg'} size={20} />

/**
 * 유튜브 아이콘.
 */
export const YoutubeIcon = () => (
  <Icon src={'/icons/icon_youtube.svg'} size={20} />
)

/**
 * 블로그 아이콘.
 */
export const BlogIcon = () => <Icon src={'/icons/icon_blog.svg'} size={20} />

/**
 * 페이스북 아이콘.
 */
export const FacebookIcon = () => (
  <Icon src={'/icons/icon_facebook.svg'} size={20} />
)

/**
 * 인스타그램 아이콘.
 */
export const InstagramIcon = () => (
  <Icon src={'/icons/icon_instagram.svg'} size={20} />
)

/**
 * 밴드 아이콘.
 */
export const BandIcon = () => <Icon src={'/icons/icon_band.svg'} size={20} />

/**
 * 환경설정 아이콘.
 */
export const SettingsIcon = () => <Icon src={'/icons/icon_settings.svg'} />

/**
 * 드롭다운 토글 아이콘.
 */
export const DropdownToggleIcon = () => (
  <Icon src={'/icons/icon_dropdown.svg'} size={10} />
)

/**
 * 성경 좌향 화살표 아이콘.
 */
export const GrayArrowLeftIcon = () => (
  <Icon src={'/icons/icon_gray_arrow_left.svg'} size={16} />
)

/**
 * 성경 우향 화살표 아이콘.
 */
export const GrayArrowRightIcon = () => (
  <Icon src={'/icons/icon_gray_arrow_right.svg'} size={16} />
)
