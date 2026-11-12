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

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
