// export default function TableHeader() {
//     return (
//         <div>
            
//         </div>
//     )
// }


import * as React from "react";
// import TableHeader from "./assets/TableHeader";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
//   getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
//   PaginationState
} from "@tanstack/react-table";
// import TableEmptyState from "./assets/EmptyState";
import { Icon } from "@iconify/react/dist/iconify.js";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    // needCardView: boolean;
}

export default function AdvanceTable<TData, TValue>({
    columns,
    data,
    // needCardView
}: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [globalFilter, setGlobalFilter] = React.useState('');

    const table = useReactTable({
        data,
        columns,
        // manualPagination: true,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter, 
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter
        },
    });

    return (
        <div className="table-container">
            <TableHeader/>
            <div className="parent-container table-scrollbar">
                <div className="table-container_content table-scrollbar">
                    <table className="">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr  key={headerGroup.id}>
                                {headerGroup.headers.map((header, index) => {
                                    const lastChild = headerGroup.headers.length - 1
                                    return (
                                        <th key={header.id} colSpan={header.colSpan} className={`text-capitalize ${index === 0 && "rounded-first-child"} ${index === lastChild && "rounded-last-child"}`}>
                                            {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                {...{
                                                    className: header.column.getCanSort()
                                                    ? 'cursor-pointer select-none'
                                                    : '',
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                                >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: <Icon icon="line-md:arrows-vertical" className="fs-9" />,
                                                    desc: <Icon icon="line-md:arrows-vertical" className="fs-9" />,
                                                }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                            </>
                                            )}
                                        </th>
                                        // <th key={header.id} className={`${index === 0 && "rounded-first-child"} ${index === lastChild && "rounded-last-child"}`}>
                                        //     {header.isPlaceholder
                                        //     ? null
                                        //     : flexRender(
                                        //         header.column.columnDef.header,
                                        //         header.getContext()
                                        //     )}
                                        // </th>
                                    );
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <tr
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    >
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                        </td>
                                    ))}
                                    </tr>
                                ))
                                ):("")
                            }
                        </tbody>
                    </table>
                    {!table.getRowModel().rows?.length && (
                        <div>
                            <TableEmptyState />
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}