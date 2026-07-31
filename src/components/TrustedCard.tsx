import { ExternalLink, Globe } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

interface TrustedWebsiteCard {
    id: string;
    domain: string;
    displayName: string;
    description: string;
    isOfficial: boolean;
}

const getTrustBadge = (trustLevel: string) => {
    switch (trustLevel) {
        case "low":
            return <Badge className="bg-success/20 text-success border-success/50">Trusted</Badge>;
        case "medium":
            return <Badge className="bg-error/20 text-error border-error/50">Medium</Badge>;
        case "high":
            return <Badge variant="outline" className="text-pending border-pending/50">High</Badge>;
        default:
            return <Badge variant="outline">Unknown</Badge>;
    }
};

export function TrustedCard({ id, domain, displayName, description, isOfficial }: TrustedWebsiteCard) {
    return (
        <Card className="card-trusted">{/* border-green-500/30 hover:border-green-500 */}
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Globe size={20} className="text-primary" />
                    <h3 className="text-lg font-bold">{displayName}</h3>
                </CardTitle>
                {/* CARDS */}
                <div className="flex flex-row gap-2">
                    {isOfficial ? (
                        <Badge variant="outline" className="text-success border-success/50">Official</Badge>
                    ) : (
                        <Badge variant="outline" className="text-muted-foreground border-border">Not Official</Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex flex-row items-center justify-between">
                    <p>URL:</p>
                    <p className="text-sm text-blue-500">{domain}</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p>Category:</p>
                    <p className="text-sm text-blue-500">{domain}</p>
                </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center gap-5">
                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                >
                    <Link to={`/website/${id}`}>
                        View Details
                    </Link>
                </Button>
                <Button
                    asChild
                    variant="ghost"
                    size="sm"
                >
                    <a
                        /* href={url} */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 cursor-pointer"
                    >
                        <ExternalLink size={16} />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}