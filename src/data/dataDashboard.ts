import { Banknote, LucideIcon, Package, ShoppingCart } from "lucide-react";
interface Sales {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
  value: number;
  percent: string;
  bgColor: string;
  status?: { id: number; name: string }[];
}
interface Income {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
  value: number;
  percent: string;
  bgColor: string;
  status?: { id: number; name: string }[];
}
interface Item {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
  value: number;
  bgColor: string;
  status?: { id: number; name: string }[];
}
// interface Customer {
//   title: string;
//   date: string;
//   icon?: LucideIcon;
//   result: number;
//   value: number;
//   bgColor: string;
//   status?: { id: number; name: string }[];
// }
interface DataDashboard {
  sales: Sales[];
  income: Income[];
  item: Item[];
  // customer: Customer[];
}

export const dataDashboard: DataDashboard = {
  sales: [
    {
      title: "Penjualan",
      date: "Hari ini",
      icon: ShoppingCart,
      result: 3590,
      value: 35,
      percent: "%",
      bgColor: "bg-purple-500",
      status: [
        {
          id: 1,
          name: "increase Transaction",
        },
        {
          id: 2,
          name: "decreases",
        },
      ],
    },
  ],
  income: [
    {
      title: "Pendapatan",
      date: "Hari ini",
      icon: Banknote,
      result: 12908000,
      value: 80,
      percent: "%",
      bgColor: "bg-green-500",
      status: [
        {
          id: 1,
          name: "increase",
        },
        {
          id: 2,
          name: "decreases",
        },
      ],
    },
  ],
  item: [
    {
      title: "Barang",
      date: "Hari ini",
      icon: Package,
      result: 700,
      value: 10,
      bgColor: "bg-blue-500",
      status: [
        {
          id: 1,
          name: "increase",
        },
        {
          id: 2,
          name: "decreases",
        },
      ],
    },
  ],
  // customer: [
  //   {
  //     title: "Customer",
  //     date: "Today",
  //     icon: SquareUser,
  //     result: 30,
  //     value: 2,
  //     bgColor: "bg-yellow-500",
  //     status: [
  //       {
  //         id: 1,
  //         name: "increase",
  //       },
  //       {
  //         id: 2,
  //         name: "decreases",
  //       },
  //     ],
  //   },
  // ],
};
