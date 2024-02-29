import QuickMenuItem from './quick-menu-item'

import {
  ROUTE_PRAISE_CONTENTS,
  ROUTE_OFFERING_INFO,
  ROUTE_ONE_MINUTE_GRACE,
  ROUTE_ONLINE_CONTENTS,
  ROUTE_REPRESENTATIVE_PRAYER,
  ROUTE_RETURN_TO_THE_WORD_LECTURE,
  ROUTE_WEEKLY,
} from '@/constants/routes'

const QuickMenu = () => {
  return (
    <div className="bg-[#f8f8f8] pt-[40px] px-[24px] pb-[22px]">
      {/* <div className='title'>빠른접근</div> */}

      <div className="grid grid-cols-4">
        {/* <QuickMenuItem
          pathname={ROUTE_SERMON}
          imgSrc='/icons/ico_sermon_new.svg'
          title='예배'
        /> */}

        <QuickMenuItem
          pathname={ROUTE_PRAISE_CONTENTS}
          imgSrc="/icons/ico_quick_praise_new.svg"
          title="찬양"
        />

        <QuickMenuItem
          pathname={ROUTE_OFFERING_INFO}
          imgSrc="/icons/ico_quick_offering.svg"
          title="헌금안내"
        />

        <QuickMenuItem
          pathname={ROUTE_WEEKLY}
          imgSrc="/icons/ico_quick_weekly2.svg"
          title="주보"
        />

        <QuickMenuItem
          pathname={ROUTE_REPRESENTATIVE_PRAYER}
          imgSrc="/icons/ico_quick_prayer.png"
          title="대표기도자"
        />

        {/* <QuickMenuItem
          pathname={ROUTE_RETURN_TO_THE_WORD_LECTURE}
          imgSrc='/icons/ico_return.svg'
          title='환언특강'
        />

        <QuickMenuItem
          pathname={ROUTE_ONLINE_CONTENTS}
          imgSrc='/icons/ico_quick_onseries.svg'
          title='온시리즈'
        />

        <QuickMenuItem
          pathname={ROUTE_ONE_MINUTE_GRACE}
          imgSrc='/icons/ico_shorts.svg'
          title='1분은혜'
        /> */}

        {/* <QuickMenuItem pathname='/' imgSrc='' title='교회소식' /> */}

        {/* <QuickMenuItem
          pathname='/2022-summer-camp'
          imgSrc='/icons/ico_quick_camp2.svg'
          title='2022 수련회'
        /> */}
      </div>
      {/* end of quick_menu */}
    </div>
  )
}

export default QuickMenu
