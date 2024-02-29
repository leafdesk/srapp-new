// import Button from '@/components/base/button'
import { useRouter } from 'next/navigation'

type VideoCardProps = {
  content: {
    videoId: string
    name: string
    publishedAt: string
    description: string
  }
}

const VideoCard = ({ content }: VideoCardProps) => {
  const router = useRouter()
  const URL = `https://youtu.be/${content.videoId}`

  return (
    <section className={`mb-4 active:opacity-50`}>
      <img
        className="w-screen h-56 bg-no-repeat bg-center object-cover"
        src={`https://img.youtube.com/vi/${content.videoId}/mqdefault.jpg`}
        onClick={() => router.push(URL)}
      />
      <div className="flex justify-between px-5 pt-3 h-20">
        <div className="flex" onClick={() => router.push(URL)}>
          <img
            className="flex w-10 h-10 rounded-3xl"
            src="/images/thumb_circle_2.png"
          />
          <div className="ml-3 w-[240px]">
            <div className="font-medium text-base text-[#222222] line-clamp-2 leading-5">
              {content.name}
            </div>
            <div
              className={`font-normal text-sm text-[#666666] line-clamp-1 pt-1`}
            >
              {content.publishedAt} · 성락교회 SUNGRAK CHURCH
            </div>
          </div>
        </div>
        <button
          className="h-fit"
          onClick={() => {
            const shareData = {
              title: content.name,
              text: content.description,
              url: `https://youtu.be/${content.videoId}`,
            }
            if (navigator.share) {
              navigator
                .share(shareData)
                .then(() => console.log('공유 성공'))
                .catch((error) => console.log('공유 실패', error))
            }
          }}
        >
          <img className="w-5 h-5" src="/icons/icon_share.svg" />
        </button>
      </div>
    </section>
  )
}

export default VideoCard
