// Types
export type Category = 'all' | 'flooring' | 'furniture' | 'walls' | 'decor';

export interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: Category;
  image: string;
}

// Initial data
const defaultGalleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Premium Oak Flooring",
    category: "flooring",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop",
    description: "Luxury oak flooring installed in a modern Delhi residence"
  },
  {
    id: 2,
    title: "Hand-Carved Dining Set",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2874&auto=format&fit=crop",
    description: "Custom designed royal dining set with intricate carvings"
  },
  {
    id: 3,
    title: "Designer Floral Wallpaper",
    category: "walls",
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2940&auto=format&fit=crop",
    description: "Exclusive floral wallpaper design for a luxury apartment"
  },
  {
    id: 4,
    title: "Handcrafted Accent Table",
    category: "decor",
    image: "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=2787&auto=format&fit=crop",
    description: "Unique handcrafted accent table for a living room"
  },
  {
    id: 5,
    title: "Marble Tile Installation",
    category: "flooring",
    image: "https://images.unsplash.com/photo-1608626597747-0d9b8885907f?q=80&w=2874&auto=format&fit=crop",
    description: "Premium marble tiles installed in a foyer area"
  },
  {
    id: 6,
    title: "Contemporary Living Room Set",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop",
    description: "Modern living room furniture arrangement with custom pieces"
  },
  {
    id: 7,
    title: "Geometric Pattern Wallpaper",
    category: "walls",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=2880&auto=format&fit=crop",
    description: "Bold geometric wallpaper design for a home office"
  },
  {
    id: 8,
    title: "Handcrafted Wooden Shelf",
    category: "decor",
    image: "https://images.unsplash.com/photo-1601761457420-74d0adfed026?q=80&w=2944&auto=format&fit=crop",
    description: "Bespoke wooden shelving unit with intricate details"
  },
  {
    id: 9,
    title: "Laminate Flooring Project",
    category: "flooring",
    image: "https://images.unsplash.com/photo-1581698371609-d0e93025671?q=80&w=2874&auto=format&fit=crop",
    description: "High-quality laminate flooring installed in a bedroom"
  },
  {
    id: 10,
    title: "Carved Wooden Headboard",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2940&auto=format&fit=crop",
    description: "Custom carved wooden headboard for a luxury bedroom"
  },
  {
    id: 11,
    title: "Textured Wall Design",
    category: "walls",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2931&auto=format&fit=crop",
    description: "Special textured wall treatment for a dining area"
  },
  {
    id: 12,
    title: "Decorative Mirror Collection",
    category: "decor",
    image: "https://images.unsplash.com/photo-1618042164219-62c370ce4443?q=80&w=2874&auto=format&fit=crop",
    description: "Set of custom mirrors with ornate frames"
  }
];

const defaultServiceItems: ServiceItem[] = [
  {
    id: 1,
    title: "Luxury Wooden Flooring",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop",
    description: "Premium wooden flooring solutions to elevate your space with warmth and elegance.",
    link: "/services#flooring"
  },
  {
    id: 2,
    title: "Laminate Flooring",
    image: "https://images.unsplash.com/photo-1581698371609-d0e93025671?q=80&w=2874&auto=format&fit=crop",
    description: "Durable and beautiful laminate options at unbeatable prices.",
    link: "/services#laminate"
  },
  {
    id: 3,
    title: "Designer Wallpapers",
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2940&auto=format&fit=crop",
    description: "Transform your walls with our stunning designer wallpaper collection.",
    link: "/services#wallpapers"
  },
  {
    id: 4,
    title: "Royal Carving Furniture",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2874&auto=format&fit=crop",
    description: "Exquisite handcrafted furniture pieces to add royal charm to your home.",
    link: "/services#furniture"
  },
  {
    id: 5,
    title: "Handcrafted Items",
    image: "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=2787&auto=format&fit=crop",
    description: "Unique decorative pieces crafted with attention to every detail.",
    link: "/services#decor"
  },
  {
    id: 6,
    title: "Designer Tiles",
    image: "https://images.unsplash.com/photo-1608626597747-0d9b8885907f?q=80&w=2874&auto=format&fit=crop",
    description: "Premium tiles in various designs and materials for every corner of your home.",
    link: "/services#tiles"
  }
];

const defaultProjectItems: ProjectItem[] = [
  {
    id: 1,
    title: "Premium Oak Flooring - Residence",
    category: "flooring",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Royal Hand-Carved Dining Set",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2874&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Designer Floral Wallpaper",
    category: "walls",
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Handcrafted Accent Table",
    category: "decor",
    image: "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Marble Tile Installation",
    category: "flooring",
    image: "https://images.unsplash.com/photo-1608626597747-0d9b8885907f?q=80&w=2874&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Contemporary Living Room",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop",
  }
];

// Helper functions for Gallery
export const getGalleryItems = (): GalleryItem[] => {
  const storedItems = localStorage.getItem('ayraj_gallery_items');
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  // Initialize with default data if not available
  localStorage.setItem('ayraj_gallery_items', JSON.stringify(defaultGalleryItems));
  return defaultGalleryItems;
};

export const saveGalleryItems = (items: GalleryItem[]): void => {
  localStorage.setItem('ayraj_gallery_items', JSON.stringify(items));
};

export const addGalleryItem = (item: Omit<GalleryItem, 'id'>): GalleryItem => {
  const items = getGalleryItems();
  const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
  const newItem = { ...item, id: newId };
  saveGalleryItems([...items, newItem]);
  return newItem;
};

export const updateGalleryItem = (item: GalleryItem): void => {
  const items = getGalleryItems();
  const index = items.findIndex(i => i.id === item.id);
  if (index !== -1) {
    items[index] = item;
    saveGalleryItems(items);
  }
};

export const deleteGalleryItem = (id: number): void => {
  const items = getGalleryItems();
  saveGalleryItems(items.filter(item => item.id !== id));
};

// Helper functions for Services
export const getServiceItems = (): ServiceItem[] => {
  const storedItems = localStorage.getItem('ayraj_service_items');
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  // Initialize with default data if not available
  localStorage.setItem('ayraj_service_items', JSON.stringify(defaultServiceItems));
  return defaultServiceItems;
};

export const saveServiceItems = (items: ServiceItem[]): void => {
  localStorage.setItem('ayraj_service_items', JSON.stringify(items));
};

export const addServiceItem = (item: Omit<ServiceItem, 'id'>): ServiceItem => {
  const items = getServiceItems();
  const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
  const newItem = { ...item, id: newId };
  saveServiceItems([...items, newItem]);
  return newItem;
};

export const updateServiceItem = (item: ServiceItem): void => {
  const items = getServiceItems();
  const index = items.findIndex(i => i.id === item.id);
  if (index !== -1) {
    items[index] = item;
    saveServiceItems(items);
  }
};

export const deleteServiceItem = (id: number): void => {
  const items = getServiceItems();
  saveServiceItems(items.filter(item => item.id !== id));
};

// Helper functions for Projects
export const getProjectItems = (): ProjectItem[] => {
  const storedItems = localStorage.getItem('ayraj_project_items');
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  // Initialize with default data if not available
  localStorage.setItem('ayraj_project_items', JSON.stringify(defaultProjectItems));
  return defaultProjectItems;
};

export const saveProjectItems = (items: ProjectItem[]): void => {
  localStorage.setItem('ayraj_project_items', JSON.stringify(items));
};

export const addProjectItem = (item: Omit<ProjectItem, 'id'>): ProjectItem => {
  const items = getProjectItems();
  const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
  const newItem = { ...item, id: newId };
  saveProjectItems([...items, newItem]);
  return newItem;
};

export const updateProjectItem = (item: ProjectItem): void => {
  const items = getProjectItems();
  const index = items.findIndex(i => i.id === item.id);
  if (index !== -1) {
    items[index] = item;
    saveProjectItems(items);
  }
};

export const deleteProjectItem = (id: number): void => {
  const items = getProjectItems();
  saveProjectItems(items.filter(item => item.id !== id));
};
