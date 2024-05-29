import Collection from './collection/Collection'
import Invoice from './invoice/Invoice'
import './school_detail.css'

const SchoolDetail = () => {
    const school =  {
        "id": "1",
        "name": "High Fliers",
        "type": "Primary",
        "county": "Nairobi",
        "registrationDate": "2023-08-20",
        "contactInfo": {
            "email": "highfliers@gmail.com",
            "phone": "+254 759908112"
        },
        "products": [
            {
                "id":"1",
                "name": "Zeraki Analytics"
            },
            {
                "id":"2",
                "name":"Zeraki Finance"
            },
            {
                "id":"3",
                "name":"Zeraki Timetable"
            }
        ]
    }

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
        {
            "id": "11",
            "productId": "1",
            "schoolId": "3",
            "creationDate": "2023-12-23",
            "dueDate": "2024-03-14",
            "amount": 90000
        },
        {
            "id": "12",
            "productId": "2",
            "schoolId": "3",
            "creationDate": "2023-12-23",
            "dueDate": "2024-03-14",
            "amount": 90000
        },
    ]

    const collections = [
        {
            "id": "1",
            "invoiceId": "1",
            "productId": "1",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 9000
        },
        {
            "id": "2",
            "invoiceId": "2",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "3",
            "invoiceId": "3",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
        {
            "id": "4",
            "invoiceId": "4",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "5",
            "invoiceId": "5",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
        {
            "id": "6",
            "invoiceId": "6",
            "productId": "1",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 9000
        },
        {
            "id": "7",
            "invoiceId": "7",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "8",
            "invoiceId": "8",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
        {
            "id": "9",
            "invoiceId": "9",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "10",
            "invoiceId": "10",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
        {
            "id": "11",
            "invoiceId": "11",
            "productId": "1",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 9000
        },
        {
            "id": "12",
            "invoiceId": "12",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "13",
            "invoiceId": "13",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
        {
            "id": "14",
            "invoiceId": "14",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "15",
            "invoiceId": "15",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
        {
            "id": "16",
            "invoiceId": "16",
            "productId": "1",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 9000
        },
        {
            "id": "17",
            "invoiceId": "17",
            "productId": "2",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 32100
        },
        {
            "id": "18",
            "invoiceId": "18",
            "productId": "3",
            "collectionDate": "2023-10-18",
            "status": "valid",
            "amount": 4000
        },
    ]
  return (
    <div className='school-detail'>
        <div className='details'>
            <h1><i class="bi bi-buildings"></i> {school.name}</h1>
            <p><b>Type:</b> {school.type}</p>
            <p><span className='icon-container lightgold'><i class="bi bi-pin-map"></i></span><span><b> County:</b> {school.county}</span></p>
            <p><span className='icon-container lightgreen'><i class="bi bi-calendar-date"></i></span><span><b> Registration Date:</b> {school.registrationDate}</span></p>
            <p><span className='icon-container lightblue'><i class="bi bi-envelope-at"></i></span><span><b> Email:</b> {school.contactInfo.email}</span></p>
            <p><span className='icon-container lightpurple'><i class="bi bi-telephone-forward"></i></span><span><b> Phone:</b> {school.contactInfo.phone}</span></p>
            <p><button><i class="bi bi-pencil"></i> Update</button></p>
        </div>

        <div className='invoice-collections'>
            <div className='invoices-container'>
                <h2>Invoices</h2>
                <div className='invoices'>
                    {
                        invoices.map(invoice => <Invoice invoice={invoice} />)
                    }
                </div>
                
            </div>

            <div className='collections-container'>
                <h2>Collections</h2>
                <div className='collections'>
                    {
                        collections.map(collection => <Collection collection={collection} />)
                    }
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SchoolDetail