import React from 'react'
import { removeEmployee } from '../service/localStorage';
import { getListEmployees } from '../service/localStorage';
import { useNavigate } from 'react-router-dom';
import "./EmployeeForm.css";
import {MdOutlineDelete} from 'react-icons/md'
import {FiEdit2} from 'react-icons/fi'
const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, name, email, fileurl} = employee;
    console.log(employee);
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }
  return (

    <div  className='Member__container'>
        <div className='leftside'>
            <img src={fileurl} className='img' alt=""/>
               <div className='text__container'>
                    <p>{name}</p>
                   <br></br>
                   <p>{email}</p>
               </div>
                 
              
        </div>
       
        <div className='rightside'> 
                  <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}><FiEdit2 style={{color: 'blue', fontSize: "30"}}/></span>
                   <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}><MdOutlineDelete style={{color: 'blue', fontSize: "30"}}/></span>
              </div>
        
                  
         {/* <img src={image} className='img' alt=""/>
           
           {name}
          

           
           {email}
           
               <div className="d-flex gap-3">
                   <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                   <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
               </div> */}
    </div>
    
          
        
  ) 
}

export default EmployeeItem
//herloo
