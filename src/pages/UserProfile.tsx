import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Trophy, Calendar, ExternalLink, Star, Gamepad2, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const UserProfile = () => {
    const { id } = useParams();

    // Mock data - in real app this would be fetched based on ID
    const userData = {
        id: "76561198000000001",
        username: "GamerPro2024",
        displayName: "Pro Gamer",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop&crop=face",
        level: 42,
        status: "online",
        lastSeen: "Currently Online",
        joinDate: "March 15, 2018",
        country: "United States",
        bio: "Passionate gamer with a love for RPGs, FPS, and indie games. Always looking for the next great adventure!",
        stats: {
            gamesOwned: 247,
            achievements: 1842,
            perfectGames: 23,
            hoursPlayed: "3,247",
            averageCompletion: 68,
            friends: 156
        },
        recentGames: [
            {
                name: "Cyberpunk 2077",
                hoursRecent: "12.4",
                hoursTotal: "89.2",
                lastPlayed: "Today"
            },
            {
                name: "The Witcher 3",
                hoursRecent: "5.8",
                hoursTotal: "156.7",
                lastPlayed: "Yesterday"
            },
            {
                name: "Baldur's Gate 3",
                hoursRecent: "24.1",
                hoursTotal: "127.3",
                lastPlayed: "2 days ago"
            }
        ],
        topAchievements: [
            {
                game: "Portal 2",
                name: "Still Alive",
                description: "Complete the game",
                rarity: "Common",
                date: "Dec 2023"
            },
            {
                game: "Half-Life 2",
                name: "Zombie Chopper",
                description: "Kill 1000 zombies",
                rarity: "Rare",
                date: "Nov 2023"
            },
            {
                game: "Counter-Strike 2",
                name: "Marksman",
                description: "Get 500 headshots",
                rarity: "Uncommon",
                date: "Oct 2023"
            }
        ]
    };

    const getRarityColor = (rarity: string) => {
        switch (rarity.toLowerCase()) {
            case "common": return "text-gray-400";
            case "uncommon": return "text-green-400";
            case "rare": return "text-blue-400";
            case "epic": return "text-purple-400";
            case "legendary": return "text-yellow-400";
            default: return "text-muted-foreground";
        }
    };

    return (
        <div className="min-h-screen hero-gradient">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Back Button */}
                    <Button
                        asChild
                        variant="ghost"
                        className="mb-6"
                    >
                        <Link to="/users" className="flex items-center gap-2">
                            <ArrowLeft size={16} />
                            Back to Users
                        </Link>
                    </Button>

                    {/* Profile Header */}
                    <Card className="gaming-card mb-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
                        <CardContent className="p-6 relative z-10">
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                                        <Avatar className="w-full h-full">
                                            <AvatarImage src={userData.avatar} alt={userData.displayName} />
                                            <AvatarFallback className="text-2xl bg-background">
                                                {userData.displayName.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                    <div className="absolute -top-2 -left-2 bg-yellow-500 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center">
                                        <span className="text-xs font-bold text-black">{userData.level}</span>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            {userData.displayName}
                                        </h1>
                                        <p className="text-muted-foreground text-lg font-mono">@{userData.username}</p>
                                        <div className="flex items-center gap-4 mt-3">
                                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-3 py-1">
                                                ⭐ LVL {userData.level}
                                            </Badge>
                                            <Badge className={userData.status === "online" ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-red-500/20 text-red-400 border-red-500/50"}>
                                                {userData.status === "online" ? "🟢 ONLINE" : "🔴 OFFLINE"}
                                            </Badge>
                                            <Badge variant="outline" className="font-semibold">
                                                🌍 {userData.country}
                                            </Badge>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                        {userData.bio}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            <span>Member since {userData.joinDate}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} />
                                            <span>{userData.lastSeen}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Button className="glow-effect bg-gradient-to-r from-primary to-secondary">
                                        <ExternalLink size={16} className="mr-2" />
                                        Launch Steam Profile
                                    </Button>
                                    <Badge className="text-center bg-blue-500/20 text-blue-400 border-blue-500/50">
                                        🎮 Steam ID: {userData.id.slice(-6)}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Gaming Stats */}
                            <Card className="gaming-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Trophy size={20} className="text-primary" />
                                        Gaming Statistics
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30">
                                            <div className="text-3xl font-bold text-blue-400 mb-1">🎮</div>
                                            <div className="text-2xl font-bold text-primary">{userData.stats.gamesOwned}</div>
                                            <div className="text-sm text-muted-foreground font-semibold">GAMES</div>
                                        </div>
                                        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30">
                                            <div className="text-3xl font-bold text-yellow-400 mb-1">🏆</div>
                                            <div className="text-2xl font-bold text-primary">{userData.stats.achievements}</div>
                                            <div className="text-sm text-muted-foreground font-semibold">ACHIEVEMENTS</div>
                                        </div>
                                        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30">
                                            <div className="text-3xl font-bold text-purple-400 mb-1">💎</div>
                                            <div className="text-2xl font-bold text-primary">{userData.stats.perfectGames}</div>
                                            <div className="text-sm text-muted-foreground font-semibold">PERFECT</div>
                                        </div>
                                        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30">
                                            <div className="text-3xl font-bold text-green-400 mb-1">⏱️</div>
                                            <div className="text-2xl font-bold text-primary">{userData.stats.hoursPlayed}</div>
                                            <div className="text-sm text-muted-foreground font-semibold">HOURS</div>
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span>Average Game Completion</span>
                                            <span className="font-semibold">{userData.stats.averageCompletion}%</span>
                                        </div>
                                        <Progress value={userData.stats.averageCompletion} className="h-2" />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Games */}
                            <Card className="gaming-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Gamepad2 size={20} className="text-primary" />
                                        Recently Played
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {userData.recentGames.map((game, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                                                <div>
                                                    <div className="font-semibold">{game.name}</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {game.hoursRecent}h past 2 weeks • {game.hoursTotal}h total
                                                    </div>
                                                </div>
                                                <Badge variant="outline">{game.lastPlayed}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Achievements */}
                            <Card className="gaming-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Star size={20} className="text-primary" />
                                        Recent Achievements
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {userData.topAchievements.map((achievement, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <Trophy size={20} className="text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-semibold">{achievement.name}</span>
                                                        <Badge variant="outline" className={getRarityColor(achievement.rarity)}>
                                                            {achievement.rarity}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-sm text-muted-foreground mb-1">
                                                        {achievement.description}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {achievement.game} • {achievement.date}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Friends */}
                            <Card className="gaming-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users size={20} className="text-primary" />
                                        Social
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {userData.stats.friends}
                                    </div>
                                    <div className="text-muted-foreground">Friends</div>
                                    <Button variant="outline" size="sm" className="mt-4 w-full">
                                        View Friends
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <div className="space-y-3">
                                <Button variant="outline" className="w-full">
                                    Add Friend
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Send Message
                                </Button>
                                <Button variant="outline" className="w-full">
                                    View Wishlist
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Compare Libraries
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;