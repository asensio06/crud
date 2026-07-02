// Définit la structure (type) que doit respecter chaque objet "Livre" dans l'application
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

// Tableau d'objets simulant une base de données de livres pour le développement
export const books: Book[] = [
  {
    id: 1, // Identifiant unique du livre
    title: "The Silent Forest", // Titre de l'ouvrage
    author: "Emma Carter", // Nom de l'auteur
    category: "Fantasy", // Catégorie ou genre
    language: "English", // Langue d'écriture
    publishedYear: 2021, // Année de publication
    pages: 412, // Nombre total de pages
    publisher: "Moonlight Press", // Éditeur
    rating: 4.7, // Note des lecteurs sur 5
    price: 19.99, // Prix en euros/dollars
    inStock: true, // État du stock (disponible ou non)
    format: "Hardcover", // Format de l'édition
    tags: ["magic", "adventure", "kingdom"], // Mots-clés associés
    description: "A young warrior discovers an ancient forest hiding forgotten secrets." // Résumé du livre
  },
  {
    id: 2,
    title: "Code Beyond Limits",
    author: "Nathan Brooks",
    category: "Technology",
    language: "English",
    publishedYear: 2023,
    pages: 328,
    publisher: "Future Tech Editions",
    rating: 4.5,
    price: 29.5,
    inStock: true,
    format: "Paperback",
    tags: ["programming", "software", "innovation"],
    description: "An exploration of modern software engineering practices and scalable systems."
  },
  {
    id: 3,
    title: "The Last Horizon",
    author: "Sophia Bennett",
    category: "Science Fiction",
    language: "English",
    publishedYear: 2019,
    pages: 510,
    publisher: "Nova House",
    rating: 4.8,
    price: 24.0,
    inStock: false,
    format: "Ebook",
    tags: ["space", "future", "AI"],
    description: "Humanity embarks on its first interstellar mission after Earth becomes unstable."
  },
  {
    id: 4,
    title: "Mindful Living",
    author: "Olivia Green",
    category: "Self-help",
    language: "English",
    publishedYear: 2020,
    pages: 240,
    publisher: "Harmony Books",
    rating: 4.2,
    price: 15.75,
    inStock: true,
    format: "Audiobook",
    tags: ["wellness", "mindfulness", "health"],
    description: "Simple daily practices to improve focus, happiness, and emotional balance."
  },
  {
    id: 5,
    title: "Shadows of the Crown",
    author: "Liam Turner",
    category: "Historical Fiction",
    language: "English",
    publishedYear: 2018,
    pages: 389,
    publisher: "Royal Ink",
    rating: 4.4,
    price: 18.2,
    inStock: true,
    format: "Paperback",
    tags: ["history", "royalty", "drama"],
    description: "A gripping tale of betrayal and ambition inside a medieval kingdom."
  },
  {
    id: 6,
    title: "Mastering Finance",
    author: "Daniel Foster",
    category: "Business",
    language: "English",
    publishedYear: 2022,
    pages: 301,
    publisher: "Capital Insights",
    rating: 4.1,
    price: 27.99,
    inStock: false,
    format: "Hardcover",
    tags: ["finance", "investment", "economy"],
    description: "A practical guide to personal finance, investing, and wealth management."
  },
  {
    id: 7,
    title: "Cooking Around the World",
    author: "Isabella Rossi",
    category: "Cooking",
    language: "English",
    publishedYear: 2021,
    pages: 198,
    publisher: "Taste & Travel",
    rating: 4.6,
    price: 21.4,
    inStock: true,
    format: "Hardcover",
    tags: ["recipes", "food", "travel"],
    description: "A collection of authentic recipes inspired by cuisines from five continents."
  },
  {
    id: 8,
    title: "The Psychology of Habits",
    author: "Mia Thompson",
    category: "Psychology",
    language: "English",
    publishedYear: 2024,
    pages: 356,
    publisher: "BrightMind Publishing",
    rating: 4.9,
    price: 30.0,
    inStock: true,
    format: "Ebook",
    tags: ["psychology", "habits", "behavior"],
    description: "Understanding how habits are formed and how they shape human behavior."
  }
];
