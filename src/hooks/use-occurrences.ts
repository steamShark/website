import { useQuery } from "@tanstack/react-query";
import { getOccurrencesByWebsiteId } from "@/api/occurrences";
import { Occurrence } from "@/models/occurrences";

export function useOccurrencesByWebsiteId(websiteId: string, enabled: boolean = false) {
    return useQuery<Occurrence[]>({
        queryKey: ["occurrences", websiteId],
        queryFn: () => getOccurrencesByWebsiteId(websiteId),
        enabled: !!websiteId && enabled,
    });
}
