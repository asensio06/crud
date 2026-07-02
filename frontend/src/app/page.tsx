"use client"
import { Books } from "./components/Books/Books";
import { Fibonacci } from "./components/Fibonacci/Fibonacci";
  
export default function Home() {
  return (
    <>
      <Books />
      <hr />
      <Fibonacci />
    </>
  );
}
