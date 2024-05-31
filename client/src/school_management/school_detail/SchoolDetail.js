// Display school details including its invoices and collections

import { useContext, useState} from 'react'
import Collection from './collection/Collection'
import Invoice from './invoice/Invoice'
import './school_detail.css'
import AppContext from '../../context/AppContext'


const SchoolDetail = () => {

    // Get selected school from the Appcontext provider
    const {selectedSchool, invoices, collections} =  useContext(AppContext)

    //  Get invoices of a specific school
    const [schoolInvoices, setSchoolInvoices] = useState(invoices.filter(invoice => invoice.schoolId === selectedSchool.id))
   
    // Get collections only for the selected school
    const schoolCollections = collections.filter(collection => collection.schoolId === selectedSchool.id)

  return (
    <div className='school-detail'>
        <div className='details'>
            <div className='grid-container'>
                <div><h1><i class="bi bi-buildings"></i> {selectedSchool.name}</h1></div>

                {/* School details including the name, addresses, contact info */}
                <div className='class-details'>
                    
                    <p><span className='icon-container lightpurple'><i class="bi bi-info-circle"></i></span><span><b>Type:</b> {selectedSchool.type}</span></p>
                    <p><span className='icon-container lightgold'><i class="bi bi-pin-map"></i></span><span><b> County:</b> {selectedSchool.county}</span></p>
                    <p><span className='icon-container lightgreen'><i class="bi bi-calendar-date"></i></span><span><b> Registration Date:</b> {selectedSchool.registrationDate}</span></p>
                    <p><span className='icon-container lightblue'><i class="bi bi-envelope-at"></i></span><span><b> Email:</b> {selectedSchool.contactInfo.email}</span></p>
                    <p><span className='icon-container lightpurple'><i class="bi bi-telephone-forward"></i></span><span><b> Phone:</b> {selectedSchool.contactInfo.phone}</span></p>
                    <p><button><i class="bi bi-pencil"></i> Update</button></p>
                </div>
            </div>
            
        </div>

    {/* Display invoices of the school */}
        <div className='invoice-collections'>
            <div className='invoices-container'>
                <h2>Invoices</h2>
                <div className='invoice-headers'>
                    <div><h3>ID</h3></div>
                    <div><h3>Created</h3></div>
                    <div><h3>Due Date</h3></div>
                    <div><h3>Amount</h3></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='invoices'>
                    {
                        schoolInvoices.map(invoice => <Invoice invoicePassed={invoice} schoolInvoices={schoolInvoices} setSchoolInvoices={setSchoolInvoices}/>)
                    }
                </div>
                
            </div>

{/* Display collections of the school */}
            <div className='collections-container'>
                <h2>Collections</h2>
                <div>
                    <div className='collection-headers'>
                        <div><h3>ID</h3></div>
                        <div><h3>Invoice No</h3></div>
                        <div><h3>Created</h3></div>
                        <div><h3>Status</h3></div>
                        <div><h3>Amount</h3></div>
                    </div>

                    <div className='collections'>
                        {
                            schoolCollections.map(collection => <Collection collectionPassed={collection} />)
                        }
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default SchoolDetail