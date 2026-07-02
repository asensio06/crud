import * as BooksService from "../services/books.service"; // Importe toutes les fonctions de logique métier du service

// Gère la récupération de tous les livres
export const getBooks = (req: any, res: any) => {
  const books = BooksService.getBooks(); // Appelle le service pour obtenir les données
  return res.status(200).json(books); // Renvoie les livres en JSON avec un code de succès 200
};

// RÉPONSE QUESTION : Implémenter la récupération d'un livre par son ID
// Gère la récupération d'un livre unique par son identifiant
export const getBook = (req: any, res: any) => {
  const bookId = req.params.id; // Extrait l'identifiant depuis les paramètres de l'URL (req.params)
  const book = BooksService.getBook(bookId); // Demande au service de trouver le livre
  return res.status(200).json(book); // Renvoie le livre trouvé
};

// RÉPONSE QUESTION : Créer une route pour récupérer les livres en stock
// Gère la récupération des livres disponibles en stock
export const getBooksInStock = (req: any, res: any) => {
  const books = BooksService.getBooksInStock(); // Appelle le service de filtrage
  return res.status(200).json(books); // Renvoie la liste filtrée
};

// RÉPONSE QUESTION : Créer une route pour filtrer par format
// Gère la récupération des livres selon leur format
export const getBooksFormat = (req: any, res: any) => {
  const format = req.params.format; // Récupère le format depuis l'URL
  const books = BooksService.getBooksFormat(format); // Demande au service de filtrer par format
  return res.status(200).json(books); // Renvoie le résultat
};
