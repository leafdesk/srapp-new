import Header from '@/components/base/header'
import Button from '@/components/base/button'
import {
  SettingsIcon,
  SearchIcon,
  DropdownToggleIcon,
} from '@/components/base/icon'

type HymnHeaderProps = {
  topText?: string | null
  showTitle: boolean
  setIsHymnSelectOpen: (isOpen: boolean) => void
  setIsHymnSettingsOpen: (isOpen: boolean) => void
}

const HymnHeader = ({
  topText,
  showTitle,
  setIsHymnSelectOpen,
  setIsHymnSettingsOpen,
}: HymnHeaderProps) => {
  return (
    <Header
      left1={
        <div
          className={`flex items-center gap-2 ${!showTitle && 'hidden'}`}
          onClick={() => setIsHymnSelectOpen(true)}
        >
          <span className="pl-4 font-medium text-base text-[#222]">
            {topText}
          </span>
          {topText && <DropdownToggleIcon />}
        </div>
      }
      right1={
        <Button onClick={() => setIsHymnSettingsOpen(true)}>
          <SettingsIcon />
        </Button>
      }
      right2={
        <Button
        // onClick={() => console.log('')}
        >
          {/* <SearchIcon /> */}
        </Button>
      }
    />
  )
}

export default HymnHeader
