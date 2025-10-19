import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SteamUsers = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen hero-gradient flex flex-col">
            <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
                <div className="max-w-4xl mx-auto flex-1 flex flex-col justify-center">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-6xl font-bold mb-6">
                            Find Steam <span className="shark-text">Players</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                            Search for Steam users and explore their gaming profiles
                        </p>
                    </div>

                    {/* Search */}
                    <div className="flex gap-4 mb-16 max-w-2xl mx-auto w-full">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={24} />
                            <Input
                                placeholder="Enter Steam username or ID..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-14 text-lg gaming-card"
                            />
                        </div>
                        <Button
                            onClick={handleSearch}
                            disabled={isLoading}
                            className="glow-effect h-14 px-8 text-lg"
                            size="lg"
                        >
                            {isLoading ? "Searching..." : "Search"}
                        </Button>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-auto">
                    <p className="text-muted-foreground">
                        Powered by SteamShark - Open source Steam enhancement tools
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Search results will appear here after performing a search
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SteamUsers;