import Header from "@/components/Header/Header";
import styles from "./homePage.module.scss";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
    </div>
  );
}
