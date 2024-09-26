import { useHouseStore } from "@/services/store/useHouseStore";
import RavenclawCrest from "@/assets/images/ravenclaw.png";
import SlytherinCrest from "@/assets/images/slytherin.png";
import HufflepuffCrest from "@/assets/images/hufflepuff.png";
import GryffindorCrest from "@/assets/images/gryffindor.png";
import { HouseOptions } from "@/utils/types";

const HouseSelector = () => {
  const { house, setHouse } = useHouseStore();

  return (
    <div>
      {!house && <h2>Select Your House</h2>}
      <div className="flex gap-4 ">
        <div
          onClick={() => setHouse(HouseOptions.RAVENCLAW)}
          className="cursor-pointer"
        >
          <img
            src={RavenclawCrest}
            alt="Ravenclaw Crest"
            className="w-[48px] h-[48px]"
          />
        </div>
        <div
          onClick={() => setHouse(HouseOptions.SLYTHERIN)}
          className="cursor-pointer"
        >
          <img
            src={SlytherinCrest}
            alt="Slytherin Crest"
            className="w-[48px] h-[48px]"
          />
        </div>
        <div
          onClick={() => setHouse(HouseOptions.HUFFLEPUFF)}
          className="cursor-pointer"
        >
          <img
            src={HufflepuffCrest}
            alt="Hufflepuff Crest"
            className="w-[48px] h-[48px]"
          />
        </div>
        <div
          onClick={() => setHouse(HouseOptions.GRYFFINDOR)}
          className="cursor-pointer"
        >
          <img
            src={GryffindorCrest}
            alt="Gryffindor Crest"
            className="w-[48px] h-[48px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HouseSelector;
