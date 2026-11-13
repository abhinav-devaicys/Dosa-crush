import { IMAGES } from './images';

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
    image: IMAGES.galleryFusion,
    aspect: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Patel Nagar Café Ambience',
    category: 'Atmosphere',
    image: IMAGES.galleryAmbience,
    aspect: 'landscape'
  },
  {
    id: 'gal-3',
    title: 'Molten Cheese Volcano Dosa',
    category: 'Fusion Special',
    image: IMAGES.cheeseVolcano,
    aspect: 'portrait'
  },
  {
    id: 'gal-4',
    title: 'Truffle Paneer Tikka Dosa',
    category: 'Chef Creation',
    image: IMAGES.paneerDosa,
    aspect: 'square'
  },
  {
    id: 'gal-5',
    title: 'Bombay Butter Pav Bhaji',
    category: 'Street Classics',
    image: IMAGES.pavBhaji,
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Nitro Filter Coffee Pour',
    category: 'Beverages',
    image: IMAGES.coldBrew,
    aspect: 'portrait'
  }
];
