import {
  ArrowRightIcon,
  BandIcon,
  BlogIcon,
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@/components/base/icon'

import Button from '@/components/base/button'
import Container from '@/components/base/container'

type FooterMenuItemProps = {
  icon: React.ReactNode
  text: string
  href: string
}

const FooterMenuItem = ({ icon, text, href }: FooterMenuItemProps) => {
  return (
    <Button href={href}>
      <div className="w-full flex items-center justify-between">
        <Container row gap={3}>
          {icon}
          <h3 className="font-normal text-base">{text}</h3>
        </Container>
        <ArrowRightIcon />
      </div>
    </Button>
  )
}

const FooterMenu = () => {
  return (
    <section className="bg-[#F7F7F7] grid grid-cols-2 gap-[30px] px-5 py-10">
      <FooterMenuItem
        text="홈페이지"
        icon={<HomeIcon />}
        href="http://sungrak.or.kr/sr/"
      />
      <FooterMenuItem
        text="페이스북"
        icon={<FacebookIcon />}
        href="fb://page/Ps43whake84st"
        // href="https://m.facebook.com/sungrakin"
      />
      <FooterMenuItem
        text="유튜브"
        icon={<YoutubeIcon />}
        href="https://m.youtube.com/@SUNGRAKCHURCH"
      />
      <FooterMenuItem
        text="인스타그램"
        icon={<InstagramIcon />}
        href="https://www.instagram.com/sungrak_insta/"
      />
      <FooterMenuItem
        text="블로그"
        icon={<BlogIcon />}
        href="https://m.blog.naver.com/bereasungrak"
      />
      <FooterMenuItem
        text="밴드"
        icon={<BandIcon />}
        href="https://band.us/@imsungrakin"
      />
    </section>
  )
}

export default FooterMenu
