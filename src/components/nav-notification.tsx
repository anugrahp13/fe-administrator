import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
export function NavNotification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mr-4">
        <DropdownMenuLabel className="font-semibold">
          Notifications
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuItem>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="/image/avatar/avatar.png" alt="@shadcn" />
                <AvatarFallback>HM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Anugrah Prastyo</p>
                <p className="text-sm">
                  <span className="text-red-400 font-semibold">Edit</span> -
                  Harga Gula Putih GMP 1Kg
                </p>
                <p className="text-xs text-gray-400">30 menit lalu</p>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>HM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Madkarni</p>
                <p className="text-sm">
                  <span className="text-red-400 font-semibold">Delete</span> -
                  Teh Sariwangi Kotak
                </p>
                <p className="text-xs text-gray-400">30 menit lalu</p>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to={""} className="grid items-center justify-center">
            Show more
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
