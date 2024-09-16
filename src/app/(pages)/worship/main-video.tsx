// components/worship/MainVideo.tsx
import { useRouter } from 'next/navigation'
import { ROUTE_SERMON_DETAIL } from '@/constants/routes'

interface VideoData {
  videoId: string
  title: string
  thumbnails: string
  publishedAt: string
}

interface MainVideoProps {
  mainData: VideoData
  sermon: string
}

const MainVideo: React.FC<MainVideoProps> = ({ mainData, sermon }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(
      `${ROUTE_SERMON_DETAIL}?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}&kind=${sermon}`,
    )
  }

  return (
    <div className="pb-10">
      <div onClick={handleClick}>
        <img
          style={{ width: '100%' }}
          src={mainData.thumbnails}
          alt={mainData.title}
        />
      </div>
      <div className="flex gap-2 text-sm">
        <div className="tit" onClick={handleClick}>
          {mainData.title}
        </div>
        <div className="date">{mainData.publishedAt}</div>
        {sermon !== 'wed' && <div className="preacher">설교 : 김성현 목사</div>}
      </div>
    </div>
  )
}

export default MainVideo
