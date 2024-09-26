import { useQuery } from "@tanstack/react-query";
import { api } from "../http/axios";
import { WizardCharacter } from "@/utils/types";

const fetchCharacterDetails = async (id: string) => {
  const { data } = await api.get(`/character/${id}`);
  return data[0];
};

export function useCharacterDetails(characterId: string) {
  return useQuery<WizardCharacter>({
    queryKey: ["character", "details", characterId],
    queryFn: () => fetchCharacterDetails(characterId),
  });
}
