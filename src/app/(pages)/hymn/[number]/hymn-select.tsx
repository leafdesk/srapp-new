'use client'

import Button from '@/components/base/button'
import { CloseIcon, SearchInputIcon } from '@/components/base/icon'
import Modal from '@/components/base/modal'
import hymn from '@/constants/hymn'
import localStorageKey from '@/constants/local-storage-key'
import useLocalStorage from '@/hooks/use-local-storage'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type HymnSelectProps = {
  setIsHymnSelectOpen: (isOpen: boolean) => void
  hymnNumber: number
}

const HymnSelect = ({ setIsHymnSelectOpen, hymnNumber }: HymnSelectProps) => {
  const router = useRouter()
  const refs = useRef<Record<number, HTMLElement | null>>({})
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredHymns, setFilteredHymns] = useState(hymn)

  const { setLocalStorageData } = useLocalStorage()

  useEffect(() => {
    // 현재 장으로 스크롤.
    if (refs.current[hymnNumber]) {
      setTimeout(() => {
        refs.current[hymnNumber]?.scrollIntoView({
          block: 'center',
        })
      }, 100)
    }
  }, [hymnNumber])

  useEffect(() => {
    const search = searchTerm.toLowerCase()
    setFilteredHymns(
      hymn.filter(
        (h) =>
          h.title.toLowerCase().includes(search) ||
          h.lyrics.toLowerCase().includes(search) ||
          h.number.toString().includes(search),
      ),
    )
  }, [searchTerm])

  const handleHymnSelectHistory = (number: number) => {
    setLocalStorageData(localStorageKey.HYMN_NUMBER, number)
  }

  return (
    <Modal setIsOpen={setIsHymnSelectOpen}>
      <div className="bg-white fixed top-0 w-screen h-screen z-[300]">
        {/* [상단] 찬양 목차 안내 - 닫기 버튼 */}
        <div className="w-screen h-[64px] fixed top-0 flex items-center justify-between pl-5 pr-1">
          <h2 className="text-[#222222] font-medium text-lg">찬양 목차 안내</h2>
          <Button onClick={() => setIsHymnSelectOpen(false)}>
            <CloseIcon />
          </Button>
        </div>

        {/* blank */}
        <div className="h-[64px]" />

        {/* 찬송가 검색 */}
        <div className="relative bg-[#f5f5f5] border-b border-[#ddd] h-[78px] p-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="장, 제목, 가사로 검색해주세요."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-full px-5 font-normal text-base rounded-[100px]"
          />
          <div className="absolute right-7 top-1/2 transform -translate-y-1/2 flex items-center">
            <SearchInputIcon />
          </div>
        </div>

        {/* 찬송가 리스트 */}
        <div className="pt-4 px-4 pb-[200px] h-full overflow-y-scroll">
          {searchTerm.length < 1 && (
            <div className="mb-[6px] bg-[#f5f5f5] h-6 px-[6px] flex items-center font-normal text-xs text-[#888] rounded">
              장
            </div>
          )}
          {filteredHymns.map((item, index) => {
            if (item.number === 0) {
              return null
            } else {
              return (
                <div
                  key={item.number}
                  ref={(el) => (refs.current[item.number] = el)}
                  className={`flex items-center h-14 px-2.5 gap-[10px] ${
                    item.number == hymnNumber && 'bg-[#EFEAF1]'
                  } rounded hover:bg-[#EFEAF1]`}
                  onClick={() => {
                    setIsHymnSelectOpen(false)
                    handleHymnSelectHistory(item.number)
                    router.push(`/hymn/${item.number}`)
                  }}
                >
                  <span className="w-12 text-center font-normal text-base text-[#7D3C97]">
                    {item.number} 장
                  </span>
                  <span className="font-medium text-base text-[#222222]">
                    {item.title}
                  </span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </Modal>
  )
}

export default HymnSelect
