import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import _sample from 'lodash/sample';
import quotes from '../data/quotes.json';

interface GameContextProps {
  confetti: boolean;
  start: boolean | undefined;
  setStart: (start: boolean | undefined) => void;
  victory: number;
  setVictory: (victory: number) => void;
  exception: string;
  counter: number;
  quoteLetters: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setException: (exception: string) => void;
}

const defaultGameContext: GameContextProps = {
  confetti: false,
  start: undefined,
  setStart: () => { },
  victory: 0,
  setVictory: () => { },
  exception: "",
  counter: 0,
  quoteLetters: "",
  currentIndex: 0,
  setCurrentIndex: () => { },
  setException: () => { },
};

const GameContext = createContext<GameContextProps>(defaultGameContext);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const generateQuote = () => _sample(quotes) as string;
  const returnQuoteLetters = (quote: string) => quote.replace(/\s/g, '').split('_').join('');

  const [confetti, setConfetti] = useState(false);
  const [start, setStart] = useState<undefined | boolean>();

  const [victory, setVictory] = useState<number>(() => {
    const savedVictory = sessionStorage.getItem('victory');
    return savedVictory ? Number(savedVictory) : 0;
  });

  const [exception, setException] = useState(generateQuote);
  const quoteLetters = returnQuoteLetters(exception);
  const [counter, setCounter] = useState(Math.floor(quoteLetters.length / 2));

  const [currentIndex, setCurrentIndex] = useState(0); // отслеживаем текущий индекс

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      const { key } = event;
      const underscore = '_';
      const space = ' ';

      if (key !== underscore && key !== space) {
        setException((prevException) => {
          if (currentIndex < prevException.length && prevException[currentIndex] === key) {
            const updatedException = prevException.split('');
            updatedException[currentIndex] = underscore;
            setCurrentIndex((prevIndex) => prevIndex + 1);
            return updatedException.join('');
          }
          return prevException;
        });
      }
    };

    window.addEventListener('keydown', keyDownHandler, false);
    return () => window.removeEventListener('keydown', keyDownHandler, false);
  }, [currentIndex]);

  useEffect(() => {
    const timer = counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : null;

    if (counter === 0) {
      setStart(false);
    }

    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (!quoteLetters) {
      const newQuote = generateQuote();

      setVictory((prevVictory) => {
        const newVictory = prevVictory + 1;
        sessionStorage.setItem('victory', newVictory.toString());
        return newVictory;
      });

      setConfetti(true);
      setException(newQuote);
      setCounter(Math.floor(returnQuoteLetters(newQuote).length / 2));
      setTimeout(() => setConfetti(false), 4000);
    }
  }, [exception, quoteLetters]);

  useEffect(() => {
    if (start) {
      const newQuote = generateQuote();
      setException(newQuote);
      setCounter(Math.floor(returnQuoteLetters(newQuote).length / 2));
      setCurrentIndex(0);
    }
  }, [start]);

  return (
    <GameContext.Provider
      value={{
        confetti,
        start,
        setStart,
        victory,
        setVictory,
        exception,
        counter,
        quoteLetters,
        currentIndex,
        setCurrentIndex,
        setException,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
