import { useContext } from 'react'
import Invoice from './invoice/Invoice'
import './upcoming_invoices.css'
import AppContext from '../../context/AppContext'

const UpcomingInvoices = () => {

  const {invoices} = useContext(AppContext)
  return (
    <div className="upcoming-invoices">
        <h2>Upcoming Invoices</h2>
        <div className='invoice-headers'>
          <div><h3>ID</h3></div>
          <div><h3>School</h3></div>
          <div><h3>Amount</h3></div>
          <div><h3>Due</h3></div>
          <div><h3>Action</h3></div>
        </div>
        <div>
          {
            invoices.map(invoice => <Invoice invoice={invoice} />)
          }
        </div>
    </div>
  )
}

export default UpcomingInvoices