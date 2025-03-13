import { Banknote, LucideIcon, Package, ShoppingCart, SquareUser } from "lucide-react";
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
  bgColor: string;
}
interface Customer {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
  bgColor: string;
}
interface DataDashboard {
  sales: Sales[];
  income: Income[];
  item: Item[];
  customer: Customer[];
}

export const dataDashboard: DataDashboard = {
  sales: [
    {
      title: "Sales",
      date: "Today",
      icon: ShoppingCart,
      result: 3590,
      value: 35,
      percent: "%",
      bgColor: "bg-purple-500",
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
  income: [
    {
      title: "Income",
      date: "Today",
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
      title: "Item",
      date: "Today",
      icon: Package,
      result: 700,
      bgColor: "bg-blue-500",
    },
  ],
  customer: [
    {
      title: "Customer",
      date: "Today",
      icon: SquareUser,
      result: 30,
      bgColor: "bg-yellow-500",
    },
  ],
};
