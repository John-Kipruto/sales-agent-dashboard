import './invoice.css'
import { useState } from 'react';

const Invoice = ({invoice}) => {
    const [modalVisibility, setModalVisibility] = useState("hidden");
    const [collectionDetails, setCollectionDetails] = useState({

        id: invoice.id,
        dueDate: invoice.dueDate,
        amount: invoice.amount

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
        alert("Invoice Updated Successfully")
    }
  return (
    <div className='invoice'>
        <div>{invoice.id}</div>
        <div>{invoice.creationDate}</div>
        <div>{invoice.dueDate}</div>
        <div>Ksh. {invoice.amount}</div>
        <div><button className='edit-btn' onClick={showModal}><i class="bi bi-pencil"></i> Edit</button></div>
        <div><button className='delete-btn'><i class="bi bi-trash-fill"></i> Delete</button></div>

        <div className="modal" style={{visibility: `${modalVisibility}`}}>
          <p><button onClick={hideModal}><b>X</b></button></p>
          <h3>Update Invoice Number {invoice.id}</h3>
          <form>
                <div>
                    <label htmlFor='dueDate'>Due Date</label>
                    <input id='dueDate' value={collectionDetails["dueDate"]} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='amount'>Amount(Ksh.)</label>
                    <input id='amount' value={collectionDetails["amount"]} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={handleSubmit}>Update</button>
                </div>
          </form>
        </div>
    </div>
  )
}

export default Invoice