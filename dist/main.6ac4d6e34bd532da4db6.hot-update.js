"use strict";
self["webpackHotUpdategame_ts"]("main",{

/***/ "./src/components/MobileInput/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/MobileInput/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_GameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/GameContext */ "./src/contexts/GameContext.tsx");


var MobileInput = function (_a) {
    var inputRef = _a.inputRef;
    var _b = (0,_contexts_GameContext__WEBPACK_IMPORTED_MODULE_1__.useGame)(), start = _b.start, setException = _b.setException, exception = _b.exception;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var isMobileDevice = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
        if (isMobileDevice && start && inputRef.current) {
            inputRef.current.focus();
        }
    }, [start]);
    var handleInputChange = function (event) {
        var inputText = event.target.value;
        var underscore = '_';
        var space = ' ';
        if (inputText !== underscore && inputText !== space) {
            setException(exception.replace(inputText, underscore));
        }
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { ref: inputRef, type: "text", style: {
            position: 'absolute',
            top: '1px',
            left: '1px',
            visibility: 'hidden',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: 0,
            border: 'none',
        }, onChange: handleInputChange }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileInput);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a51cad80972b74d5b2f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6ac4d6e34bd532da4db6.hot-update.js.map