import React, { FC } from "react";

const emojiImage = "😊";
interface StatusProps {
  start: boolean;
  setStart: (value: boolean) => void;
}

const Status: FC<StatusProps> = ({ start, setStart }) => (
  <>
    <div style={{ display: "flex", alignItems: "center" }}>
      <h1>
        {typeof start === "undefined"
          ? `⏱ Цель игры, как можно быстрее напечатать буквы и знаки, кроме пробелов, чтобы уложиться в таймер.`
          : <>
            <span style={{ fontSize: "32px", marginRight: "8px", fontStyle: "normal" }}>{emojiImage}</span> Попробуйте еще раз
          </>}
      </h1>
    </div>
    <div className="start-btn-wrapper">
      <button onClick={() => setStart(true)}>Старт</button>
    </div>
  </>
);

export default Status;