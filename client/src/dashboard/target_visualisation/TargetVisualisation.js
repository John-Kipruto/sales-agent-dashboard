import PieChart from './PieChart'
import './target_visualisation.css'

const TargetVisualisation = () => {
    const products = [
        {
            goalTarget: 20,
            schools: [
                {
                    name: "St. Jules",
                    type: "primary"
                },
                {
                    name: "Robitson High",
                    type:"IGCe"
                },
                {
                    name: "Econs",
                    type: "Secon"
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
                    type: "primary"
                },
                {
                    name: "Robitson High",
                    type:"IGCe"
                },
                {
                    name: "Econs",
                    type: "Secon"
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
                    type: "primary"
                },
                {
                    name: "Robitson High",
                    type:"IGCe"
                },
                {
                    name: "Econs",
                    type: "Secon"
                }
                
            ],
            description: "timetable",
            name: "Zeraki Timetable"
        }, 
    ]
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