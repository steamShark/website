import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Chrome, Monitor, Globe, Zap, Shield, Users, ArrowRight, Star, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import { TrustedCard } from "@/components/TrustedCard";
import { useNotTrustedWebsites, useTrustedWebsites } from "@/hooks/use-websites";
import NotTrustedCard from "@/components/NotTrustedCard";
import { Marquee } from "@/components/ui/marquee";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
/* import heroImage from "@/assets/hero-shark.jpg"; */

const Index = () => {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Instant page block from not trusted websites"
        },
        {
            icon: Shield,
            title: "Secure & Safe",
            description: "Privacy-focused with not gathering no information from the user"
        },
        {
            icon: Users,
            title: "Community Driven",
            description: "Built by gamers, for the gaming community"
        }/* ,
        {
            icon: Globe,
            title: "Universal",
            description: "Works across all major browsers and platforms"
        } */
    ];

    const {
        data: dataTrusted,
        isLoading: isTrustedLoading,
        isError: isTrustedError,
        error: trustedError,
        refetch: refetchTrusted,
        isFetching: isTrustedFetching,
    } = useTrustedWebsites();

    const {
        data: dataNotTrusted,
        isLoading: isNotTrustedLoading,
        isError: isNotTrustedError,
        error: notTrustedError,
        refetch: refetchNotTrusted,
        isFetching: isNotTrustedFetching,
    } = useNotTrustedWebsites();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <section className="py-20 bg-card/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">
                                Why Choose <span className="shark-text">SteamShark</span>?
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Experience a safer Steam while on the browser
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <Card key={index} className="gaming-card text-center">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                                <Icon size={24} className="text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Easy <span className="shark-text">Installation</span>
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Get SteamShark up and running in just a few clicks
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <Card className="gaming-card text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-primary">1</span>
                                    </div>
                                    <CardTitle>Download</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Click the download button for your browser
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            to="https://chromewebstore.google.com/detail/%F0%9F%A6%88steamshark/jljepdlbbomdcdmaafflabapkdhiglnf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5"
                                        >
                                            <Button variant="outline" size="sm" className="w-full">
                                                <Chrome className="mr-2" size={16} />
                                                Chrome Store
                                            </Button>
                                        </Link>
                                        {/* <Link
                                            to="https://chromewebstore.google.com/detail/%F0%9F%A6%88steamshark/jljepdlbbomdcdmaafflabapkdhiglnf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5"
                                        >
                                            <Button variant="outline" size="sm" className="w-full">
                                                <Monitor className="mr-2" size={16} />
                                                Firefox Add-ons
                                            </Button>
                                        </Link> */}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="gaming-card text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-primary">2</span>
                                    </div>
                                    <CardTitle>Install</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Follow your browser&apos;s installation prompts
                                    </p>
                                    <div className="bg-muted/50 rounded p-3 text-sm">
                                        Usually just one click to &quot;Add Extension&quot;
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="gaming-card text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl font-bold text-primary">3</span>
                                    </div>
                                    <CardTitle>Enjoy</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Start browsing Steam securely
                                    </p>
                                    <Badge className="bg-green-500/20 text-green-400">
                                        Ready to use!
                                    </Badge>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="text-center">
                            {/* <Button size="lg" className="glow-effect">
                                <Download className="mr-2" size={20} />
                                Start Installation
                            </Button> */}
                            <p className="text-sm text-muted-foreground mt-4">
                                Compatible with Chrome{/* , Firefox, Edge, and Safari */}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            {/*  <section className="py-20 hero-gradient">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl font-bold">
                            Ready to <span className="shark-text">Dive In</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Join SteamShark to enhance your steam security in browser
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="glow-effect">
                                <Download className="mr-2" size={20} />
                                Get Started Now
                            </Button>
                            
                        </div>

                        <div className="flex items-center justify-center gap-8 pt-8">
                            <div className="flex items-center gap-2">
                                <Star size={20} className="text-yellow-400" />
                                <span className="text-sm">{rating}/5 Rating</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Trusted by {number} users
                            </div>
                        </div> 
                    </div>
                </div>
            </section>*/}
            {/* TRUSTED WEBSITES */}
            <section className="py-20 bg-card/30s">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto flex flex-col gap-10">
                        {/* HEADER */}
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-4">
                                Explore <span className="shark-text">Database</span>
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                These are some websites regitered in the database
                            </p>
                        </div>
                        {/* CONTENT */}
                        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                            {/* <section className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-medium">Trusted</h2>
                                    {isTrustedFetching && <span className="text-sm text-muted-foreground">Updating…</span>}
                                </div>

                                {isTrustedError && (
                                    <p className="text-red-600 text-sm">Failed to load trusted: {String(notTrustedError)}</p>
                                )}

                                {isTrustedLoading ? (
                                    <p>Loading?</p>
                                ) : (
                                    <Marquee pauseOnHover className="[--duration:20s]">
                                        {dataTrusted.map((website) => (
                                            <TrustedCard key={website.id} id={website.id} domain={website.domain}
                                                displayName={website.display_name} description={website.description}
                                                isOfficial={website.is_official} />
                                        ))}
                                    </Marquee>
                                )}
                            </section> */}
                            <section className="space-y-3">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-medium">Trusted</h2>
                                    {isTrustedFetching && (
                                        <Badge variant="secondary" className="text-xs">Updating…</Badge>
                                    )}
                                </div>

                                {/* Error state (no retry button) */}
                                {isTrustedError && (
                                    <Alert variant="destructive" role="alert" className="max-w-xl">
                                        <AlertTitle>Failed to load trusted websites</AlertTitle>
                                        <AlertDescription className="text-sm">
                                            {String((trustedError as Error)?.message ?? trustedError ?? "Unknown error")}
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {/* Loading state */}
                                {isTrustedLoading && !isTrustedError && (
                                    <div className="flex gap-4 overflow-hidden">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="w-64 flex-shrink-0">
                                                <Skeleton className="h-28 w-full rounded-xl" />
                                                <div className="mt-2 space-y-2">
                                                    <Skeleton className="h-4 w-40" />
                                                    <Skeleton className="h-3 w-32" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Loaded state */}
                                {!isTrustedLoading && !isTrustedError && (
                                    dataTrusted?.length ? (
                                        <Marquee pauseOnHover className="[--duration:20s]">
                                            {dataTrusted.map((website) => (
                                                <TrustedCard
                                                    key={website.id}
                                                    id={website.id}
                                                    domain={website.domain}
                                                    displayName={website.display_name}
                                                    description={website.description}
                                                    isOfficial={website.is_official}
                                                />
                                            ))}
                                        </Marquee>
                                    ) : (
                                        <p className="text-sm text-muted-foreground">No trusted websites yet.</p>
                                    )
                                )}
                            </section>

                            {/* <section className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-medium">Trusted</h2>
                                    {isNotTrustedFetching && <span className="text-sm text-muted-foreground">Updating…</span>}
                                </div>

                                {isNotTrustedError && (
                                    <p className="text-red-600 text-sm">Failed to load trusted: {String(trustedError)}</p>
                                )}

                                {isNotTrustedLoading ? (
                                    <p>Loading?</p>
                                ) : (
                                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                                        {dataNotTrusted.map((website) => (
                                            <NotTrustedCard key={website.id} id={website.id} domain={website.domain}
                                                displayName={website.display_name} description={website.description}
                                                isOfficial={website.is_official} />
                                        ))}
                                    </Marquee>
                                )}
                            </section> */}
                            <section className="space-y-3">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-medium">Trusted</h2>
                                    {isNotTrustedFetching && (
                                        <Badge variant="secondary" className="text-xs">Updating…</Badge>
                                    )}
                                </div>

                                {/* Error state (no retry button) */}
                                {isNotTrustedError && (
                                    <Alert variant="destructive" role="alert" className="max-w-xl">
                                        <AlertTitle>Failed to load not trusted websites</AlertTitle>
                                        <AlertDescription className="text-sm">
                                            {String((notTrustedError as Error)?.message ?? notTrustedError ?? "Unknown error")}
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {/* Loading state */}
                                {isNotTrustedLoading && !isNotTrustedError && (
                                    <div className="flex gap-4 overflow-hidden">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="w-64 flex-shrink-0">
                                                <Skeleton className="h-28 w-full rounded-xl" />
                                                <div className="mt-2 space-y-2">
                                                    <Skeleton className="h-4 w-40" />
                                                    <Skeleton className="h-3 w-32" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Loaded state */}
                                {!isNotTrustedLoading && !isNotTrustedError && (
                                    dataNotTrusted?.length ? (
                                        <Marquee pauseOnHover className="[--duration:20s]">
                                            {dataNotTrusted.map((website) => (
                                                <NotTrustedCard key={website.id} id={website.id} domain={website.domain}
                                                    displayName={website.display_name} description={website.description}
                                                    isOfficial={website.is_official} />
                                            ))}
                                        </Marquee>
                                    ) : (
                                        <p className="text-sm text-muted-foreground">No trusted websites yet.</p>
                                    )
                                )}
                            </section>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                        </div>
                        {/* BOTTOM */}
                        <div className="text-center">
                            <Button variant="outline" size="lg" asChild>
                                <Link to="/database" className="flex items-center">
                                    Explore Database
                                    <ArrowRight className="ml-2" size={20} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;
