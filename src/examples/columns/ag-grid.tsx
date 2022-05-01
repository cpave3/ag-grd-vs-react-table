import * as React from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';

export const AgGrid = () => {

    const [rowData] = React.useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ]);

    const [columnDefs] = React.useState([
        { field: 'make', pinned: true }, // Only this row is pinned, meaning it cannot be re-ordered
        { field: 'model' }, // Non-pinned rows can be re-ordered by default
        { field: 'price' }
    ])

    // These properties apply to all of the above columns
    const [defaultColDef] = React.useState<ColDef>({
        sortable: true, // Allows the columns to be sorted
        filter: true, // Allows the columns to be filtered
        resizable: true, // Allows the columns to be resized
    })

    return <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
        />
    </div>
}