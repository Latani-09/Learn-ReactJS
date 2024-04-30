import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./Counter";
import StoreProvider from "../../StoreProvider";
export default function Home() {
  return (
    <main className={styles.main}>
      <StoreProvider count={3}>
      <Counter/>
        
    </StoreProvider>
   

    </main>
  );
}
