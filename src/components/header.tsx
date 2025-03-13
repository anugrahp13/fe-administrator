import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { ModeToggle } from "./mode-toggle";
import { NavNotification } from "./nav-notification";

interface HeaderProps {
  children?: React.ReactNode;
}
export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className="flex justify-between px-4 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          {/* <Separator orientation="vertical" className="mr-2" /> */}
        </div>
        <div className="flex">
          <NavNotification />
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
