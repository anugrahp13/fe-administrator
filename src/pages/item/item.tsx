import { DataTable } from "@/components/ui/data-table";
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
import { useTableStore } from "@/store/tableStore";
import dataItem, { DataItem } from "@/data/dataItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PackagePlus, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import EditDialog from "./edit-dialog";
import AddDialog from "./add-dialog";
export default function ItemsPage() {
  const [filterStatus, setFilterStatus] = useState<
    "Ready" | "Sold Out" | "All" | "Limit Stock"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { columns } = useTableStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<DataItem | null>(null);
  const handleEditClick = (item: DataItem) => {
    setEditItem(item);
    setIsEditDialogOpen(true);
  };
  const handleSaveItem = (updatedItem: DataItem) => {
    console.log("Updated item:", updatedItem);
    // TODO: Simpan data ke backend atau update state global
  };
  const handleAddItem = (data: any) => {
    console.log("Item Baru:", data);
    setIsAddDialogOpen(false); // Tutup modal setelah submit
  };
  const [selectedItems, setSelectedItems] = useState<number>(0); // ** Ambil daftar item yang dipilih **
  const filteredData: DataItem[] = dataItem
    .filter((item) => {
      if (filterStatus !== "All" && filterStatus !== "Limit Stock") {
        return item.status === filterStatus;
      }
      if (filterStatus === "Limit Stock") {
        return item.stock <= 5;
      }
      return true;
    })
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-2 sm:gap-0 w-full mx-auto gap-1">
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-2xl lg:text-3xl font-bold">Item List</div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
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
                All ({dataItem.length})
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("Ready")}>
                Ready (
                {dataItem.filter((item) => item.status === "Ready").length})
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("Limit Stock")}>
                Limit Stock ({dataItem.filter((item) => item.stock <= 5).length}
                )
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setFilterStatus("Sold Out")}>
                Sold Out (
                {dataItem.filter((item) => item.status === "Sold Out").length})
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-2 gap-2 sm:gap-0">
        <Input
          placeholder="Search items . . ."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-1">
          <Button variant="outline" onClick={() => setIsAddDialogOpen(true)}>
            <PackagePlus />
            Add Item
          </Button>
          <Button
            variant="destructive"
            onClick={() => setIsModalOpen(true)}
            disabled={selectedItems === 0}
          >
            <Trash2 />
            Delete Item
          </Button>
        </div>
      </div>
      <DataTable
        columns={columns({ handleEditClick })}
        data={filteredData}
        onSelectionChange={(selected) => setSelectedItems(selected.length)}
      />
      {/* Dialog Add */}
      <AddDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onSubmit={handleAddItem}
      />

      {/* Dialog Edit */}
      <EditDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        item={editItem}
        onSave={handleSaveItem}
      />

      {/* Modal Konfirmasi */}
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ingin menghapus produk ini?</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah benar produk ini yang akan kamu hapus, coba renungkan
              kembali.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="order-1">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-500 lg:order-2">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
