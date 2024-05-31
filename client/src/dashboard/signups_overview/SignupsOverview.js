import { useContext } from 'react'
import BarChart from './BarChart'
import './signups_overview.css'
import AppContext from '../../context/AppContext'


// This components displays the different bar graphs for different products
const SignupsOverview = () => {

    // Get all the products
    const {products} = useContext(AppContext)

  return (
    <div className="signups-overview">
        <h2>Signups Overview</h2>

        {/* Display what the different colors represent for the different graphs */}
        <div className='color-contents'>
            <div className='color-info'>
                <div className='color-container' style={{
                    width: "30px",
                    height: "10px",
                    backgroundColor: "blue"
                }}></div>
                <div>Primary</div>
            </div>

            <div className='color-info'>
                <div className='color-container' style={{
                    width: "30px",
                    height: "10px",
                    backgroundColor: "black"
                }}></div>
                <div>Secondary</div>
            </div>

            <div className='color-info'>
                <div className='color-container' style={{
                    width: "30px",
                    height: "10px",
                    backgroundColor: "gold"
                }}></div>
                <div>IGSCE</div>
            </div>
        </div>
        
        <div className='grid-container'>
            <div className='flex-container'>
                {
                    products.map(prod => <BarChart product={prod} />)
                }
            </div>
        </div>
        
    </div>
  )
}

export default SignupsOverview