
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { 
  Home, 
  GalleryHorizontal, 
  PanelRight, 
  LayoutGrid, 
  Mail, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [unreadLeads, setUnreadLeads] = useState(0);
  
  useEffect(() => {
    // Check for unread contacts
    const contactLeads = localStorage.getItem('contactLeads')
      ? JSON.parse(localStorage.getItem('contactLeads') || '[]')
      : [];
    
    setUnreadLeads(contactLeads.filter((lead: any) => !lead.viewed).length);
    
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navItems = [
    {
      path: "/admin/dashboard",
      label: "Dashboard",
      icon: <Home size={20} />
    },
    {
      path: "/admin/gallery",
      label: "Gallery",
      icon: <GalleryHorizontal size={20} />
    },
    {
      path: "/admin/services",
      label: "Services",
      icon: <PanelRight size={20} />
    },
    {
      path: "/admin/projects",
      label: "Projects",
      icon: <LayoutGrid size={20} />
    },
    {
      path: "/admin/contacts",
      label: "Contact Leads",
      icon: <Mail size={20} />,
      badge: unreadLeads > 0 ? unreadLeads : undefined
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-olive text-white p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/admin/dashboard">
              <h1 className="text-xl font-playfair font-bold">AYRAJ Admin</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-white hover:text-cream-light hidden md:block">
              View Website
            </Link>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-olive-dark flex items-center justify-center">
                <User size={18} />
              </div>
              <span className="hidden md:block">Admin</span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={logout} 
              className="text-white border-white hover:bg-olive-dark"
            >
              <LogOut size={16} className="mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar - Mobile */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-200 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className={`w-64 bg-cream-light h-full transform transition-transform duration-200 ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <h2 className="font-playfair text-lg text-olive mb-6">Navigation</h2>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center justify-between py-2 px-4 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-olive text-white'
                        : 'text-olive-dark hover:bg-cream'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-gold text-white text-xs rounded-full px-2 py-0.5">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-cream-dark">
                  <Link
                    to="/"
                    className="flex items-center py-2 px-4 rounded-lg text-olive-dark hover:bg-cream"
                  >
                    View Website
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-cream-light p-4 shadow-md">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between py-2 px-4 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-olive text-white'
                    : 'text-olive-dark hover:bg-cream'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-gold text-white text-xs rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-cream-dark">
              <Link
                to="/"
                className="flex items-center py-2 px-4 rounded-lg text-olive-dark hover:bg-cream"
              >
                View Website
              </Link>
            </div>
          </nav>
        </aside>

        {/* Content area */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
