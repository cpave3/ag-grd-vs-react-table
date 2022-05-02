import * as React from 'react';
import { usePagination, useTable } from 'react-table';

// This function will generate lots of data, so that you can see how the table behaves when populated with many rows
function getData() {
    let data = [];
    for (let x = 0; x < 150; x++) {
        data.push(
            {
                col1: ["Hello", "react-table", "whatever"][Math.floor(Math.random() * 3)],
                col2: ["World", "rocks", "you want"][Math.floor(Math.random() * 3)],
            }
        );
    }
    return data;
};

export const ReactTable = () => {
    const data = React.useMemo<Record<string, string>[]>(
        getData, []
    )

    const columns = React.useMemo(
        () => [
            { Header: 'Column 1', accessor: 'col1' },
            { Header: 'Column 2', accessor: 'col2' },
        ], []
    )

    const tableInstance = useTable({ columns, data }, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, pageCount, gotoPage, previousPage, nextPage, pageOptions, canPreviousPage, canNextPage, state: { pageIndex, setPageSize } } = tableInstance

    return (
        <>
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
                    {page.map((row, i) => {
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
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
            </div>
        </>
    )
}