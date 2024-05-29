import SchoolList from './school_list/SchoolList'
import './school_management.css'

const SchoolManagement = () => {
  return (
    <div className='school-management'>
        <h1>School Management</h1>
        <SchoolList />
    </div>
  )
}

export default SchoolManagement