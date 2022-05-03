import * as React from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const VehicleEditor = React.forwardRef((props, ref) => {
    const [value, setValue] = React.useState(props.value);
    const refInput = React.useRef(null);

    React.useEffect(() => {
        // focus on the input
        refInput?.current?.focus();
    }, []);

    React.useImperativeHandle(ref, () => {
        return {
            // the final value to send to the grid, on completion of editing
            getValue() {
                return value;
            },
            isCancelBeforeStart() {
                return false;
            },
            isCancelAfterEnd() {
                return false;
            }
        };
    });

    return <select name="cars" id="cars" onChange={(e) => setValue(e.target.value)} value={value}>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
        <option value="Porsche">Porsche</option>
        <option value="Audi">Audi</option>
    </select>

});

export const AgGrid = () => {

    const [rowData] = React.useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ]);

    const [columnDefs] = React.useState([
        { field: 'make', cellEditor: VehicleEditor, editable: true },
        { field: 'model' },
        { field: 'price' }
    ])

    return <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}>
        </AgGridReact>
    </div>
}