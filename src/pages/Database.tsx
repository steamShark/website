import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Globe, Shield, AlertTriangle, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useAllWebsites } from "@/hooks/use-websites";
import { Website } from "@/models/websites";

export default function DatabaseList() {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [trustFilter, setTrustFilter] = useState(searchParams.get("filter") || "all");
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const {
        data: dataWebsites,
        isLoading: isWebsitesLoading,
        isError: isWebsitesError,
        error: WebsitesError,
        refetch: refetchWebsites,
        isFetching: isWebsitesFetching,
    } = useAllWebsites();

    const handleSearch = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const getTrustBadge = (trustLevel: boolean) => {
        switch (trustLevel) {
            case false:
                return <Badge variant="default" className="bg-green-600"><Shield className="w-3 h-3 mr-1" />Trusted</Badge>;
            case true:
                return <Badge variant="destructive"><AlertTriangle className="w-3 h-3 mr-1" />Not Trusted</Badge>;
            default:
                return <Badge variant="secondary">Unverified</Badge>;
        }
    };

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, trustFilter]);

    useEffect(() => {
        const filterParam = searchParams.get("filter");
        if (filterParam) {
            setTrustFilter(filterParam);
        }
    }, [searchParams]);

    if (isWebsitesLoading) {
        return (<p>Loading...</p>)
    }

    if (isWebsitesError) {
        return (
            <p>Error:</p>
        )
    }

    const filteredWebsites = dataWebsites.data.filter(website => {
        const matchesSearch = website.display_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            website.url.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
            trustFilter === "all" ||
            (trustFilter === "trusted" && !website.is_not_trusted) ||
            (trustFilter === "notTrusted" && website.is_not_trusted);
        return matchesSearch && matchesFilter;
    });

    // Pagination calculations
    const totalPages = Math.ceil(filteredWebsites.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    //const paginatedWebsites = filteredWebsites.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold shark-text mb-4 flex items-center justify-center gap-3">
                        <Globe className="w-10 h-10 text-primary" />
                        All Websites Database
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive database of all websites with security analysis and trust ratings
                    </p>
                </div>

                {/* Search and Filter Controls */}
                <Card className="gaming-card mb-8">
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        type="text"
                                        placeholder="Search websites by name or URL..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 bg-background/50"
                                    />
                                </div>
                            </div>
                            <Select value={trustFilter} onValueChange={setTrustFilter}>
                                <SelectTrigger className="w-[200px] bg-background/50">
                                    <SelectValue placeholder="Filter by trust level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Websites</SelectItem>
                                    <SelectItem value="trusted">Trusted Only</SelectItem>
                                    <SelectItem value="notTrusted">Not Trusted Only</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button onClick={handleSearch} className="glow-effect" disabled={isLoading}>
                                <Search className="w-4 h-4 mr-2" />
                                {isLoading ? "Searching..." : "Search"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Websites Table */}
                <Card className="">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>Websites ({filteredWebsites.length})</span>
                            <span className="text-sm font-normal text-muted-foreground">
                                Filter: {trustFilter === "all" ? "All" : trustFilter.charAt(0).toUpperCase() + trustFilter.slice(1)}
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>URL</TableHead>
                                    <TableHead>Trust Level</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Occurences</TableHead>
                                    <TableHead>Verified Date</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredWebsites.map((website) => (
                                    <TableRow key={website.id}>
                                        <TableCell className="font-medium">{website.display_name}</TableCell>
                                        <TableCell className="font-mono text-sm text-muted-foreground">
                                            {website.url}
                                        </TableCell>
                                        <TableCell>{getTrustBadge(website.is_not_trusted)}</TableCell>
                                        <TableCell>{website.type}</TableCell>
                                        <TableCell>
                                            <span className={website.occurrences.length > 10 ? "text-red-500 font-medium" : "text-muted-foreground"}>
                                                {website.occurrences.length}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            {website.verified ? (
                                                <span className="text-green-600">{website.verified}</span>
                                            ) : (
                                                <span className="text-muted-foreground">Not verified</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <Link to={`/website/${website.id}`}>
                                                        <Eye className="w-3 h-3 mr-1" />
                                                        Details
                                                    </Link>
                                                </Button>
                                                {!website.is_not_trusted && (
                                                    <Button

                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => window.open(`${website.url}`, '_blank')}
                                                    >
                                                        <ExternalLink className="w-3 h-3" />
                                                    </Button>
                                                )}

                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {filteredWebsites.length === 0 && (
                            <div className="text-center py-8 text-muted-foreground">
                                No websites found matching your search criteria.
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Pagination */}
                {filteredWebsites.length > itemsPerPage && (
                    <div className="mt-8 flex justify-center">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage > 1) setCurrentPage(currentPage - 1);
                                        }}
                                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                    />
                                </PaginationItem>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(page);
                                            }}
                                            isActive={currentPage === page}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                                        }}
                                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}

                {/* Results Info */}
                {filteredWebsites.length > 0 && (
                    <div className="mt-4 text-center text-sm text-muted-foreground">
                        Showing {startIndex + 1}-{Math.min(endIndex, filteredWebsites.length)} of {dataWebsites.count} websites
                    </div>
                )}
            </div>
        </div>
    );
};