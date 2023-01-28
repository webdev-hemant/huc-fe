import { useEffect, useState } from "react";

const IsMobile = () => {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window?.innerWidth);
    });
    return () =>
      window.removeEventListener("resize", () =>
        setScreenSize(window?.innerWidth)
      );
  }, []);

  return {
    isMobile: screenSize <= 375,
    isTablet: screenSize > 375 && screenSize <= 768,
    isLaptop: screenSize > 768,
  };
};

export default IsMobile;
