import React, { SetStateAction, useRef, useEffect } from "react";
import illustrator from "@/images/illustrator-1.png";
import styles from "./intro.module.scss";
import Image from "next/image";
import gsap from "gsap";

interface IProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
}

const Intro = ({ setShowModal, showNav }: IProps) => {
  const timeline = gsap.timeline({
    // repeat: 1,
    defaults: {
      duration: 1,
      ease: "easeInOut",
    },
  });

  //   timeline.fromTo(
  //     "#introWrapperRef",
  //     {
  //       autoAlpha: 0,
  //       x: -100,
  //       duration: 0.5,
  //     },
  //     {
  //       autoAlpha: 1,
  //       x: 0,
  //       duration: 0.5,
  //     }
  //   );

  useEffect(() => {
    timeline
      .fromTo(
        "#introWrapper",
        {
          autoAlpha: 0,
          x: -100,
          duration: 0.5,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
        }
      )
      .fromTo(
        "#introImgWrapper",
        {
          autoAlpha: 0,
          x: 100,
          duration: 0.5,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
        }
      );
    //   .to(introWrapperRef.current, {
    //     autoAlpha: 1,
    //     x: 0,
    //     duration: 0.5,
    //     delay: 1,
    //   });
  }, []);

  return (
    <div className={styles.firstSection}>
      <div id="introWrapper" className={styles.introWrapper}>
        <div className={styles.introWrapper_Inner}>
          <h3 className={styles.teachingIsWhat}>HUSTLE-UP ACADEMY</h3>
          <h6 className={styles.description}>
            <br /> We help you gain the skills you need to reach your goals. We
            are committed to helping you create and develop a tech career path
            that will lead you to your <b>ideal employers around the world</b>,
            based on your abilities, qualifications, and preferences.
          </h6>
          <p className={styles.learnSkill}>
            Batch React Js Developer <br /> 30 MARCH 2023
          </p>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className={`${styles.hireTutorButton} ${
              !showNav && styles.position_unset
            }`}
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <div
        id="introImgWrapper"
        className={`${styles.introImgWrapper} ${showNav || styles.zIndexOne}`}
      >
        <Image src={illustrator} alt="" />
        <div className={styles.dropShadow} />
      </div>
    </div>
  );
};

export default Intro;
