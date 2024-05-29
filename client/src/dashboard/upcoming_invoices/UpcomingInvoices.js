import Invoice from './invoice/Invoice'
import './upcoming_invoices.css'

const UpcomingInvoices = () => {

  const invoices = [
    {
      "id": "1",
      "productId": "1",
      "schoolId": "1",
      "creationDate": "2023-12-23",
      "dueDate": "2024-03-14",
      "amount": 90000
  },
  {
      "id": "2",
      "productId": "2",
      "schoolId": "1",
      "creationDate": "2023-12-23",
      "dueDate": "2024-03-14",
      "amount": 90000
  },
  {
      "id": "3",
      "productId": "3",
      "schoolId": "1",
      "creationDate": "2023-12-23",
      "dueDate": "2024-03-14",
      "amount": 90000
  },
  {
      "id": "4",
      "productId": "2",
      "schoolId": "1",
      "creationDate": "2023-10-23",
      "dueDate": "2024-03-14",
      "amount": 30000
  },
  {
      "id": "5",
      "productId": "3",
      "schoolId": "1",
      "creationDate": "2023-11-23",
      "dueDate": "2024-03-14",
      "amount": 40000
  },
  {
      "id": "6",
      "productId": "1",
      "schoolId": "2",
      "creationDate": "2023-12-23",
      "dueDate": "2024-03-14",
      "amount": 90000
  },
  {
      "id": "7",
      "productId": "2",
      "schoolId": "2",
      "creationDate": "2023-12-23",
      "dueDate": "2024-03-14",
      "amount": 90000
  },
  {
      "id": "8",
      "productId": "3",
      "schoolId": "2",
      "creationDate": "2023-12-23",
      "dueDate": "2024-03-14",
      "amount": 90000
  },
  {
      "id": "9",
      "productId": "2",
      "schoolId": "2",
      "creationDate": "2023-10-23",
      "dueDate": "2024-03-14",
      "amount": 30000
  },
  {
      "id": "10",
      "productId": "3",
      "schoolId": "2",
      "creationDate": "2023-11-23",
      "dueDate": "2024-03-14",
      "amount": 40000
  },
  ]
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