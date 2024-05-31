import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../context/AppContext"

const SchoolBlock = ({school}) => {

    // Get selected schools and enable setting of component to display
    const {setComponentToDisplay, setSelectedSchool} = useContext(AppContext)

    // Set colors based on the first letter of the school name
    let letter = school.name.charAt(0).toLowerCase()
    let color = 'orange'

    if(letter === 'a' || letter === 'l' || letter === 'w'  ){
        color = "green"
    }

    if(letter === 'b' || letter === 'm'|| letter === 'x'){
        color = "red"
    }

    if(letter === 'c' || letter === 'n'|| letter === 'y'){
        color = "blue"
    }

    if(letter === 'd' || letter === 'o'|| letter === 'z'){
        color = "purple"
    }

    if(letter === 'e' || letter === 'p'){
        color = "gold"
    }

    if(letter === 'f' || letter === 'q'){
        color = "brown"
    }

    if(letter === 'g' || letter === 'r'){
        color = "pink"
    }

    if(letter === 'h' || letter === 's'){
        color = "yellow"
    }

    if(letter === 'i' || letter === 't'){
        color = "indigo"
    }

    if(letter === 'j' || letter === 'u'){
        color = "khaki"
    }

    if(letter === 'k' || letter === 'v'){
        color = "lightblue"
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