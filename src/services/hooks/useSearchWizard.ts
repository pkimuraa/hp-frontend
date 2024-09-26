import { useQuery } from "@tanstack/react-query";
import { api } from "../http/axios";
import { useFilterByStore } from "../../services/store/useFilterByStore";
import { FilterOptions } from "../../utils/types";

const fetchWizards = async (filter: FilterOptions) => {
  let endpoint;

  if (filter === FilterOptions.STUDENT || filter === FilterOptions.STAFF) {
    endpoint = `/characters/${filter}`;
  } else if (filter && filter !== FilterOptions.ALL) {
    endpoint = `/characters/house/${filter}`;
  } else {
    endpoint = "/characters";
  }

  const { data } = await api.get(endpoint);
  return data;
};

export function useSearchCards() {
  const { filter } = useFilterByStore();
  return useQuery({
    queryKey: ["wizard", filter ?? "all"],
    queryFn: () => fetchWizards(filter),
  });
}
