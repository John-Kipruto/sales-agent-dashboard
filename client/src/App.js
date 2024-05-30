import './App.css';
import Dashboard from './dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom'
import SchoolManagement from './school_management/SchoolManagement';
import SchoolDetail from './school_management/school_detail/SchoolDetail';
import Home from './home/Home';
import AppContext from './context/AppContext';
import { useEffect, useState } from 'react';

function App() {

  // let apiUrl = "http://localhost:8888/.netlify/functions"
  let apiUrl = "https://sales-mi.netlify.app/.netlify/functions"

  const [componentToDisplay, setComponentToDisplay] = useState("dashboard")

  const [collections, setCollections] = useState([])
  const [schools, setSchools] = useState([])
  const [invoices, setInvoices] = useState([])
  const [products, setProducts] = useState([])
  const [selectedSchool, setSelectedSchool] = useState({})

  const contextValues = {componentToDisplay, setComponentToDisplay, collections, setCollections, schools, setSchools,
    invoices, setInvoices, products, setProducts, selectedSchool, setSelectedSchool, apiUrl,
  }

  const fetchCollections = async () => {
    const response = await fetch(`${apiUrl}/collections`)
    if(response){
      let results = await response.json()
      setCollections(results)
    }
  }

  const fetchInvoices = async () => {
    const response = await fetch(`${apiUrl}/invoices`)
    if(response){
      let results = await response.json()
      setInvoices(results)
    }
  }

  const fetchSchools = async () => {
    const response = await fetch(`${apiUrl}/schools`)
    if(response){
      let results = await response.json()
      setSchools(results)
    }
  }

  const fetchProducts = async () => {
    const response = await fetch(`${apiUrl}/products`)
    if(response){
      let results = await response.json()
      setProducts(results)
    }
  }

  useEffect(() => {
    fetchCollections()
    fetchInvoices()
    fetchProducts()
    fetchSchools()
  }, [])

  return (
    <div className="App">
      <AppContext.Provider value={{...contextValues}}>
         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/schools' element={<SchoolManagement />} />
          <Route exact path='/schools-list' element={<SchoolManagement />} />
          <Route exact path='/school-detail' element={<SchoolDetail />} />
        </Routes>
      </AppContext.Provider>
     <h1>My First App</h1>
      
    </div>
  );
}

export default App;
