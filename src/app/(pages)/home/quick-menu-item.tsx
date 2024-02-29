import Button from '@/components/base/button'

type QuickMenuItemProps = {
  pathname: string
  imgSrc: string
  title: string
}

const QuickMenuItem = ({ pathname, imgSrc, title }: QuickMenuItemProps) => {
  return (
    <Button className="mb-[22px] flex flex-col" href={pathname}>
      {/* 메뉴 아이콘 이미지 소스 & 대체 텍스트 */}
      <div className="w-[66px] h-[66px] mx-auto mb-[6px] bg-white rounded-[20px] relative">
        <img
          className={
            imgSrc == '/icons/ico_quick_prayer.png'
              ? ''
              : 'absolute translate-x-[34%] translate-y-[35%]'
          }
          src={imgSrc}
          alt={title}
        />
      </div>

      {/* 메뉴 제목 */}
      <div className="block text-xs text-center">{title}</div>
    </Button>
  )
}

export default QuickMenuItem
