import { useEffect, useState } from "react";
import { Chrome, Download, ExternalLink, Globe, Monitor, Shield, ShieldCheck, ShieldOff, TriangleAlert, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

export function HeroSection() {
    const [active, setActive] = useState<0 | 1>(0);

    useEffect(() => {
        const id = setInterval(() => setActive(a => (a === 0 ? 1 : 0)), 5000);
        return () => clearInterval(id);
    }, []);

    const front = "z-20 translate-x-0 translate-y-0 scale-100 opacity-100";
    const back  = "z-10 translate-x-7 -translate-y-7 scale-[0.94] opacity-75";

    return (
        <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
            {/* Scrolling grid */}
            <div
                className="absolute inset-0 opacity-[0.06] animate-grid-scroll"
                style={{
                    backgroundImage: `linear-gradient(hsl(224 30% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(224 30% 60%) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Ambient glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left — copy */}
                        <div className="space-y-8 animate-fade-in">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/25 cursor-pointer">
                                        v2.0.0 - extension
                                    </Badge>
                                    <Link to="https://github.com/steamShark" target="_blank" rel="noopener noreferrer">
                                        <Badge className="bg-success/20 text-success border-success/30 hover:bg-success/30 cursor-pointer">
                                            🔓 Open Source
                                        </Badge>
                                    </Link>
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                                    Browse the web.<br />
                                    <span className="shark-text">Keep your Steam<br />account safe.</span>
                                </h1>

                                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                                    SteamShark is a free, open-source browser extension that flags phishing sites, fake skin traders, and scam marketplaces - before they get you.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="https://chromewebstore.google.com/detail/%F0%9F%A6%88steamshark/jljepdlbbomdcdmaafflabapkdhiglnf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="lg" className="glow-effect animate-pulse-glow w-full sm:w-auto">
                                        <Download size={18} className="mr-2" />
                                        Add to Chrome — Free
                                    </Button>
                                </Link>
                                <Link to="/database">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                        <Globe size={18} className="mr-2" />
                                        Browse Database
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Chrome size={16} />
                                    <span>Chrome</span>
                                </div>
                                <div className="flex items-center gap-2 opacity-40">
                                    <Monitor size={16} />
                                    <span>Firefox — coming soon</span>
                                </div>
                            </div>
                        </div>

                        {/* Right — stacked product mockups */}
                        {/* pt-7/pr-7 gives room for the back card to peek above and right */}
                        <div className="pt-7 pr-7">
                        <div className="relative h-[460px]">

                            {/* Card 0 — Trusted (browser + badge popup) */}
                            <div
                                className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer ${active === 0 ? front : back}`}
                                onClick={() => setActive(0)}
                            >
                                <Card className="gaming-card h-full p-0 overflow-hidden flex flex-col">
                                    {/* Browser bar */}
                                    <div className="bg-secondary/60 border-b border-border/50 px-4 py-2.5 flex items-center gap-3 shrink-0">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-error/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-pending/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
                                        </div>
                                        <div className="flex-1 bg-background/50 rounded px-3 py-0.5 text-xs text-muted-foreground font-mono truncate flex items-center gap-1.5">
                                            <ShieldCheck size={11} className="text-success shrink-0" />
                                            steamcommunity.com
                                        </div>
                                    </div>

                                    {/* Page area with badge popup */}
                                    <div className="flex-1 relative bg-background/10">
                                        {/* Simulated page content */}
                                        <div className="absolute inset-0 p-5 space-y-2 opacity-20 pointer-events-none select-none">
                                            <div className="h-3 w-2/3 bg-foreground/20 rounded" />
                                            <div className="h-3 w-1/2 bg-foreground/20 rounded" />
                                            <div className="h-3 w-3/4 bg-foreground/20 rounded mt-4" />
                                            <div className="h-3 w-1/3 bg-foreground/20 rounded" />
                                            <div className="h-3 w-2/5 bg-foreground/20 rounded" />
                                        </div>

                                        {/* Badge popup — top right */}
                                        <div className="absolute top-4 right-4 w-[210px] bg-card border border-border/80 rounded-xl shadow-2xl p-4 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold tracking-widest text-foreground/50 uppercase">
                                                    🦈 SteamShark
                                                </span>
                                                <X size={12} className="text-muted-foreground/40" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_6px_hsl(142_71%_45%/0.8)]" />
                                                <span className="text-sm font-semibold">This website is trusted</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground pl-4">steamcommunity.com</p>
                                            <Separator />
                                            <div className="flex items-center gap-1 text-xs text-primary">
                                                <span>Learn more</span>
                                                <ExternalLink size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Card 1 — Not trusted (warning page) */}
                            <div
                                className={`absolute inset-0 transition-all duration-700 ease-in-out cursor-pointer ${active === 1 ? front : back}`}
                                onClick={() => setActive(1)}
                            >
                                <Card className="card-not-trusted h-full p-0 overflow-hidden">
                                    <div className="bg-error/20 h-full p-6 flex flex-col items-center justify-center gap-4 text-center">
                                        <div className="w-14 h-14 rounded-full bg-background/20 border border-error/40 flex items-center justify-center shrink-0">
                                            <ShieldOff size={26} className="text-error" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <p className="font-bold text-base leading-snug">
                                                steamscam.ru/ is a{" "}
                                                <span className="text-error">not trusted website!</span>
                                            </p>
                                            <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                                                This page might not be safe. Be cautious of any suspicious links or requests for personal information.
                                            </p>
                                        </div>

                                        <div className="inline-flex items-center gap-2 bg-background/20 border border-border/30 rounded-full px-3 py-1.5 text-xs font-mono text-muted-foreground">
                                            <Shield size={11} className="text-muted-foreground/60" />
                                            steamscam.ru/
                                        </div>

                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline" className="text-xs h-8 border-foreground/20 hover:bg-background/20">
                                                ← Back to safety
                                            </Button>
                                            <Button size="sm" variant="ghost" className="text-xs h-8 text-muted-foreground hover:bg-background/10">
                                                Continue anyway
                                                <ExternalLink size={11} className="ml-1" />
                                            </Button>
                                        </div>

                                        <div className="text-left space-y-2 w-full pt-1">
                                            {[
                                                "Always check the domain before logging in with Steam.",
                                                "Never share your Steam Guard codes or recovery codes.",
                                                "When in doubt, close the tab and access Steam via bookmarks only.",
                                            ].map((tip, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <TriangleAlert size={11} className="text-error shrink-0 mt-0.5" />
                                                    <span>{tip}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Dot indicators */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                <button
                                    onClick={() => setActive(0)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${active === 0 ? "bg-primary w-5" : "bg-muted-foreground/40"}`}
                                />
                                <button
                                    onClick={() => setActive(1)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${active === 1 ? "bg-primary w-5" : "bg-muted-foreground/40"}`}
                                />
                            </div>
                        </div>
                        </div>{/* end pt-7 pr-7 wrapper */}

                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;
