import { useContext } from 'react'
import './collections.css'
import AppContext from '../../../context/AppContext'

const Collections = () => {
  const {collections} = useContext(AppContext)
  return (
    <div className='metric'>
      <div className='icon-header'>
        <div className='icon lightblue'><i class="bi bi-wallet2"></i></div>
        <h4>COLLECTIONS</h4>
      </div>
        
        <div className='contents'>
          
          <p>{collections.length}</p>
        </div>
    </div>
  )
}

export default Collections