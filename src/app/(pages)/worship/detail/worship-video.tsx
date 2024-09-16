import { useState } from 'react'
import YouTube from 'react-youtube'

type WorshipVideoProps = {
  vid: string | null
  vtit: string | null
  vdate: string | null
  // opts: any
}

const WorshipVideo = ({ vid, vtit, vdate }: WorshipVideoProps) => {
  const [youtubeTarget, setYoutubeTarget] = useState<any>(null)
  const [isMute, setIsMute] = useState(false)

  const opts = {
    width: '320px',
    height: '200px',
    playerVars: {
      loop: 1,
      controls: 1,
    },
  }

  const onPlayerReady = (event: any) => {
    event.target.mute()
    event.target.setVolume(0)
    event.target.playVideo()
    setYoutubeTarget(event.target)
    setIsMute(true)
  }

  return (
    <div className="movie_wrap">
      {isMute && (
        <div
          onClick={() => {
            youtubeTarget.unMute()
            youtubeTarget.setVolume(100)
            setIsMute(false)
          }}
          style={{
            position: 'absolute',
            zIndex: '10',
            padding: '15px',
          }}
        >
          <img
            style={{ width: '50%' }}
            src="/images/btn_mute.png"
            alt="음소거"
          />
        </div>
      )}
      <YouTube
        videoId={vid || ''}
        opts={opts}
        // containerClassName="iframe_wrap"
        onReady={onPlayerReady}
      />
      <div className="info">
        {/* <Share
      title={router.query.vtit}
      thum="/images/kakao_def_new.jpg"
      vid={router.query.vid}
    /> */}
        <div className="tit">
          <a href="pages#">{vtit || ''}</a>
        </div>
        <div className="date">{vdate || ''}</div>
      </div>
    </div>
  )
}

export default WorshipVideo
