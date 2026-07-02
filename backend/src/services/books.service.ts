import { books } from "../mocks/books.mock"; // Importe les données brutes (simulées) depuis le mock

// RÉPONSE QUESTION : Implémenter le tri alphabétique des livres par titre
// Logique pour récupérer et trier les livres
const getBooks = () => {
  return books.map((book) => ({ // Parcourt chaque livre pour sélectionner uniquement les champs nécessaires
    id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
    language: book.language,
    publishedYear: book.publishedYear,
    publisher: book.publisher,
    rating: book.rating,
    price: book.price,
    inStock: book.inStock,
    format: book.format,
    description: book.description,
  })).sort((a, b) => a.title.localeCompare(b.title)); // Tri alphabétique par titre
};

// Logique pour trouver un livre par son identifiant unique
const getBook = (bookId: number) => {
  return books.find((book) => book.id == bookId); // Cherche le premier livre dont l'ID correspond
};

// RÉPONSE QUESTION : Logique de filtrage pour les livres en stock
// Logique pour filtrer les livres actuellement disponibles en stock
const getBooksInStock = () => {
  return books.filter((book) => book.inStock); // Ne garde que les livres où inStock est à vrai
};

// RÉPONSE QUESTION : Logique de filtrage par format
// Logique pour filtrer les livres selon leur format (Hardcover, Paperback, etc.)
const getBooksFormat = (format: string) => {
  return books.filter((book) => book.format === format); // Ne garde que les livres dont le format correspond
};

// Exporte les fonctions pour les rendre utilisables par les contrôleurs
export {
  getBooks,
  getBook,
  getBooksInStock,
  getBooksFormat
};
