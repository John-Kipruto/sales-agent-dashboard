import './revenue.css'

const Revenue = () => {
  const zerakiAnalytics = 500
  const zerakiFinance = 300
  const zerakiTimetable= 356

  return (
    <div className='metric'>
      <div className='icon-header'>
        <div className='icon lightgreen'><i class="bi bi-currency-dollar"></i></div>
        <h4>REVENUE</h4>
      </div>
        
        <div className='contents'>
          
          <div>
            <ul>
              <li><i>Zeraki Analytics {`--->`} Ksh.{zerakiAnalytics}</i></li>
              <li><i>Zeraki Finance {`--->`} Ksh.{zerakiFinance}</i></li>
              <li><i>Zeraki Timetable {`--->`} Ksh.{zerakiTimetable}</i></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Revenue