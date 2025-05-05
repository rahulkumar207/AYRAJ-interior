
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { GalleryHorizontal, PanelRight, LayoutGrid, Mail, User } from 'lucide-react';

const DashboardHome = () => {
  // Mock statistics - in a real app, these would come from an API or local storage
  const stats = {
    galleryItems: localStorage.getItem('galleryItems') ? 
      JSON.parse(localStorage.getItem('galleryItems') || '[]').length : 0,
    services: localStorage.getItem('services') ? 
      JSON.parse(localStorage.getItem('services') || '[]').length : 0,
    projects: localStorage.getItem('projects') ? 
      JSON.parse(localStorage.getItem('projects') || '[]').length : 0,
    leads: localStorage.getItem('contactLeads') ? 
      JSON.parse(localStorage.getItem('contactLeads') || '[]').length : 0,
  };

  // Check for unread contacts
  const unreadLeads = localStorage.getItem('contactLeads') ? 
    JSON.parse(localStorage.getItem('contactLeads') || '[]')
      .filter((lead: any) => !lead.viewed).length : 0;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h1 className="text-3xl font-playfair font-bold text-olive">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-olive/10 to-cream-light border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-olive gap-2">
              <GalleryHorizontal className="h-5 w-5" />
              Gallery Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.galleryItems}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gold/10 to-cream-light border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-olive gap-2">
              <PanelRight className="h-5 w-5" />
              Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.services}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cream-dark/30 to-cream-light border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-olive gap-2">
              <LayoutGrid className="h-5 w-5" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.projects}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-olive-light/10 to-cream-light border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center text-olive gap-2">
              <Mail className="h-5 w-5" />
              Contact Leads
              {unreadLeads > 0 && (
                <span className="bg-olive text-white text-xs rounded-full px-2 py-0.5 ml-2">
                  {unreadLeads} new
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.leads}</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-playfair font-bold text-olive mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link to="/admin/gallery" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-olive">
            <CardHeader>
              <CardTitle className="flex items-center text-olive gap-2">
                <GalleryHorizontal size={20} />
                Gallery Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600">
                Add, edit, or remove items from your gallery showcase.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/services" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-gold">
            <CardHeader>
              <CardTitle className="flex items-center text-olive gap-2">
                <PanelRight size={20} />
                Services Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600">
                Update your service offerings and descriptions.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/projects" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-cream-dark">
            <CardHeader>
              <CardTitle className="flex items-center text-olive gap-2">
                <LayoutGrid size={20} />
                Projects Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600">
                Showcase your latest and best projects.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/admin/contacts" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-olive-light">
            <CardHeader>
              <CardTitle className="flex items-center text-olive gap-2">
                <Mail size={20} />
                Contact Leads
                {unreadLeads > 0 && (
                  <span className="bg-olive text-white text-xs rounded-full px-2 py-0.5 ml-2">
                    {unreadLeads} new
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-600">
                Manage and respond to contact form submissions.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md border-t-4 border-t-olive">
        <h2 className="font-playfair text-lg text-olive mb-4 flex items-center gap-2">
          <User className="h-5 w-5" />
          Admin Tips
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="text-olive mr-2">•</span>
            <span>Add high-quality images to your gallery for best presentation</span>
          </li>
          <li className="flex items-start">
            <span className="text-olive mr-2">•</span>
            <span>Keep service descriptions concise and highlight key benefits</span>
          </li>
          <li className="flex items-start">
            <span className="text-olive mr-2">•</span>
            <span>Regularly update your projects to showcase your latest work</span>
          </li>
          <li className="flex items-start">
            <span className="text-olive mr-2">•</span>
            <span>Respond to contact leads promptly to improve customer satisfaction</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
