import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../context/AppContext"

const SchoolBlock = ({school}) => {

    // Get selected schools and enable setting of component to display
    const {setComponentToDisplay, setSelectedSchool} = useContext(AppContext)

    // Set colors based on the first letter of the school name
    let letter = school.name.charAt(0).toLowerCase()
    let color = 'orange'

    if(letter === 'a' || letter === 'g' || letter === 'm' || letter === 's' ){
        color = "green"
    }

    if(letter === 'b' || letter === 'h'|| letter === 'n'|| letter === 't'|| letter === 'y'){
        color = "red"
    }

    if(letter === 'c' || letter === 'i'|| letter === 'o'|| letter === 'u'|| letter === 'z'){
        color = "blue"
    }

    if(letter === 'd' || letter === 'j'|| letter === 'p'|| letter === 'v'){
        color = "purple"
    }

    if(letter === 'e' || letter === 'k'|| letter === 'q'|| letter === 'w'){
        color = "gold"
    }

    if(letter === 'f' || letter === 'l'|| letter === 'r'|| letter === 'x'){
        color = "brown"
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