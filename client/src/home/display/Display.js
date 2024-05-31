import { useContext } from 'react'
import Dashboard from '../../dashboard/Dashboard'
import './display.css'
import AppContext from '../../context/AppContext'
import SchoolBlocks from '../../school_management/school_blocks/SchoolBlocks'
import SchoolList from '../../school_management/school_list/SchoolList'
import SchoolDetail from '../../school_management/school_detail/SchoolDetail'


// This is the main display of the app
const Display = () => {

    // Get selected component to be displayed
    const {componentToDisplay} = useContext(AppContext)

    // Display different components based on the value of the selected components
 if(componentToDisplay === "dashboard"){
    return (
        <div className='display'>
            <Dashboard />
        </div>
    )
 }
 if(componentToDisplay === "schools"){
    return(
        <div className='display'>
            <SchoolBlocks />
        </div>
    )
 }

 if(componentToDisplay === "school-list"){
    return(
        <div className='display'>
            <SchoolList />
        </div>
    )
 }

 if(componentToDisplay === "school-detail"){
    return(
        <div className='display'>
            <SchoolDetail />
        </div>
    )
 }
}

export default Display