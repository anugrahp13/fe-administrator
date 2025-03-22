import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataItem } from "@/data/dataItem";
import { Pencil } from "lucide-react";

export const columns = ({
  handleEditClick,
}: {
  handleEditClick: (item: DataItem) => void;
}): ColumnDef<DataItem>[] => [
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
    accessorKey: "image",
    header: "Gambar",
    cell: ({ row }) => (
      <div className="flex items-center">
        <img
          src={row.original.image}
          alt="Item"
          className="w-12 h-12 object-cover rounded"
        />
      </div>
    ),
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
    accessorKey: "sellPrice",
    header: "Harga Jual",
    cell: ({ row }) => (
      <div className="font-medium capitalize">
        Rp. {row.original.sellPrice.toLocaleString("id-ID")}
      </div>
    ),
  },
  {
    accessorKey: "buyPrice",
    header: "Harga Beli",
    cell: ({ row }) => (
      <div className="font-medium capitalize">
        Rp. {row.original.buyPrice.toLocaleString("id-ID")}
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
      const item = row.original;

      return (
        <Button variant="outline" onClick={() => handleEditClick(item)}>
          <Pencil /> Edit
        </Button>
      );
    },
  },
];
