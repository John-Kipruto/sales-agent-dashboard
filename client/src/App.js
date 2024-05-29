import './App.css';
import Dashboard from './dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom'
import SchoolManagement from './school_management/SchoolManagement';
import SchoolDetail from './school_management/school_detail/SchoolDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/schools' element={<SchoolManagement />} />
        <Route exact path='/school-detail' element={<SchoolDetail />} />
      </Routes>
      
    </div>
  );
}

export default App;
