import * as React from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';

// This component will be used to render the image cells
const CustomImageRenderer = (props) => {
    return <img alt="" src={props.value} />
}

export const AgGrid = () => {

    const [rowData] = React.useState([
        { name: 'John Doe', image: 'https://picsum.photos/40' },
        { name: 'Jane Doe', image: 'https://picsum.photos/40' },
        { name: 'Bob Smith', image: 'https://picsum.photos/40' },
    ]);

    const [columnDefs] = React.useState<ColDef[]>([
        { field: 'name' },
        { field: 'image', cellRenderer: CustomImageRenderer }, // Here, you can specify your custom renderer
    ])

    return <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}>
        </AgGridReact>
    </div>
}