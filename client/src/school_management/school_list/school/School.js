import { useContext } from 'react'
import './school.css'
import AppContext from '../../../context/AppContext'

const School = ({school}) => {

  const {setComponentToDisplay, setSelectedSchool} = useContext(AppContext)


  const handleClick = () => {
    setSelectedSchool(school)
    setComponentToDisplay("school-detail")
  }

  return (
    <div className='school'>
        <div>{school.id}</div>
        <div>{school.name}</div>
        <div>{school.type}</div>
        <div>{school.county}</div>
        <div><button onClick={handleClick}>View details</button></div>
    </div>
  )
}

export default School