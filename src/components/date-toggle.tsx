import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import dataDateToggle from "@/data/dataDateToggle";

export const DateToggle: React.FC = () => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const dateRef = useRef<HTMLDivElement>(null);
  const handleDate = () => {
    setIsDateOpen(!isDateOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dateRef.current &&
        event.target instanceof Node &&
        !dateRef.current.contains(event.target)
      ) {
        setIsDateOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="relative cursor-pointer"
          onClick={handleDate}
        >
          <EllipsisVertical className="h-4 w-4" />
        </Button>
        {isDateOpen && (
          <div
            ref={dateRef}
            className="absolute right-0 w-36 text-sm rounded-lg border shadow-md bg-white dark:bg-neutral-800 z-20"
          >
            <div className="flex flex-col space-y p-2">
              {dataDateToggle.map((dateToggle) => (
                <div
                  key={dateToggle.id}
                  className="flex items-center px-3 py-1 hover:bg-gray-100 hover:rounded-md hover:dark:bg-neutral-700 cursor-pointer"
                >
                  <p>{dateToggle.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
