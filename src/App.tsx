
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin panel
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import DashboardHome from "./pages/admin/DashboardHome";
import ManageGallery from "./pages/admin/ManageGallery";
import ManageServices from "./pages/admin/ManageServices";
import ManageProjects from "./pages/admin/ManageProjects";
import ManageContactLeads from "./pages/admin/ManageContactLeads";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<DashboardHome />} />
              <Route path="gallery" element={<ManageGallery />} />
              <Route path="services" element={<ManageServices />} />
              <Route path="projects" element={<ManageProjects />} />
              <Route path="contacts" element={<ManageContactLeads />} />
              <Route index element={<DashboardHome />} />
            </Route>
            
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <Index />
                  </main>
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <About />
                  </main>
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <Services />
                  </main>
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <Gallery />
                  </main>
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <Contact />
                  </main>
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen">
                    <NotFound />
                  </main>
                  <FloatingButtons />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
