import BarChart from './BarChart'
import './signups_overview.css'

const SignupsOverview = () => {

    const products = [
        {
            goalTarget: 20,
            schools: [
                {
                    name: "St. Jules",
                    type: "Primary"
                },
                {
                    name: "Robitson High",
                    type:"IGSCE"
                },
                {
                    name: "Econs",
                    type: "Secondary"
                }
                
            ],
            description: "analytics",
            name: "Zeraki Analytics"
        }, 
        {
            goalTarget: 20,
            schools: [
                {
                    name: "St. Jules",
                    type: "Primary"
                },
                {
                    name: "Robitson High",
                    type:"IGSCE"
                },
                {
                    name: "Econs",
                    type: "Secondary"
                }
                
            ],
            description: "finance",
            name: "Zeraki Finance"
        }, 
        {
            goalTarget: 10,
            schools: [
                {
                    name: "St. Jules",
                    type: "Primary"
                },
                {
                    name: "Robitson High",
                    type:"Secondary"
                },
                {
                    name: "Econs",
                    type: "IGSCE"
                },
                {
                    name: "Econs",
                    type: "IGSCE"
                },
                {
                    name: "Econs",
                    type: "IGSCE"
                }
                
            ],
            description: "timetable",
            name: "Zeraki Timetable"
        }, 
    ]

  return (
    <div className="signups-overview">
        <h2>Signups Overview</h2>
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