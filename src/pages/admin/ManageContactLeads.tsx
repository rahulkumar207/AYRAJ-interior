
import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  viewed: boolean;
  notes?: string;
}

const ManageContactLeads = () => {
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [expandedLead, setExpandedLead] = useState<string | null>(null);
  const [leadNotes, setLeadNotes] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();
  
  useEffect(() => {
    // Load leads from localStorage
    const storedLeads = localStorage.getItem('contactLeads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
      
      // Initialize notes
      const notesObj: { [key: string]: string } = {};
      JSON.parse(storedLeads).forEach((lead: ContactLead) => {
        if (lead.notes) {
          notesObj[lead.id] = lead.notes;
        }
      });
      setLeadNotes(notesObj);
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedLead(expandedLead === id ? null : id);
  };

  const markAsViewed = (id: string) => {
    const updatedLeads = leads.map(lead => 
      lead.id === id ? { ...lead, viewed: !lead.viewed } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('contactLeads', JSON.stringify(updatedLeads));
    
    toast({
      title: updatedLeads.find(l => l.id === id)?.viewed 
        ? "Lead marked as viewed" 
        : "Lead marked as unviewed",
      description: "The lead status has been updated",
    });
  };

  const deleteLead = (id: string) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    setLeads(updatedLeads);
    localStorage.setItem('contactLeads', JSON.stringify(updatedLeads));
    
    toast({
      title: "Lead deleted",
      description: "The contact lead has been removed",
      variant: "destructive",
    });
  };

  const saveNotes = (id: string) => {
    const updatedLeads = leads.map(lead => 
      lead.id === id ? { ...lead, notes: leadNotes[id] || '' } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('contactLeads', JSON.stringify(updatedLeads));
    
    toast({
      title: "Notes saved",
      description: "Your notes for this lead have been saved",
    });
  };

  const handleNotesChange = (id: string, value: string) => {
    setLeadNotes(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div>
      <h1 className="text-3xl font-playfair font-bold text-olive mb-6">Contact Lead Management</h1>
      <p className="text-gray-600 mb-8">
        Manage and respond to contact form submissions from your website visitors.
      </p>

      {leads.length === 0 ? (
        <div className="p-8 text-center bg-cream-light rounded-lg border border-cream">
          <p className="text-gray-500">No contact leads available yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <React.Fragment key={lead.id}>
                  <TableRow className={!lead.viewed ? "bg-cream-light/50" : ""}>
                    <TableCell className="font-medium">
                      {lead.name}
                      {!lead.viewed && (
                        <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-olive"></span>
                      )}
                    </TableCell>
                    <TableCell>
                      {lead.email}<br/>
                      <span className="text-sm text-gray-500">{lead.phone}</span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {new Date(lead.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleExpand(lead.id)}
                        >
                          {expandedLead === lead.id ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => markAsViewed(lead.id)}
                        >
                          {lead.viewed ? "Mark Unread" : "Mark Read"}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700 hover:bg-red-50" 
                          onClick={() => deleteLead(lead.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedLead === lead.id && (
                    <TableRow>
                      <TableCell colSpan={4} className="bg-gray-50 p-4">
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Message:</h4>
                          <p className="whitespace-pre-wrap bg-white p-3 rounded border">
                            {lead.message}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Notes:</h4>
                          <Textarea 
                            value={leadNotes[lead.id] || ''}
                            onChange={(e) => handleNotesChange(lead.id, e.target.value)}
                            placeholder="Add your notes about this lead here..."
                            className="mb-2"
                          />
                          <Button 
                            size="sm" 
                            onClick={() => saveNotes(lead.id)}
                          >
                            Save Notes
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ManageContactLeads;
