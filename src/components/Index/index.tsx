import React, { FC } from 'react';
import ConfettiSplash from '../ConfettiSplash/index';
import LettersCount from '../LettersCount/index';
import Status from '../Status/index';
import Victory from '../Victory/index';

import { useGame } from '../../contexts/GameContext';
import '../../styles/index.scss';

const Index: FC = () => {
  const { confetti, start, setStart, victory, exception, counter, quoteLetters } = useGame();

  return (
    <>
      <ConfettiSplash confetti={confetti} />
      <div className="section-quote">
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
      </div>
    </>
  );
};

export default Index;
