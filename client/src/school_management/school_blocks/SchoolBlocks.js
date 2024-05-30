import { useContext } from 'react'
import './school_blocks.css'
import SchoolBlock from './SchoolBlock'
import AppContext from '../../context/AppContext'

const SchoolBlocks = () => {
    const {schools} = useContext(AppContext)

  return (
    <div className='school-blocks'>
        <h2>Schools</h2>
        <div className='grid-container'>
            {
                schools.map(school => <SchoolBlock school={school} />)
            }
        </div>
    </div>
  )
}

export default SchoolBlocks