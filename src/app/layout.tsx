"use client";
import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import chatImg from "@/images/chatIcon.png";
import Input from "@/components/Input/Input";
import { BiSend } from "react-icons/bi";
import styles from "./rootLayOut.module.scss";
import TextArea from "@/components/Textarea/TextArea";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openChatBox, setOpenChatBox] = useState<boolean>(true);
  const [chatBoxInput, setChatBoxInput] = useState<string>("");
  return (
    <html lang="en">
      <head />
      <body>
        {/* <Header /> */}
        <main className={styles.mainWrapper}>
          {children}
          {openChatBox ? (
            <div className={styles.chatBotBoxWrapper}>
              <div className={styles.botHeader}>
                <h2 className={styles.textHeading}>Chat Gpt</h2>
              </div>
              <div className={styles.botBody}>
                <div className={styles.rightWrapper}>
                  <h3 className={styles.textRight}>Hi, my self hemant</h3>
                </div>
                <div className={styles.leftWrapper}>
                  <h3 className={styles.textLeft}>Yeah tell me hemant</h3>
                </div>
              </div>
              <div className={styles.botChatSection}>
                <TextArea
                  onChange={(e) => setChatBoxInput(e.target.value)}
                  value={chatBoxInput}
                />
                <BiSend className={styles.sendIcon} />
              </div>
            </div>
          ) : null}
          <div
            onClick={() => setOpenChatBox((prev) => !prev)}
            className={styles.chatIconWrapper}
          >
            <Image className={styles.chatIcon} src={chatImg} alt="" />
          </div>
        </main>
      </body>
    </html>
  );
}
