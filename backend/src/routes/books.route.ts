import express from "express"; // Importe Express pour utiliser le module Router
import { getBooks, getBook, getBooksInStock, getBooksFormat } from "../controllers/books.controller"; // Importe les fonctions de contrôle

const router = express.Router(); // Crée une instance de routeur Express

// Route GET /books/ : appelle la fonction pour lister tous les livres
router.get("/", getBooks);

// Route GET /books/instock : appelle la fonction pour les livres en stock
router.get("/instock", getBooksInStock);

// Route GET /books/:id : utilise un paramètre dynamique pour récupérer un livre spécifique
router.get("/:id", getBook);

// Route GET /books/format/:format : filtre les livres par leur format physique/numérique
router.get("/format/:format", getBooksFormat);

export { router }; // Exporte le routeur pour qu'il soit utilisé dans index.ts
