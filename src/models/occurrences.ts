export interface Occurrence {
  id: string;
  website_id: string;
  type: string;
  source: string;
  description: string;
  url_reported: string;
  country_code: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "pending" | "resolved" | "rejected";
  resolution_notes: string | null;
  resolved_at: string | null;
  created_at: string;
  updated_at: string;
}
