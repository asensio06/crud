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
        <>
            {
                books.map((book: Book) => (
                    <>
                        {book.rating > 4.5 ? <b>book.title</b> : book.title}
                        <br />
                    </>

                ))
            }
           
        </>
    );
};
