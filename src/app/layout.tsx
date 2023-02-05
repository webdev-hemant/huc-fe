"use client";
import { KeyboardEvent, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import chatImg from "@/images/chatIcon.png";
import Input from "@/components/Input/Input";
import { BiSend } from "react-icons/bi";
import ImgOne from "@/images/send-btn-2.svg";
import TextArea from "@/components/Textarea/TextArea";
import ChatGpt from "@/modules/chatGpt/ChatGpt";
import styles from "./rootLayOut.module.scss";
import Typewriter from "typewriter-effect";
import { cursorTo } from "readline";

interface IchatPosition {
  isAiTyping?: boolean;
  isUserTyping?: boolean;
  text: string;
  // leftPosition: string[];
  // rightPosition: string[];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openChatBox, setOpenChatBox] = useState<boolean>(false);
  const [chatBoxInput, setChatBoxInput] = useState<string>("");
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
      text: "Welcome to hustle-up academy, how can I help you?",
    },
  ]);

  const handleOnclick = () => {
    setChatDisplayPosition((prev) => [
      ...prev,
      {
        isUserTyping: true,
        text: chatBoxInput,
      },
    ]);
    setChatBoxInput("");
    ChatGpt({ promtText: chatBoxInput }).then((data) => {
      setChatDisplayPosition((prev) => [
        ...prev,
        {
          isAiTyping: true,
          text: data?.data?.choices?.[0]?.text || "",
        },
      ]);
      console.log({ data: data?.data?.choices?.[0]?.text });
    });
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      // Do something else such as send the message to back-end
      setChatDisplayPosition((prev) => [
        ...prev,
        {
          isUserTyping: true,
          text: chatBoxInput,
        },
      ]);
      setChatBoxInput("");
      ChatGpt({ promtText: chatBoxInput }).then((data) => {
        setChatDisplayPosition((prev) => [
          ...prev,
          {
            isAiTyping: true,
            text: data?.data?.choices?.[0]?.text || "",
          },
        ]);
        console.log({ data: data?.data?.choices?.[0]?.text });
      });
    }
  };

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
                <h2
                  // onClick={() => {
                  //   setChatDisplayPosition((prev) => [
                  //     ...prev,
                  //     {
                  //       isAiTyping: true,
                  //       text: "my name is chat gpt ai",
                  //     },
                  //   ]);
                  // }}
                  className={styles.textHeading}
                >
                  CHAT GPT
                </h2>
              </div>
              <div className={styles.botBody}>
                {chatDisplayPosition?.map((item: IchatPosition, index) => {
                  if (item?.isUserTyping) {
                    return (
                      <div key={index} className={styles.rightWrapper}>
                        {item.text ? (
                          <h3 className={styles.textRight}>{item.text}</h3>
                        ) : null}
                      </div>
                    );
                  } else if (item?.isAiTyping) {
                    return (
                      <div key={index} className={styles.leftWrapper}>
                        <h3 className={styles.textLeft}>
                          {item.text}
                          {/* <Typewriter
                            options={{ cursor: "" }}
                            onInit={(typewriter) => {
                              typewriter
                                .typeString(item.text)
                                .changeDelay(1)
                                .callFunction(() => {
                                  console.log("String typed out!");
                                })
                                // .pauseFor(2500)
                                // .deleteAll()
                                // .callFunction(() => {
                                //   console.log("All strings were deleted");
                                // })
                                .start();
                            }}
                          /> */}
                        </h3>
                      </div>
                    );
                  }
                })}
              </div>

              <div className={styles.botChatSection}>
                <div className={styles.botchatInner}>
                  <TextArea
                    textAreaStyleName={styles.customTextArea}
                    onChange={(e) => setChatBoxInput(e.target.value)}
                    value={chatBoxInput}
                    onKeyDown={handleOnKeyDown}
                  />
                  {/* <BiSend className={styles.sendIcon} />
                   */}
                  <Image
                    onClick={() => handleOnclick()}
                    className={styles.sendIcon}
                    src={ImgOne}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div
            onClick={() =>
              setOpenChatBox((prev) => {
                prev
                  ? (document.body.style.overflow = "unset")
                  : (document.body.style.overflow = "hidden");
                return !prev;
              })
            }
            className={styles.chatIconWrapper}
          >
            <Image className={styles.chatIcon} src={chatImg} alt="" />
          </div>
        </main>
      </body>
    </html>
  );
}
