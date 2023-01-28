import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react';
import "./grid.css"
const Grid=()=>{

    const [rowData, setRowData]=useState();
    const [columnDefs, setcolumnDefs]=useState([
        {field: 'make',sortable:true, filter:true},
        {field: 'model',sortable:true, filter:true},
        {field: 'price',sortable:true,  filter: 'agNumberColumnFilter'}

    ]);

    // Accessing Data usingn API
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(result=>setRowData(result))
      }, []);
     
    return(
        <div className="grid-container">
        <div className="ag-theme-alpine" style={{height:"300px", width:"605px"}}>
            <AgGridReact
             rowData={rowData}
             columnDefs={columnDefs}
            />
        </div>
        </div>
    )
}
export default Grid