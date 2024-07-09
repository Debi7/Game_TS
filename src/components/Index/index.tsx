import React, { FC } from "react";

import ConfettiSplash from "../ConfettiSplash/index";
import LettersCount from "../LettersCount/index";
import Status from "../Status/index";
import Victory from "../Victory/index";
import Timer from "../Timer/index";

import { useGameContext } from "../../contexts/GameContext";

import "../../styles/index.scss";

const Index: FC = () => {
  const {
    start,
    setStart,
    victory,
    exception,
    initialCounter,
    isPaused,
    quote,
    quoteLetters,
  } = useGameContext();

  return (
    <>
      <ConfettiSplash confetti={false} />
      <div className="section-quote">
        <div className="wrapper">
          {start !== undefined ? (
            <>
              <Timer
                initialTime={initialCounter}
                isPaused={isPaused}
                onTimeUp={() => { }}
              />
              <h1>{quote || exception}</h1>
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
