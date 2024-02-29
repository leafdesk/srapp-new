import {
  BibleIcon,
  PraiseIcon,
  WeeklyIcon,
  SermonIcon,
} from '@/components/base/icon'

import Container from '@/components/base/container'
import Button from '@/components/base/button'
import useLocalStorage from '@/hooks/use-local-storage'
import localStorageKey from '@/constants/local-storage-key'
import {
  ROUTE_PRAISE_CONTENTS,
  ROUTE_SERMON,
  ROUTE_WEEKLY,
} from '@/constants/routes'

const Divider = () => {
  return <div className="w-[1px] bg-[#EAEAEA] h-full" />
}

type QuickMenuItemProps = {
  text: string
  icon: React.ReactNode
  href: string
}

const QuickMenuItem = ({ text, icon, href }: QuickMenuItemProps) => {
  return (
    <Button href={href}>
      <Container gap={1} className="w-[70px] flex items-center justify-between">
        {icon}
        <span className="font-medium text-[#666666] text-sm">{text}</span>
      </Container>
    </Button>
  )
}

const QuickMenu = () => {
  const { getLocalStorageData } = useLocalStorage()
  const book = getLocalStorageData(localStorageKey.BIBLE_BOOK) || '1'
  const chapter = getLocalStorageData(localStorageKey.BIBLE_CHAPTER) || '1'

  return (
    <section className="flex h-16 px-5 mt-3 mb-[30px] justify-between text-center">
      <QuickMenuItem
        text="성경"
        icon={<BibleIcon />}
        href={`/bible/${book}/${chapter}`}
      />
      <Divider />
      <QuickMenuItem text="주보" icon={<WeeklyIcon />} href={ROUTE_WEEKLY} />
      <Divider />
      <QuickMenuItem text="예배" icon={<SermonIcon />} href={ROUTE_SERMON} />
      <Divider />
      <QuickMenuItem
        text="찬양"
        icon={<PraiseIcon />}
        href={ROUTE_PRAISE_CONTENTS}
      />
    </section>
  )
}

export default QuickMenu
