import { Route,Routes } from 'react-router-dom';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import EmployeeForm from './Components/EmployeeForm';


function App() {
  return (
    <div className="App">
        
      <div className='conatainer'>
          <Routes>
             <Route path='/' element={<EmployeeList/>}/>
             <Route path="/create-employee" element={<EmployeeForm/>}  />
             <Route path="/edit-employee/:id" element={<EmployeeForm/>}/>
           

          </Routes>
      </div>
    </div>
  );
}

export default App;
