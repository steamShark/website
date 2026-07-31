import { ListWebsites, Website, WebsiteDetailsResponse } from "@/models/websites";

const API_URL = import.meta.env.VITE_API_URL;

export async function getAllWbsites(): Promise<ListWebsites> {
    const res = await fetch(`${API_URL}/api/v1/websites?limit=10`);
    if (!res.ok) throw new Error("Failed to fetch websites");
    const data = await res.json();
    return data.data as ListWebsites;
}

export async function getTrustedWebsites(): Promise<Website[]> {
    const res = await fetch(`${API_URL}/api/v1/websites?is_not_trusted=false&limit=6`);
    if (!res.ok) throw new Error("Failed to fetch trusted websites");
    const data = await res.json();
    return data.data.data as Website[];
}

export async function getNotTrustedWebsites(): Promise<Website[]> {
    const res = await fetch(`${API_URL}/api/v1/websites?is_not_trusted=true&limit=6`);
    if (!res.ok) throw new Error("Failed to fetch not trusted websites");
    const data = await res.json();
    return data.data.data as Website[];
}

export async function getWebsiteDetails(id: string): Promise<WebsiteDetailsResponse> {
    const res = await fetch(`${API_URL}/api/v1/websites/${id}`);
    if (!res.ok) throw new Error("Failed to fetch website by id");
    const data = await res.json();
    return data.data as WebsiteDetailsResponse;
}