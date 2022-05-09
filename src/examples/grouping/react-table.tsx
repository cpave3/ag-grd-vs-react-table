import * as React from "react";
import { useTable } from "react-table";
export const ReactTable = () => {
  const data = React.useMemo<Record<string, string>[]>(
    () => [
      {
        name: "John Doe",
        age: "32",
        height: "181",
        food: "Pie",
        car: "Toyota",
        pet: "dog",
      },
      {
        name: "Jane Doe",
        age: "33",
        height: "188",
        food: "Quiche",
        car: "Toyota",
        pet: "cat",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Group Name",
        columns: [
          { Header: "Name", accessor: "name" },
          { Header: "Age", accessor: "age" },
          { Header: "Height", accessor: "height" },
        ],
      },
      {
        Header: "Second Group Name",
        columns: [
          { Header: "Food", accessor: "food" },
          { Header: "Car", accessor: "car" },
          { Header: "Pet", accessor: "pet" },
        ],
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
