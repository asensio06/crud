export type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  language: string;
  publishedYear: number;
  pages: number;
  publisher: string;
  rating: number;
  price: number;
  inStock: boolean;
  format: "Hardcover" | "Paperback" | "Ebook" | "Audiobook";
  tags: string[];
  description: string;
};