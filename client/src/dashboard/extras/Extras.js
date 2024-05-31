import Activity from './activity/Activity'
import './extras.css'
import Social from './social/Social'

// This component displays extra features not included in the project tast
const Extras = () => {
  return (
    <div className='extras grid-container'>
        <Social />
        <Activity />
    </div>
  )
}

export default Extras