
import React, { useState, useEffect } from 'react';
import { 
  getServiceItems, 
  addServiceItem, 
  updateServiceItem, 
  deleteServiceItem,
  ServiceItem
} from '../../utils/localStorageHelpers';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../../components/ui/dialog';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';
import { Edit, Trash2, Plus } from 'lucide-react';

const ManageServices = () => {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<ServiceItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    link: ''
  });

  useEffect(() => {
    loadServiceItems();
  }, []);

  const loadServiceItems = () => {
    setItems(getServiceItems());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSubmit = () => {
    if (!formData.title || !formData.image || !formData.description || !formData.link) {
      toast.error('Please fill all required fields');
      return;
    }
    
    addServiceItem(formData);
    loadServiceItems();
    setIsAddDialogOpen(false);
    resetForm();
    toast.success('Service added successfully');
  };

  const handleEditSubmit = () => {
    if (!currentItem) return;
    
    if (!formData.title || !formData.image || !formData.description || !formData.link) {
      toast.error('Please fill all required fields');
      return;
    }
    
    updateServiceItem({...formData, id: currentItem.id});
    loadServiceItems();
    setIsEditDialogOpen(false);
    resetForm();
    toast.success('Service updated successfully');
  };

  const handleDeleteConfirm = () => {
    if (!currentItem) return;
    
    deleteServiceItem(currentItem.id);
    loadServiceItems();
    setIsDeleteDialogOpen(false);
    toast.success('Service deleted successfully');
  };

  const openEditDialog = (item: ServiceItem) => {
    setCurrentItem(item);
    setFormData({
      title: item.title,
      image: item.image,
      description: item.description,
      link: item.link
    });
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (item: ServiceItem) => {
    setCurrentItem(item);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      image: '',
      description: '',
      link: ''
    });
    setCurrentItem(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-playfair font-bold text-olive">Manage Services</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <Button 
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-olive hover:bg-olive-dark flex items-center gap-2"
          >
            <Plus size={16} /> Add New Service
          </Button>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Service</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Service title"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Service description"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="link" className="text-sm font-medium">Link</label>
                <Input
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="/services#section"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button className="bg-olive hover:bg-olive-dark" onClick={handleAddSubmit}>Add Service</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <Card key={item.id} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-playfair font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
              <p className="text-xs text-gray-500 mb-4">Link: {item.link}</p>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1" 
                  onClick={() => openEditDialog(item)}
                >
                  <Edit size={14} /> Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="flex items-center gap-1" 
                  onClick={() => openDeleteDialog(item)}
                >
                  <Trash2 size={14} /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label htmlFor="edit-title" className="text-sm font-medium">Title</label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Service title"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-image" className="text-sm font-medium">Image URL</label>
              <Input
                id="edit-image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-description" className="text-sm font-medium">Description</label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Service description"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-link" className="text-sm font-medium">Link</label>
              <Input
                id="edit-link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="/services#section"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button className="bg-olive hover:bg-olive-dark" onClick={handleEditSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete "{currentItem?.title}"? This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageServices;
