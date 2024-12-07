import React from "react";


const Darss1 =()=>{
    return(
        <>
             <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.fish}</td>
              <td>{row.sniff}</td>
              <td>{row.tel}</td>
              <td>
                <button onClick={() => handleEdit(index)}>✏️</button>
                <button onClick={() => handleDelete(index)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
        </>
    )
}
export default Darss1