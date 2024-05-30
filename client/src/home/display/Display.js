import { useContext } from 'react'
import Dashboard from '../../dashboard/Dashboard'
import './display.css'
import AppContext from '../../context/AppContext'
import SchoolBlocks from '../../school_management/school_blocks/SchoolBlocks'
import SchoolList from '../../school_management/school_list/SchoolList'
import SchoolDetail from '../../school_management/school_detail/SchoolDetail'

const Display = () => {
    const {componentToDisplay} = useContext(AppContext)
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