import React from "react";
import Image from "next/image";
import CurriculamCard from "@/components/CurriculamCards/CurriculamCard";
import imgOne from "@/images/illustrator-1.png";
import imgTwo from "@/images/study-logo.jpg";
import styles from "./firstSection.module.scss";
// import Image from "next/image";

const cardData = [
  {
    primaryText: "HTML 5",
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
    primaryText: "Css 3",
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

const RoadMapFirst = () => {
  return (
    <div className={styles.fistRoadmapwrapper}>
      <div className={styles.firstTitle}>
        <h3>
          {/* "Beginning the Adventure <br /> Setting Out on the Journey Ahead" */}
          Start from Basics
        </h3>
      </div>
      <div className={styles.curriculamContainer}>
        <CurriculamCard
          titleHeading="The first "
          cardData={cardData}
          rhsImage={
            <Image
              className={styles.icon}
              src={imgOne}
              width={300}
              // height={100}
              alt=""
            />
          }
        />
      </div>
    </div>
  );
};

export default RoadMapFirst;
