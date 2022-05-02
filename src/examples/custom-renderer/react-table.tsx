import * as React from 'react';
import { useTable } from 'react-table';

// this component will handle rendering of the images
const ImageCellRenderer = (row) => {
    return <img alt="" src={row.value} />
}

export const ReactTable = () => {
    const data = React.useMemo<Record<string, string>[]>(
        () => [
            { col1: 'Hello', col2: 'World', col3: 'https://picsum.photos/40' },
            { col1: 'react-table', col2: 'rocks', col3: 'https://picsum.photos/40' },
            { col1: 'whatever', col2: 'you want', col3: 'https://picsum.photos/40' },
        ], []
    )

    const columns = React.useMemo(
        () => [
            { Header: 'Column 1', accessor: 'col1' },
            { Header: 'Column 2', accessor: 'col2' },
            { Header: 'Image', accessor: 'col3', Cell: ImageCellRenderer }, // Here, you can specify your custom cell renderer
        ], []
    )

    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (<td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}