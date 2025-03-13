import { CardInfo } from "@/components/card-info";
import { ShoppingCart } from "lucide-react";
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex flex-col justify-between w-full mx-auto">
          <div className="text-2xl lg:text-3xl font-bold">Dashboard</div>
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <CardInfo header={"Penjualan"} subheader={"| Hari ini"}>
            <div className="inline-flex space-x-2">
              <div className="bg-purple-500 p-3 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col justify-center text-base space-y-1">
                <span className="text-2xl font-bold">3.540</span>
                <p className="text-primary text-sm">
                  <span className="text-green-500 font-bold">35%</span> increase
                </p>
              </div>
            </div>
          </CardInfo>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
