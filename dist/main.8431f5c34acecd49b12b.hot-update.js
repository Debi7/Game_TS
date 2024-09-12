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
/* harmony export */   useGame: () => (/* binding */ useGame)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sample */ "./node_modules/lodash/sample.js");
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_quotes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/quotes.json */ "./src/data/quotes.json");



var defaultGameContext = {
    confetti: false,
    start: undefined,
    setStart: function () { },
    victory: 0,
    setVictory: function () { },
    exception: "",
    counter: 0,
    quoteLetters: "",
    setException: function () { },
};
var GameContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultGameContext);
var GameProvider = function (_a) {
    var children = _a.children;
    var generateQuote = function () { return lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(_data_quotes_json__WEBPACK_IMPORTED_MODULE_2__); };
    var returnQuoteLetters = function (quote) { return quote.replace(/\s/g, '').split('_').join(''); };
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), confetti = _b[0], setConfetti = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), start = _c[0], setStart = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        var savedVictory = sessionStorage.getItem('victory');
        return savedVictory ? Number(savedVictory) : 0;
    }), victory = _d[0], setVictory = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateQuote), exception = _e[0], setException = _e[1];
    var quoteLetters = returnQuoteLetters(exception);
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.floor(quoteLetters.length / 2)), counter = _f[0], setCounter = _f[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var keyDownHandler = function (event) {
            var key = event.key;
            var underscore = '_';
            var space = ' ';
            if (key !== underscore && key !== space) {
                setException(function (prevException) { return prevException.replace(key, underscore); });
            }
        };
        window.addEventListener('keydown', keyDownHandler, false);
        return function () { return window.removeEventListener('keydown', keyDownHandler, false); };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = counter > 0 ? setTimeout(function () { return setCounter(counter - 1); }, 1000) : null;
        if (counter === 0) {
            setStart(false);
        }
        return function () { return clearInterval(timer); };
    }, [counter]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!quoteLetters) {
            var newQuote = generateQuote();
            setVictory(function (prevVictory) {
                var newVictory = prevVictory + 1;
                sessionStorage.setItem('victory', newVictory.toString());
                return newVictory;
            });
            setConfetti(true);
            setException(newQuote);
            setCounter(Math.floor(returnQuoteLetters(newQuote).length / 2));
            setTimeout(function () { return setConfetti(false); }, 4000);
        }
    }, [exception, quoteLetters]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (start) {
            var newQuote = generateQuote();
            setException(newQuote);
            setCounter(Math.floor(returnQuoteLetters(newQuote).length / 2));
        }
    }, [start]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GameContext.Provider, { value: {
            confetti: confetti,
            start: start,
            setStart: setStart,
            victory: victory,
            setVictory: setVictory,
            exception: exception,
            counter: counter,
            quoteLetters: quoteLetters,
            setException: setException,
        } }, children));
};
var useGame = function () { return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GameContext); };


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23f172534c6009572d1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8431f5c34acecd49b12b.hot-update.js.map