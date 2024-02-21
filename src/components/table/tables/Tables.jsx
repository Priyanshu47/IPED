import "./Tables.css"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"


export const Tables = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th className="expand">type</th>
            <th>Status</th>
            <th>from</th>
            <th>to</th>
            <th>Reason</th>
            <th>Request ID</th>
          </tr>
        </thead>

        <tbody>

          {
            rows.map((row, idx) => {
              const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);


              return (
                <tr key={idx}>
                  <td>{row.page}</td>
                  <td className="expand">{row.description}</td>
                  <td>
                    <span className={`label label-${row.status}`}>{statusText}</span>
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