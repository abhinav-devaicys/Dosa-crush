export interface MenuItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  category: 'dosa-specials' | 'south-indian' | 'pav-bhaji' | 'chinese-snacks' | 'sandwiches-pizza' | 'beverages';
  image: string;
  isBestseller?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface SignatureDish {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  isVegetarian: boolean;
  tag?: string;
}

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'sig-1',
    name: 'JINI DOSA',
    subtitle: 'Mumbai Street Legend',
    description: 'Shredded crispy dosa rolled with a buttery medley of bell peppers, paneer cubes, grated cheese, and secret spicy Schezwan masala.',
    price: 320,
    image: '/src/assets/images/dosa_crush_jini_dosa_1794506306122.jpg',
    isVegetarian: true,
    tag: 'Bestseller'
  },
  {
    id: 'sig-2',
    name: 'CHEESE VOLCANO DOSA',
    subtitle: 'Molten Melt Experience',
    description: 'A dramatic cone-shaped dosa overflowing with hot liquid cheddar, mozzarella, herbs, and garlic butter cascade.',
    price: 380,
    image: '/src/assets/images/dosa_crush_cheese_volcano_1794506306330.jpg',
    isVegetarian: true,
    tag: 'Chef’s Special'
  },
  {
    id: 'sig-3',
    name: 'MYSORE MASALA DOSA',
    subtitle: 'Fire-Roasted Garlic Red Chutney',
    description: 'Our signature whole-wheat and lentil batter spread thin, lined with hand-ground spicy red chilli garlic paste and spiced potato filling.',
    price: 280,
    image: '/src/assets/images/dosa_crush_mysore_masala_1794506079027.jpg',
    isVegetarian: true,
    tag: 'Classic Crush'
  },
  {
    id: 'sig-4',
    name: 'BOMBAY PAV BHAJI',
    subtitle: 'Slow-Simmered Spiced Veggies',
    description: 'Rich, buttery mashed vegetable curry simmered with authentic spices, served with two soft butter-toasted pav buns and chopped onions.',
    price: 260,
    image: '/src/assets/images/dosa_crush_pav_bhaji_1794506306212.jpg',
    isVegetarian: true,
    tag: 'Must Try'
  }
];

export const MENU_CATEGORIES = [
  { id: 'dosa-specials', name: 'Dosa Specials' },
  { id: 'south-indian', name: 'South Indian' },
  { id: 'pav-bhaji', name: 'Pav Bhaji' },
  { id: 'chinese-snacks', name: 'Chinese & Snacks' },
  { id: 'sandwiches-pizza', name: 'Sandwiches & Pizza' },
  { id: 'beverages', name: 'Beverages' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Dosa Specials
  {
    id: 'ds-1',
    name: 'TRUFFLE PANEER FUSION DOSA',
    subtitle: 'Smoked paneer, truffle oil drizzle',
    description: 'Fermented golden dosa folded over tandoori-spiced paneer tikka, white truffle reduction, and fresh mint chutney.',
    price: 340,
    category: 'dosa-specials',
    image: '/src/assets/images/dosa_crush_paneer_dosa_1794506078808.jpg',
    isBestseller: true,
    isVegetarian: true
  },
  {
    id: 'ds-2',
    name: 'JINI DOSA',
    subtitle: 'Mumbai Street Legend',
    description: 'Shredded crispy dosa rolled with bell peppers, paneer, grated cheese, and Schezwan masala.',
    price: 320,
    category: 'dosa-specials',
    image: '/src/assets/images/dosa_crush_jini_dosa_1794506306122.jpg',
    isBestseller: true,
    isVegetarian: true
  },
  {
    id: 'ds-3',
    name: 'CHEESE VOLCANO DOSA',
    subtitle: 'Molten Melt Experience',
    description: 'Dramatic cone-shaped dosa overflowing with hot liquid cheddar, mozzarella, and garlic butter.',
    price: 380,
    category: 'dosa-specials',
    image: '/src/assets/images/dosa_crush_cheese_volcano_1794506306330.jpg',
    isVegetarian: true
  },
  {
    id: 'ds-4',
    name: 'CRUSHED AVOCADO & CORIANDER DOSA',
    subtitle: 'Hass avocado, lime zest, toasted sesame',
    description: 'Modern coastal fusion with smashed fresh Hass avocado, green chilli, lime, and toasted sesame inside a crisp rice crepe.',
    price: 360,
    category: 'dosa-specials',
    image: '/src/assets/images/dosa_crush_paneer_dosa_1794506078808.jpg',
    isVegetarian: true
  },

  // South Indian
  {
    id: 'si-1',
    name: 'MYSORE MASALA DOSA',
    subtitle: 'Fire-Roasted Garlic Red Chutney',
    description: 'Lined with hand-ground spicy red chilli garlic paste and spiced potato filling, served with coconut chutney & sambar.',
    price: 280,
    category: 'south-indian',
    image: '/src/assets/images/dosa_crush_mysore_masala_1794506079027.jpg',
    isBestseller: true,
    isVegetarian: true,
    isSpicy: true
  },
  {
    id: 'si-2',
    name: 'CLASSIC BUTTER ROAST DOSA',
    subtitle: 'Pure cultured white butter, podi dust',
    description: 'Golden-brown paper roast cooked in pure artisanal butter until shattering crisp.',
    price: 240,
    category: 'south-indian',
    image: '/src/assets/images/dosa_crush_hero_1794506063264.jpg',
    isVegetarian: true
  },
  {
    id: 'si-3',
    name: 'CRISPY GHEE IDLI (4 PCS)',
    subtitle: 'Mini idlis tossed in Podi and pure ghee',
    description: 'Steam-cooked tender rice idlis sautéed in aromatic golden ghee with gun-powder spice.',
    price: 190,
    category: 'south-indian',
    image: '/src/assets/images/dosa_crush_mysore_masala_1794506079027.jpg',
    isVegetarian: true
  },
  {
    id: 'si-4',
    name: 'MADURAI MALI VADA (2 PCS)',
    subtitle: 'Crispy lentil doughnuts with coconut chutney',
    description: 'Golden fried urad dal vadas, crispy on the outside and fluffy inside, served with hot sambar.',
    price: 160,
    category: 'south-indian',
    image: '/src/assets/images/dosa_crush_hero_1794506063264.jpg',
    isVegetarian: true
  },

  // Pav Bhaji
  {
    id: 'pb-1',
    name: 'BOMBAY PAV BHAJI',
    subtitle: 'Slow-simmered spiced veg gravy',
    description: 'Rich buttery vegetable curry served with two soft butter-toasted pav buns and fresh lemon.',
    price: 260,
    category: 'pav-bhaji',
    image: '/src/assets/images/dosa_crush_pav_bhaji_1794506306212.jpg',
    isBestseller: true,
    isVegetarian: true
  },
  {
    id: 'pb-2',
    name: 'CHEESE MASALA PAV BHAJI',
    subtitle: 'Loaded with molten butter and cheese',
    description: 'Our classic pav bhaji generously topped with Amul cheese cubes melted to perfection on the hot tawa.',
    price: 310,
    category: 'pav-bhaji',
    image: '/src/assets/images/dosa_crush_pav_bhaji_1794506306212.jpg',
    isVegetarian: true
  },
  {
    id: 'pb-3',
    name: 'JAIN SPECIAL PAV BHAJI',
    subtitle: 'Zero root-vegetable formulation',
    description: 'Smooth raw banana and green plantain bhaji cooked without onion or garlic, rich in butter.',
    price: 270,
    category: 'pav-bhaji',
    image: '/src/assets/images/dosa_crush_pav_bhaji_1794506306212.jpg',
    isVegetarian: true
  },

  // Chinese & Snacks
  {
    id: 'cs-1',
    name: 'HAKKA CHILLI PANEER DRY',
    subtitle: 'Wok-tossed bell peppers, dark soy',
    description: 'Batter-fried paneer cubes tossed in pungent garlic chilli sauce with spring onions.',
    price: 290,
    category: 'chinese-snacks',
    image: '/src/assets/images/dosa_crush_paneer_dosa_1794506078808.jpg',
    isVegetarian: true,
    isSpicy: true
  },
  {
    id: 'cs-2',
    name: 'CRISPY VEG MANCHURIAN',
    subtitle: 'Savory vegetable dumplings in ginger sauce',
    description: 'Minced vegetable balls fried and simmered in an umami-rich soy garlic gravy.',
    price: 260,
    category: 'chinese-snacks',
    image: '/src/assets/images/dosa_crush_mysore_masala_1794506079027.jpg',
    isVegetarian: true
  },
  {
    id: 'cs-3',
    name: 'PERI PERI FRIES',
    subtitle: 'Crispy potato fries with African chillies',
    description: 'Hand-cut golden fries dusted with fiery peri peri seasoning and garlic aioli.',
    price: 180,
    category: 'chinese-snacks',
    image: '/src/assets/images/dosa_crush_hero_1794506063264.jpg',
    isVegetarian: true
  },

  // Sandwiches & Pizza
  {
    id: 'sp-1',
    name: 'BOMBAY TANDOORI GRILL SANDWICH',
    subtitle: 'Mint chutney, beetroot, melted cheese',
    description: 'Three-layer grilled bread filled with spicy potato mash, cucumber slices, beetroot, and melted cheese.',
    price: 240,
    category: 'sandwiches-pizza',
    image: '/src/assets/images/dosa_crush_jini_dosa_1794506306122.jpg',
    isVegetarian: true
  },
  {
    id: 'sp-2',
    name: 'PANEER TIKKA THIN CRUST PIZZA',
    subtitle: 'Tandoori paneer, capsicum, mozzarella',
    description: 'Crispy flatbread crust topped with Makhani sauce, tandoori paneer chunks, and gooey mozzarella.',
    price: 390,
    category: 'sandwiches-pizza',
    image: '/src/assets/images/dosa_crush_cheese_volcano_1794506306330.jpg',
    isVegetarian: true
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'NITRO SOUTH INDIAN FILTER COFFEE',
    subtitle: 'Chicory infused, velvety milk foam',
    description: 'Traditional Gwalior-style strong filter coffee brewed with chicory and infused with nitrogen for an ultra-creamy cascade.',
    price: 180,
    category: 'beverages',
    image: '/src/assets/images/dosa_crush_cold_brew_1794506079250.jpg',
    isBestseller: true,
    isVegetarian: true
  },
  {
    id: 'bev-2',
    name: 'BADAM MILK ELACHI SHAKE',
    subtitle: 'Saffron almond milk, crushed pistachios',
    description: 'Slow-simmered almond milk flavored with green cardamom, saffron, and crunchy pistachios served chilled.',
    price: 210,
    category: 'beverages',
    image: '/src/assets/images/dosa_crush_cold_brew_1794506079250.jpg',
    isVegetarian: true
  },
  {
    id: 'bev-3',
    name: 'KALA KHATTA SUMMER COOLER',
    subtitle: 'Jamun reduction, black salt, fresh lime',
    description: 'A refreshing tangy summer cooler made from wild blackberries, cumin, black salt, and freshly squeezed lime.',
    price: 170,
    category: 'beverages',
    image: '/src/assets/images/dosa_crush_hero_1794506063264.jpg',
    isVegetarian: true
  }
];
