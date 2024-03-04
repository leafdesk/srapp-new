import Modal from '@/components/base/modal'
import useLocalStorage from '@/hooks/use-local-storage'
import localStorageKey from '@/constants/local-storage-key'

type HymnSettingsProps = {
  setIsOpen: (isOpen: boolean) => void
  hymnFontSize: number
  handleHymnFontSize: (isPlus: boolean) => void
  setHymnFontSize: (fontSize: number) => void
}

const HymnSettings = ({
  setIsOpen,
  hymnFontSize,
  handleHymnFontSize,
  setHymnFontSize,
}: HymnSettingsProps) => {
  const fontSize = [16, 18, 20, 24, 30]
  const { setLocalStorageData } = useLocalStorage()

  const clearSettings = () => {
    setHymnFontSize(0)
    setLocalStorageData(localStorageKey.HYMN_FONT_SIZE, 0)
  }

  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="fixed bottom-0 w-screen items-end justify-center bg-[#EAEAEA] z-[200] pt-[30px] pb-[34px] px-5">
        {/* 글자 크기 조절 버튼 */}
        <div className="flex items-center h-10 mb-5">
          <span className="text-lg text-[#222222] font-normal mr-[6px]">
            글자 크기
          </span>
          <strong className="text-lg text-[#7D3C97] font-medium">
            {fontSize[hymnFontSize]}
          </strong>
          <div className="ml-auto flex rounded border border-[#D1D1D1] overflow-hidden bg-white">
            <div className="border-r border-[#D1D1D1]">
              <button
                className="flex items-center justify-center text-lg h-[40px] w-[80px] text-[#666666]"
                onClick={() => handleHymnFontSize(false)}
              >
                <img
                  src="/icons/icon_minus.svg"
                  alt="글자 작게"
                  className="w-3 h-3"
                />
              </button>
            </div>
            <button
              className="flex items-center justify-center text-lg h-[40px] w-[80px] text-[#666666]"
              onClick={() => handleHymnFontSize(true)}
            >
              <img
                src="/icons/icon_plus.svg"
                alt="글자 크게"
                className="w-3 h-3"
              />
            </button>
          </div>
        </div>

        {/* 설정 초기화 버튼 */}
        <div className="flex items-center h-10 mb-5">
          <span className="text-lg text-[#222222] font-normal">
            설정 초기화
          </span>
          <div className="ml-auto border border-[#D1D1D1] rounded overflow-hidden">
            <button
              onClick={clearSettings}
              className="flex items-center justify-center text-[#666666] text-sm w-[160px] bg-white h-[40px]"
            >
              초기화
            </button>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="rounded border border-[#D1D1D1] overflow-hidden">
          <button
            className="w-full h-[50px] flex items-center justify-center text-[#666666]"
            onClick={() => setIsOpen(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default HymnSettings
