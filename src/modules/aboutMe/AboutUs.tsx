import Image from "next/image";
import SocialMediaComponents from "./socialmedia/SocialMediaComponents";
// import Primarysvg from "@/images/primarysvg";
// import Link from "next/link";
import illustratorOne from "@/images/working-professionals.jpg";
import styles from "./aboutMe.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.introductionWrapper}>
      <div className={styles.imageContainer}>
        {/* <Primarysvg /> */}
        <Image src={illustratorOne} alt="" />
      </div>
      <div className={styles.textIntroContainer}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.nameHeading}>
            Learn from <br /> working <br /> professional&apos;s{" "}
          </h2>
          {/* <span className={styles.nameSubHeading}>- JavaSript Developer</span> */}
          <h6 className={styles.description}>
            Gain Industry standard knowledge and know current market requirement
            with the help of <b>working professionals, </b> also build and
            showcase real world projects to attract best opportunity!
          </h6>
        </div>
        {/* <p className={styles.introParagraph}>
          I am a working professional software Engineer who solves
          customers&apos; problems by providing software services also I&apos;m
          equipped with the right tools to deliver fast and resilient software.
          <br /> — performance and scalability are priorities on my radar.
        </p>
        <SocialMediaComponents />
        <button className={styles.contactMeButton} type="button">
          Contact Me
        </button> */}
      </div>
    </section>
  );
};

export default AboutUs;
