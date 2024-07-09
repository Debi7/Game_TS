import React, { createContext, useContext, useState, FC, ReactNode, useEffect, KeyboardEvent } from "react";
import _sample from "lodash/sample";

import quotes from "../data/quotes.json";

// Интерфейс для свойств контекста
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
  quote: string;
  generateQuote: () => string;
  quoteLetters: string;
  returnQuoteLetters: (quote: string) => string;
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
  quote: "",
  generateQuote: () => "",
  quoteLetters: "",
  returnQuoteLetters: () => "",
};

// Создание контекста
const GameContext = createContext<GameContextProps>(defaultContextValues);

// Хук для использования контекста
export const useGameContext = () => useContext(GameContext);

// Типизация провайдера с учетом children
interface GameProviderProps {
  children: ReactNode;
}

// Провайдер контекста
export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [start, setStart] = useState<boolean | undefined>(undefined);
  const [victory, setVictory] = useState<number>(0);
  const [exception, setException] = useState<string>("");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>("");
  const [quoteLetters, setQuoteLetters] = useState<string>("");

  const timerStart = quoteLetters.length / 2;
  const [initialCounter, setInitialCounter] = useState<number>(timerStart);


  // Функция для переключения паузы
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Функция для генерации случайной цитаты
  const generateQuote = () => {
    const randomQuote = _sample(quotes);
    return randomQuote || "";
  };

  // Функция для возвращения букв цитаты без пробелов и подчеркиваний
  const returnQuoteLetters = (quote: string) => {
    return quote.replace(/\s/g, "").split("_").join("");
  };

  // Эффект для генерации цитаты при старте игры
  useEffect(() => {
    if (start) {
      const newQuote = generateQuote();
      setQuote(newQuote);
      setQuoteLetters(returnQuoteLetters(newQuote));
    }
  }, [start]);


  // нажатие клавиш
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      const underscore = "_";
      const space = " ";
      if (key !== underscore && key !== space) {
        setException(exception.replace(key, underscore));
      }
    };

    window.addEventListener("keydown", keyDownHandler, false);
    return () => window.removeEventListener("keydown", keyDownHandler, false);
  }, [exception]);


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
        quote,
        generateQuote,
        quoteLetters,
        returnQuoteLetters
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
