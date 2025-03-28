import { CustomerModel } from "@/types/customer.model";
import { ColumnDef } from "@tanstack/react-table";

export const CustomerColumn: ColumnDef<CustomerModel>[] = [
    {
        accessorKey: "fullName",
        header: "NOM",
        cell: ({ row }) => (
        <div className="text-capitalize">{row.getValue("fullName")}</div>
        ),
    },
    {
        accessorKey: "name",
        header: "CONTACTS",
        cell: ({ row }) => (
        <div className="text-capitalize">{row.getValue("name")}</div>
        ),
    },

    {
        accessorKey: "phone",
        header: "DESCRIPTION",
        cell: ({ row }) => (
        <div className="text-capitalize">{row.getValue("phone")}</div>
        ),
    },
];