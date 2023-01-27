// import Image from "next/image";
import NavBar from "@/components/Navbar/NavBar";
import styles from "./homePage.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.headerWrapper}>
        <NavBar />
      </header>
    </main>
  );
}
