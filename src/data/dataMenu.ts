import {
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  PieChart,
  Map,
  LucideIcon,
  Database,
  Package,
  ChartColumnStacked,
  Layers,
  ShoppingBag,
  SquareUser,
  NotebookPen,
} from "lucide-react";

interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: { title: string; url: string; icon: LucideIcon }[];
}

interface Management {
  name: string;
  url: string;
  icon: LucideIcon;
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
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
      title: "Database",
      url: "#",
      icon: Database,
      isActive: true,
      items: [
        { title: "Items", url: "#", icon: Package },
        { title: "Item Category", url: "#", icon: ChartColumnStacked },
        { title: "Stock Management", url: "#", icon: Layers },
        { title: "Purchase", url: "#", icon: ShoppingBag },
        { title: "Customer", url: "#", icon: SquareUser },
        { title: "Debt", url: "#", icon: NotebookPen },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#", icon: Package },
        { title: "Explorer", url: "#", icon: Package },
        { title: "Quantum", url: "#", icon: Package },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#", icon: Package },
        { title: "Get Started", url: "#", icon: Package },
        { title: "Tutorials", url: "#", icon: Package },
        { title: "Changelog", url: "#", icon: Package },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#", icon: Package },
        { title: "Team", url: "#", icon: Package },
        { title: "Billing", url: "#", icon: Package },
        { title: "Limits", url: "#", icon: Package },
      ],
    },
  ],
  managements: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
