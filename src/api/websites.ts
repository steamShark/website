import { ApiWrapperSchema } from "@/models/api/apiResponse";
import { ListWebsites, Website } from "@/models/websites";

export async function getAllWbsites(): Promise<ListWebsites> {
    const res = await fetch("/api/v1/websites?limit=10");
    if (!res.ok) throw new Error("Failed to fetch websites");
    const data = await res.json();
    console.log("Parsed JSON trust:", data.data);
    return data.data as ListWebsites
}

export async function getTrustedWebsites(): Promise<Website[]> {
    const res = await fetch("/api/v1/websites?is_not_trusted=false&limit=6");
    if (!res.ok) throw new Error("Failed to fetch trusted websites");
    const data = await res.json();
    console.log("Parsed JSON trust:", data.data.data);
    return data.data.data as Website[]
}

export async function getNotTrustedWebsites(): Promise<Website[]> {
    const res = await fetch("/api/v1/websites?is_not_trusted=true&limit=6");
    if (!res.ok) throw new Error("Failed to fetch not trusted websites");
    const data = await res.json();
    console.log("Parsed JSON not trust:", data.data.data);
    return data.data.data as Website[]
}

export async function getWebsiteDetails(id: string): Promise<Website> {
    let res;
    try {
        res = await fetch(`/api/v1/websites/${id}`);
        console.log(res)
    }catch(err){
        console.log(err)
    }
    
    if (!res.ok) throw new Error("Failed to fetch website by id");
    const data = await res.json();
    console.log("Parsed JSON not trust:", data.data);
    return data.data as Website
}