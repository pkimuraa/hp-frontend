import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import HouseSelector from "./houseSelector/HouseSelector";
import HufflepuffImage from "@/assets/images/hufflepuff.png";
import RavenclawImage from "@/assets/images/ravenclaw.png";
import SlytherinImage from "@/assets/images/slytherin.png";
import GryffindorImage from "@/assets/images/gryffindor.png";
import { useHouseStore } from "@/services/store/useHouseStore";
import { HouseOptions } from "@/utils/types";

export function Nav() {
  const { house } = useHouseStore();

  const houseCrests: { [key in HouseOptions]: string } = {
    [HouseOptions.RAVENCLAW]: RavenclawImage,
    [HouseOptions.SLYTHERIN]: SlytherinImage,
    [HouseOptions.HUFFLEPUFF]: HufflepuffImage,
    [HouseOptions.GRYFFINDOR]: GryffindorImage,
  };

  return (
    <div
      className={cn(
        "flex flex-row  items-center justify-between border-b border-gray-50 pb-4 mt-4"
      )}
    >
      <Link to="/" className="text-xl font-medium text-primary">
        <i>Accio</i> Wizard Services
      </Link>
      {house && (
        <img
          src={houseCrests[house]}
          alt={`${house} Crest`}
          className="w-[100px] h-[100px]"
        />
      )}
      <div className="flex gap-4">
        <HouseSelector />
      </div>
    </div>
  );
}
