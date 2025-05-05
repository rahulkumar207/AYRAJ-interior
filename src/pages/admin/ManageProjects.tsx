
import React, { useState, useEffect } from 'react';
import { 
  getProjectItems, 
  addProjectItem, 
  updateProjectItem, 
  deleteProjectItem,
  ProjectItem,
  Category
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { toast } from 'sonner';
import { Edit, Trash2, Plus } from 'lucide-react';

const ManageProjects = () => {
  const [items, setItems] = useState<ProjectItem[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<ProjectItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'flooring' as Category,
    image: ''
  });

  useEffect(() => {
    loadProjectItems();
  }, []);

  const loadProjectItems = () => {
    setItems(getProjectItems());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value as Category }));
  };

  const handleAddSubmit = () => {
    if (!formData.title || !formData.image) {
      toast.error('Please fill all required fields');
      return;
    }
    
    addProjectItem(formData);
    loadProjectItems();
    setIsAddDialogOpen(false);
    resetForm();
    toast.success('Project added successfully');
  };

  const handleEditSubmit = () => {
    if (!currentItem) return;
    
    if (!formData.title || !formData.image) {
      toast.error('Please fill all required fields');
      return;
    }
    
    updateProjectItem({...formData, id: currentItem.id});
    loadProjectItems();
    setIsEditDialogOpen(false);
    resetForm();
    toast.success('Project updated successfully');
  };

  const handleDeleteConfirm = () => {
    if (!currentItem) return;
    
    deleteProjectItem(currentItem.id);
    loadProjectItems();
    setIsDeleteDialogOpen(false);
    toast.success('Project deleted successfully');
  };

  const openEditDialog = (item: ProjectItem) => {
    setCurrentItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      image: item.image
    });
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (item: ProjectItem) => {
    setCurrentItem(item);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'flooring',
      image: ''
    });
    setCurrentItem(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-playfair font-bold text-olive">Manage Projects</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <Button 
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-olive hover:bg-olive-dark flex items-center gap-2"
          >
            <Plus size={16} /> Add New Project
          </Button>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Project</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Project title"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <Select 
                  value={formData.category} 
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flooring">Flooring</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="walls">Walls</SelectItem>
                    <SelectItem value="decor">Decor</SelectItem>
                  </SelectContent>
                </Select>
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
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button className="bg-olive hover:bg-olive-dark" onClick={handleAddSubmit}>Add Project</Button>
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
              <h3 className="font-playfair font-semibold text-lg mb-1">{item.title}</h3>
              <div className="mb-4">
                <span className="inline-block bg-olive/10 text-olive-dark px-2 py-1 rounded text-xs">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
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
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label htmlFor="edit-title" className="text-sm font-medium">Title</label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Project title"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-category" className="text-sm font-medium">Category</label>
              <Select 
                value={formData.category} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flooring">Flooring</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="walls">Walls</SelectItem>
                  <SelectItem value="decor">Decor</SelectItem>
                </SelectContent>
              </Select>
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

export default ManageProjects;
