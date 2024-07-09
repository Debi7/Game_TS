"use strict";
self["webpackHotUpdategame_ts"]("main",{

/***/ "./src/contexts/GameContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/GameContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameProvider: () => (/* binding */ GameProvider),
/* harmony export */   useGameContext: () => (/* binding */ useGameContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sample */ "./node_modules/lodash/sample.js");
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/quotes.json */ "./src/data/quotes.json");



// Значения по умолчанию для контекста
var defaultContextValues = {
    start: undefined,
    setStart: function () { },
    victory: 0,
    setVictory: function () { },
    exception: "",
    setException: function () { },
    initialCounter: timerStart,
    setInitialCounter: function () { },
    isPaused: false,
    togglePause: function () { },
    quote: "",
    generateQuote: function () { return ""; },
    quoteLetters: "",
    returnQuoteLetters: function () { return ""; },
};
// Создание контекста
var GameContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContextValues);
// Хук для использования контекста
var useGameContext = function () { return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GameContext); };
// Провайдер контекста
var GameProvider = function (_a) {
    var children = _a.children;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined), start = _b[0], setStart = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), victory = _c[0], setVictory = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), exception = _d[0], setException = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isPaused = _e[0], setIsPaused = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), quote = _f[0], setQuote = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), quoteLetters = _g[0], setQuoteLetters = _g[1];
    var timerStart = Math.floor(quoteLetters.length / 2);
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(timerStart), initialCounter = _h[0], setInitialCounter = _h[1];
    // Функция для переключения паузы
    var togglePause = function () {
        setIsPaused(!isPaused);
    };
    // Функция для генерации случайной цитаты
    var generateQuote = function () {
        var randomQuote = lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(_data_quotes_json__WEBPACK_IMPORTED_MODULE_2__);
        return randomQuote || "";
    };
    // Функция для возвращения букв цитаты без пробелов и подчеркиваний
    var returnQuoteLetters = function (quote) {
        return quote.replace(/\s/g, "").split("_").join("");
    };
    // Эффект для генерации цитаты при старте игры
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (start) {
            var newQuote = generateQuote();
            setQuote(newQuote);
            setQuoteLetters(returnQuoteLetters(newQuote));
        }
    }, [start]);
    // нажатие клавиш
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var keyDownHandler = function (event) {
            var key = event.key;
            var underscore = "_";
            var space = " ";
            console.log("Key pressed: ".concat(key)); // Логирование нажатия клавиши
            if (key !== underscore && key !== space) {
                console.log("Replacing ".concat(key, " with ").concat(underscore)); // Логирование замены символа
                // setException(exception.replace(key, underscore));
                setException(function (prevException) { return prevException.replace(key, underscore); });
            }
        };
        window.addEventListener("keydown", keyDownHandler, false);
        return function () { return window.removeEventListener("keydown", keyDownHandler, false); };
    }, [exception]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GameContext.Provider, { value: {
            start: start,
            setStart: setStart,
            victory: victory,
            setVictory: setVictory,
            exception: exception,
            setException: setException,
            initialCounter: initialCounter,
            setInitialCounter: setInitialCounter,
            isPaused: isPaused,
            togglePause: togglePause,
            quote: quote,
            generateQuote: generateQuote,
            quoteLetters: quoteLetters,
            returnQuoteLetters: returnQuoteLetters
        } }, children));
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ca108ee08d58f13f58f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e8b83473b0db47e95d73.hot-update.js.map