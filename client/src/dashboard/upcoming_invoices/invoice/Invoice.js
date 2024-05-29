import './invoice.css'
import {useState} from 'react'

const Invoice = ({invoice}) => {
    const [modalVisibility, setModalVisibility] = useState("hidden");
    const [collectionDetails, setCollectionDetails] = useState({

        "invoiceId": 1,
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

    const handleSubmit = (event) => {
        hideModal()
        event.preventDefault()
        alert("Collection Submitted Successfully")
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