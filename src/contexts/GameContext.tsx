// import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
// import _sample from 'lodash/sample';
// import quotes from '../data/quotes.json';

// interface GameContextProps {
//   confetti: boolean;
//   start: boolean | undefined;
//   setStart: (start: boolean | undefined) => void;
//   victory: number;
//   setVictory: (victory: number) => void;
//   exception: string;
//   counter: number;
//   quoteLetters: string;
// }

// const defaultGameContext: GameContextProps = {
//   confetti: false,
//   start: undefined,
//   setStart: () => { },
//   victory: 0,
//   setVictory: () => { },
//   exception: "",
//   counter: 0,
//   quoteLetters: "",
// };

// const GameContext = createContext<GameContextProps>(defaultGameContext);

// export const GameProvider = ({ children }: { children: ReactNode }) => {
//   const generateQuote = () => _sample(quotes) as string;
//   const returnQuoteLetters = (quote: string) => quote.replace(/\s/g, '').split('_').join('');

//   const [confetti, setConfetti] = useState(false);
//   const [start, setStart] = useState<undefined | boolean>();

//   const [victory, setVictory] = useState<number>(() => {
//     const savedVictory = sessionStorage.getItem('victory');
//     return savedVictory ? Number(savedVictory) : 0;
//   });

//   const [exception, setException] = useState(generateQuote);
//   const quoteLetters = returnQuoteLetters(exception);
//   const [counter, setCounter] = useState(Math.floor(quoteLetters.length / 2));

//   useEffect(() => {
//     const keyDownHandler = (event: KeyboardEvent) => {
//       const { key } = event;
//       const underscore = '_';
//       const space = ' ';

//       if (key !== underscore && key !== space) {
//         setException((prevException) => prevException.replace(key, underscore));
//       }
//     };

//     window.addEventListener('keydown', keyDownHandler, false);
//     return () => window.removeEventListener('keydown', keyDownHandler, false);
//   }, []);

//   useEffect(() => {
//     const timer = counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : null;

//     if (counter === 0) {
//       setStart(false);
//     }

//     return () => clearInterval(timer);
//   }, [counter]);

//   useEffect(() => {
//     if (!quoteLetters) {
//       const newQuote = generateQuote();

//       setVictory((prevVictory) => {
//         const newVictory = prevVictory + 1;
//         sessionStorage.setItem('victory', newVictory.toString());
//         return newVictory;
//       });

//       setConfetti(true);
//       setException(newQuote);
//       setCounter(Math.floor(returnQuoteLetters(newQuote).length / 2));
//       setTimeout(() => setConfetti(false), 4000);
//     }
//   }, [exception, quoteLetters]);

//   useEffect(() => {
//     if (start) {
//       const newQuote = generateQuote();
//       setException(newQuote);
//       setCounter(Math.floor(returnQuoteLetters(newQuote).length / 2));
//     }
//   }, [start]);

//   return (
//     <GameContext.Provider
//       value={{
//         confetti,
//         start,
//         setStart,
//         victory,
//         setVictory,
//         exception,
//         counter,
//         quoteLetters,
//       }}
//     >
//       {children}
//     </GameContext.Provider>
//   );
// };

// export const useGame = () => useContext(GameContext);





import React, { createContext, useState, useEffect, useContext, ReactNode, useRef } from 'react';
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

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      const { key } = event;
      const underscore = '_';
      const space = ' ';

      if (key !== underscore && key !== space) {
        setException((prevException) => prevException.replace(key, underscore));
      }
    };

    window.addEventListener('keydown', keyDownHandler, false);
    return () => window.removeEventListener('keydown', keyDownHandler, false);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    const lastCharacter = inputText[inputText.length - 1];
    const underscore = '_';

    setException((prevException) =>
      prevException.replace(lastCharacter, underscore)
    );
  };

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
        setException: () => { },
      }}
    >
      {/* Скрытый input для мобильных устройств */}
      <input
        ref={inputRef}
        type="text"
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          opacity: 0,
          width: '1px',
          height: '1px',
          padding: 0,
          margin: 0,
          border: 'none',
        }}
        onChange={handleInputChange}
        autoFocus
      />
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
