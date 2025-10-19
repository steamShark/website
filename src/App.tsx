/* import { Toaster } from "@/components/ui/toaster"; */
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Database from "./pages/Database";
import WebsiteDetails from "./pages/WebsiteDetails";
import NotFound from "./pages/NotFound";
import WelcomeGettingStarted from "./pages/WelcomeGettingStarted";
import Changelog from "./pages/Changelog";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            {/* <Toaster /> */}
            <Sonner />
            <BrowserRouter>
                <div className="min-h-screen bg-background flex flex-col">
                    <Navigation />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/database" element={<Database />} />
                            <Route path="/website/:id" element={<WebsiteDetails />} />
                            <Route path="/changelog" element={<Changelog />} />
                            {/* <Route path="/users" element={<SteamUsers />} />
                            <Route path="/user/:id" element={<UserProfile />} /> 
                            <Route path="/welcome" element={<WelcomeGettingStarted />} />*/}
                            {/* AFTER THIS ALL OTHER ROUTES GO TO THE NOT FOUND PAGE */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;