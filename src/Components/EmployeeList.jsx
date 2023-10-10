import React from 'react'
import EmployeeItem from './EmployeeItem'
import { useEffect, useState } from 'react';
import { getListEmployees } from '../service/localStorage';
import { useNavigate } from 'react-router-dom';
import "./EmployeeForm.css";
const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);
  return (
    <div>
        
        <button
                            className="btn btn-outline-secondary my-2 my-sm-0"
                            onClick={() => navigate("/create-employee")}
                        >
                            ADD MEMEBER
                        </button>
        {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                             
                            </thead>
                            <tbody className="table-primasry">
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Members</h3>
                )
            }
    </div>
  )
}

export default EmployeeList
