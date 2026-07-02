"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../../types/Book";

export const Books = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetchBooksInStock();
    }, []);

    // RÉPONSE QUESTION : Fonction pour récupérer les livres en stock depuis l'API
    const fetchBooksInStock = async () => {
        const { data } = await axios.get(`http://localhost:5000/books/instock`);
        setBooks(data);
    };

    return (
        <div>
            <h1>Livres en stock</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {/* RÉPONSE QUESTION : Affichage conditionnel (gras si note > 4.5) */}
                        {book.rating > 4.5 ? <b>{book.title}</b> : book.title} - {book.author} ({book.rating}/5)
                    </li>
                ))}
            </ul>
            {/* RÉPONSE QUESTION : Bouton pour actualiser la liste au clic */}
            <button onClick={fetchBooksInStock}>Actualiser</button>
        </div>
    );
};
