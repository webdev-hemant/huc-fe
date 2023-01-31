"use client";
import React, { useEffect, useState } from "react";
import { SsoLoginApiCall } from "@/apiDetails/ssoLogin";
import styles from "./ssoLogin.module.scss";

const SsoLogin = ({ params }: any) => {
  const [apiData, setApiData] = useState();
  // console.log(params.ssologin);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      SsoLoginApiCall().then((res) => setApiData(res));
    }
    return () => {
      isMounted = false;
    };
  }, []);

  console.log({ apiData });

  return <div className={styles.ssoLoginWrapper}>SsoLogin</div>;
};

export default SsoLogin;
