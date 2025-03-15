import {
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  Settings2,
  LucideIcon,
  Database,
  Package,
  ChartColumnStacked,
  Layers,
  ShoppingBag,
  SquareUser,
  NotebookPen,
  FileText,
  FileChartColumn,
  FileChartLine,
  ShoppingCart,
  CircleDollarSign,
  Computer,
  Store,
  Users,
  Banknote,
  BellRing,
} from "lucide-react";

interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface Management {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: { title: string; url: string; icon: LucideIcon }[];
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface DataMenu {
  user: User;
  teams: Team[];
  navMain: NavItem[];
  managements: Management[];
}

export const dataMenu: DataMenu = {
  user: {
    name: "Anugrah Prastyo",
    email: "anugrahprastyo13@gmail.com",
    avatar: "/image/avatar/avatar.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      name: "Sales Transactions",
      url: "#",
      icon: ShoppingCart,
    },
    {
      name: "Shift",
      url: "#",
      icon: Computer,
    },
  ],
  managements: [
    {
      title: "Database",
      url: "#",
      icon: Database,
      isActive: true,
      items: [
        { title: "Items", url: "/item", icon: Package },
        { title: "Item Category", url: "#", icon: ChartColumnStacked },
        { title: "Stock Management", url: "#", icon: Layers },
        { title: "Purchase", url: "#", icon: ShoppingBag },
        { title: "Customer", url: "#", icon: SquareUser },
        { title: "Debt", url: "#", icon: NotebookPen },
        { title: "Finance", url: "#", icon: CircleDollarSign },
      ],
    },
    {
      title: "Report",
      url: "#",
      icon: FileText,
      items: [
        { title: "Sales Report", url: "#", icon: FileChartColumn },
        { title: "Purchase Report", url: "#", icon: FileChartLine },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Shop", url: "#", icon: Store },
        { title: "Management Staff", url: "#", icon: Users },
        { title: "Payment Methods", url: "#", icon: Banknote },
        { title: "Notification Settings", url: "#", icon: BellRing },
        { title: "Transaction Settings", url: "#", icon: ShoppingCart },
      ],
    },
  ],
};
