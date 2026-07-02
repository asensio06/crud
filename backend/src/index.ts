import express from "express"; // Importe le framework Express pour créer le serveur web
import cors from "cors"; // Importe le middleware CORS pour autoriser les requêtes provenant du frontend
import { router } from "./routes/books.route"; // Importe les routes définies pour les livres

const hostname = "127.0.0.1"; // Définit l'adresse IP locale du serveur
const port = 5000; // Définit le port sur lequel le serveur va écouter

const app = express(); // Initialise l'application Express
app.use(express.json()); // Middleware pour analyser le corps des requêtes entrantes au format JSON
app.use(cors()); // Active le CORS pour permettre les appels API depuis le navigateur


// Définit une route de base pour vérifier que le serveur fonctionne
app.get("/", (req, res) => {
  res.send("Hello !"); // Envoie une réponse texte simple
});

app.use("/books", router); // Branche toutes les routes commençant par /books sur le routeur de livres

// Démarre le serveur et commence à écouter les requêtes
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // Affiche un message de confirmation dans la console
});
