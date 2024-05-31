import { useContext } from 'react'
import './school.css'
import AppContext from '../../../context/AppContext'

const School = ({school}) => {

  const {setComponentToDisplay, setSelectedSchool} = useContext(AppContext)

  // Set color of the school type based on the type
  let color = "lightgreen"

  if(school.type.toLowerCase() === "primary"){
    color = "lightblue"
  }

  if(school.type.toLowerCase() === "secondary"){
    color = "lightred"
  }

  const handleClick = () => {
    setSelectedSchool(school)
    setComponentToDisplay("school-detail")
  }

  return (
    <div onClick={handleClick} className='school'>
        <div>{school.id}</div>
        <div>{school.name}</div>
        <div ><span className={color}>{school.type}</span></div>
        <div>{school.county}</div>
        <div><button onClick={handleClick}>View details</button></div>
    </div>
  )
}

export default School