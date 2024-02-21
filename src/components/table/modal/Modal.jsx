import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {

  // error 
  const [errors , setErrors] = useState("") 
  
// form validation
  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("")
      return true
    } else {
      let errorFields = [];
      for (const  [key, value] of Object.entries(formState)){
        if(!value) {
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(","))
      return false
    }
  };

  //form edit/fill
  const [formState, setFormState] = useState(
    defaultValue ||
    {
      SNo: "",
      description: "",
      status: "Approved"
    });


  //handle change
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  //handle submit form(button)
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) return;

    onSubmit(formState);
    closeModal();
  }

  return (
    <div className="container" onClick={(e) => {
      if (e.target.className === "container")
        closeModal();
    }}>
      <div className="cont">
        <form>
        <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status" value={formState.status} onChange={handleChange} >
              <option value="live"> Approved</option>
              <option value="draft">Rejected</option>
              <option value="error"> error</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="page">S.No</label>
            <input name="page" value={formState.SNo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="desscription">Description</label>
            <textarea name="description" value={formState.description} onChange={handleChange} />
          </div>
          { errors && <div className= "error">
            {`Please include : ${errors}`}
          </div>}
          <button className="button" type="submit" onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </div>
  )
}