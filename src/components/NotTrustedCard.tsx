import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Calendar, ExternalLink, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Website } from "@/models/websites";
import { Badge } from "./ui/badge";

/**
 * Small helper to render a risk/trust badge
 */
function RiskBadge({ level }: { level: Website["risk_level"] }) {
    switch (level) {
        case "low":
            return <Badge variant="secondary" className="bg-green-100 text-green-700">Low Risk</Badge>;
        case "medium":
            return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Medium Risk</Badge>;
        case "high":
            return <Badge variant="secondary" className="bg-red-100 text-red-700">High Risk</Badge>;
        default:
            return <Badge variant="secondary" className="bg-gray-200 text-gray-700">Unknown</Badge>;
    }
}

interface NotTrustedWebsiteCard {
    id: string;
    domain: string;
    displayName: string;
    description: string;
    isOfficial: boolean;
}

export default function NotTrustedCard({ id, domain, displayName, description, isOfficial }: NotTrustedWebsiteCard) {
    return (
        <Card key={id} className="card-not-trusted">{/* border-red-500/30 hover:border-red-500 */}
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Globe size={20} className="text-primary" />
                        {displayName}
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {description && (
                    <p className="text-muted-foreground text-sm">{description}</p>
                )}

                <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">URL:</span>
                        <span className="text-primary">{domain}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant="outline">{status}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Updated:</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            {/* assuming updated_at comes as string if needed */}
                            <span>Recently</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                        <Link to={`/website/${id}`}>View Details</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}