import { useContext } from 'react'
import './signups.css'
import AppContext from '../../../context/AppContext'

const Signups = () => {
  const {schools} = useContext(AppContext)
  const signups = schools.length
  return (
    <div className='metric'>
      <div className='icon-header'>
        <div className='icon lightgold'><i class="bi bi-building-fill-up"></i></div>
        <h4>SIGNUPS</h4>
      </div>
        
        <div className='contents'>
          <p>{signups}</p>
        </div>
    </div>
  )
}

export default Signups