import './school.css'

const School = ({school}) => {
  return (
    <div className='school'>
        <div>{school.id}</div>
        <div>{school.name}</div>
        <div>{school.type}</div>
        <div>{school.county}</div>
        <div><button>View details</button></div>
    </div>
  )
}

export default School