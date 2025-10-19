import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, MousePointerClick, PlugZap, Pin, Bug, Link as LinkIcon, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Welcome / Getting Started page for SteamShark
 * - Say thanks for installing
 * - Clear next steps to start using
 * - Works as a standalone page (drop into a route or render in App)
 *
 * Usage:
 *   import WelcomeGettingStarted from "@/pages/WelcomeGettingStarted";
 *   export default function App(){
 *     return <WelcomeGettingStarted />
 *   }
 */

export default function WelcomeGettingStarted() {
    const steps = [
        {
            icon: <PlugZap className="h-5 w-5" />,
            title: "Sign in with Steam",
            body: "Open SteamShark and connect your Steam account to enable domain reputation checks tied to your profile.",
            cta: (
                <Button variant="default" onClick={() => window.open("/signin", "_self")}>Sign in</Button>
            ),
        },
        {
            icon: <Pin className="h-5 w-5" />,
            title: "Pin the extension",
            body: "In your browser toolbar, open Extensions → pin SteamShark so it’s one click away when you visit a site.",
            cta: (
                <Button variant="secondary" onClick={() => alert("In Chrome: Click the puzzle icon → Pin SteamShark. In Edge: Extensions → Show in toolbar.")}>How to pin</Button>
            ),
        },
        {
            icon: <Shield className="h-5 w-5" />,
            title: "Auto‑protect on Steam logins",
            body: "SteamShark watches for Steam login prompts and flags risky impersonation pages before you type credentials.",
            cta: (
                <Button variant="outline" onClick={() => window.open("/settings/protection", "_self")}>Review protection</Button>
            ),
        },
        {
            icon: <MousePointerClick className="h-5 w-5" />,
            title: "Check any site manually",
            body: "Click the toolbar button on any page to see its trust score, ownership, and previous phishing reports.",
            cta: (
                <Button variant="outline" onClick={() => window.open("/dashboard/check", "_self")}>Open checker</Button>
            ),
        },
    ];

    const tips = [
        {
            icon: <Bug className="h-4 w-4" />,
            title: "Report a suspicious site",
            body: "Help the community by submitting phishing attempts you encounter. Fast reports improve everyone’s safety.",
            href: "/report",
        },
        {
            icon: <LinkIcon className="h-4 w-4" />,
            title: "Trusted websites list",
            body: "Browse verified Valve/partner domains so you can quickly recognize legit login flows.",
            href: "/trusted",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
            <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                >
                    <Badge className="mb-3 inline-flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" />
                        New install
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Thanks for installing <span className="text-primary">SteamShark</span> 🦈
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                        You’re a step closer to safer Steam logins. Follow these quick steps to get protection and site checks running.
                    </p>
                </motion.div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.05 * i }}
                        >
                            <Card className="h-full">
                                <CardHeader className="flex flex-row items-center gap-3">
                                    <div className="rounded-xl bg-primary/10 p-2 text-primary">{s.icon}</div>
                                    <CardTitle className="text-lg">{s.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="mb-4 text-sm text-muted-foreground">{s.body}</p>
                                    {s.cta}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                >
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="text-xl">You’re protected when you see this</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4 md:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                                <div>
                                    <p className="font-medium">Trust badge on known sites</p>
                                    <p className="text-sm text-muted-foreground">SteamShark labels official Valve/partner domains and warns on impersonations.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="mt-1 h-5 w-5" />
                                <div>
                                    <p className="font-medium">Real‑time checks on login forms</p>
                                    <p className="text-sm text-muted-foreground">Risky or embedded Steam logins are flagged before credentials are entered.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {tips.map((t, i) => (
                        <Card key={i}>
                            <CardHeader className="flex flex-row items-center gap-3">
                                <div className="rounded-xl bg-muted p-2">{t.icon}</div>
                                <CardTitle className="text-base">{t.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="mb-3 text-sm text-muted-foreground">{t.body}</p>
                                <Button variant="ghost" className="px-0" onClick={() => window.open(t.href, "_self")}>Learn more →</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
