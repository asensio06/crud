"use client";
import React, { useEffect, useState } from "react";

// RÉPONSE QUESTION : Créer un composant pour générer la suite de Fibonacci
export const Fibonacci = () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    useEffect(() => {
        fibonacciNumbers();
    }, []);

    // RÉPONSE QUESTION : Logique de génération de la suite (jusqu'à 100 par exemple)
    const fibonacciNumbers = () => {
        let n1 = 0, n2 = 1, nextTerm;
        const array = [];

        // RÉPONSE QUESTION : Utilisation d'une fonction récursive ou boucle
        const helperFibonacci = () => {
            if (n1 <= 100) {
                array.push(n1);
                nextTerm = n1 + n2;
                n1 = n2;
                n2 = nextTerm;
                helperFibonacci();
            }
        };

        helperFibonacci();
        setNumbers(array);
    };

    return (
        <div>
            <h1>Suite de Fibonacci</h1>
            <p>{numbers.join(", ")}</p>
        </div>
    );
};
