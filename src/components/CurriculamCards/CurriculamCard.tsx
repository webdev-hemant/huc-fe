import Image from "next/image";
import React from "react";
import CardTypeOne from "../CardTypeOne/CardTypeOne";
import imgOne from "@/images/illustrator-1.png";
import imgTwo from "@/images/study-logo.jpg";
import styles from "./curriculam.module.scss";

const CurriculamCard = () => {
  const cardData = [
    {
      primaryText: "Freedom to learn",
      secondaryText: "Watch classes any time at your convenience",
      image: (
        <Image
          className={styles.icon}
          src={imgTwo}
          width={100}
          height={100}
          alt=""
        />
      ),
    },
    {
      primaryText: "Freedom to learn",
      secondaryText: "Watch classes any time at your convenience",
      image: (
        <Image
          className={styles.icon}
          src={imgTwo}
          width={100}
          height={100}
          alt=""
        />
      ),
    },
  ];
  return (
    <div className={styles.curriculamWrapper}>
      <div className={styles.textSection}>
        <h4>Most flexible program in the industry</h4>
        {cardData.map((item) => (
          <CardTypeOne
            key={item.primaryText}
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
            image={item.image}
          />
        ))}
      </div>
      <div className={styles.imgSection}>
        <Image
          className={styles.icon}
          src={imgOne}
          width={300}
          // height={100}
          alt=""
        />
      </div>
    </div>
  );
};

export default CurriculamCard;
