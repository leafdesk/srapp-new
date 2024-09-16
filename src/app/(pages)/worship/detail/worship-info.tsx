import WeeklyOrder from './weekly-order'
import WeeklySummary from './weekly-summary'

type WorshipInfoProps = {
  kind: string
  data: any
  tabKind: any
  setTabKind: any
}

const WorshipInfo = ({ kind, data, tabKind, setTabKind }: WorshipInfoProps) => {
  return (
    <>
      {(kind == 'def' || kind == 'sun') && data?.weekly[0] && (
        <div className="section">
          <ul className="tab_area">
            <li
              onClick={() => {
                if (tabKind != 'ord') {
                  setTabKind('ord')
                }
              }}
              className={tabKind == 'ord' ? 'on' : ''}
            >
              예배순서
            </li>
            <li
              onClick={() => {
                if (tabKind != 'ser') {
                  setTabKind('ser')
                }
              }}
              className={tabKind == 'ser' ? 'on' : ''}
            >
              설교요지
            </li>
          </ul>
          <div className="tab_con">
            {tabKind == 'ord' && <WeeklyOrder data={data?.weekly[0]} />}
            {tabKind == 'ser' && <WeeklySummary data={data?.weekly[0]} />}
          </div>
        </div>
      )}
    </>
  )
}

export default WorshipInfo
