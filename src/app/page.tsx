"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Image from "next/image";
import illustrator from "@/images/illustrator-1.png";
import imageCustom from "@/images/og-logo.png";
import CustomSlider from "@/customHooks/customSlider/Slider";
import styles from "./homePage.module.scss";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.pageWrapper}>
      <Header setShowModal={setShowModal} />
      <div className={styles.firstSection}>
        <div className={styles.introWrapper}>
          <div className={styles.introWrapper_Inner}>
            <h3 className={styles.teachingIsWhat}>HUSTLEUP ACADEMY</h3>
            <h6 className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              impedit asperiores iure animi qui quis sed unde eligendi ad. Minus
              tempore natus quaerat optio est odio voluptatum aperiam! Optio,
              velit.
            </h6>
            <p className={styles.learnSkill}>FEBRUARY 2023 BATCH</p>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className={styles.hireTutorButton}
            >
              JOIN NOW
            </button>
          </div>
        </div>
        <div className={styles.introImgWrapper}>
          <Image src={illustrator} alt="" />
          <div className={styles.dropShadow} />
        </div>
      </div>
      <div className={styles.secondSection}></div>
      <CustomSlider
        SliderData={[
          { image: imageCustom, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
        ]}
      />
      <Modal showModal={showModal} modalNumber={2}>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Modal Title</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              // onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              itaque quaerat inventore quia reprehenderit quo. Est corrupti
              adipisci architecto nam magnam repellat minima. Pariatur possimus,
              nulla ex quisquam nesciunt modi!
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              // onClick={() => setShowModal(false)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
