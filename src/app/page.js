import Image from "next/image";
import styles from "./page.module.css";
import EmailForm from "@/FormularioEmail";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> Ana Maconheira</h1>
      </main>
    </div>
  );
}
