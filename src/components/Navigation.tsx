import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { Search, Database, User, Home, FileText } from "lucide-react";

export const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home", icon: Home },
        { path: "/database", label: "Database", icon: Database },
        { path: "/changelog", label: "Changelog", icon: FileText },
        /* { path: "/users", label: "Steam Users", icon: User }, */
    ];

    return (
        <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">🦈</span>
                        </div>
                        <span className="font-bold text-xl shark-text">SteamShark</span>
                    </Link>

                    <div className="flex items-center space-x-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <Button
                                    key={item.path}
                                    asChild
                                    variant={isActive ? "default" : "ghost"}
                                    size="sm"
                                    className={isActive ? "glow-effect" : ""}
                                >
                                    <Link to={item.path} className="flex items-center space-x-2">
                                        <Icon size={16} />
                                        <span className="hidden sm:inline">{item.label}</span>
                                    </Link>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};