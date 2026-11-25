import React, { useEffect, useState } from "react";

// RÉPONSE QUESTION : Créer un composant pour générer la suite de Fibonacci
export const Fibonacci = () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    useEffect(() => {
        fibonacciNumbers();
    }, [])

    // RÉPONSE QUESTION : Logique de génération de la suite (jusqu'à 100 par exemple)
    const fibonacciNumbers = () => {
        const result : number[] = []
        let number1 = 0;
        let number2 = 1;

        // RÉPONSE QUESTION : Utilisation d'une fonction récursive ou boucle
        const helperFibonacci = () => {
            let current = number1 + number2;
            number1 = number2;
            number2 = current;
            console.log(current);
            result.push(current);
        }

        for (let i = 0; i < 10; i++) {
            helperFibonacci();
        }

        setNumbers(result);
    }

    return (
        <>
            {
                numbers.map((Number: number) => (
                <>
                    <b>(number)</b>
                    <br />
                </>
                ))
            }
      </>
    )  
}
