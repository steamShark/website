export interface Website {
  id: string;
  ssl_certificate: boolean;
  domain: string;
  tld: string;
  url: string;
  display_name: string;
  description?: string;
  is_not_trusted: boolean;
  is_official: boolean;
  steam_login_present: boolean;
  risk_score: number;
  type: "website" | "extension";
  risk_level: "unknown" | "low" | "medium" | "high" | "critical";
  status: "active" | "inactive" | "blocked" | "archived";
  verified: boolean;
  occurrences: Occurrence[];
  created_at: string;
  updated_at: string;
}

export interface ListWebsites {
  count: number;
  limit: number;
  offset: number;
  data: Website[];
}

interface Occurrence {
	id: string;
}