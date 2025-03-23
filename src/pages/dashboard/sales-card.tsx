import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { dataSales } from "@/data/dataSales";
import { DatePickerRange } from "@/components/date-pickerrange";

export function SalesCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="font-bold">Penjualan Terbaru</CardTitle>
          <CardDescription className="dark:text-white font-semibold">
            10 Pelanggan Terbaik
          </CardDescription>
        </div>
        <CardDescription className="flex justify-center items-center font-semibold">
          <DatePickerRange />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {dataSales.sales
          .slice()
          .sort((a, b) => b.value - a.value)
          .map((salesPerson, index) => (
            <div key={salesPerson.id} className="flex flex-col">
              {/* Avatar & Nama */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{index + 1}.</div>
                  <Avatar>
                    <AvatarImage
                      src={salesPerson.avatar}
                      alt={salesPerson.name}
                    />
                    <AvatarFallback>
                      {salesPerson.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-semibold">{salesPerson.name}</p>
                </div>
                <div className="font-bold">
                  <p>Rp. {salesPerson.value.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>
          ))}
      </CardContent>
      {/* <CardFooter>
        <DatePickerRange />
      </CardFooter> */}
    </Card>
  );
}
