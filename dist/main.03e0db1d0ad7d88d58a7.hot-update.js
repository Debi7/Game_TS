"use strict";
self["webpackHotUpdategame_ts"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
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
  box-sizing: border-box;
  font-family: "Philosopher", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  outline: 0;
  outline-style: none;
  -webkit-tap-highlight-color: transparent;
}

#root {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--html-bg);
  height: 100%;
  width: 100%;
  overflow: hidden;
}

h1 {
  font-size: 2.5em;
  color: red;
  font-style: italic;
}

.status-text {
  text-align: center;
}

.emoji {
  font-size: 32px;
  margin-right: 8px;
  font-style: normal;
}

.section-quote {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
}

.wrapper {
  background-color: var(--wrapper-bg);
  border: 2px solid var(--black);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--black);
  padding: 20px 25px;
  position: relative;
}

.wrapper:after {
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
  flex-wrap: wrap;
}

.start-btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 121px;
}

button {
  background-color: var(--black);
  border-radius: 4px;
  border-style: none;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  min-height: 44px;
  padding: 9px 20px;
  text-align: center;
  text-transform: none;
  user-select: none;
  margin-bottom: 20px;
}

button:hover,
button:focus {
  opacity: 0.75;
}

.opacity-on {
  opacity: 1;
  transition: opacity 1s ease-out;
}

.opacity-off {
  opacity: 0;
}

.child {
  width: 100%;
  height: 100%;
}

.btnRun {
  min-height: 12px;
  padding: 4px 10px;
}

/* responsive */
@media (min-width: 1024px) {
  .emoji {
    font-size: 27px;
  }
  .timer {
    width: 100px;
    font-size: 14px;
  }
  h1 {
    font-size: 2em;
  }
  .badge {
    padding: 2px 6px;
    font-size: 14px;
  }
  button {
    font-size: 14px;
    padding: 8px 16px;
  }
}
@media (min-width: 425px) and (max-width: 1024px) {
  .emoji {
    font-size: 21px;
  }
  .timer {
    width: 80px;
    font-size: 12px;
  }
  h1 {
    font-size: 1.5em;
  }
  .badge {
    padding: 2px 4px;
    font-size: 12px;
  }
  button {
    font-size: 12px;
    padding: 6px 12px;
  }
  .info-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 425px) {
  .emoji {
    font-size: 18px;
  }
  .timer {
    width: 60px;
    font-size: 10px;
  }
  h1 {
    font-size: 1em;
  }
  .badge {
    padding: 1px 2px;
    font-size: 10px;
  }
  button {
    font-size: 10px;
    padding: 4px 8px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AACF;;AAEA;EACE,sBAAA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kCAAA;EACA,UAAA;EACA,mBAAA;EACA,wCAAA;AACF;;AAEA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gCAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,UAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,mCAAA;EACA,8BAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,8BAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,OAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,8BAAA;EACA,mCAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,8BAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,YAAA;AACF;;AAEA;EACE,8BAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;;EAEE,aAAA;AACF;;AAEA;EACE,UAAA;EACA,+BAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;AACF;;AAGA,eAAA;AACA;EACE;IACE,eAAA;EAAF;EAGA;IACE,YAAA;IACA,eAAA;EADF;EAIA;IACE,cAAA;EAFF;EAKA;IACE,gBAAA;IACA,eAAA;EAHF;EAMA;IACE,eAAA;IACA,iBAAA;EAJF;AACF;AAOA;EACE;IACE,eAAA;EALF;EAQA;IACE,WAAA;IACA,eAAA;EANF;EASA;IACE,gBAAA;EAPF;EAUA;IACE,gBAAA;IACA,eAAA;EARF;EAWA;IACE,eAAA;IACA,iBAAA;EATF;EAYA;IACE,sBAAA;IACA,uBAAA;EAVF;AACF;AAaA;EACE;IACE,eAAA;EAXF;EAcA;IACE,WAAA;IACA,eAAA;EAZF;EAeA;IACE,cAAA;EAbF;EAgBA;IACE,gBAAA;IACA,eAAA;EAdF;EAiBA;IACE,eAAA;IACA,gBAAA;EAfF;AACF","sourcesContent":[":root {\r\n  --white: #fff;\r\n  --black: #111;\r\n  --html-bg: rgb(244, 244, 244);\r\n  --wrapper-bg: #fee6e3;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: \"Philosopher\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-rendering: geometricPrecision;\r\n  outline: 0;\r\n  outline-style: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n#root {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--html-bg);\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5em;\r\n  color: red;\r\n  font-style: italic;\r\n}\r\n\r\n.status-text {\r\n  text-align: center;\r\n}\r\n\r\n.emoji {\r\n  font-size: 32px;\r\n  margin-right: 8px;\r\n  font-style: normal;\r\n}\r\n\r\n.section-quote {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  max-width: 600px;\r\n}\r\n\r\n.wrapper {\r\n  background-color: var(--wrapper-bg);\r\n  border: 2px solid var(--black);\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  color: var(--black);\r\n  padding: 20px 25px;\r\n  position: relative;\r\n}\r\n\r\n.wrapper:after {\r\n  background-color: var(--black);\r\n  border-radius: 8px;\r\n  content: \"\";\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -2px;\r\n  transform: translate(8px, 8px);\r\n  transition: transform 0.2s ease-out;\r\n  z-index: -1;\r\n}\r\n\r\n.keyboard {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.quote-letters-count {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.badge {\r\n  padding: 4px 8px;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  margin-left: 4px;\r\n  color: var(--white);\r\n  background-color: var(--black);\r\n}\r\n\r\n.info-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.start-btn-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.timer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin-top: 20px;\r\n  width: 121px;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--black);\r\n  border-radius: 4px;\r\n  border-style: none;\r\n  color: var(--white);\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  min-height: 44px;\r\n  padding: 9px 20px;\r\n  text-align: center;\r\n  text-transform: none;\r\n  user-select: none;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n  opacity: 0.75;\r\n}\r\n\r\n.opacity-on {\r\n  opacity: 1;\r\n  transition: opacity 1s ease-out;\r\n}\r\n\r\n.opacity-off {\r\n  opacity: 0;\r\n}\r\n\r\n.child {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.btnRun {\r\n  min-height: 12px;\r\n  padding: 4px 10px;\r\n}\r\n\r\n\r\n/* responsive */\r\n@media (min-width: 1024px) {\r\n  .emoji {\r\n    font-size: 27px;\r\n  }\r\n\r\n  .timer {\r\n    width: 100px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .badge {\r\n    padding: 2px 6px;\r\n    font-size: 14px;\r\n  }\r\n\r\n  button {\r\n    font-size: 14px;\r\n    padding: 8px 16px;\r\n  }\r\n}\r\n\r\n@media (min-width: 425px) and (max-width: 1024px) {\r\n  .emoji {\r\n    font-size: 21px;\r\n  }\r\n\r\n  .timer {\r\n    width: 80px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .badge {\r\n    padding: 2px 4px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  button {\r\n    font-size: 12px;\r\n    padding: 6px 12px;\r\n  }\r\n\r\n  .info-wrapper {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px) {\r\n  .emoji {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .timer {\r\n    width: 60px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 1em;\r\n  }\r\n\r\n  .badge {\r\n    padding: 1px 2px;\r\n    font-size: 10px;\r\n  }\r\n\r\n  button {\r\n    font-size: 10px;\r\n    padding: 4px 8px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fd6169d92a637ea39c23")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.03e0db1d0ad7d88d58a7.hot-update.js.map