import * as React from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const AgGrid = () => {
  const [rowData] = React.useState([
    {
      name: "John Doe",
      age: 32,
      height: 181,
      food: "Pie",
      car: "Toyota",
      pet: "dog",
    },
    {
      name: "Jane Doe",
      age: 33,
      height: 188,
      food: "Quiche",
      car: "Toyota",
      pet: "cat",
    },
  ]);

  const [columnDefs] = React.useState([
    {
      headerName: "Group Name",
      children: [{ field: "name" }, { field: "age" }, { field: "height" }],
    },
    {
      headerName: "Second Group Name",
      children: [{ field: "food" }, { field: "car" }, { field: "pet" }],
    },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};
