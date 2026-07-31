import { getAllWbsites, getNotTrustedWebsites, getTrustedWebsites, getWebsiteDetails } from "@/api/websites";
import { ListWebsites, Website, WebsiteDetailsResponse } from "@/models/websites"
import { useQuery } from "@tanstack/react-query"

//Function to use useQuery to get the websites
export function useAllWebsites() {
  return useQuery<ListWebsites>({
    queryKey: ["websites", "all"],
    queryFn: getAllWbsites,
  });
}

export function useTrustedWebsites() {
  return useQuery<Website[]>({
    queryKey: ["websites", "trusted"],
    queryFn: getTrustedWebsites,
  });
}

export function useNotTrustedWebsites() {
  return useQuery<Website[]>({
    queryKey: ["websites", "nottrusted"],
    queryFn: getNotTrustedWebsites,
  });
}

export function useWebsiteDetails(id: string) {
  return useQuery<WebsiteDetailsResponse>({
    queryKey: ["websites", id],
    queryFn: () => getWebsiteDetails(id),
    enabled: !!id
  });
}