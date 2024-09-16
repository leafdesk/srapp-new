// components/worship/VideoList.tsx
import { useRouter } from 'next/navigation'
import { ROUTE_SERMON_DETAIL } from '@/constants/routes'

interface VideoListProps {
  listData: any[]
  sermon: string
}

const VideoList: React.FC<VideoListProps> = ({ listData, sermon }) => {
  const router = useRouter()

  return (
    <div className="px-4">
      <ul className="grid gap-8 divide-y">
        {listData.map((doc, i) => {
          const splitListDate = doc.snippet.publishedAt.split('T')
          const ListDate = splitListDate[0].split('-')
          const ListTitle = doc.snippet.title
          const lDate = `${ListDate[0]}. ${ListDate[1]}. ${ListDate[2]}`

          if (i === 0 && sermon !== 'sun') {
            return null
          }
          if (sermon === 'wed' && !ListTitle.includes('수요예배')) {
            return null
          }

          const handleClick = () => {
            router.push(
              `${ROUTE_SERMON_DETAIL}?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${sermon}`,
            )
          }

          return (
            <li key={doc.id} onClick={handleClick} className="cursor-pointer">
              <div className="tit_box">
                <div className="tit">{ListTitle}</div>
                <div className="flex gap-2">
                  <div className="text-sm text-[#888]">{lDate}</div>
                  {sermon !== 'wed' && (
                    <div className="text-sm text-[#888]">
                      설교 : 김성현 목사
                    </div>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default VideoList
