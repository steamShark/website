import { Github, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

export const Footer = () => {
    return (
        <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-between items-center gap-4">
                    <div className="w-full flex flex-row justify-between items-center gap-4">
                        {/* LEFT PART */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-full flex flex-row items-center gap-2 justify-start">
                                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold text-sm">🦈</span>
                                </div>
                                <span className="font-semibold text-foreground">SteamShark</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                SteamShark is an open-source browser extension <br />
                                to enhance your security while browsing <br />
                                Steam-related websites.
                            </p>
                        </div>
                        {/* RIGHT PART */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> from gamers for gamers.
                            </span>
                            <Link
                                to="https://github.com/steamShark"
                                className="flex items-center gap-2 hover:text-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-4 h-4" />
                                Open Source
                            </Link>
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-center justify-start gap-5">
                        <p className="text-sm font-semibold">Live Stats</p>
                        <Badge className="bg-green-500/20 hover:bg-green-500/50 text-green-400">
                            API Online 🟢
                        </Badge>
                        <Badge className="bg-green-500/20 hover:bg-green-500/50 text-green-400">
                            Extension Online 🟢
                        </Badge>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
                    <p>© 2025 <span className="font-bold">SteamShark</span>. Protect yourself.</p>
                </div>
            </div>
        </footer>
    );
};