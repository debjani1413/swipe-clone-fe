import React from 'react';
import "../styles/table.css"

// const Table = ({ tabledata }) => {

//   useEffect(()=>{
//     console.log("Reacieved:",tabledata)
//   },[tabledata])
//   return (
//     <div className="table-container">
//       <table className="styled-table">
//         <thead>
//           <tr>
//             <th>Serial Number</th>
//             <th>Customer Name</th>
//             <th>Product Name</th>
//             <th>Qty</th>
//             <th>Tax</th>
//             <th>Amount</th>
//             <th>Total Amount</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tabledata?.map((row, index) => (
//             <tr key={index}>
//               <td>{index}</td>
//               <td>{row.CustomerName}</td>
//               <td>{row.ProductName}</td>
//               <td>{row.Quantity}</td>
//               <td>{row.Tax}</td>
//               <td>{row.TotalAmount}</td>
//               <td>{row.AmountPayable}</td>
//               <td>{row.Date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table;


// const Table = ({ tabledata, columns }) => {
//   return (
//     <div className="table-container">
//     <table className="styled-table"> 
//       <thead>
//         <tr>
//           {columns.map((col) => (
//             <th key={col.key}>{col.label}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {tabledata.map((row, index) => (
//           <tr key={index} className={row.isMissing ? "highlight-row" : ""}>
//             {columns.map((col) => (
//               <td key={col.key} className={!row[col.key] || row[col.key] === "Missing" ? "missing-field" : ""}>
//                 {row[col.key]}
//                 {!row[col.key] && <span className="tooltip">Field is required</span>}
//                 </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// };

// export default Table;

const Table = ({ tabledata, columns }) => {
  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabledata.map((row, index) => {
            return (
              <tr key={index}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={!row[col.key] ? "missing-field" : ""}
                  >
                    {row[col.key] || "Field is required"}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

