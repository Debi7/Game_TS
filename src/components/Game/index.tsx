import React, { FC, useRef } from 'react';
import ConfettiSplash from '../ConfettiSplash/index';
import LettersCount from '../LettersCount/index';
import Status from '../Status/index';
import Victory from '../Victory/index';
import MobileInput from '../MobileInput/index';
import { useGame } from '../../contexts/GameContext';
import '../../styles/index.scss';


const isMobileDevice = () => /android|iphone|ipad|ipod/i.test(navigator.userAgent);

const Game: FC = () => {
  const { confetti, start, setStart, victory, exception, counter, quoteLetters } = useGame();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputFocus = () => {
    if (isMobileDevice() && start && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <ConfettiSplash confetti={confetti} />
      <div className="section-quote" onClick={inputFocus}>
        <div className="wrapper">
          {start ? (
            <>
              <div className="timer">Таймер: {counter}</div>
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
        <MobileInput
          inputRef={inputRef}
          inputFocus={inputFocus}
        />
      </div>
    </>
  );
};

export default Game;
