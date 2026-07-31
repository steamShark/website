import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Calendar, Shield, Users, CheckCircle, XCircle, AlertTriangle, MapPin, Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWebsiteDetails } from "@/hooks/use-websites";
import { useOccurrencesByWebsiteId } from "@/hooks/use-occurrences";
import { Occurrence } from "@/models/occurrences";
import {
    PolarGrid,
    RadialBar,
    RadialBarChart,
} from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import WebsiteProsCons from "@/components/WebsiteProsCons"

const chartDataTrusted = [
    { browser: "safari", visitors: 200, fill: "green" },
]

const chartDataNotTrusted = [
    { browser: "safari", visitors: 200, fill: "red" },
]

const chartConfig = {
    visitors: {
        label: "riskLevel",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

const severityStyles: Record<string, string> = {
    low: "bg-success/10 text-success border-success/30",
    medium: "bg-pending/10 text-pending border-pending/30",
    high: "bg-pending-deep/10 text-pending-deep border-pending-deep/30",
    critical: "bg-error/10 text-error border-error/30",
};

const statusStyles: Record<string, string> = {
    pending: "bg-pending/10 text-pending border-pending/30",
    resolved: "bg-success/10 text-success border-success/30",
    rejected: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
};

const WebsiteDetails = () => {
    const { id } = useParams();
    const [selectedOccurrence, setSelectedOccurrence] = useState<Occurrence | null>(null);
    const [activeTab, setActiveTab] = useState("overview");

    const {
        data: dataWebsite,
        isLoading: isWebsiteLoading,
        isError: isWebsiteError,
        error: WebsiteError,
        refetch: refetchWebsite,
        isFetching: isWebsiteFetching,
    } = useWebsiteDetails(id);

    const {
        data: dataOccurrences,
        isLoading: isOccurrencesLoading,
    } = useOccurrencesByWebsiteId(id, activeTab === "occurrences");

    if (isWebsiteLoading) { return <p>Loading...</p> }

    if (!dataWebsite || isWebsiteError) {
        return <p>Error {WebsiteError.message}</p>
    }

    const website = dataWebsite.website;

    return (
        <div className="min-h-screen hero-gradient">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Button
                        asChild
                        variant="ghost"
                        className="mb-6"
                    >
                        <Link to="/database" className="flex items-center gap-2">
                            <ArrowLeft size={16} />
                            Database
                        </Link>
                    </Button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Globe size={32} className="text-primary" />
                            <h1 className="text-4xl font-bold">{website.display_name}</h1>
                            {website.is_official && (
                                <Badge className="bg-primary/20 text-primary">Official Website</Badge>
                            )}
                        </div>
                        <p className="text-primary text-lg">{website.url}</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Main Info */}
                        <div className="lg:col-span-2">
                            <Tabs defaultValue="overview" onValueChange={setActiveTab}>
                                <TabsList className="mb-4">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="occurrences">
                                        Occurrences
                                        {dataWebsite.occurrences_count > 0 && (
                                            <Badge variant="secondary" className="ml-2 text-xs">
                                                {dataWebsite.occurrences_count}
                                            </Badge>
                                        )}
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview" className="space-y-6">
                                    {/* Warning banner */}
                                    {website.is_not_trusted && (
                                        <Card className="card-not-trusted">
                                            <CardHeader>
                                                <CardTitle className="text-error text-center">
                                                    ⚠️ DANGER {website.type.toUpperCase()} NOT TRUSTED! ⚠️
                                                </CardTitle>
                                            </CardHeader>
                                        </Card>
                                    )}

                                    {/* Description */}
                                    <Card className={website.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}>
                                        <CardHeader>
                                            <CardTitle>About</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className={`leading-relaxed ${website.is_not_trusted ? 'text-error/75' : 'text-muted-foreground'}`}>
                                                {website.description}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Trust analysis */}
                                    <Card className={website.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}>
                                        <CardHeader>
                                            <CardTitle>
                                                Why {website.domain} is {website.is_not_trusted ? 'not trusted' : 'trusted'}?
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-row items-center gap-5">
                                            <div className="w-1/2">
                                                <WebsiteProsCons dataWebsite={website} />
                                            </div>
                                            <div className="w-1/2 max-h-[250px] flex flex-col gap-5 justify-center">
                                                <ChartContainer config={chartConfig} className="max-h-[250px]">
                                                    <RadialBarChart
                                                        data={website.is_not_trusted ? chartDataNotTrusted : chartDataTrusted}
                                                        startAngle={0}
                                                        endAngle={(website.risk_score * 360) / 100}
                                                        innerRadius={20}
                                                        outerRadius={50}
                                                    >
                                                        <PolarGrid
                                                            gridType="circle"
                                                            radialLines={false}
                                                            stroke="none"
                                                            className="first:fill-foreground last:fill-background"
                                                            polarRadius={[30, 45]}
                                                        />
                                                        <RadialBar dataKey="visitors" background cornerRadius={10} />
                                                    </RadialBarChart>
                                                </ChartContainer>
                                                <div className="flex flex-row justify-center items-center gap-2 leading-none font-medium">
                                                    {website.risk_score}% of Risk Score
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter />
                                    </Card>
                                </TabsContent>

                                <TabsContent value="occurrences">
                                    <Card className={website.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}>
                                        <CardHeader className="flex flex-col gap-2">
                                            <CardTitle className="flex items-center gap-2">
                                                <Users size={20} className={website.is_not_trusted ? 'text-error' : 'text-primary'} />
                                                Occurrences
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground">
                                                Reported sightings of this {website.type} across the community.
                                            </p>
                                        </CardHeader>
                                        <CardContent>
                                            {isOccurrencesLoading ? (
                                                <p className="text-sm text-muted-foreground text-center py-8">Loading...</p>
                                            ) : dataOccurrences && dataOccurrences.length > 0 ? (
                                                <div className="flex flex-col gap-2">
                                                    {dataOccurrences.map((occurrence, index) => (
                                                        <button
                                                            key={occurrence.id}
                                                            onClick={() => setSelectedOccurrence(occurrence)}
                                                            className="w-full flex items-center justify-between p-3 rounded-lg border border-border/50 bg-background/30 hover:bg-background/60 transition-colors text-left"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-sm text-muted-foreground">#{index + 1}</span>
                                                                <span className="text-sm font-medium capitalize">{occurrence.type}</span>
                                                                {occurrence.country_code && (
                                                                    <span className="text-xs text-muted-foreground">{occurrence.country_code}</span>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Badge variant="outline" className={`text-xs ${severityStyles[occurrence.severity]}`}>
                                                                    {occurrence.severity}
                                                                </Badge>
                                                                <Badge variant="outline" className={`text-xs ${statusStyles[occurrence.status]}`}>
                                                                    {occurrence.status}
                                                                </Badge>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm text-muted-foreground text-center py-8">
                                                    No occurrences reported yet.
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>

                                    <Dialog open={!!selectedOccurrence} onOpenChange={(open) => !open && setSelectedOccurrence(null)}>
                                        <DialogContent className="max-w-lg">
                                            <DialogHeader>
                                                <DialogTitle className="flex items-center gap-2 capitalize">
                                                    <AlertTriangle size={18} className="text-orange-400" />
                                                    {selectedOccurrence?.type} occurrence
                                                </DialogTitle>
                                            </DialogHeader>

                                            {selectedOccurrence && (
                                                <div className="flex flex-col gap-4 text-sm">
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline" className={severityStyles[selectedOccurrence.severity]}>
                                                            {selectedOccurrence.severity} severity
                                                        </Badge>
                                                        <Badge variant="outline" className={statusStyles[selectedOccurrence.status]}>
                                                            {selectedOccurrence.status}
                                                        </Badge>
                                                    </div>

                                                    <div>
                                                        <p className="text-muted-foreground mb-1">Description</p>
                                                        <p>{selectedOccurrence.description}</p>
                                                    </div>

                                                    <Separator />

                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div>
                                                            <p className="text-muted-foreground mb-1 flex items-center gap-1">
                                                                <MapPin size={12} /> Country
                                                            </p>
                                                            <p className="font-medium">{selectedOccurrence.country_code || "—"}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground mb-1">Source</p>
                                                            <p className="font-medium capitalize">{selectedOccurrence.source.replace("_", " ")}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted-foreground mb-1">Reported at</p>
                                                            <p className="font-medium">{new Date(selectedOccurrence.created_at).toISOString().split("T")[0]}</p>
                                                        </div>
                                                        {selectedOccurrence.resolved_at && (
                                                            <div>
                                                                <p className="text-muted-foreground mb-1">Resolved at</p>
                                                                <p className="font-medium">{new Date(selectedOccurrence.resolved_at).toISOString().split("T")[0]}</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {selectedOccurrence.url_reported && (
                                                        <>
                                                            <Separator />
                                                            <div>
                                                                <p className="text-muted-foreground mb-1 flex items-center gap-1">
                                                                    <Link2 size={12} /> Reported URL
                                                                </p>
                                                                <p className="font-mono text-xs break-all text-error">{selectedOccurrence.url_reported}</p>
                                                            </div>
                                                        </>
                                                    )}

                                                    {selectedOccurrence.resolution_notes && (
                                                        <>
                                                            <Separator />
                                                            <div>
                                                                <p className="text-muted-foreground mb-1">Resolution notes</p>
                                                                <p>{selectedOccurrence.resolution_notes}</p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </DialogContent>
                                    </Dialog>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Link */}
                            <div className="space-y-3">
                                {!website.is_not_trusted ? (
                                    <>
                                        <Button
                                            asChild
                                            className="w-full glow-effect"
                                        >
                                            <a
                                                href={website.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink size={16} />
                                                Visit Website
                                            </a>
                                        </Button>
                                    </>
                                ) : (
                                    <div className="p-4 bg-error/10 border border-error/30 rounded-lg">
                                        <p className="text-error text-sm font-medium mb-2">⚠️ Warning</p>
                                        <p className="text-error/75 text-sm">
                                            This website has been flagged as dangerous. We strongly advise against visiting and using it.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Security Information */}
                            <Card className={`${website.is_not_trusted ? 'card-not-trusted' : 'card-trusted'}`}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Shield size={20} className={website.is_not_trusted ? 'text-error' : 'text-success'} />
                                        Security Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">SSL Certificate</span>
                                            <div className="flex items-center gap-1">
                                                {website.ssl_certificate ? (
                                                    <CheckCircle size={16} className="text-success" />
                                                ) : (
                                                    <XCircle size={16} className="text-error" />
                                                )}
                                                <span className={`font-semibold ${website.ssl_certificate ? 'text-success' : 'text-error'}`}>
                                                    {website.ssl_certificate ? 'Valid' : 'Missing'}
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-center text-muted-foreground text-xs">
                                            <p>Verification: <span>{new Date(website.updated_at).toISOString().split("T")[0]}</span></p>
                                        </div> */}
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Tld</span>
                                            <div className="flex items-center gap-1">
                                                <span className={`font-semibold`}>
                                                    {website.tld}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Status</span>
                                            {website.status == "active" && (
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle size={16} className="text-success" />
                                                    <span className="font-semibold text-success">
                                                        {website.status}
                                                    </span>
                                                </div>
                                            )}

                                            {website.status == "inactive" && (
                                                <div className="flex items-center gap-1">
                                                    <XCircle size={16} className="text-error" />
                                                    <span className="font-semibold text-error">
                                                        {website.status}
                                                    </span>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Details */}
                            <Card className={`${website.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}`}>
                                <CardHeader>
                                    <CardTitle>Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <span className="text-muted-foreground block">Type</span>
                                        <Badge variant="outline" className={website.is_not_trusted ? 'border-error/50 text-error' : ''}>
                                            {website.type}
                                        </Badge>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Last Updated</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Calendar size={14} />
                                            <span>{new Date(website.updated_at).toISOString().split("T")[0]}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Created at</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Calendar size={14} />
                                            <span>{new Date(website.created_at).toISOString().split("T")[0]}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Trust Level</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            {website.is_not_trusted ? (
                                                <>
                                                    <XCircle size={14} className="text-error" />
                                                    <span className="text-error">Flagged as Not Trusted</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Shield size={14} className="text-success" />
                                                    <span>Trustable</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Verified</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            {website.verified ? (
                                                <>
                                                    <Shield size={14} className="text-success" />
                                                    <span>Verified</span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle size={14} className="text-error" />
                                                    <span className="text-error">Not Verified</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteDetails;