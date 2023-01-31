"use client";
import React, { useEffect, useState } from "react";
import { SsoLoginApiCall } from "@/constantApi/ssoLogin";
import { ISsologin } from "@/constants/Ssologin";
import styles from "./ssoLogin.module.scss";
import SsoCard from "@/components/SsoCard/SsoCard";

const SsoLogin = ({ params }: any) => {
  const [apiData, setApiData] = useState<ISsologin[]>([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && params?.ssologin) {
      SsoLoginApiCall({ HAND_SHAKE: params.ssologin || "" }).then((res) =>
        setApiData(res)
      );
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`${styles.ssoLoginWrapper} bg-cyan-600`}>
      {!apiData.length ? (
        <h1 style={{ fontSize: "3rem", color: "#fff" }}>Loading...</h1>
      ) : null}
      {/* <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"> */}
      <div className={` ${styles.ssologinInner}`}>
        {apiData?.map((item: ISsologin, index) => {
          return (
            <SsoCard
              key={index}
              name={item?.name}
              email={item?.email}
              collegeName={item?.collegeName}
              yearOfStudy={item?.yearOfStudy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SsoLogin;
