import "./Tables.css"
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"


export const Tables = ({ rows, deleteRow, editRow }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>RequestId</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {
            rows.map((row, idx) => {
              const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);


              return (
                <tr key={idx}>
                  <td>{row.sNo}</td>
                  <td>{row.type}</td>
                  <td>{row.from}</td>
                  <td>{row.to}</td>
                  <td>{row.reason}</td>
                  <td>{row.reasonId}</td>
                  <td>
                    <span className= "{`label label-${row.status}`}">{row.status}</span>
                  </td>
                 
      
                  {/* <td>
                    <span className="icons">
                      <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)} />
                      <BsFillPencilFill onClick={() => editRow(idx)}/>
                    </span>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </table>

    </div >


  )
}