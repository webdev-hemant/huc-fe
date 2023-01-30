"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";
import Image, { StaticImageData } from "next/image";

interface ISliderData {
  image: StaticImageData;
  imgWidth: number;
  imgHeight: number;
  alt?: string;
}

interface IProps {
  SliderData: ISliderData[];
  // CustomSetting?: ISettings;
}

const CustomSlider = ({ SliderData = [] }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <h1>next arrow</h1>,
    // prevArrow: <h1>prev arrow</h1>,
    // ...CustomSetting,
  };
  return (
    <Slider {...settings}>
      {SliderData?.map((item: ISliderData, index: number) => (
        <div key={index} className={styles.sliderImgWrapper}>
          <Image
            src={item?.image}
            width={item?.imgWidth}
            height={item?.imgHeight}
            alt={item?.alt || ""}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
