"use client";
import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import chatImg from "@/images/chatIcon.png";

import styles from "./rootLayOut.module.scss";
import ChatBot from "@/components/ChatBot/ChatBot";
interface IchatPosition {
  isAiTyping?: boolean;
  isUserTyping?: boolean;
  text: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openChatBox, setOpenChatBox] = useState<boolean>(false);

  const [chatDisplayPosition, setChatDisplayPosition] = useState<
    IchatPosition[]
  >([
    {
      isAiTyping: false,
      isUserTyping: true,
      text: "",
    },
    {
      isAiTyping: true,
      isUserTyping: false,
      text: "",
    },
  ]);

  const handleChatIconClick = () => {
    setOpenChatBox((prev) => {
      if (prev) {
        setChatDisplayPosition([
          {
            isAiTyping: false,
            isUserTyping: true,
            text: "",
          },
          {
            isAiTyping: true,
            isUserTyping: false,
            text: "",
          },
        ]);
      }
      return !prev;
    });
  };

  return (
    <html lang="en">
      <head />
      <body>
        <main className={styles.mainWrapper}>
          {children}
          {openChatBox ? (
            <ChatBot
              chatDisplayPosition={chatDisplayPosition}
              setChatDisplayPosition={setChatDisplayPosition}
            />
          ) : null}
          <div
            onClick={() => handleChatIconClick()}
            className={styles.chatIconWrapper}
          >
            <div className={styles["hover-text"]}>
              {!openChatBox ? (
                <span className={styles["tooltip-text"]} id="topTooltip">
                  I'm chat bot!
                </span>
              ) : null}
              <Image
                style={openChatBox ? { animation: "none" } : {}}
                className={styles.chatIcon}
                src={chatImg}
                alt=""
              />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
