import Link from 'next/link'

type NavbarTabProps = {
  icon: string
  text: string
  path: string
}

const NavbarTab = ({ icon, text, path }: NavbarTabProps) => {
  return (
    <Link href={path}>
      <div className="flex justify-center">
        <img src={icon} alt={text} className="w-[24px] h-[24px]" />
      </div>
      <span className="block mt-1 text-center text-[10px]">{text}</span>
    </Link>
  )
}

export default NavbarTab
