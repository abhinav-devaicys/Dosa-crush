export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: string;
  text: string;
  isFeatured?: boolean;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Aarav Malhotra',
    rating: 5,
    date: '2 weeks ago',
    source: 'Google Verified Review',
    text: 'The Truffle Paneer Dosa is an absolute masterpiece. You get the authentic shattering crispness of traditional dosa batter combined with gourmet modern flavours. Easily the best fusion café in Gwalior!',
    isFeatured: true
  },
  {
    id: 'rev-2',
    author: 'Priya Sharma',
    rating: 5,
    date: 'A month ago',
    source: 'Google Verified Review',
    text: 'Visited the Patel Nagar outlet with family. The ambiance is so warm and editorial, nothing like a standard fast food joint. The Cheese Volcano Dosa was a huge hit with the kids.'
  },
  {
    id: 'rev-3',
    author: 'Vikramaditya Scindia',
    rating: 5,
    date: '3 weeks ago',
    source: 'Google Verified Review',
    text: 'Incredible nitro filter coffee and authentic Mysore Masala Dosa. The service is prompt, packaging for takeaway is top-tier, and the quality is consistently stellar.'
  }
];

export const RATING_SUMMARY = {
  averageRating: 4.8,
  totalReviews: 428,
  platform: 'Google Business Profile',
  link: 'https://share.google/JDMZlcMFhyNAmO1kD'
};
