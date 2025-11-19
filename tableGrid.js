import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  function generateGrid(rows, cols) {
    const result = [];
    let num = 1;

    for (let c = 0; c < cols; c++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        col.push(num++);
      }
      if (c % 2 === 1) col.reverse();
      result.push(col);
    }

    const tableRows = [];
    for (let r = 0; r < rows; r++) {
      const rowCells = [];
      for (let c = 0; c < cols; c++) {
        rowCells.push(result[c][r]);
      }
      tableRows.push(rowCells);
    }

    return (
      <tbody>
        {tableRows.map((row, rIdx) => (
          <tr key={rIdx}>
            {row.map((val, cIdx) => (
              <td
                key={cIdx}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                {val}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmit(true);
        }}
      >
        <label>Rows: </label>
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        <br />
        <br />
        <label>Columns: </label>
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {isSubmit && rows > 0 && cols > 0 && (
        <table
          style={{
            borderCollapse: "collapse",
            margin: "20px auto",
            fontSize: "18px",
          }}
        >
          {generateGrid(rows, cols)}
        </table>
      )}
    </div>
  );
}
