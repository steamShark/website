import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, GitCommit, Plus, Bug, Zap, ExternalLink, Github, Globe, FileClock, Blocks, SquareCode, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

export default function Changelog() {
 // const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

  const websiteChangelogEntries = [
    {
      version: "v2.0.0",
      date: "01/11/2025",
      type: "major",
     /*  githubRelease: "https://github.com/steamshark/releases/tag/v2.0.0", */
      changes: [
        {
          type: "feature",
          title: "Website Information",
          description: "A dedicated page to review and verify all data registered by SteamShark."
        },
        {
          type: "feature",
          title: "Database List",
          description: "View a complete list of all registered websites in the database."
        },
        {
          type: "major",
          title: "Website Restructure",
          description: "Migrating the existing HTML website to a modern React-based architecture for improved performance, scalability, and maintainability."
        }
      ]
    },
    {
      version: "v1.0.0",
      date: "19/01/2025",
      type: "major",
      githubRelease: "https://github.com/Franciscoborges2002/steamShark/tree/refs/heads/gh-pages",
      changes: [
        {
          type: "feature",
          title: "Initial Release",
          description: "SteamShark web application with basic information about the extension!"
        }
      ]
    }
  ];

  const extensionChangelogEntries = [
    {
      version: "v2.0.0",
      date: "01/11/2025",
      type: "major",
      githubRelease: "https://github.com/Franciscoborges2002/steamShark",
      changes: [
        {
          type: "major",
          title: "Information change to API",
          description: "Now information from websites is provided by steamshark.com API"
        }
      ]
    },
    {
      version: "v1.0.1",
      date: "23/02/2025",
      type: "minor",
      changes: [
        {
          type: "minor",
          title: "Changed extension linking",
          description: "Minor changesin extension linkings"
        }
      ]
    },
    {
      version: "v1.0.0",
      date: "20/02/2025",
      type: "major",
      changes: [
        {
          type: "feature",
          title: "Browser Extension Launch",
          description: "Initial release of SteamShark browser extension for Chrome Web Store"
        }
      ]
    }
  ];

  const apiChangelogEntries = [
    {
      version: "v1.0.0",
      date: "01/11/2025",
      type: "major",
      changes: [
        {
          type: "feature",
          title: "REST API Launch",
          description: "Initial API release with website registering websites"
        }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Plus className="w-4 h-4" />;
      case "improvement":
        return <Zap className="w-4 h-4" />;
      case "fix":
        return <Bug className="w-4 h-4" />;
      default:
        return <GitCommit className="w-4 h-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const variants = {
      feature: "default",
      improvement: "secondary",
      fix: "destructive",
      major: "default"
    } as const;

    return (
      <Badge variant={variants[type as keyof typeof variants] || "outline"} className="capitalize">
        {type}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-8 flex flex-col align-center gap-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold shark-text mb-4 flex items-center justify-center gap-3">
            <FileClock className="w-10 h-10 text-primary" />
            Changelog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track all updates and improvements to SteamShark
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
          <Tabs defaultValue="website" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="extension" className="flex items-center gap-2">
                Extension
                <Blocks className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="api" className="flex items-center gap-2">
                API
                <SquareCode className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="website" className="flex items-center gap-2">
                Website
                <Globe className="w-4 h-4" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="website">
              <div className="space-y-8">
                {/* LINKS */}
                <Card>
                  <CardHeader>
                    <h2 className="text-lg font-semibold">Links</h2>
                  </CardHeader>
                  <CardContent>
                    <a href="https://github.com/steamshark/website/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="flex flex-row gap-2">
                        <p>GitHub</p>
                        <SquareArrowOutUpRight className="w-3 h-3" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                {websiteChangelogEntries.map((entry) => (
                  <Card key={entry.version} id={`version-${entry.version}`} className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          {entry.version}
                          {getTypeBadge(entry.type)}
                        </CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{entry.date}</span>
                          </div>
                          {entry.githubRelease && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={entry.githubRelease} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Release
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {entry.changes.map((change, index) => (
                          <div key={index} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/30">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(change.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h4 className="font-semibold mb-1">{change.title}</h4>
                                  <p className="text-muted-foreground">{change.description}</p>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  {getTypeBadge(change.type)}
                                  {(change as any).githubIssue && (
                                    <Button variant="outline" size="sm" asChild>
                                      <a href={(change as any).githubIssue} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-3 h-3 mr-1" />
                                        Issue
                                        <ExternalLink className="w-2 h-2 ml-1" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="extension">
              <div className="space-y-8">
                {/* LINKS */}
                <Card>
                  <CardHeader>
                    <h2 className="text-lg font-semibold">Links</h2>
                  </CardHeader>
                  <CardContent>
                    <a href="https://github.com/steamshark/api/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="flex flex-row gap-2">
                        <p>GitHub</p>
                        <SquareArrowOutUpRight className="w-3 h-3" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                {extensionChangelogEntries.map((entry) => (
                  <Card key={entry.version} className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          {entry.version}
                          {getTypeBadge(entry.type)}
                        </CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{entry.date}</span>
                          </div>
                          {entry.githubRelease && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={entry.githubRelease} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Release
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {entry.changes.map((change, index) => (
                          <div key={index} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/30">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(change.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h4 className="font-semibold mb-1">{change.title}</h4>
                                  <p className="text-muted-foreground">{change.description}</p>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  {getTypeBadge(change.type)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="api">
              <div className="space-y-8">
                {/* LINKS */}
                <Card>
                  <CardHeader>
                    <h2 className="text-lg font-semibold">Links</h2>
                  </CardHeader>
                  <CardContent>
                    <a href="https://github.com/steamshark/extension/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="flex flex-row gap-2">
                        <p>GitHub</p>
                        <SquareArrowOutUpRight className="w-3 h-3" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                {apiChangelogEntries.map((entry) => (
                  <Card key={entry.version} className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          {entry.version}
                          {getTypeBadge(entry.type)}
                        </CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{entry.date}</span>
                          </div>
                          {entry.githubRelease && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={entry.githubRelease} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Release
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {entry.changes.map((change, index) => (
                          <div key={index} className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/30">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(change.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h4 className="font-semibold mb-1">{change.title}</h4>
                                  <p className="text-muted-foreground">{change.description}</p>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  {getTypeBadge(change.type)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};