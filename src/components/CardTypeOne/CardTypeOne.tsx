import React from "react";
import Image from "next/image";
import styles from "./cardtype.module.scss";

interface IProps {
  primaryText: string;
  secondaryText: string;
  image: any;
}

const CardTypeOne = (props: IProps) => {
  const { primaryText = "", secondaryText = "", image } = props;
  return (
    <div className={styles.cardTypeOneWrapper}>
      <div className={styles.iconWrapper}>{image}</div>
      <div className={styles.textWrapper}>
        <h2>{primaryText}</h2>
        <h3>{secondaryText}</h3>
      </div>
    </div>
  );
};

export default CardTypeOne;
