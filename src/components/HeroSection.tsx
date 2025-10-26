import { Chrome, Download, Globe, Monitor } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function HeroSection() {

    const stats = [
        { number: "10+", label: "Downloads" },
        { number: "100+", label: "Tracked Websites, Tools and Extensions" },
/*         { number: "99.9%", label: "Uptime" },
        { number: "10M+", label: "Interations" } */
    ];

    return (
        <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    /* backgroundImage: `url(${heroImage})`, */
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {/* <Badge className="bg-primary/20 text-primary border-primary/30">
                                        🚀 New Extension Available
                                    </Badge> */}
                                    <Link to="">
                                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/50 cursor-pointer">
                                            Version 1.1.0
                                        </Badge>
                                    </Link>
                                    <Link to="https://github.com/steamShark" target="_blank" rel="noopener noreferrer">
                                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/50 cursor-pointer">
                                            🔓 Open Source
                                        </Badge>
                                    </Link>

                                </div>
                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                    Power Up Your
                                    <br />
                                    <span className="shark-text">Steam Experience</span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                                    SteamShark is an open-source browser extension to enhance you security while browsing Steam related Webistes.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="https://chromewebstore.google.com/detail/%F0%9F%A6%88steamshark/jljepdlbbomdcdmaafflabapkdhiglnf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Button size="lg" className="glow-effect animate-pulse-glow">
                                        <Download className="mr-2" size={20} />
                                        Download Extension
                                    </Button>
                                </Link>
                                <Link to="/database">
                                    <Button variant="outline" size="lg">
                                        <Globe className="mr-2" size={20} />
                                        View Database
                                    </Button>
                                </Link>

                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <Link
                                    to="https://chromewebstore.google.com/detail/%F0%9F%A6%88steamshark/jljepdlbbomdcdmaafflabapkdhiglnf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Chrome size={24} className="text-muted-foreground" />
                                    <span className="text-sm">Chrome</span>
                                </Link>
                                {/* <Link
                                    to="https://chromewebstore.google.com/detail/%F0%9F%A6%88steamshark/jljepdlbbomdcdmaafflabapkdhiglnf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                > */}
                                <Monitor size={24} className="text-muted-foreground" />
                                <span className="text-sm">Firefox</span>
                                {/* </Link> */}
                                {/* <Link
                                    to="/install"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                > */}
                                <Globe size={24} className="text-muted-foreground" />
                                <span className="text-sm">All Browsers</span>
                                {/* </Link> */}
                            </div>
                        </div>

                        <Card className="relative animate-float gaming-card p-8 space-y-6">

                            <CardHeader >
                                <h3 className="text-xl font-semibold">Statistics</h3>{/* Live, future */}
                            </CardHeader>

                            <CardContent className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                                            <div className="text-2xl font-bold text-primary">{stat.number}</div>
                                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">Server Performance</span>
                                            <span className="text-sm text-green-400">Excellent</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full w-[95%] glow-effect" />
                                        </div>
                                    </div> */}
                            </CardContent>
                            {/* <CardFooter className="flex flex-row items-center gap-10">
                                <Badge className="bg-green-500/20 hover:bg-green-500/50 text-green-400">
                                    API Online 🟢
                                </Badge>
                                <Badge className="bg-green-500/20 hover:bg-green-500/50 text-green-400">
                                    Extension Online 🟢
                                </Badge>
                            </CardFooter> */}
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}