import * as React from 'react';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

export const Grid = () => {

    const [rowData] = React.useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ]);

    const [columnDefs] = React.useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])

    const [defaultColDef] = React.useState<ColDef>({
        sortable: true,
        resizable: true,
        filter: true,
    });


    return <AgGridReact rowData={rowData} defaultColDef={defaultColDef} columnDefs={columnDefs} />
}