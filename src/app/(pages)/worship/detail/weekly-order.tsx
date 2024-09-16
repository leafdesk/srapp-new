export default function WeeklyOrder({ data }: any) {
  // console.log(data);
  return (
    <ul className="order_wrap">
      <li>
        <span>찬송</span>
        <span>{data?.hymn1}장</span>
        <span>일어서서</span>
      </li>
      <li>
        <span>기원</span>
        <span></span>
        <span>사회자</span>
      </li>
      <li>
        <span>주신기도</span>
        <span></span>
        <span>다같이</span>
      </li>
      <li>
        <span>찬송</span>
        <span>{data?.hymn2}장</span>
        <span>다같이</span>
      </li>
      <li>
        <span>참회기도</span>
        <span></span>
        <span>다같이</span>
      </li>
      <li>
        <span>찬송</span>
        <span>주님을 의지합니다</span>
        <span>다같이</span>
      </li>
      <li>
        <span>기도</span>
        <span>
          ①{data?.pray1} ②{data?.pray2}
        </span>
        <span></span>
      </li>
      <li>
        <span>성시합독</span>
        <span>시편 23편</span>
        <span>다같이</span>
      </li>
      <li>
        <span>헌금</span>
        <span>헌금송</span>
        <span>다같이</span>
      </li>
      <li>
        <span>찬송</span>
        <span>할렐루야</span>
        <span>일어서서</span>
      </li>
      <li>
        <span>봉헌기도</span>
        <span></span>
        <span>목사</span>
      </li>
      <li>
        <span>찬양</span>
        <span>성가대</span>
        <span>다같이</span>
      </li>
      <li>
        <span>성경교독</span>
        <span>{data?.bible}</span>
        <span>다같이</span>
      </li>
      <li>
        <span>합심기도</span>
        <span></span>
        <span>다같이</span>
      </li>
      <li>
        <span>설교</span>
        <span>{data?.titleKR}</span>
        <span>김성현 감독</span>
      </li>
      <li>
        <span>찬송</span>
        <span></span>
        <span>다같이</span>
      </li>
      <li>
        <span>축도</span>
        <span></span>
        <span>목사</span>
      </li>
    </ul>
  )
}
