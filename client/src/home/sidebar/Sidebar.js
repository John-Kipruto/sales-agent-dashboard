import { useContext } from 'react'
import './sidebar.css'
import AppContext from '../../context/AppContext'

const Sidebar = () => {
  
  // Set component to display based on the id value of the dashboard contents
    const {setComponentToDisplay} = useContext(AppContext)
  return (
    <div className='sidebar-container'>
        <div className='sidebar'>
            <ul>
                <li onClick={(event) => setComponentToDisplay(event.target.id)} id="dashboard">Dashboard</li>
                <li onClick={(event) => setComponentToDisplay(event.target.id)} id="schools">Schools</li>
                <li onClick={(event) => setComponentToDisplay(event.target.id)} id="school-list">School List</li>

            </ul>
        </div>
    </div>
    
  )
}

export default Sidebar