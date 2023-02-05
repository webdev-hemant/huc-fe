import { KeyboardEvent, useState, Dispatch, SetStateAction } from "react";
import ImgOne from "@/images/send-btn-2.svg";
import TextArea from "@/components/Textarea/TextArea";
import ChatGpt from "@/modules/chatGpt/ChatGpt";
import Typewriter from "typewriter-effect";
import TypingLoading from "@/components/TypingLoading/TypingLoading";
import styles from "./chatBot.module.scss";
import Image from "next/image";

interface IchatPosition {
  isAiTyping?: boolean;
  isUserTyping?: boolean;
  text: string;
}

interface IProp {
  chatDisplayPosition: IchatPosition[];
  setChatDisplayPosition: Dispatch<SetStateAction<IchatPosition[]>>;
}

const ChatBot = ({ chatDisplayPosition, setChatDisplayPosition }: IProp) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatBoxInput, setChatBoxInput] = useState<string>("");

  const runChatGpt = () => {
    setIsLoading(true);
    setChatDisplayPosition((prev) => [
      ...prev,
      {
        isUserTyping: true,
        text: chatBoxInput,
      },
    ]);
    setChatBoxInput("");
    ChatGpt({ promtText: chatBoxInput }).then((data) => {
      setChatDisplayPosition((prev) => {
        // delete prev[-1].isLatest;
        return [
          ...prev,
          {
            isAiTyping: true,
            text: data?.data?.choices?.[0]?.text || "",
          },
        ];
      });
      setIsLoading(false);
      // console.log({ data: data?.data?.choices?.[0]?.text });
    });
  };

  const handleOnclick = () => {
    runChatGpt();
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      // Do something else such as send the message to back-end
      runChatGpt();
    }
  };
  return (
    <div className={styles.chatBotBoxWrapper}>
      <div className={styles.botHeader}>
        <h2 className={styles.textHeading}>CHAT GPT</h2>
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
                  {index === 1 ? (
                    <span>
                      Welcome to hustle-up academy,
                      <br /> how can I help you?
                    </span>
                  ) : (
                    <>
                      {chatDisplayPosition.length === index + 1 ? (
                        <Typewriter
                          options={{ cursor: "" }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(item.text)
                              .changeDelay(1)
                              .start();
                          }}
                        />
                      ) : (
                        item.text
                      )}
                    </>
                  )}
                </h3>
              </div>
            );
          }
        })}
        {isLoading ? (
          <div style={{ marginTop: "0.5rem" }} className={styles.leftWrapper}>
            <TypingLoading />
          </div>
        ) : null}
      </div>
      <div className={styles.botChatSection}>
        <div className={styles.botchatInner}>
          <TextArea
            rows={1}
            textAreaStyleName={styles.customTextArea}
            onChange={(e) => setChatBoxInput(e.target.value)}
            value={chatBoxInput}
            onKeyDown={handleOnKeyDown}
            placeholder="Ask here..."
          />
          <Image
            onClick={() => handleOnclick()}
            className={styles.sendIcon}
            src={ImgOne}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
