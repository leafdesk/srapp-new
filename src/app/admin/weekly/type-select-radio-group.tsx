'use client'

import { useState } from 'react'
import TypeSelectRadio from './type-select-radio'

/**
 * 주보 항목의 형태 선택. (라디오 버튼 그룹)
 */
const TypeSelectRadioGroup = () => {
  const TEXT = 'text'
  const LIST = 'list'
  const TABLE = 'table'
  const BUTTON = 'button'

  const [selectedValue, setSelectedValue] = useState(TEXT)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div className="flex">
      <TypeSelectRadio
        radioValue={TEXT}
        label="텍스트"
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
      <TypeSelectRadio
        radioValue={LIST}
        label="리스트"
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
      <TypeSelectRadio
        radioValue={TABLE}
        label="표"
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
      <TypeSelectRadio
        radioValue={BUTTON}
        label="버튼"
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
    </div>
  )
}

export default TypeSelectRadioGroup
