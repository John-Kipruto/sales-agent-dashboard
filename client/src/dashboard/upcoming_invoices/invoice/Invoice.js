import AppContext from '../../../context/AppContext';
import './invoice.css'
import {useContext, useState} from 'react'

const Invoice = ({invoice}) => {
    const {apiUrl, setCollections} = useContext(AppContext)
    const [modalVisibility, setModalVisibility] = useState("hidden");
    const [collectionDetails, setCollectionDetails] = useState({

        "invoiceId": invoice.id,
        "schoolId": invoice.schoolId,
        "productId": invoice.productId,
        "collectionDate": Date.now(),
        "status": "valid",
        "amount": 0

    })

    const hideModal = () => {
        setModalVisibility("hidden")
    }

    const showModal = () => {
        setModalVisibility("visible")
    }

    const handleChange = (event) => {
        setCollectionDetails({...collectionDetails, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {
        hideModal()
        event.preventDefault()

        // Create a new collection for the invoice
        const response = await fetch(`${apiUrl}/collections`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...collectionDetails})
        })

        if(response.ok){
            alert("Collection Submitted Successfully")

            // Get new collection list to update current list
            const collectionResponse = await fetch(`${apiUrl}/collections`)
            if(collectionResponse.ok){
                const newCollectionList = await collectionResponse.json()
                setCollections(newCollectionList)
            }
        } else{
            alert("Error creating collection")
        }
        
    }

  return (
    <div className="invoice">
        <div>#{invoice.id}</div>
        <div>{invoice.schoolId}</div>
        <div>Ksh. {invoice.amount}</div>
        <div>{invoice.dueDate}</div>
        <div><button onClick={showModal}>Collect Payment</button></div>

        <div className="modal" style={{visibility: `${modalVisibility}`}}>
          <p><button onClick={hideModal}><b>X</b></button></p>
          <h3>Collection Details</h3>
          <form>
                <div>
                    <label htmlFor='amount'>Amount(Ksh.)</label>
                    <input id='amount' value={collectionDetails["amount"]} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={handleSubmit}>Collect</button>
                </div>
          </form>
        </div>
    </div>
  )
}

export default Invoice