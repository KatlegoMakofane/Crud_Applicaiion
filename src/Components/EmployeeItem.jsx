import React from 'react'
import { removeEmployee } from '../service/localStorage';
import { getListEmployees } from '../service/localStorage';
import { useNavigate } from 'react-router-dom';
import "./EmployeeForm.css";

const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, name, email, image} = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }
  return (
    <tr className="table-primasry">
            <td><img src={image} className='img' alt=""/></td>
            <tr className='tr'>
            <td>{name}</td>
            </tr>

            <tr className='tr'>
            <td>{email}</td>
            </tr>
            
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='trd'>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
                </div>
            </td>
        </tr>
  )
}

export default EmployeeItem
//herloo
