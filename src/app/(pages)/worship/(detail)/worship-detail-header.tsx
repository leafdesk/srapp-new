import Button from '@/components/base/button'
import { BackIcon } from '@/components/base/icon'
import TopBar from '@/components/base/top-bar'
import { ROUTE_SERMON } from '@/constants/routes'

type WorshipDetailHeaderProps = {
  kind: string
}

const WorshipDetailHeader = ({ kind }: WorshipDetailHeaderProps) => {
  // 예배 종류에 따른 텍스트 정의
  const ser_kind: Record<string, string> = {
    def: '주일설교',
    sun: '1,3부 예배',
    tue: '환언특강',
    wed: '수요예배',
    fri: '금요기도회',
  }

  return (
    <TopBar
      left={
        <Button href={`${ROUTE_SERMON}?kind=${kind}`}>
          <BackIcon />
        </Button>
      }
      center={
        <h3 className="text-base font-medium text-[#222222]">
          {ser_kind[kind]}
        </h3>
      }
      right={<div className="h-12 w-12" />}
    />
  )
}

export default WorshipDetailHeader
