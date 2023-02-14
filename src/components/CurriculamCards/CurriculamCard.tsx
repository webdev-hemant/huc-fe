import Image from "next/image";
import React from "react";
import CardTypeOne from "../CardTypeOne/CardTypeOne";
// import imgOne from "@/images/illustrator-1.png";
// import imgTwo from "@/images/study-logo.jpg";
import styles from "./curriculam.module.scss";

interface Iprops {
  titleHeading: string;
  cardData: {
    primaryText: string;
    secondaryText: string;
    image: JSX.Element;
  }[];
  rhsImage: JSX.Element;
}

const CurriculamCard = (props: Iprops) => {
  const { titleHeading = "", cardData, rhsImage } = props;

  return (
    <div className={styles.curriculamWrapper}>
      <div className={styles.textSection}>
        <h4>{titleHeading}</h4>
        {cardData.map((item) => (
          <CardTypeOne
            key={item.primaryText}
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
            image={item.image}
          />
        ))}
      </div>
      <div className={styles.imgSection}>{rhsImage}</div>
    </div>
  );
};

export default CurriculamCard;
