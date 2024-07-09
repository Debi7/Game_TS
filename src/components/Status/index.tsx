import React, { FC } from "react";

interface StatusProps {
  start: boolean;
  setStart: (value: boolean) => void;
}

const Status: FC<StatusProps> = ({ start, setStart }) => (
  <>
    <h1>
      {typeof start === "undefined"
        ? `⏱ Цель игры, как можно быстрее напечатать буквы и знаки, кроме пробелов, чтобы уложиться в таймер.`
        : `Попробуйте еще раз`}
    </h1>
    <div className="start-btn-wrapper">
      <button onClick={() => setStart(true)}>Старт</button>
    </div>
  </>
);

export default Status;
