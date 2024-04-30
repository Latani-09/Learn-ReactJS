'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Counter from './features/Counter.js'
export default function Home() {
  return (
    <StoreProvider>
  <main>
    <Counter/>

    </main>
    </StoreProvider>
  );
}
