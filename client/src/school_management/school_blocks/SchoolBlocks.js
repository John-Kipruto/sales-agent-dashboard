// This code displays schools in blocks

import { useContext } from 'react'
import './school_blocks.css'
import SchoolBlock from './SchoolBlock'
import AppContext from '../../context/AppContext'

const SchoolBlocks = () => {

  // Get schools from the app provider
    const {schools} = useContext(AppContext)

  return (
    <div className='school-blocks'>
        <h2 className='heading-title'>SCHOOLS REGISTERED</h2>
        <div className='grid-container'>
            {
                schools.map(school => <SchoolBlock school={school} />)
            }
        </div>
    </div>
  )
}

export default SchoolBlocks