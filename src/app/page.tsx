"use client";
import { ChangeEvent, useState } from "react";
import Header from "@/components/Header/Header";
import Image from "next/image";
import illustrator from "@/images/illustrator-1.png";
import imageCustom from "@/images/og-logo.png";
import CustomSlider from "@/customHooks/customSlider/Slider";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import { ISsologin } from "@/constants/Ssologin";
import styles from "./homePage.module.scss";

interface IAllError {
  nameError: boolean;
  emailError: boolean;
  collegeNameError: boolean;
  yearOfStudyError: boolean;
}

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [allInput, setAllInput] = useState<ISsologin>({
    name: "",
    collegeName: "",
    email: "",
    yearOfStudy: "",
  });

  const [allError, setIsAllError] = useState<IAllError>({
    nameError: false,
    emailError: false,
    collegeNameError: false,
    yearOfStudyError: false,
  });

  const handleBlur = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setIsAllError((prev) => ({ ...prev, nameError: value.length < 3 }));
        break;
      case "email":
        setIsAllError((prev) => ({
          ...prev,
          emailError: !/\S+@\S+\.\S+/.test(value),
        }));
        break;
      case "collegeName":
        setIsAllError((prev) => ({
          ...prev,
          collegeNameError: value.length < 3,
        }));
        break;
      case "yearOfStudy":
        setIsAllError((prev) => ({
          ...prev,
          yearOfStudyError: value.length < 3,
        }));
        break;
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setIsAllError((prev) => ({ ...prev, nameError: false }));
        break;
      case "email":
        setIsAllError((prev) => ({ ...prev, emailError: false }));
        break;
      case "collegeName":
        setIsAllError((prev) => ({ ...prev, collegeNameError: false }));
        break;
      case "yearOfStudy":
        setIsAllError((prev) => ({ ...prev, yearOfStudyError: false }));
        break;
    }
    setAllInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <Header setShowModal={setShowModal} />
      <div className={styles.firstSection}>
        <div className={styles.introWrapper}>
          <div className={styles.introWrapper_Inner}>
            <h3 className={styles.teachingIsWhat}>HUSTLE-UP ACADEMY</h3>
            <h6 className={styles.description}>
              Gain Industry standard knowledge and know current market
              requirement with the help of <b>working professionals. </b>
              Build and showcase real world projects!
            </h6>
            <p className={styles.learnSkill}>March 2023 BATCH</p>
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
        <div
          className={`px-5 border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none ${styles.modalWrapper}`}
        >
          {/*header*/}
          <div className="py-4 text-center border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-2xl font-bold text-center">Register now</h3>
          </div>
          {/*body*/}
          <Input
            type="text"
            name="name"
            value={allInput.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            label="Full name"
            onBlur={handleBlur}
            isError={allError.nameError}
          />
          <Input
            type="text"
            name="email"
            value={allInput.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            label="Email address"
            onBlur={handleBlur}
            isError={allError.emailError}
          />
          <Input
            type="text"
            name="collegeName"
            value={allInput.collegeName}
            onChange={handleInputChange}
            placeholder="Enter college name"
            label="College name"
            onBlur={handleBlur}
            isError={allError.collegeNameError}
            errorMessage="*Please enter college name"
          />
          <Input
            type="text"
            name="yearOfStudy"
            value={allInput.yearOfStudy}
            onChange={handleInputChange}
            placeholder="Enter highest qualification"
            label="Year of study / Highest qualification"
            onBlur={handleBlur}
            isError={allError.yearOfStudyError}
            errorMessage="*Please enter highest qualification"
          />
          {/* <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              itaque quaerat inventore quia reprehenderit quo. Est corrupti
              adipisci architecto nam magnam repellat minima. Pariatur possimus,
              nulla ex quisquam nesciunt modi!
            </p>
          </div> */}
          {/*footer*/}
          <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
            {/* <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button> */}
            <button
              className={`text-white font-medium uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${styles.registerButton}`}
              type="button"
              // onClick={() => setShowModal(false)}
            >
              Register
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
