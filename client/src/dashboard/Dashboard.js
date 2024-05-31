import './dashboard.css'
import TopCardMetrics from './top_card_metrics/TopCardMetrics'
import UpcomingInvoices from './upcoming_invoices/UpcomingInvoices'
import TargetVisualisation from './target_visualisation/TargetVisualisation'
import SignupsOverview from './signups_overview/SignupsOverview'
import Extras from './extras/Extras'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <h2 className='heading-title'>DASHBOARD</h2>
        <div className='components-container'>
          <TopCardMetrics />
          <div className='dashboard-grid-container'>
            <div className="main-components">
              <SignupsOverview />
              <UpcomingInvoices />
              <Extras />
            </div>
            <TargetVisualisation />
          </div> 
        </div>
    </div>
    
  )
}

export default Dashboard