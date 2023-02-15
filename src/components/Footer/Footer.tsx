import React from "react";
import Image from "next/image";
import ogLogo from "@/images/og-logo.png";
import Link from "next/link";
import SocialMediaComponents from "@/modules/aboutMe/socialmedia/SocialMediaComponents";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.logoWrapper}>
        <Image width={90} src={ogLogo} alt="" />
        <h4 className={`${styles.followUsText} sm:hidden`}>Follow Us</h4>
      </div>
      <div className={styles.followUsWrapper}>
        <h4 className={`${styles.followUsText} hidden sm:block`}>Follow Us</h4>
        <SocialMediaComponents />
      </div>
      <div className={styles.copyRightWrapper}>
        <p className={`${styles.copyRightText}`}>
          Copyright ©{`${new Date().getFullYear()}`} All rights reserved | This
          platform is made by{" "}
          <Link target="_blank" href="https://crazy-developer.vercel.app/">
            <span className={styles.nameBranding}>Hemant Jadhav</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
