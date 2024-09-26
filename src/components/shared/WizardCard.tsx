import { LucideStar } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { WizardCharacter } from "../../utils/types";
import { Link } from "react-router-dom";
import { useFavoriteStore } from "@/services/store/useFavoriteStore";

interface WizardCardProps {
  wizard: WizardCharacter;
}

export function WizardCard({ wizard }: WizardCardProps) {
  const placeholderImage = "https://via.placeholder.com/350?text=No+Image";
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav.id === wizard.id);

  const toggleFavorite = (wizard: WizardCharacter) => {
    if (isFavorite) {
      removeFavorite(wizard.id);
    } else {
      addFavorite(wizard);
    }
  };
  return (
    <Link key={wizard?.id} to={`/characters/${wizard?.id}`}>
      <Card className=" relative  rounded-xl border transition-all hover:scale-105 hover:border-cyan-100 w-[390px] justify-center pb-4">
        <CardHeader>
          <div className="min-h-[350px]">
            <img
              className="aspect-w-16 aspect-h-9 w-full max-h-[350px] rounded-t-xl"
              alt={wizard?.name}
              src={wizard?.image ? wizard?.image : placeholderImage}
            />
          </div>
          <div className="flex justify-between px-4">
            <CardTitle>{wizard?.name}</CardTitle>
            <div className="flex items-center">
              <Button
                variant={"icon"}
                size={"sm"}
                className="z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleFavorite(wizard);
                }}
              >
                <LucideStar fill={isFavorite ? "yellow" : ""} />
              </Button>
            </div>
          </div>
          <CardDescription>
            <span className="px-4">
              {wizard?.actor ? wizard?.actor : "no available information"}
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
