import AppContext from '../../../context/AppContext';
import './invoice.css'
import {  useContext, useState } from 'react';

const Invoice = ({invoice}) => {
    const {invoices, setInvoices, apiUrl} = useContext(AppContext)
    const [updateModalVisibility, setUpdateModalVisibility] = useState("hidden");
    const [deleteModalVisibility, setDeleteModalVisibility] = useState("hidden");
    const [updateCollectionDetails, setUpdateCollectionDetails] = useState({

        id: invoice.id,
        dueDate: invoice.dueDate,
        amount: invoice.amount,
        schoolId: invoice.schoolId,
        productId: invoice.productId,
        creationDate: invoice.creationDate

    })

    const hideUpdateModal = () => {
        setUpdateModalVisibility("hidden")
    }

    const showUpdateModal = () => {
        setUpdateModalVisibility("visible")
    }

    const handleUpdateChange = (event) => {
        setUpdateCollectionDetails({...updateCollectionDetails, [event.target.id]: event.target.value})
    }

    const handleUpdateSubmit = async (event) => {
        event.preventDefault()
        hideUpdateModal()

        const response = await fetch(`${apiUrl}/invoices/${invoice.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateCollectionDetails)
        })

        if(response.ok){
            const invoicesResponse = await fetch(`${apiUrl}/invoices`)
            if(invoicesResponse.ok){
                const invoicesResult = await invoicesResponse.json()
                console.log("Invoice results", invoicesResult)
                setInvoices(invoicesResult)
            }
            alert("Invoice Updated Successfully")

        } else {
            alert("Erorr Updating")
        }
        
    }

    // Handle delete click

    const hideDeleteModal = () => {
        setDeleteModalVisibility("hidden")
    }

    const showDeleteModal = () => {
        setDeleteModalVisibility("visible")
    }

    const handleNoDelete = () => {
        hideDeleteModal()
    }

    const handleYesDelete = async () => {
        setInvoices([...invoices])
        hideDeleteModal()
        const response = await fetch(`${apiUrl}/invoices/${invoice.id}`, {
            method: "DELETE",
            
        })
        if(response.ok){
            const invoicesResponse = await fetch(`${apiUrl}/invoices`)
            if(invoicesResponse.ok){
                const invoicesResult = await invoicesResponse.json()
                setInvoices(invoicesResult)
            }
        }
        
    }

   
  return (
    <div className='invoice'>
        <div>{invoice.id}</div>
        <div>{invoice.creationDate}</div>
        <div>{invoice.dueDate}</div>
        <div>Ksh. {invoice.amount}</div>
        <div><button className='edit-btn' onClick={showUpdateModal}><i class="bi bi-pencil"></i> Edit</button></div>
        <div><button className='delete-btn' onClick={showDeleteModal}><i class="bi bi-trash-fill"></i> Delete</button></div>

        <div className="modal update-modal" style={{visibility: `${updateModalVisibility}`}}>
          <div>
            <p><button onClick={hideUpdateModal}><b>X</b></button></p>
            <h3>Update Invoice Number {invoice.id}</h3>
            <form>
                    <div>
                        <label htmlFor='dueDate'>Due Date</label>
                        <input id='dueDate' value={updateCollectionDetails["dueDate"]} onChange={handleUpdateChange} />
                    </div>
                    <div>
                        <label htmlFor='amount'>Amount(Ksh.)</label>
                        <input id='amount' value={updateCollectionDetails["amount"]} onChange={handleUpdateChange} />
                    </div>
                    <div>
                        <button onClick={handleUpdateSubmit}>Update</button>
                    </div>
            </form>
          </div>
        </div>

        <div className="modal" style={{visibility: `${deleteModalVisibility}`}}>
            <div>
                <h3>Are you sure you want to delete invoice number {invoice.id} ?</h3>
                <div className='btns-container'>
                    <button className='no-btn' onClick={handleNoDelete}>No</button>
                    <button className='yes-btn' onClick={handleYesDelete}>Yes</button>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Invoice