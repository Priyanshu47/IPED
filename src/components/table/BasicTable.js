import React from 'react'
import { Tables } from "@/components/table/tables/Tables";
import { Modal } from "@/components/table/modal/Modal";
import { useState } from "react"



const BasicTable = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    { sNo: "1", type: "Casual", status: "Approved",from: "januray 20,2024",to: "januray 22,2024",reason: "Family Emergency",reasonId:"12345" },
    { sNo: "2", type: "Casual", status: "Reject",from: "januray 20,2024",to: "januray 22,2024",reason: "Family Emergency",reasonId:"12345" },
    { sNo: "3", type: "Casual", status: "Pending",from: "januray 20,2024",to: "januray 22,2024",reason: "Family Emergency",reasonId:"12345" },
  ]);


  const handleDeleteRow = (targetIndex) => {
    setRows((prevRows) => prevRows.filter((_, idx) => idx !== targetIndex));
  };

 //handles new table row creation
  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows,newRow]):
      setRows(rows.map((currentRow, idx) => {
        if (idx !== rowToEdit) return currentRow

        return newRow;
      }))
  };

  const [rowToEdit, setRowToEdit] = useState(null)

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  }
  return (
    <div>
   
    <button className="button" onClick={() => setModalOpen(true)}>Add</button>
    {modalOpen && <Modal closeModal={() => { setModalOpen(false); setRowToEdit(null); }}  onSubmit={handleSubmit}
         defaultValue={rowToEdit !== null && rows[rowToEdit]}           
                    />}

    <Tables rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
  </div>
  )
}

export default BasicTable