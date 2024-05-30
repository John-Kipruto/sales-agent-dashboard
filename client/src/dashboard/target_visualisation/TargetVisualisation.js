import { useContext } from 'react'
import PieChart from './PieChart'
import './target_visualisation.css'
import AppContext from '../../context/AppContext'

const TargetVisualisation = () => {
    const {products} = useContext(AppContext)
  return (
    <div className="target-visualisation">
        <div className='grid-container'>
            {
                products.map(prod => <PieChart product={prod}/>)
            }
        </div>
    </div>
  )
}

export default TargetVisualisation