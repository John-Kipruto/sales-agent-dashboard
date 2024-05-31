import AppContext from '../../../context/AppContext'
import './colection.css'
import { useContext, useState } from 'react'

const Collection = ({collectionPassed}) => {

    // Set color of the status text based on its value
    let color = "orange"
    if(collectionPassed.status === "valid"){
        color = "green"
    }

    // Use the apiUrl to fetch data and set the global collections oncea collection is updated
    // const {apiUrl, setCollections} = useContext(AppContext)

    // Set component state to enable viewing of new data updated
    const [collection, setCollection] = useState(collectionPassed)

    // Enable viewing and hiding of the update modal
    const [modalVisibility, setModalVisibility] = useState("hidden");

    // Set the collection details when updated
    const [collectionDetails, setCollectionDetails] = useState({

        "id": collection.id,
        "invoiceId": collection.invoiceId,
        "schoolId": collection.schoolId,
        "productId": collection.productId,
        "collectionDate": collection.collectionDate,
        "status": collection.status,
        "amount": collection.amount

    })

    const hideModal = () => {
        setModalVisibility("hidden")
    }

    const showModal = () => {
        setModalVisibility("visible")
    }

    // Set collection details to new data as they are being input
    const handleChange = (event) => {
        setCollectionDetails({...collectionDetails, [event.target.id]: event.target.value})
    }


    // Mimic submition of data
    const handleSubmit = async (event) => {
        hideModal()
        event.preventDefault()
        // const response = await fetch(`${apiUrl}/collections/${collection.id}`, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(collectionDetails)
        // })
        // if(response.ok){
        //   const collectionResponse = await fetch(`${apiUrl}/collections`)
        //   if(collectionResponse.ok){
        //     const collectionData = await collectionResponse.json()
        //     setCollections(collectionData)
        //   }
        //   alert("Collection Updated Successfully")
        // }
        
        // Mimick real time update
        setCollection(collectionDetails)
    }

  return (
    <div className='collection'>

        {/* Collection details */}
        <div>{collection.id}</div>
        <div>{collection.invoiceId}</div>
        <div>{collection.collectionDate}</div>
        <div style={{color: `${color}`}}>{collection.status}</div>
        <div>Ksh. {collection.amount}</div>
        <div><button onClick={showModal}><i class="bi bi-pencil"></i>Edit</button></div>

{/* Collection modal */}
        <div className="modal" style={{visibility: `${modalVisibility}`}}>
          <div>
            
            <p><button onClick={hideModal}><b>X</b></button></p>
            <h3>Edit collection number {collection.id}</h3>
            <form>
                  <div>
                      <label htmlFor='collectionDate'>collection Date</label>
                      <input id='collectionDate' value={collectionDetails["collectionDate"]} onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor='status'>status</label>
                      <input id='status' value={collectionDetails["status"]} onChange={handleChange} />
                  </div>
                  <div>
                      <label htmlFor='amount'>Amount(Ksh.)</label>
                      <input id='amount' value={collectionDetails["amount"]} onChange={handleChange} />
                  </div>
                  <div>
                      <button onClick={handleSubmit}>Update Collection</button>
                  </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Collection