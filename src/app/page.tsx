import Header from "@/components/Header/Header";
import Image from "next/image";
import illustrator from "@/images/illustrator-1.png";
import styles from "./homePage.module.scss";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.firstSection}>
        <div className={styles.introWrapper}>
          <div className={styles.introWrapper_Inner}>
            <p className={styles.learnSkill}>Learn more skills today,</p>
            <h3 className={styles.teachingIsWhat}>HUSTLEUP ACADEMY</h3>
            <h6 className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              impedit asperiores iure animi qui quis sed unde eligendi ad. Minus
              tempore natus quaerat optio est odio voluptatum aperiam! Optio,
              velit.
            </h6>
            <button className={styles.hireTutorButton}>Hire Tutor</button>
          </div>
        </div>
        <div className={styles.introImgWrapper}>
          <Image src={illustrator} alt="" />
        </div>
      </div>
      <div className={styles.secondSection}></div>
    </div>
  );
}
