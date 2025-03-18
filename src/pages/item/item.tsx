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

export default function ItemsPage() {
  const [filterStatus, setFilterStatus] = useState<
    "Ready" | "Sold Out" | "All" | "Limit Stock"
  >("All");
  const { columns } = useTableStore();
  const filteredData: DataItem[] =
    filterStatus === "All"
      ? dataItem
      : filterStatus === "Limit Stock"
      ? dataItem.filter((item) => item.stock <= 5)
      : dataItem.filter((item) => item.status === filterStatus);
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
      <DataTable
        columns={columns}
        data={filteredData}
        filterPlaceholder="Search items . . ."
      />
    </div>
  );
}
