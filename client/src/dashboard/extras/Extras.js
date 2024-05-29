import Activity from './activity/Activity'
import './extras.css'
import Social from './social/Social'


const Extras = () => {
  return (
    <div className='extras grid-container'>
        <Social />
        <Activity />
    </div>
  )
}

export default Extras