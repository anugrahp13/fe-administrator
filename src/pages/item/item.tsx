"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
export type Payment = {
  id: string;
  amount: number;
  name: string;
  sellingPrice: number;
  purchasePrice: number;
  status: "Ready" | "Sold Out";
  stock: number;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    name: "Gula Putih 1 kg",
    sellingPrice: 18500,
    purchasePrice: 16400,
    status: "Ready",
    stock: 290,
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "Tepung Segitiga 1 kg",
    sellingPrice: 10500,
    purchasePrice: 9800,
    status: "Ready",
    stock: 200,
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "Tepung Lencana 1 kg",
    sellingPrice: 9000,
    purchasePrice: 7650,
    status: "Sold Out",
    stock: 167,
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "Minyak Goreng 1 kg",
    sellingPrice: 21000,
    purchasePrice: 18675,
    status: "Ready",
    stock: 908,
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "Tepung Besar 500 g",
    sellingPrice: 8000,
    purchasePrice: 6789,
    status: "Sold Out",
    stock: 50,
  },
];

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.original.name}</div>,
  },
  {
    accessorKey: "sellingPrice",
    header: "Harga Jual",
    cell: ({ row }) => (
      <div className="font-medium capitalize">
        Rp.{row.original.sellingPrice}
      </div>
    ),
  },
  {
    accessorKey: "purchasePrice",
    header: "Harga Beli",
    cell: ({ row }) => (
      <div className="font-medium capitalize">
        Rp.{row.original.purchasePrice}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.original.status}</div>,
  },
  {
    accessorKey: "stock",
    header: "Stok",
    cell: ({ row }) => <div className="lowercase">{row.original.stock}</div>,
  },
  {
    accessorKey: "active",
    header: "Aktif",
    cell: ({ row }) => (
      <div className="font-medium">${row.original.amount}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original; // Ambil data payment dari row

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span className="flex justify-center items-center gap-2">
                <Pencil />
                Edit
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="flex justify-center items-center gap-2">
              <Trash2 />
                Delete
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function ItemsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Items List</h1>
      <DataTable
        columns={columns}
        data={data}
        filterPlaceholder="Search email..."
      />
    </div>
  );
}
