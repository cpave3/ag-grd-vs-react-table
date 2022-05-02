import * as React from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// This function will generate lots of data, so that you can see how the table behaves when populated with many rows
function getData() {
    let data = [];
    for (let x = 0; x < 150; x++) {
        data.push(
            {
                make: ["Toyota", "Nissan", "Kia"][Math.floor(Math.random() * 3)],
                model: ["Celica", "KDH", "Sorento"][Math.floor(Math.random() * 3)],
                price: Math.floor(Math.random() * 100000) + 25000,
            });
    }
    return data;
};

export const AgGrid = () => {

    const [rowData] = React.useState(getData);

    const [columnDefs] = React.useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])

    return <div className="ag-theme-alpine" style={{ height: 550, width: 600 }}>
        <AgGridReact
            pagination // This prop enables pagination for the table
            paginationPageSize={10} // This prop specifies how many items to show per page
            rowData={rowData}
            columnDefs={columnDefs}>
        </AgGridReact>
    </div>
}