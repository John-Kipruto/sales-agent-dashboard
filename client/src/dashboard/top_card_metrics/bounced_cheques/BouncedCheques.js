import { useContext } from 'react'
import './bounced_cheques.css'
import AppContext from '../../../context/AppContext'

const BouncedCheques = () => {
  const {collections} = useContext(AppContext)
  const bouncedCheques = collections.filter(collection => collection.status !== "valid").length
  return (
    <div className='metric'>
      <div className='icon-header'>
        <div className='icon lightpurple'><i class="bi bi-currency-rupee"></i></div>
        <h4>BOUNCED CHEQUES</h4>
      </div>
        
        <div className='contents'>
          
          <p>{bouncedCheques}</p>
        </div>
    </div>
  )
}

export default BouncedCheques