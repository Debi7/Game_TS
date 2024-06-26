import React, { FC } from "react";
import _sample from "lodash/sample";
import _round from "lodash/round";
import ConfettiSplash from "./ConfettiSplash";
import LettersCount from "./LettersCount";
import Status from "./Status";
import Victory from "./Victory";
import Timer from "./Timer";

import { useGameContext } from "../contexts/GameContext";

import "./index.scss";

const Index: FC = () => {
  const {
    start,
    setStart,
    victory,
    exception,
    initialCounter,
    isPaused,
  } = useGameContext();

  const quoteLetters = returnQuoteLetters(exception);

  function returnQuoteLetters(quote: string) {
    return quote.replace(/\s/g, "").split("_").join("");
  }

  return (
    <>
      <ConfettiSplash confetti={false} /> {/* Переделать на использование контекста */}
      <div className="section-quote">
        <div className="wrapper">
          {start !== undefined ? (
            <>
              <Timer initialTime={initialCounter} isPaused={isPaused} onTimeUp={() => { }} />
              <h1>{exception}</h1>
              <div className="info-wrapper">
                <LettersCount quoteLetters={quoteLetters} />
                <Victory victory={victory} />
              </div>
            </>
          ) : (
            <Status start={start} setStart={setStart} />
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
