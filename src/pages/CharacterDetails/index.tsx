import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronLeft } from "lucide-react";
import { useCharacterDetails } from "@/services/hooks/useCharacterDetails";
import { CharacterInfos } from "./components/CharacterInfos";
import { CharacterImage } from "./components/CharacterImage";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useCharacterDetails(characterId!);

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="flex">
          <Skeleton
            width={380}
            height={450}
            inline={true}
            className="mb-12  mt-8"
            containerClassName="justify-between"
          />
          <div className="mb-12 ml-12 mt-8 flex-row flex">
            <Skeleton count={12} width={320} />
            <Skeleton count={12} width={320} className="ml-6" />
          </div>
        </div>
      </SkeletonTheme>
    );
  }

  return (
    <div className="mt-10">
      <div className="mb-6 flex items-center justify-start">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ChevronLeft className="h-[1.2rem] w-[1.2rem]" /> Browse Cards
          <span className="sr-only">Go back</span>
        </Button>
      </div>
      <div className="mt-2 justify-between flex w-full gap-8 md:flex-nowrap flex-wrap">
        <CharacterImage image={data?.image} />
        <div className="w-2/3">
          {data && <CharacterInfos character={data} />}
        </div>
      </div>
    </div>
  );
};

export { CharacterDetails };
