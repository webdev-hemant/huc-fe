// import Image from "next/image";
import Header from "@/components/Header/Header";
import styles from "./homePage.module.scss";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* <h1>its working</h1> */}
      <Header />
    </div>
  );
}
