import React from "react";
import "../styles/table.css";

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
                    className={
                      row[col.key] === null ||
                      row[col.key] === undefined ||
                      row[col.key] === ""
                        ? "missing-field"
                        : ""
                    }
                  >
                    {row[col.key] === null ||
                    row[col.key] === undefined ||
                    row[col.key] === ""
                      ? "Field is required"
                      : row[col.key]}
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
