import { useState } from 'react'
import './App.css';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function App() {
  const ButtonAlert = (row) => {
    return <button onClick={() => alert(row.data.make)}>show make</button>
  }

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true, action: '' },
    { make: "Ford", model: "F-Series", price: 33850, electric: false, action: '' },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false, action: '' },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { headerName: "Make", valueGetter: data => data.data.make, flex: 2},
    { field: "model", filter: true },
    { field: "price", valueFormatter: p => `${p.value.toLocaleString()} RUB` },
    { field: "electric"},
    { field: "action", cellRenderer: ButtonAlert }
  ]);

  return (
    <div className="App">
      <div className="table-wrapper ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={{ flex: 1 }}
          className="table"
        />
      </div>
    </div>
  );
}

export default App;
