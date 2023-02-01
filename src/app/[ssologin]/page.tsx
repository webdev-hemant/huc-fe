"use client";
import React, { useEffect, useState } from "react";
import { SsoLoginApiCall } from "@/constantApi/ssoLogin";
import { IForm } from "@/constants/Ssologin";
import styles from "./ssoLogin.module.scss";
import SsoCard from "@/components/SsoCard/SsoCard";

const SsoLogin = ({ params }: any) => {
  const [apiData, setApiData] = useState<IForm[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && params?.ssologin) {
      SsoLoginApiCall({ HAND_SHAKE: params.ssologin || "" }).then((res) => {
        setIsLoaded(true);
        setApiData(res);
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`${styles.ssoLoginWrapper} bg-cyan-600`}>
      {/* {!apiData.length ? (
        <h1 style={{ fontSize: "3rem", color: "#fff" }}>Loading...</h1>
      ) : null} */}
      {isLoaded ? (
        <div className={` ${styles.ssologinInner}`}>
          {apiData.length ? (
            apiData?.map((item: IForm, index) => {
              return (
                <SsoCard
                  key={index}
                  name={item?.name}
                  email={item?.email}
                  collegeName={item?.collegeName}
                  yearOfStudy={item?.yearOfStudy}
                  mobile={item?.mobile}
                />
              );
            })
          ) : (
            <h1 style={{ fontSize: "3rem", color: "#fff" }}>
              no Hustler found!
            </h1>
          )}
        </div>
      ) : (
        <h1 style={{ fontSize: "3rem", color: "#fff" }}>Loading...</h1>
      )}
    </div>
  );
};

export default SsoLogin;
