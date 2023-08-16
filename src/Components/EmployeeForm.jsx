import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { useForm } from "./../hooks/useForm";
import { addEmployee, getEmployeeById } from "../service/localStorage";
import { editEmployee } from "../service/localStorage";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const [fileurl, setFileUrl] = useState("");

  const handlePicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
          reader.onload = (e) => 
          {
               const dataurl = e.target.result;
               setFileUrl(dataurl);
          };
         reader.readAsDataURL(file);
         }
         console.log("THE DATA :"+fileurl)
         localStorage.setItem('value',fileurl)
  };
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
    image:localStorage.getItem("value")
  })

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
      
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? editEmployee(id, inputValues)
      : addEmployee({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="text-center">{id ? "Edit" : "Add new"} MEMBER</h1>
        <div />
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Image</label>
            <div>
              <img src={fileurl} className="img"  alt="" />
            </div>
            <input
             
             
              name="fileurl"
              type="file"
              className="=form-control"
              value={inputValues.fileurl}
              id="inputValid"
              onChange={handlePicture}
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              TITLE
            </label>
            <input
              name="email"
              type="text"
              value={inputValues.email}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          {/* <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div> */}

          {/* <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              value={inputValues.phone}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div> */}

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary btn-block">
              {id ? "Edit" : "Add"} Member
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success">
            <strong>Well done!</strong> {id ? "edit" : "added a new"} Member.
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
