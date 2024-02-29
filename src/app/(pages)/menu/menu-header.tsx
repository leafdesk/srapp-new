import Button from '@/components/base/button'
import Header from '@/components/base/header'
import { CloseIcon } from '@/components/base/icon'

type MenuHeaderProps = {
  topText: string
  showTitle: boolean
}

const MenuHeader = ({ topText, showTitle }: MenuHeaderProps) => {
  return (
    <Header
      left1={
        <div className={`flex items-center gap-2 ${!showTitle && 'hidden'}`}>
          <span className="pl-4 font-medium text-base text-[#222]">
            {topText}
          </span>
        </div>
      }
      right2={
        <Button>
          <CloseIcon />
        </Button>
      }
    />
  )
}

export default MenuHeader
