import React from "react";
import { checkEmptyObjects } from "@/services/helpers/checkEmptyObject";
import { parseDate } from "@/services/helpers/parseDate";
import { WizardCharacter } from "@/utils/types";
import {
  LucideBaby,
  LucideBolt,
  LucideCat,
  LucideGraduationCap,
  LucideHeart,
  LucideHeartOff,
  LucideRuler,
  LucideShield,
  LucideStar,
  LucideUser,
  LucideWand,
  LucideWand2,
} from "lucide-react";
import { useFavoriteStore } from "@/services/store/useFavoriteStore";

interface CharacterInfoProps {
  character: WizardCharacter | undefined;
}

const CharacterInfos: React.FC<CharacterInfoProps> = ({ character }) => {
  const { favorites } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav.id === character?.id);
  return (
    <>
      <div className="mb-10">
        <div className="w-full justify-between flex">
          <h1 className="text-4xl">{character?.name}</h1>
          <LucideStar
            fill={isFavorite ? "yellow" : ""}
            className="cursor-pointer"
          />
        </div>
        <h4>{character?.alternate_names?.join(", ")}</h4>
        <span className="text-sm text-muted-foreground">
          {character?.wizard ? `Wizard, ${character?.ancestry}` : "Muggle"}
        </span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <div className="flex gap-2">
            <LucideShield /> {character?.house}
          </div>
          <div className="flex gap-2">
            {character?.alive ? (
              <>
                <LucideHeart /> Alive
              </>
            ) : (
              <>
                <LucideHeartOff /> Deceased
              </>
            )}
          </div>
          <div className="flex gap-2">
            <LucideGraduationCap />
            {character?.hogwartsStudent ? "Student" : "Staff"}
          </div>
          {character?.patronus && (
            <div className="flex gap-2">
              <LucideCat />
              {parseDate(character.patronus)}
            </div>
          )}
          {character?.dateOfBirth && (
            <div className="flex gap-2">
              <LucideBaby />
              {parseDate(character.dateOfBirth)}
            </div>
          )}
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          {character?.wand && checkEmptyObjects(character.wand) && (
            <>
              <div className="flex gap-2">
                <LucideWand2 /> Wand
              </div>
              <div className="ml-8">
                <p className="flex gap-2 mb-2">
                  <LucideBolt /> {character.wand.core}
                </p>
                <p className="flex gap-2 mb-2">
                  <LucideWand />
                  {character.wand.wood}
                </p>
                <p className="flex gap-2 mb-2">
                  <LucideRuler /> {character.wand.length} inch
                </p>
              </div>
            </>
          )}
          <div>
            <div className="flex gap-2">
              <LucideUser /> {character?.actor}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CharacterInfos };
