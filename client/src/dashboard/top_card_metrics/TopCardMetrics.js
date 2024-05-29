import './top_card_metrics.css'
import Revenue from './revenue/Revenue'
import Collections from './collections/Collections'
import Signups from './signups/Signups'
import BouncedCheques from './bounced_cheques/BouncedCheques'

const TopCardMetrics = () => {
  return (
    <div className="top-card-metrics">
        <div className='grid-container'>
            <Collections />
            <Signups />
            <Revenue />
            <BouncedCheques />
        </div>
    </div>
  )
}

export default TopCardMetrics