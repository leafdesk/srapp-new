import React, { useState } from 'react'

export default function WeeklySummary({ data }: any) {
  const [translation, setTranslation] = useState(true)

  return (
    <div className="gist_wrap">
      <div className="gist_title">
        {translation ? data?.titleKR : data?.titleEN}
        <span
          className="translation"
          onClick={() => {
            setTranslation(!translation)
          }}
        ></span>
      </div>
      <div className="main_bible">
        {translation ? data?.bible : data?.bibleEN}
      </div>
      <div className="gist" style={{ whiteSpace: 'pre-wrap' }}>
        {translation ? data?.descriptionKR : data?.descriptionEN}
        <span className="bible">
          {/* <div className="layer_bible">
                        <span className="btn_close"></span>
                        <ul className="verse_list">
                            <li><strong>1.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                            <li><strong>2.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                            <li><strong>3.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                        </ul>
                    </div> */}
        </span>
      </div>
    </div>
  )
}
