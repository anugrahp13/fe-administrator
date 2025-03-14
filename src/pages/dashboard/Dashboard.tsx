import { CardInfo } from "@/components/card-info";
import { dataDashboard } from "@/data/dataDashboard";
import { VisitorChart } from "./visitor-chart";
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
        <div className="grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.values(dataDashboard).map((category) =>
            category.map((item: any, index: number) => (
              <CardInfo
                key={index}
                header={item.title}
                subheader={`| ${item.date}`}
              >
                <div className="inline-flex space-x-2">
                  <div className={`${item.bgColor} p-3 rounded-lg`}>
                    {item.icon && <item.icon className="w-8 h-8 text-white" />}
                  </div>
                  <div className="flex flex-col justify-center text-base space-y-1">
                    <span className="text-2xl font-bold">
                      {item.result.toLocaleString()}
                    </span>
                    {item.value !== undefined && (
                      <p className="text-primary text-sm">
                        <span
                          className={`${
                            item.status?.[0]?.name === "increase"
                              ? "text-green-500"
                              : "text-red-500"
                          } font-bold`}
                        >
                          {item.value}
                          {item.percent}
                        </span>{" "}
                        {item.status?.[0]?.name}
                      </p>
                    )}
                  </div>
                </div>
              </CardInfo>
            ))
          )}
        </div>
        <div className="w-full md:w-1/2">
        <VisitorChart />
        </div>
        <div className="w-full md:w-1/2">
        </div>
      </div>
    </>
  );
}
