import React from 'react'
import { Tables } from "@/components/table/tables/Tables";
import { Modal } from "@/components/table/modal/Modal";
import { useState } from "react"



const BasicTable = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    { SNo: "1", description: "this is the first page", status: "Approved" },
    { SNo: "2", description: "this is the second page", status: "Reject" },
    { SNo: "3", description: "this is the third page", status: "error" },
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
    <Tables rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
    <button className="button" onClick={() => setModalOpen(true)}>Add</button>
    {modalOpen && <Modal closeModal={() => { setModalOpen(false); setRowToEdit(null); }}  onSubmit={handleSubmit}
         defaultValue={rowToEdit !== null && rows[rowToEdit]}           
                    />}

  </div>
  )
}

export default BasicTable