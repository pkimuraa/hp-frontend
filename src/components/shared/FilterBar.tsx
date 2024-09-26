import { LucideFilter } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { useFilterByStore } from "../../services/store/useFilterByStore";
import { FilterOptions } from "../../utils/types";

export function FilterBar() {
  const { setFilterData, filter } = useFilterByStore();
  return (
    <div
      className={cn("flex flex-row  items-center justify-end pb-1 mt-4 gap-2")}
    >
      <LucideFilter width={18} height={18} className="mr-2" fill="white" />
      <Button
        variant={"ghost"}
        size={"sm"}
        className={filter === FilterOptions.ALL ? "bg-accent" : "bg-none"}
        onClick={() => setFilterData(FilterOptions.ALL)}
      >
        All
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
        className={filter === FilterOptions.STUDENT ? "bg-accent" : "bg-none"}
        onClick={() => setFilterData(FilterOptions.STUDENT)}
      >
        Students
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
        className={filter === FilterOptions.STAFF ? "bg-accent" : "bg-none"}
        onClick={() => setFilterData(FilterOptions.STAFF)}
      >
        Staff
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
        className={
          filter === FilterOptions.GRYFFINDOR ? "bg-accent" : "bg-none"
        }
        onClick={() => setFilterData(FilterOptions.GRYFFINDOR)}
      >
        Gryffindor
      </Button>

      <Button
        variant={"ghost"}
        size={"sm"}
        className={
          filter === FilterOptions.HUFFLEPUFF ? "bg-accent" : "bg-none"
        }
        onClick={() => setFilterData(FilterOptions.HUFFLEPUFF)}
      >
        Hufflepuff
      </Button>

      <Button
        variant={"ghost"}
        size={"sm"}
        className={filter === FilterOptions.RAVENCLAW ? "bg-accent" : "bg-none"}
        onClick={() => setFilterData(FilterOptions.RAVENCLAW)}
      >
        Ravenclaw
      </Button>

      <Button
        variant={"ghost"}
        size={"sm"}
        className={filter === FilterOptions.SLYTHERIN ? "bg-accent" : "bg-none"}
        onClick={() => setFilterData(FilterOptions.SLYTHERIN)}
      >
        Slytherin
      </Button>
    </div>
  );
}
