import React from "react";
import Image from "next/image";
import formImage from "@/images/contactus.svg";
import styles from "./contactus.module.scss";
import Spinner from "@/components/Spinner/Spinner";

interface Iprops {
  children: React.ReactNode;
  handleFormSubmit: any;
  isLoading: boolean;
  batchDate: string;
}

const ContactForm = ({
  children,
  handleFormSubmit,
  isLoading,
  batchDate = "",
}: Iprops) => {
  return (
    <div className={styles.contactWrapper}>
      <h3 className={styles.registerNowHeadline}>Register now</h3>
      <div className={styles.formInnerContainer}>
        <div className={styles.imgWrapper}>
          <Image src={formImage} alt="" />
        </div>
        <div className={styles.formWrapper}>
          <div
            className={`px-5 border-0 rounded-lg  relative w-full bg-white outline-none focus:outline-none ${styles.modalWrapper}`}
          >
            <h3 className="text-2xl font-bold text-center">
              Batch {batchDate}
            </h3>

            {children}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className={`${styles.registerButton}`}
                type="button"
                onClick={() => handleFormSubmit()}
              >
                Register
                {isLoading ? <Spinner /> : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
