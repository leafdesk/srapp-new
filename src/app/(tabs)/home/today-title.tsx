type TodayTitleProps = {
  title: string
  description: string
}

const TodayTitle = ({ title, description }: TodayTitleProps) => {
  return (
    <div className="pt-10 px-5 pb-[30px]">
      <div className="flex gap-1">
        <h2 className="font-medium text-[20px] mb-1">{title}</h2>
        <span className="text-[#F64A00] font-medium text-[12px]">NEW</span>
      </div>
      <span className="font-normal text-base text-[#666666]">
        {description}
      </span>
    </div>
  )
}

export default TodayTitle
