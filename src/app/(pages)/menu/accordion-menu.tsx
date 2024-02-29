import { ArrowDownIcon, ArrowUpIcon } from '@/components/base/icon'
import { useState } from 'react'
import Button from '@/components/base/button'
import { useRouter } from 'next/navigation'
import useLocalStorage from '@/hooks/use-local-storage'
import localStorageKey from '@/constants/local-storage-key'

import {
  ROUTE_OFFERING_INFO,
  ROUTE_ONE_MINUTE_GRACE,
  ROUTE_ONLINE_CONTENTS,
  ROUTE_RETURN_TO_THE_WORD_LECTURE,
  ROUTE_SERMON,
  ROUTE_WEEKDAY_PRAYER,
  ROUTE_WEEKLY,
} from '@/constants/routes'

const Divider = () => {
  return <div className="h-[1px] bg-[#EAEAEA] mx-5" />
}

type SubMenuProps = {
  list: [string, string][]
}

const SubMenu = ({ list }: SubMenuProps) => {
  return (
    <>
      {list.map((item, index) => (
        <Button key={index} href={item[1]}>
          <div className="px-5 text-base h-10">{item[0]}</div>
        </Button>
      ))}
    </>
  )
}

type AccordionMenuItemProps = {
  title?: string
  href?: string
  list?: [string, string][]
}

const AccordionMenuItem = ({
  title,
  href,
  list = [],
}: AccordionMenuItemProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="flex items-center justify-between h-[80px] px-5 "
        onClick={() => {
          href ? router.push(href) : setIsOpen(() => !isOpen)
        }}
      >
        <h3 className="font-medium text-[20px] h-[30px] text-[#222222]">
          {title}
        </h3>
        {href ? null : isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>

      {isOpen && <SubMenu list={list} />}
    </>
  )
}

const AccordionMenu = () => {
  const { getLocalStorageData } = useLocalStorage()
  const book = getLocalStorageData(localStorageKey.BIBLE_BOOK) || '1'
  const chapter = getLocalStorageData(localStorageKey.BIBLE_CHAPTER) || '1'

  return (
    <section className="mb-5 ">
      <AccordionMenuItem
        title="예배"
        list={[
          ['주일 설교', `${ROUTE_SERMON}?kind=def`],
          ['1, 3부 예배', `${ROUTE_SERMON}?kind=sun`],
          ['수요 예배', `${ROUTE_SERMON}?kind=wed`],
        ]}
      />
      <Divider />
      <AccordionMenuItem title="성경" href={`/bible/${book}/${chapter}`} />
      <Divider />
      <AccordionMenuItem
        title="콘텐츠"
        list={[
          ['ON 시리즈', ROUTE_ONLINE_CONTENTS],
          ['환언 특강', ROUTE_RETURN_TO_THE_WORD_LECTURE],
          ['주중 기도회', ROUTE_WEEKDAY_PRAYER],
          ['1분 은혜', ROUTE_ONE_MINUTE_GRACE],
        ]}
      />
      <Divider />
      <AccordionMenuItem title="주보" href={ROUTE_WEEKLY} />
      <Divider />
      <AccordionMenuItem title="기관 콘텐츠" list={[['준비 중입니다.', '']]} />
      <Divider />
      <AccordionMenuItem title="헌금안내" href={ROUTE_OFFERING_INFO} />
    </section>
  )
}

export default AccordionMenu
