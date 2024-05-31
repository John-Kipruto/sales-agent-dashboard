import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../context/AppContext"

const SchoolBlock = ({school}) => {

    // Get selected schools and enable setting of component to display
    const {setComponentToDisplay, setSelectedSchool} = useContext(AppContext)

    // Set colors based on the first letter of the school name
    let letter = school.name.charAt(0).toLowerCase()
    let color = 'orange'

    if(letter === 'a' || letter === 'd' || letter === 'g' || letter === 'j'|| letter === 'm'|| letter === 'p' ){
        color = "green"
    }

    if(letter === 'b' || letter === 'e'|| letter === 'h'|| letter === 'k'|| letter === 'n'|| letter === 'q'){
        color = "gold"
    }

    if(letter === 'c' || letter === 'f'|| letter === 'i'|| letter === 'l'|| letter === 'o'|| letter === 'r'){
        color = "blue"
    }


    const handleClick = () => {
        setComponentToDisplay("school-detail")
        setSelectedSchool(school)
    }

  return (
    <Link onClick={handleClick} className='school-block' >
        <div>
            <h1
                style={{backgroundColor: `${color}`, padding: "20px", borderRadius: "50%"}} 
            >{school.name.charAt(0)}</h1>
            <p>{school.name}</p>
        </div>
        
    </Link>
  )
}

export default SchoolBlock