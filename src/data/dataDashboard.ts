import { Banknote, LucideIcon, Package, ShoppingCart, SquareUser } from "lucide-react";
interface Sales {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
  value: number;
  percent: string;
  status?: { id: number; name: string }[];
}
interface Income {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
  value: number;
  percent: string;
  status?: { id: number; name: string }[];
}
interface Item {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
}
interface Customer {
  title: string;
  date: string;
  icon?: LucideIcon;
  result: number;
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
      date: "Hari ini",
      icon: ShoppingCart,
      result: 3590,
      value: 35,
      percent: "%",
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
      date: "Hari ini",
      icon: Banknote,
      result: 12908000,
      value: 80,
      percent: "%",
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
      date: "Hari ini",
      icon: Package,
      result: 700,
    },
  ],
  customer: [
    {
      title: "Customer",
      date: "Hari ini",
      icon: SquareUser,
      result: 30,
    },
  ],
};
