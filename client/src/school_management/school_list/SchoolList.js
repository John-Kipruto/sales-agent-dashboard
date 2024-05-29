import School from './school/School'
import './school_list.css'

const SchoolList = () => {
    const schools = [
        {
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
        },{
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
    ]
  return (
    <div className='school-list'>
        <h2>School List</h2>
        <div className='school-list-container'>
            <div className='headers'>
                <div><h4>ID</h4></div>
                <div><h4>Name</h4></div>
                <div><h4>Type</h4></div>
                <div><h4>County</h4></div>
                <div><h4>Action</h4></div>
            </div>
            {
                schools.map(school => <School school={school} />)
            }
        </div>
    </div>
  )
}

export default SchoolList