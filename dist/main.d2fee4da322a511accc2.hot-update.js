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
    initialCounter: 0,
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
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), initialCounter = _h[0], setInitialCounter = _h[1];
    var _j = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), confetti = _j[0], setConfetti = _j[1];
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
            var letters = returnQuoteLetters(newQuote);
            setQuote(newQuote);
            setQuoteLetters(letters);
            setInitialCounter(Math.floor(letters.length / 2)); // Установка начального значения таймера
            setException(""); // Сбрасываем исключения
            setVictory(0); // Сбрасываем победу
        }
    }, [start]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!quoteLetters) {
            var newQuote = generateQuote();
            var letters = returnQuoteLetters(newQuote);
            setQuote(newQuote);
            setQuoteLetters(letters);
            setInitialCounter(Math.floor(letters.length / 2)); // Установка начального значения таймера
            setException(newQuote); // Устанавливаем исключения равными новой цитате
            setVictory(victory + 1);
            setConfetti(true);
            setTimeout(function () { return setConfetti(false); }, 4000);
        }
    }, [victory, confetti]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var isGameWon = quoteLetters.split('').every(function (letter) { return exception.includes(letter); });
        if (isGameWon) {
            setVictory(function (prevVictory) { return prevVictory + 1; });
            setConfetti(true);
            setTimeout(function () { return setConfetti(false); }, 4000);
        }
    }, [exception, quoteLetters]);
    // нажатие клавиш
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var keyDownHandler = function (event) {
            var key = event.key;
            var underscore = "_";
            var space = " ";
            // Игнорируем клавиши "_", пробел и уже удаленные символы
            if (key === underscore || key === space || exception.includes(key)) {
                return;
            }
            // Создаем новую строку без текущего символа и обновляем исключение
            var updatedException = exception + key;
            setException(updatedException);
            // Проверяем, если все символы удалены, то вызываем победу
            if (quoteLetters.split('').every(function (letter) { return updatedException.includes(letter); })) {
                setVictory(function (prevVictory) { return prevVictory + 1; });
                setConfetti(true);
                setTimeout(function () { return setConfetti(false); }, 4000);
            }
            // Уменьшаем счетчик таймера на единицу
            setInitialCounter(function (prevCounter) { return prevCounter - 1; });
        };
        window.addEventListener("keydown", keyDownHandler);
        return function () {
            window.removeEventListener("keydown", keyDownHandler);
        };
    }, [exception, quoteLetters]);
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
            returnQuoteLetters: returnQuoteLetters,
        } }, children));
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12b70ba61b53b6998ad0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d2fee4da322a511accc2.hot-update.js.map