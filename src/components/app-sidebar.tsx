import * as React from "react";
import { dataMenu } from "@/data/dataMenu";
import { NavMain } from "@/components/nav-main";
import { NavManagements } from "@/components/nav-managements";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={dataMenu.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain managements={dataMenu.navMain} />
        <NavManagements items={dataMenu.managements} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dataMenu.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
