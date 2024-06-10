"use strict";
self["webpackHotUpdategame_ts"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/index.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/index.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --white: #fff;
  --black: #111;
  --html-bg: rgb(244, 244, 244);
  --wrapper-bg: #fee6e3;
}

* {
  font-family: "Philosopher", sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  outline: 0;
  -moz-outline-style: none;
  -webkit-tap-highlight-color: transparent;
}

body,
html {
  background-color: var(--html-bg);
  height: 100%;
  overflow: hidden;
}

h1 {
  font-size: 2.5em;
  color: red;
  font-style: italic;
}

.section-quote {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wrapper {
  background-color: var(--wrapper-bg);
  border: 2px solid var(--black);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--black);
  max-width: 100%;
  padding: 0 25px;
  position: relative;
}
.wrapper undefined:after {
  background-color: var(--black);
  border-radius: 8px;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform 0.2s ease-out;
  z-index: -1;
}

.keyboard {
  display: flex;
  justify-content: center;
  align-items: center;
}

.quote-letters-count {
  margin-bottom: 20px;
}

.badge {
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
  margin-left: 4px;
  color: var(--white);
  background-color: var(--black);
}

.info-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.start-btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer {
  margin-top: 20px;
}

button {
  background-color: var(--black);
  border-radius: 4px;
  border-style: none;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  margin-bottom: 20px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
}
button undefined:hover,
button undefined:focus {
  opacity: 0.75;
}

.opacity-on {
  opacity: 1;
  transition: opacity 1s ease-out;
}

.opacity-off {
  opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/index.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AACF;;AAEA;EACE,sCAAA;EACA,sBAAA;EACA,mCAAA;EACA,kCAAA;EACA,kCAAA;EACA,UAAA;EACA,wBAAA;EACA,wCAAA;AACF;;AAEA;;EAEE,gCAAA;EACA,YAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,UAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AACF;;AAEA;EACE,mCAAA;EACA,8BAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;AACF;AACE;EACE,8BAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,OAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,8BAAA;EACA,mCAAA;EACA,WAAA;AACJ;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,8BAAA;AAAF;;AAGA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;EACE,8BAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;AAAF;AAEE;;EAEE,aAAA;AAAJ;;AAIA;EACE,UAAA;EACA,+BAAA;AADF;;AAIA;EACE,UAAA;AADF","sourcesContent":[":root {\r\n  --white: #fff;\r\n  --black: #111;\r\n  --html-bg: rgb(244, 244, 244);\r\n  --wrapper-bg: #fee6e3;\r\n}\r\n\r\n* {\r\n  font-family: \"Philosopher\", sans-serif;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-rendering: geometricPrecision;\r\n  outline: 0;\r\n  -moz-outline-style: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  background-color: var(--html-bg);\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5em;\r\n  color: red;\r\n  font-style: italic;\r\n}\r\n\r\n.section-quote {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.wrapper {\r\n  background-color: var(--wrapper-bg);\r\n  border: 2px solid var(--black);\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  color: var(--black);\r\n  max-width: 100%;\r\n  padding: 0 25px;\r\n  position: relative;\r\n\r\n  undefined:after {\r\n    background-color: var(--black);\r\n    border-radius: 8px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 100%;\r\n    left: 0;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: -2px;\r\n    transform: translate(8px, 8px);\r\n    transition: transform 0.2s ease-out;\r\n    z-index: -1;\r\n  }\r\n}\r\n\r\n.keyboard {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.quote-letters-count {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.badge {\r\n  padding: 4px 8px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  margin-left: 4px;\r\n  color: var(--white);\r\n  background-color: var(--black);\r\n}\r\n\r\n.info-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.start-btn-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.timer {\r\n  margin-top: 20px;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--black);\r\n  border-radius: 4px;\r\n  border-style: none;\r\n  color: var(--white);\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  max-width: none;\r\n  min-height: 44px;\r\n  min-width: 10px;\r\n  margin-bottom: 20px;\r\n  outline: none;\r\n  overflow: hidden;\r\n  padding: 9px 20px 8px;\r\n  position: relative;\r\n  text-align: center;\r\n  text-transform: none;\r\n  user-select: none;\r\n\r\n  undefined:hover,\r\n  undefined:focus {\r\n    opacity: 0.75;\r\n  }\r\n}\r\n\r\n.opacity-on {\r\n  opacity: 1;\r\n  transition: opacity 1s ease-out;\r\n}\r\n\r\n.opacity-off {\r\n  opacity: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("967a8a59550f54e8140f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1deb91dd73f0c8fbc82e.hot-update.js.map