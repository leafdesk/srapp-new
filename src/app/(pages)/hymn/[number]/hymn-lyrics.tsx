import hymnStyles from '@/constants/hymn-styles'

type HymnLyricsProps = {
  parsingValues?: any
  hymnFontSize: number
}

const HymnLyrics = ({ parsingValues, hymnFontSize }: HymnLyricsProps) => {
  /**
   * 사이즈별 스타일. SIZE [0] ~ [4]
   */
  const style = hymnStyles[hymnFontSize]
  console.log('🚀 ~ HymnLyrics ~ style:', style)

  return (
    <>
      {parsingValues && (
        <div className="pt-4 px-4 grid gap-4">
          {parsingValues.map(
            (item: { type: string; content: string }, index: number) => (
              <div key={index} className={`flex gap-2.5 ${style.text}`}>
                <strong className={`font-medium text-[#222]`}>
                  {item.type === 'verse' && index + 1}
                  {item.type === 'chorus' && (
                    <span className="break-keep">후렴</span>
                  )}
                  {item.type === 'amen' && null}
                </strong>
                <span className={`font-normal text-[#222]`}>
                  {item.content}
                </span>
              </div>
            ),
          )}
        </div>
      )}
    </>
  )
}

export default HymnLyrics
