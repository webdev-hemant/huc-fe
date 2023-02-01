import CurriculamCard from "@/components/CurriculamCards/CurriculamCard";
import React from "react";
import styles from "./secondSection.module.scss";

const SecondSection = () => {
  return (
    <div className={styles.secondSectionWrapper}>
      <div className={styles.secondTitle}>
        <h3>
          This is where you embark on an <br /> amazing journey!
        </h3>
      </div>
      <div className={styles.curriculamContainer}>
        <CurriculamCard />
      </div>
    </div>
  );
};

export default SecondSection;
