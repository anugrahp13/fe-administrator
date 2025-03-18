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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { useState } from "react";
export type Payment = {
  id: string;
  name: string;
  category: string;
  stock: number;
  sellingPrice: number;
  purchasePrice: number;
  status: "Ready" | "Sold Out";
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    name: "Gula Putih 1 kg",
    category: "Gula Pasir",
    stock: 290,
    sellingPrice: 18500,
    purchasePrice: 16400,
    status: "Ready",
  },
  {
    id: "3u1reuv4",
    name: "Tepung Segitiga 1 kg",
    category: "Tepung",
    stock: 200,
    sellingPrice: 10500,
    purchasePrice: 9800,
    status: "Ready",
  },
  {
    id: "derv1ws0",
    name: "Tepung Lencana 1 kg",
    category: "Tepung",
    stock: 167,
    sellingPrice: 9000,
    purchasePrice: 7650,
    status: "Sold Out",
  },
  {
    id: "5kma53ae",
    name: "Minyak Goreng 1 kg",
    category: "Minyak Goreng",
    stock: 908,
    sellingPrice: 21000,
    purchasePrice: 18675,
    status: "Ready",
  },
  {
    id: "bhqecj4p",
    name: "Tepung Besar 500 gr",
    category: "Tepung",
    stock: 4,
    sellingPrice: 8000,
    purchasePrice: 6789,
    status: "Sold Out",
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
    accessorKey: "category",
    header: "Kategori",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.category}</div>
    ),
  },
  {
    accessorKey: "stock",
    header: "Stok",
    cell: ({ row }) => <div className="lowercase">{row.original.stock}</div>,
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
  const [filterStatus, setFilterStatus] = useState<
    "Ready" | "Sold Out" | "All" | "Limit Stock"
  >("All");
  const filteredData =
    filterStatus === "All"
      ? data
      : filterStatus === "Limit Stock"
      ? data.filter((item) => item.stock < 5)
      : data.filter((item) => item.status === filterStatus);
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex justify-between w-full mx-auto gap-1">
        <div className="flex flex-col">
          <div className="text-2xl lg:text-3xl font-bold">Item List</div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Item List</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("All")}>
                All ({data.length})
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("Ready")}>
                Ready ({data.filter((item) => item.status === "Ready").length})
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("Limit Stock")}>
                Limit Stock ({data.filter((item) => item.stock < 5).length})
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("Sold Out")}>
                Sold Out (
                {data.filter((item) => item.status === "Sold Out").length})
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        filterPlaceholder="Search items . . ."
      />
    </div>
  );
}
