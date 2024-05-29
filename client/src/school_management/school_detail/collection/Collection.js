import './colection.css'

const Collection = ({collection}) => {
    let color = "orange"
    if(collection.status === "valid"){
        color = "green"
    }
  return (
    <div className='collection'>
        <div>{collection.id}</div>
        <div>{collection.collectionDate}</div>
        <div style={{color: `${color}`}}>{collection.status}</div>
        <div>Ksh. {collection.amount}</div>
    </div>
  )
}

export default Collection