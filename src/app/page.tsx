"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import Image from "next/image";
// import CustomSlider from "@/customHooks/customSlider/Slider";
import firstLine from "@/images/firstLIne.svg";
import secondLine from "@/images/secondLine.svg";
import thirdLine from "@/images/thirdLine.svg";
import fourthLine from "@/images/fourthLIne.svg";
import fifthLine from "@/images/fifthLine.svg";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import { IForm } from "@/constants/Ssologin";
import { formSubmit } from "@/constantApi/formSubmit";
import Spinner from "@/components/Spinner/Spinner";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import RoadMapFirst from "@/modules/HomePage/Roadmap/First/RoadMapFirst";
import AboutUs from "@/modules/aboutMe/AboutUs";
import {
  FormInputConstants,
  IFormInputConstant,
} from "@/constants/FormInputConstants";
import Intro from "@/modules/HomePage/firstSection/Intro";
import ContactForm from "@/modules/HomePage/ContactUs/ContactForm";
import Footer from "@/components/Footer/Footer";
import styles from "./homePage.module.scss";

interface IAllError {
  nameError: boolean;
  emailError: boolean;
  mobileError: boolean;
  collegeNameError: boolean;
  yearOfStudyError: boolean;
}

interface IsubmitPosition {
  state: boolean;
  positionX: string;
}

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(true);

  const [allInput, setAllInput] = useState<IForm>({
    name: "",
    mobile: "",
    collegeName: "",
    email: "",
    yearOfStudy: "",
  });

  const [allError, setIsAllError] = useState<IAllError>({
    nameError: false,
    mobileError: false,
    emailError: false,
    collegeNameError: false,
    yearOfStudyError: false,
  });

  const [submitPosition, setSubmitPosition] = useState<IsubmitPosition>({
    state: false,
    positionX: "0",
  });

  const resetForm = () => {
    setAllInput({
      name: "",
      mobile: "",
      collegeName: "",
      email: "",
      yearOfStudy: "",
    });
    resetAllErrors();
  };

  const resetAllErrors = () =>
    setIsAllError({
      nameError: false,
      mobileError: false,
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
      case "mobile":
        setIsAllError((prev) => ({
          ...prev,
          mobileError: value.length < 10 || value.length > 10,
        }));
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
    isEveryThingOKay() &&
      setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setIsAllError((prev) => ({ ...prev, nameError: false }));
        break;
      case "mobile":
        setIsAllError((prev) => ({ ...prev, mobileError: false }));
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
    isEveryThingOKay() &&
      setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
  };

  const isEveryThingOKay = (): boolean => {
    const isNoError = Object.values(allError).every((v) => v == false);
    const isNotEmty = Object.values(allInput).every((v) => !!v == true);
    const isEveryThingOKay = isNoError && isNotEmty;
    return isEveryThingOKay;
  };

  const handleMouseEnter = () => {
    if (isEveryThingOKay()) {
      setSubmitPosition((prev) => ({ ...prev, positionX: "0" }));
    } else {
      setSubmitPosition((prev) => ({
        positionX: prev.state ? "5rem" : "-5rem",
        state: !prev.state,
      }));
    }
  };

  const handleFormSubmit = async () => {
    if (isEveryThingOKay()) {
      setIsLoading(true);
      formSubmit(allInput).then((res) => {
        // if (res.Created === 201) {
        toast.success("success", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        resetForm();
        setIsLoading(false);
        setShowModal(false);
        console.log(res);
        // }
      });
    } else {
      setSubmitPosition((prev) => ({
        positionX: prev.state ? "5rem" : "-5rem",
        state: !prev.state,
      }));
    }
  };

  const FormInputField = () => {
    return (
      <>
        {FormInputConstants.map((item: IFormInputConstant) => (
          <Input
            key={item.name}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            label={item.label}
            errorMessage={item?.errorMessage}
            value={allInput[item.value]}
            isError={allError[item.isError]}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        ))}
      </>
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <Header
        setShowModal={setShowModal}
        setShowNav={setShowNav}
        showNav={showNav}
      />
      <Intro setShowModal={setShowModal} showNav={showNav} />
      <AboutUs />
      <div className={styles.roadMapWrapper}>
        <RoadMapFirst />
      </div>
      {/* <CustomSlider
        SliderData={[
          { image: imageCustom, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
          { image: illustrator, imgHeight: 400, imgWidth: 400, alt: "photo" },
        ]}
      /> */}
      <ContactForm handleFormSubmit={handleFormSubmit} isLoading={isLoading}>
        <FormInputField />
      </ContactForm>
      <Footer />
      <Modal showModal={showModal} modalNumber={2}>
        <div
          className={`px-5 border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none ${styles.modalWrapper}`}
        >
          <div className="py-4 text-center border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-2xl font-bold">Register now</h3>
            <RxCross2
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
              className={styles.crossIcon}
            />
          </div>
          <FormInputField />
          <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className={`text-white font-medium uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${styles.registerButton}`}
              type="button"
              onClick={() => handleFormSubmit()}
              onMouseEnter={() => handleMouseEnter()}
              style={{ transform: `translateX(${submitPosition.positionX})` }}
            >
              Register{isLoading ? <Spinner /> : null}
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
