import React, { createContext, useContext, useState, FC, ReactNode } from "react";
import _sample from "lodash/sample";
import quotes from "../data/quotes.json";

interface GameContextProps {
  start?: boolean;
  setStart: (value: boolean | undefined) => void;
  victory: number;
  setVictory: (value: number) => void;
  exception: string;
  setException: (value: string) => void;
  initialCounter: number;
  setInitialCounter: (value: number) => void;
  isPaused: boolean;
  togglePause: () => void;
}

// Значения по умолчанию для контекста
const defaultContextValues: GameContextProps = {
  start: undefined,
  setStart: () => { },
  victory: 0,
  setVictory: () => { },
  exception: "",
  setException: () => { },
  initialCounter: 0,
  setInitialCounter: () => { },
  isPaused: false,
  togglePause: () => { },
};

const GameContext = createContext<GameContextProps>(defaultContextValues);

export const useGameContext = () => useContext(GameContext);

// Типизация провайдера с учетом children
interface GameProviderProps {
  children: ReactNode; // Правильная типизация для children
}

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [start, setStart] = useState<boolean | undefined>(undefined);
  const [victory, setVictory] = useState<number>(0);
  const [exception, setException] = useState<string>("");
  const [initialCounter, setInitialCounter] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const generateQuote = () => {
    const randomQuote = _sample(quotes);
    return randomQuote || "";
  };

  const returnQuoteLetters = (quote: string) => {
    return quote.replace(/\s/g, "").split("_").join("");
  };

  return (
    <GameContext.Provider
      value={{
        start,
        setStart,
        victory,
        setVictory,
        exception,
        setException,
        initialCounter,
        setInitialCounter,
        isPaused,
        togglePause,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
