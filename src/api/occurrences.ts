import { Occurrence } from "@/models/occurrences";

const API_URL = import.meta.env.VITE_API_URL;

export async function getOccurrencesByWebsiteId(websiteId: string): Promise<Occurrence[]> {
    const res = await fetch(`${API_URL}/api/v1/websites/${websiteId}/occurrences`);
    if (!res.ok) throw new Error("Failed to fetch occurrences");
    const data = await res.json();
    return data.data as Occurrence[];
}
