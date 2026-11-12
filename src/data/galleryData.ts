export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Golden Crispy Dosa Crust',
    category: 'Signature Dosa',
    image: '/src/assets/images/dosa_crush_gallery_fusion_1794506735979.jpg',
    aspect: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Patel Nagar Café Ambience',
    category: 'Atmosphere',
    image: '/src/assets/images/dosa_crush_gallery_ambience_1794506736757.jpg',
    aspect: 'landscape'
  },
  {
    id: 'gal-3',
    title: 'Molten Cheese Volcano Dosa',
    category: 'Fusion Special',
    image: '/src/assets/images/dosa_crush_cheese_volcano_1794506306330.jpg',
    aspect: 'portrait'
  },
  {
    id: 'gal-4',
    title: 'Truffle Paneer Tikka Dosa',
    category: 'Chef Creation',
    image: '/src/assets/images/dosa_crush_paneer_dosa_1794506078808.jpg',
    aspect: 'square'
  },
  {
    id: 'gal-5',
    title: 'Bombay Butter Pav Bhaji',
    category: 'Street Classics',
    image: '/src/assets/images/dosa_crush_pav_bhaji_1794506306212.jpg',
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Nitro Filter Coffee Pour',
    category: 'Beverages',
    image: '/src/assets/images/dosa_crush_cold_brew_1794506079250.jpg',
    aspect: 'portrait'
  }
];
