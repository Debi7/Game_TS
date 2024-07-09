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
  const [initialCounter, setInitialCounter] = useState<number>(0);
  const [confetti, setConfetti] = useState<boolean>(false);

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
      const letters = returnQuoteLetters(newQuote);

      setQuote(newQuote);
      setQuoteLetters(letters);
      setInitialCounter(Math.floor(letters.length / 2));
      setException("");
      setVictory(0);
    }
  }, [start]);

  useEffect(() => {
    if (!quoteLetters) {
      const newQuote = generateQuote();
      const letters = returnQuoteLetters(newQuote);

      setQuote(newQuote);
      setQuoteLetters(letters);
      setException(newQuote);
      setVictory(victory + 1);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 4000);
    }
  }, [victory, confetti]);


  useEffect(() => {
    const isGameWon = quoteLetters.split('').every(letter => exception.includes(letter));
    if (isGameWon) {
      setVictory(prevVictory => prevVictory + 1);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 4000);
    }
  }, [exception, quoteLetters]);


  // нажатие клавиш
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      const { key } = event;
      const underscore = "_";
      const space = " ";

      // Игнорируем клавиши "_", пробел и уже удаленные символы
      if (key === underscore || key === space || exception.includes(key)) {
        return;
      }

      // Создаем новую строку без текущего символа и обновляем исключение
      const updatedException = exception + key;
      setException(updatedException);

      // Проверяем, если все символы удалены, то вызываем победу
      if (quoteLetters.split('').every(letter => updatedException.includes(letter))) {
        setVictory(prevVictory => prevVictory + 1);
        setConfetti(true);
        setTimeout(() => setConfetti(false), 4000);
      }

      setInitialCounter(prevCounter => prevCounter - 1);
    };

    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [exception, quoteLetters]);


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
        returnQuoteLetters,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
