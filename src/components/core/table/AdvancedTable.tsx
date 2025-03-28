import { Icon } from "@iconify/react/dist/iconify.js";
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import React from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}
export default function AdvancedTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [globalFilter, setGlobalFilter] = React.useState('');

    const table = useReactTable({
        data,
        columns,
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
        <div>
            <div>
                <table className="w-full">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr  key={headerGroup.id}>
                                {headerGroup.headers.map((header, index) => {
                                    const lastChild = headerGroup.headers.length - 1
                                    return (
                                        <th key={header.id} colSpan={header.colSpan} className={`font-normal border-l border-gray-200 text-left px-4 py-3 text-[0.65em] ${index === 0 && "border-l-0"} ${index === lastChild && "rounded-last-child"}`}>
                                            {header.isPlaceholder ? null : (
                                            <>
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                        ? 'cursor-pointer select-none flex items-center font-medium'
                                                        : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {{
                                                        asc: <Icon icon="mdi:arrow-top" className="text-[1.2em]" />,
                                                        desc: <Icon icon="mdi:arrow-bottom" className="text-[1.2em]" />,
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                </div>
                                            </>
                                            )}
                                        </th>
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
            </div>
            <div className="border-t border-gray-200 flex items-center justify-between py-4 px-4">
                <div></div>
                <div className="flex items-center gap-4">
                    <h4 className="text-[0.8em] text-black font-semibold">Page 1 sur 10</h4>
                    <div className="flex items-center gap-2">
                        <button className="border border-gray-200 w-[1.8em] h-[1.8em] rounded-[5px] text-gray-500 flex items-center justify-center hover:bg-[#0A69FB] hover:text-white">
                            <Icon icon="lsicon:double-arrow-left-filled" className=" text-[1.3em]" />
                        </button>
                        <button className="border border-gray-200 w-[1.8em] h-[1.8em] rounded-[5px] text-gray-500 flex items-center justify-center hover:bg-[#0A69FB] hover:text-white">
                            <Icon icon="lsicon:double-arrow-left-filled" className=" text-[1.3em]" />
                        </button>
                        <button className="border border-gray-200 w-[1.8em] h-[1.8em] rounded-[5px] text-gray-500 flex items-center justify-center hover:bg-[#0A69FB] hover:text-white">
                            <Icon icon="lsicon:double-arrow-left-filled" className=" text-[1.3em]" />
                        </button>
                        <button className="border border-gray-200 w-[1.8em] h-[1.8em] rounded-[5px] text-gray-500 flex items-center justify-center hover:bg-[#0A69FB] hover:text-white">
                            <Icon icon="lsicon:double-arrow-right-filled" className=" text-[1.3em]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
