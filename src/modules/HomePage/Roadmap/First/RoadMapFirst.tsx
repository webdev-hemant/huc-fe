import React from "react";
import Image from "next/image";
import CurriculamCard from "@/components/CurriculamCards/CurriculamCard";
import imgOne from "@/images/codingImg.svg";
import imgTwo from "@/images/study-logo.jpg";
import HtmlSvg from "@/images/HtmlSvg";
import CssSvg from "@/images/CssSvg";
import TailwindCss from "@/images/tailwindcss";
import SassSvg from "@/images/SassSvg";
import JavascriptSvg from "@/images/JavascriptSvg";
import ReactSvg from "@/images/ReactSvg";
import GitSvg from "@/images/GitSvg";
// import Image from "next/image";
import styles from "./firstSection.module.scss";

const cardData = [
  {
    primaryText: "HTML 5",
    secondaryText: "Write structure of a Web page using Html.",
    image: <HtmlSvg />,
  },
  {
    primaryText: "Css 3",
    secondaryText: "Style and animate webpages using css.",
    image: <CssSvg />,
  },
  {
    primaryText: "Sass",
    secondaryText: "Sass is an extension of CSS for clean and advance css.",
    image: <SassSvg />,
  },
  {
    primaryText: "Tailwind Css",
    secondaryText:
      "Learn tailwind css for rapidly building custom user interfaces.",
    image: <TailwindCss />,
  },
  {
    primaryText: "Javascript",
    secondaryText:
      "Learn world's most popular programming language. The language of web.",
    image: <JavascriptSvg />,
  },
  {
    primaryText: "React Js",
    secondaryText:
      "React is best javascript framework and it's used to build single-page applications.",
    image: <ReactSvg />,
  },
  {
    primaryText: "Git",
    secondaryText:
      "Git use for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed.",
    image: <GitSvg />,
  },
];

const RoadMapFirst = () => {
  return (
    <div className={styles.fistRoadmapwrapper}>
      <div className={styles.firstTitle}>
        <h3>
          {/* "Beginning the Adventure <br /> Setting Out on the Journey Ahead" */}
          Kick start programming
        </h3>
      </div>
      <div className={styles.curriculamContainer}>
        <CurriculamCard
          titleHeading="  "
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
