import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Calendar, Shield, Zap, Users, Lock, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useWebsiteDetails } from "@/hooks/use-websites";
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

const WebsiteDetails = () => {
    const { id } = useParams();

    const {
        data: dataWebsite,
        isLoading: isWebsiteLoading,
        isError: isWebsiteError,
        error: WebsiteError,
        refetch: refetchWebsite,
        isFetching: isWebsiteFetching,
    } = useWebsiteDetails(id);

    if (isWebsiteLoading) { return <p>Loading...</p> }

    if (!dataWebsite || isWebsiteError) {
        return <p>Error {WebsiteError.message}</p>
    }

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
                            <h1 className="text-4xl font-bold">{dataWebsite.display_name}</h1>
                            {dataWebsite.is_official && (
                                <Badge className="bg-primary/20 text-primary">Official Website</Badge>
                            )}
                        </div>
                        <p className="text-primary text-lg">{dataWebsite.url}</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* ANOTHER ADVISE */}
                            {dataWebsite.is_not_trusted && (
                                <Card className="card-not-trusted">
                                    <CardHeader>
                                        <CardTitle className="text-red-400 text-center">
                                            ⚠️ DANGER {dataWebsite.type.toUpperCase()} NOT TRUSTED! ⚠️
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            )}

                            {/* Description */}
                            <Card className={`${dataWebsite.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}`}>
                                <CardHeader>
                                    <CardTitle>
                                        About
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`leading-relaxed ${dataWebsite.is_not_trusted ? 'text-red-300' : 'text-muted-foreground'}`}>
                                        {dataWebsite.description}
                                    </p>
                                </CardContent>
                            </Card>

                            {/* WHY THE WEBSITE IS FLAGGED AS NOT TRUSTED */}
                            {dataWebsite.is_not_trusted ? (
                                <Card className="card-not-trusted">
                                    <CardHeader>
                                        <CardTitle>
                                            Why {dataWebsite.domain} is not trusted?
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-row items-center gap-5">
                                        <div className="w-1/2">
                                            <WebsiteProsCons dataWebsite={dataWebsite} />
                                        </div>
                                        <div className="w-1/2 max-h-[250px] flex flex-col gap-5 justify-center">
                                            <ChartContainer
                                                config={chartConfig}
                                                className="max-h-[250px]"
                                            >
                                                <RadialBarChart
                                                    data={chartDataNotTrusted}
                                                    startAngle={0}
                                                    endAngle={(dataWebsite.risk_score * 360) / 100}
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
                                                {dataWebsite.risk_score}% of Risk Score
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex-col gap-2 text-sm">

                                    </CardFooter>
                                </Card>
                            ) : (
                                <Card className="gaming-card">
                                    <CardHeader>
                                        <CardTitle>
                                            Why {dataWebsite.domain} is trusted?
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-row items-center gap-5">
                                        <div className="w-1/2">
                                            <WebsiteProsCons dataWebsite={dataWebsite} />
                                        </div>
                                        <div className="w-1/2 max-h-[250px] flex flex-col gap-5 justify-center">
                                            <ChartContainer
                                                config={chartConfig}
                                                className="max-h-[250px]"
                                            >
                                                <RadialBarChart
                                                    data={chartDataTrusted}
                                                    startAngle={0}
                                                    endAngle={(dataWebsite.risk_score * 360) / 100}
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
                                                    <RadialBar dataKey="visitors" background cornerRadius={0} />
                                                </RadialBarChart>
                                            </ChartContainer>
                                            <div className="flex flex-row justify-center items-center gap-2 leading-none font-medium">
                                                {dataWebsite.risk_score}% of Risk Score
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex-col gap-2 text-sm">

                                    </CardFooter>
                                </Card>
                            )}

                            {/* <Card className={`${dataWebsite.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}`}>
                                <CardHeader className="flex flex-col gap-2">
                                    <CardTitle className="flex items-center gap-2">
                                        <Users size={20} className={`${dataWebsite.is_not_trusted ? 'text-warning' : 'text-primary'}`} />
                                        Last Occurences
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">Help improve our database by reporting issues or sharing your experience with this website.</p>
                                </CardHeader>

                                <CardContent className="flex flex-col gap-3">
                                    {/* ACTIONS 
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold">Actions:</h3>
                                        <div className="flex flex-row items-center gap-5">
                                            <Button variant="outline" className="w-full">
                                                Report Issue
                                            </Button>
                                            <Button variant="outline" className="w-full">
                                                Share Experience
                                            </Button>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Last occurences 
                                    <p>Table with pagination</p>
                                </CardContent>
                            </Card> */}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Link */}
                            <div className="space-y-3">
                                {!dataWebsite.is_not_trusted ? (
                                    <>
                                        <Button
                                            asChild
                                            className="w-full glow-effect"
                                        >
                                            <a
                                                href={dataWebsite.url}
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
                                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                        <p className="text-red-400 text-sm font-medium mb-2">⚠️ Warning</p>
                                        <p className="text-red-300 text-sm">
                                            This website has been flagged as dangerous. We strongly advise against visiting and using it.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Security Information */}
                            <Card className={`${dataWebsite.is_not_trusted ? 'card-not-trusted' : 'card-trusted'}`}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Shield size={20} className={dataWebsite.is_not_trusted ? 'text-red-400' : 'text-green-400'} />
                                        Security Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">SSL Certificate</span>
                                            <div className="flex items-center gap-1">
                                                {dataWebsite.ssl_certificate ? (
                                                    <CheckCircle size={16} className="text-green-400" />
                                                ) : (
                                                    <XCircle size={16} className="text-red-400" />
                                                )}
                                                <span className={`font-semibold ${dataWebsite.ssl_certificate ? 'text-green-400' : 'text-red-400'}`}>
                                                    {dataWebsite.ssl_certificate ? 'Valid' : 'Missing'}
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-center text-muted-foreground text-xs">
                                            <p>Verification: <span>{new Date(dataWebsite.updated_at).toISOString().split("T")[0]}</span></p>
                                        </div> */}
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Tld</span>
                                            <div className="flex items-center gap-1">
                                                <span className={`font-semibold`}>
                                                    {dataWebsite.tld}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Status</span>
                                            {dataWebsite.status == "active" && (
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle size={16} className="text-green-400" />
                                                    <span className="font-semibold text-green-400">
                                                        {dataWebsite.status}
                                                    </span>
                                                </div>
                                            )}

                                            {dataWebsite.status == "inactive" && (
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle size={16} className="text-green-400" />
                                                    <span className="font-semibold text-green-400">
                                                        {dataWebsite.status}
                                                    </span>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Details */}
                            <Card className={`${dataWebsite.is_not_trusted ? 'card-not-trusted' : 'gaming-card'}`}>
                                <CardHeader>
                                    <CardTitle>Details</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <span className="text-muted-foreground block">Type</span>
                                        <Badge variant="outline" className={dataWebsite.is_not_trusted ? 'border-red-500/50 text-red-400' : ''}>
                                            {dataWebsite.type}
                                        </Badge>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Last Updated</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Calendar size={14} />
                                            <span>{new Date(dataWebsite.updated_at).toISOString().split("T")[0]}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Created at</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            <Calendar size={14} />
                                            <span>{new Date(dataWebsite.created_at).toISOString().split("T")[0]}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Trust Level</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            {dataWebsite.is_not_trusted ? (
                                                <>
                                                    <XCircle size={14} className="text-red-400" />
                                                    <span className="text-red-400">Flagged as Not Trusted</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Shield size={14} className="text-green-500" />
                                                    <span>Trustable</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block">Verified</span>
                                        <div className="flex items-center gap-1 mt-1">
                                            {dataWebsite.verified ? (
                                                <>
                                                    <Shield size={14} className="text-green-500" />
                                                    <span>Verified</span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle size={14} className="text-red-400" />
                                                    <span className="text-red-400">Not Verified</span>
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