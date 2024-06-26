self["webpackHotUpdategame_ts"]("main",{

/***/ "./src/components/Index.tsx":
/*!**********************************!*\
  !*** ./src/components/Index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfettiSplash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfettiSplash */ "./src/components/ConfettiSplash/index.tsx");
/* harmony import */ var _LettersCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LettersCount */ "./src/components/LettersCount/index.tsx");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Status */ "./src/components/Status/index.tsx");
/* harmony import */ var _Victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Victory */ "./src/components/Victory/index.tsx");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Timer */ "./src/components/Timer/index.tsx");
/* harmony import */ var _contexts_GameContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/GameContext */ "./src/contexts/GameContext.tsx");
/* harmony import */ var _contexts_GameContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_contexts_GameContext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/components/index.scss");








var Index = function () {
    var _a = (0,_contexts_GameContext__WEBPACK_IMPORTED_MODULE_6__.useGameContext)(), start = _a.start, setStart = _a.setStart, victory = _a.victory, exception = _a.exception, initialCounter = _a.initialCounter, isPaused = _a.isPaused;
    var quoteLetters = returnQuoteLetters(exception);
    function returnQuoteLetters(quote) {
        return quote.replace(/\s/g, "").split("_").join("");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfettiSplash__WEBPACK_IMPORTED_MODULE_1__["default"], { confetti: false }),
        " ",
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "section-quote" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "wrapper" }, start !== undefined ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Timer__WEBPACK_IMPORTED_MODULE_5__["default"], { initialTime: initialCounter, isPaused: isPaused, onTimeUp: function () { } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, exception),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "info-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LettersCount__WEBPACK_IMPORTED_MODULE_2__["default"], { quoteLetters: quoteLetters }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Victory__WEBPACK_IMPORTED_MODULE_4__["default"], { victory: victory })))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Status__WEBPACK_IMPORTED_MODULE_3__["default"], { start: start, setStart: setStart }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ "./src/components/Timer/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Timer/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/GameContext */ "./src/contexts/GameContext.tsx");
/* harmony import */ var _contexts_GameContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contexts_GameContext__WEBPACK_IMPORTED_MODULE_1__);
// Timer.tsx


var Timer = function (_a) {
    var initialTime = _a.initialTime, onTimeUp = _a.onTimeUp;
    var _b = (0,_contexts_GameContext__WEBPACK_IMPORTED_MODULE_1__.useGameContext)(), isPaused = _b.isPaused, togglePause = _b.togglePause;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialTime), time = _c[0], setTime = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = null;
        if (!isPaused && time > 0) {
            timer = setTimeout(function () { return setTime(time - 1); }, 1000);
        }
        if (time === 0) {
            onTimeUp();
        }
        return function () {
            if (timer)
                clearTimeout(timer);
        };
    }, [time, isPaused, onTimeUp]);
    // Обновляем внутренний state таймера при изменении initialTime
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setTime(initialTime);
    }, [initialTime]);
    var handleButtonClick = function () {
        togglePause();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "timer-display" },
            "\u0422\u0430\u0439\u043C\u0435\u0440: ",
            time),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleButtonClick }, isPaused ? "Играть" : "Пауза")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);


/***/ }),

/***/ "./src/contexts/GameContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/GameContext.tsx ***!
  \**************************************/
/***/ (() => {

// import React, { createContext, useContext, useState, FC, ReactNode } from "react";
// import _sample from "lodash/sample";
// import quotes from "../data/quotes.json";
// interface GameContextProps {
//   start?: boolean;
//   setStart: (value: boolean | undefined) => void;
//   victory: number;
//   setVictory: (value: number) => void;
//   exception: string;
//   setException: (value: string) => void;
//   initialCounter: number;
//   setInitialCounter: (value: number) => void;
//   isPaused: boolean;
//   togglePause: () => void;
// }
// // Значения по умолчанию для контекста
// const defaultContextValues: GameContextProps = {
//   start: undefined,
//   setStart: () => { },
//   victory: 0,
//   setVictory: () => { },
//   exception: "",
//   setException: () => { },
//   initialCounter: 0,
//   setInitialCounter: () => { },
//   isPaused: false,
//   togglePause: () => { },
// };
// const GameContext = createContext<GameContextProps>(defaultContextValues);
// export const useGameContext = () => useContext(GameContext);
// // Типизация провайдера с учетом children
// interface GameProviderProps {
//   children: ReactNode; // Правильная типизация для children
// }
// export const GameProvider: FC<GameProviderProps> = ({ children }) => {
//   const [start, setStart] = useState<boolean | undefined>(undefined);
//   const [victory, setVictory] = useState<number>(0);
//   const [exception, setException] = useState<string>("");
//   const [initialCounter, setInitialCounter] = useState<number>(0);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const togglePause = () => {
//     setIsPaused(!isPaused);
//   };
//   const generateQuote = () => {
//     const randomQuote = _sample(quotes);
//     return randomQuote || "";
//   };
//   const returnQuoteLetters = (quote: string) => {
//     return quote.replace(/\s/g, "").split("_").join("");
//   };
//   return (
//     <GameContext.Provider
//       value={{
//         start,
//         setStart,
//         victory,
//         setVictory,
//         exception,
//         setException,
//         initialCounter,
//         setInitialCounter,
//         isPaused,
//         togglePause,
//       }}
//     >
//       {children}
//     </GameContext.Provider>
//   );
// };


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bece891f5a51cd6ef998")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3bfc878b30e7244bca3f.hot-update.js.map