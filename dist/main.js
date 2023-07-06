/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_animation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./button-animation.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/button-animation.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/less-icon.svg */ \"./src/assets/less-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_button_animation_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Lato\", sans-serif;\n  background-color: black;\n}\n\ndialog {\n  z-index: 10;\n}\n\n.app-container {\n  width: --webkit-fill-available;\n  height: 100%;\n  position: relative;\n}\n\n.weather-splash img {\n  max-width: 600px;\n}\n\n.bg-container {\n  box-sizing: border-box;\n  z-index: 2;\n  position: absolute;\n  background: linear-gradient(hsl(273, 75%, 66%), hsl(235, 62%, 73%));\n  background-color: black;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.15, 1.67, 0.52, 0.96);\n  display: grid;\n}\n.bg-container.move {\n  transform: translateY(-300px);\n}\n.bg-container.move button.move::before {\n  font-family: \"Lato\", sans-serif;\n  content: \"LESS\";\n  display: block;\n  position: absolute;\n  font-size: 1.05rem;\n  letter-spacing: 4px;\n  font-weight: 300;\n  top: 14px;\n  left: 22px;\n  color: black;\n}\n.bg-container.move button.move::after {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position-y: 2px;\n}\n\n.hidden-content {\n  box-sizing: border-box;\n  background-color: white;\n  z-index: 1;\n  position: absolute;\n  bottom: 0;\n  height: 300px;\n  width: 100%;\n  padding: 30px;\n  display: grid;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: min-content 1fr;\n  grid-template-areas: \"preference preference\" \"current forecast\";\n}\n.hidden-content .preference {\n  grid-area: preference;\n  visibility: hidden;\n}\n.hidden-content .current-grid {\n  grid-area: current;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: min-content 1fr;\n  grid-template-areas: \"title1 title2 title3 title4\" \"condition temperature feelslike wind\";\n  place-items: center;\n  place-self: center;\n  font-weight: bold;\n  padding: 5px;\n  column-gap: 30px;\n  justify-content: center;\n}\n.hidden-content .current-grid .title {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 500;\n  justify-content: center;\n}\n.hidden-content .current-grid .title1 {\n  grid-area: title1;\n}\n.hidden-content .current-grid .title2 {\n  grid-area: title2;\n}\n.hidden-content .current-grid .title3 {\n  grid-area: title3;\n}\n.hidden-content .current-grid .title4 {\n  grid-area: title4;\n}\n.hidden-content .current-grid .condition,\n.hidden-content .current-grid .temperature,\n.hidden-content .current-grid .feels-like,\n.hidden-content .current-grid .wind {\n  font-weight: 500;\n  display: grid;\n  grid-template-rows: min-content 1fr;\n  font-size: 2rem;\n}\n.hidden-content .current-grid .condition {\n  display: flex;\n  flex-direction: column;\n}\n.hidden-content .current-grid .condition .condition-name {\n  font-size: 1rem;\n  text-transform: capitalize;\n}\n.hidden-content .forecast-grid {\n  grid-area: forecast;\n  display: grid;\n  column-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: min-content 1fr;\n  grid-template-areas: \"ftitle1 ftitle2 ftitle3\" \"today tomorrow day-after\";\n  place-items: center;\n  place-self: center;\n  font-weight: bold;\n}\n.hidden-content .forecast-grid .title {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 500;\n  justify-content: center;\n}\n.hidden-content .forecast-grid .ftitle1 {\n  grid-area: ftitle1;\n}\n.hidden-content .forecast-grid .ftitle2 {\n  grid-area: ftitle2;\n}\n.hidden-content .forecast-grid .ftitle3 {\n  grid-area: ftitle3;\n}\n.hidden-content .forecast-grid .today,\n.hidden-content .forecast-grid .tomorrow,\n.hidden-content .forecast-grid .day-after-tomorrow {\n  place-self: center;\n  column-gap: 10px;\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr min-content;\n  grid-template-areas: \"img img\" \"high low\";\n}\n.hidden-content .forecast-grid .today .high,\n.hidden-content .forecast-grid .tomorrow .high,\n.hidden-content .forecast-grid .day-after-tomorrow .high {\n  color: red;\n}\n.hidden-content .forecast-grid .today img,\n.hidden-content .forecast-grid .tomorrow img,\n.hidden-content .forecast-grid .day-after-tomorrow img {\n  grid-area: img;\n}\n\n@media screen and (max-width: 480px) {\n  .bg-container {\n    grid-template-rows: 1fr 1fr min-content min-content min-content !important;\n    padding-bottom: 30px;\n  }\n  .bg-container .quote {\n    grid-area: unset;\n    grid-column: span 2;\n  }\n  .bg-container .button-container {\n    grid-area: unset;\n    grid-column: span 2;\n    margin-top: 30px;\n  }\n  .bg-container .greeting,\n  .bg-container .location {\n    font-size: 1.3rem;\n  }\n  .bg-container .time {\n    font-size: 4rem;\n  }\n  .bg-container .location {\n    grid-column: span 2;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/button-animation.scss":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/button-animation.scss ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/more-icon.svg */ \"./src/assets/more-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.button-container {\n  position: relative;\n  align-self: end;\n  justify-self: end;\n}\n\nbutton.move {\n  appearance: none;\n  background-color: rgba(255, 255, 255, 0.9);\n  color: white;\n  border: none;\n  border-radius: 30px;\n  height: 50px;\n  width: 130px;\n  cursor: pointer;\n}\n\nbutton.move::before {\n  font-family: \"Lato\", sans-serif;\n  content: \"MORE\";\n  display: block;\n  position: absolute;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  font-weight: 300;\n  top: 15px;\n  left: 20px;\n  color: black;\n}\n\nbutton.move::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  height: 40px;\n  width: 40px;\n  border-radius: 30px;\n  background-color: black;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: center;\n  background-size: contain;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/button-animation.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayUserLocation.js":
/*!************************************!*\
  !*** ./src/displayUserLocation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _locationModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationModal */ \"./src/locationModal/index.js\");\n/* harmony import */ var _assets_location_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/location-icon.svg */ \"./src/assets/location-icon.svg\");\n\n\n\nconst icon = document.createElement(\"img\");\nicon.src = _assets_location_icon_svg__WEBPACK_IMPORTED_MODULE_1__;\nconst iconContainer = document.querySelector(\".location span.icon\");\niconContainer.appendChild(icon);\n\nconst isLocationNotSet =\n  localStorage.getItem(\"madosy_weather_app.lat\") === null;\nif (isLocationNotSet) {\n  localStorage.setItem(\"madosy_weather_app.cityName\", \"Atlanta, GA\");\n  localStorage.setItem(\"madosy_weather_app.lat\", \"33.753746\");\n  localStorage.setItem(\"madosy_weather_app.lon\", \"-84.386330\");\n}\n\nconst userLocation = localStorage.getItem(\"madosy_weather_app.cityName\");\nconst userLocationContainer = document.querySelector(\n  \".location .user-location\"\n);\nuserLocationContainer.innerText = userLocation;\n\nconst location = document.querySelector(\".location\");\nlocation.addEventListener(\"click\", () => {\n  _locationModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showModal();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/displayUserLocation.js?");

/***/ }),

/***/ "./src/hiddenLayerHandler.js":
/*!***********************************!*\
  !*** ./src/hiddenLayerHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hiddenLayerHandler = (() => {\n  const myButton = document.querySelector(\"button.move\");\n  const bgLayer = document.querySelector(\"div.bg-container\");\n  myButton.onclick = () => bgLayer.classList.toggle(\"move\");\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hiddenLayerHandler);\n\n\n//# sourceURL=webpack://weather-app/./src/hiddenLayerHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _weatherModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherModule */ \"./src/weatherModule.js\");\n/* harmony import */ var _locationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationModal */ \"./src/locationModal/index.js\");\n/* harmony import */ var _hiddenLayerHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hiddenLayerHandler */ \"./src/hiddenLayerHandler.js\");\n/* harmony import */ var _weather_splash_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-splash.js */ \"./src/weather-splash.js\");\n/* harmony import */ var _displayUserLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayUserLocation */ \"./src/displayUserLocation.js\");\n\n// import clockModule from \"./clockModule\";\n// import backgroundModule from \"./backgroundModule\";\n// import quoteModule from \"./quoteModule\";\n\n\n\n\n\n\nwindow.APP_NAME = \"MADOSY_WEATHER_APP\";\n\nconst isLocationNotSet =\n  localStorage.getItem(\"madosy_weather_app.lat\") === null;\nif (isLocationNotSet) {\n  localStorage.setItem(\"madosy_weather_app.cityName\", \"Atlanta, GA\");\n  localStorage.setItem(\"madosy_weather_app.lat\", \"33.753746\");\n  localStorage.setItem(\"madosy_weather_app.lon\", \"-84.386330\");\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/locationModal/findLocation.js":
/*!*******************************************!*\
  !*** ./src/locationModal/findLocation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function findLocation(input) {\n  function checkUserInputType(input) {\n    const numRegex = /^\\d+$/;\n    const letterRegex = /^[a-zA-Z ]*$/;\n    if (input.match(numRegex)) return \"postalcode\";\n    else if (input.match(letterRegex)) return \"city\";\n    else return \"q\";\n  }\n\n  const inputType = checkUserInputType(input);\n  const queryURL = `https://geocode.maps.co/search?${inputType}={${input}}`;\n\n  const response = await fetch(queryURL);\n  const list = await response.json();\n  return list;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findLocation);\n\n\n//# sourceURL=webpack://weather-app/./src/locationModal/findLocation.js?");

/***/ }),

/***/ "./src/locationModal/getLocationInfo.js":
/*!**********************************************!*\
  !*** ./src/locationModal/getLocationInfo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getLocationInfo(lat, lon) {\n  const queryURL = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;\n  console.log(queryURL);\n  const response = await fetch(queryURL);\n  const data = await response.json();\n  return data;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocationInfo);\n\n\n//# sourceURL=webpack://weather-app/./src/locationModal/getLocationInfo.js?");

/***/ }),

/***/ "./src/locationModal/index.js":
/*!************************************!*\
  !*** ./src/locationModal/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _findLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findLocation */ \"./src/locationModal/findLocation.js\");\n/* harmony import */ var _getLocationInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocationInfo */ \"./src/locationModal/getLocationInfo.js\");\n\n\n\nconst locationModal = (() => {\n  const modal = document.body.querySelector(\"dialog.location\");\n  const button = document.body.querySelector(\"button.location\");\n  const form = document.body.querySelector(\"form\");\n  const input = form.querySelector(\"input\");\n\n  const showModal = () => modal.showModal();\n\n  button.addEventListener(\"click\", () => {\n    modal.showModal();\n  });\n\n  modal.addEventListener(\"click\", (e) => {\n    const dialogDimensions = modal.getBoundingClientRect();\n    if (\n      e.clientX < dialogDimensions.left ||\n      e.clientX > dialogDimensions.right ||\n      e.clientY < dialogDimensions.top ||\n      e.clientY > dialogDimensions.bottom\n    ) {\n      modal.close();\n    }\n  });\n\n  form.addEventListener(\"submit\", async (e) => {\n    e.preventDefault();\n\n    const userInput = modal.querySelector(\"input.location\");\n    const foundLocations = await (0,_findLocation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userInput.value);\n    const locationInfo = await (0,_getLocationInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n      foundLocations[0].lat,\n      foundLocations[0].lon\n    );\n    console.log(userInput.value);\n    console.log(foundLocations);\n    console.log(locationInfo);\n  });\n\n  return { showModal };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationModal);\n\n\n//# sourceURL=webpack://weather-app/./src/locationModal/index.js?");

/***/ }),

/***/ "./src/weather-splash.js":
/*!*******************************!*\
  !*** ./src/weather-splash.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_weather_icon_thunderstorm_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/weather-icon/thunderstorm.png */ \"./src/assets/weather-icon/thunderstorm.png\");\n\nconst weatherSplash = document.querySelector(\".weather-splash\");\n\nconst weatherIcon = document.createElement(\"img\");\nweatherIcon.src = _assets_weather_icon_thunderstorm_png__WEBPACK_IMPORTED_MODULE_0__;\nweatherSplash.appendChild(weatherIcon);\n\n\n//# sourceURL=webpack://weather-app/./src/weather-splash.js?");

/***/ }),

/***/ "./src/weatherModule.js":
/*!******************************!*\
  !*** ./src/weatherModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherModule = (() => {\n  async function getWeatherData(lat, lon) {\n    const myQuery = `https://api.weatherapi.com/v1/forecast.json?key=9fcbba83339a4ddd85a00447232405&q=${lat},${lon}&days=3&aqi=no&alerts=no`;\n    const response = await fetch(myQuery);\n    const weatherData = await response.json();\n    return weatherData;\n  }\n\n  async function updateWeatherData() {\n    const lat = localStorage.getItem(\"madosy_weather_app.lat\");\n    const lon = localStorage.getItem(\"madosy_weather_app.lon\");\n    const weatherData = await getWeatherData(lat, lon);\n    updateSplash(weatherData);\n    updateCurrentWeather(weatherData);\n    updateForecast(weatherData);\n    console.log(weatherData);\n  }\n\n  function updateSplash(weatherData) {\n    const temperature = weatherData.current.temp_f;\n    const weatherDataContainer = document.querySelector(\".temperature .data\");\n    weatherDataContainer.innerText = Math.round(temperature);\n    const date = weatherData.location.localtime;\n    const dateContainer = document.querySelector(\".location .date\");\n    dateContainer.innerText = `Today is ${date}`; //use moment.js timezone to format it properly\n  }\n\n  updateWeatherData();\n\n  function displayCurrentWeatherIcon(weatherData) {\n    const iconSrc = weatherData.current.condition.icon;\n    const conditionIcon = document.body.querySelector(\".condition-icon\");\n    conditionIcon.style.backgroundImage = `url(${iconSrc})`;\n  }\n\n  function updateCurrentWeather(weatherData) {\n    const currentGrid = document.body.querySelector(\".current-grid\");\n    const conditionIcon = currentGrid.querySelector(\".condition-icon\");\n    const conditionName = currentGrid.querySelector(\".condition-name\");\n    const temp = currentGrid.querySelector(\".temperature > .data\");\n    const feelsLikeTemp = currentGrid.querySelector(\".feels-like > .data\");\n    const wind = currentGrid.querySelector(\".wind\");\n    conditionIcon.src = weatherData.current.condition.icon;\n    conditionName.innerText = weatherData.current.condition.text;\n    temp.innerText = weatherData.current.temp_f;\n    feelsLikeTemp.innerText = weatherData.current.feelslike_f;\n    wind.innerText = `${weatherData.current.wind_mph} mph`;\n  }\n\n  function updateForecast(weatherData) {\n    const todayForecast = weatherData.forecast.forecastday[0];\n    const tomorrowForecast = weatherData.forecast.forecastday[1];\n    const dayAfterTomorrowForecast = weatherData.forecast.forecastday[2];\n\n    const forecastGrid = document.body.querySelector(\".forecast-grid\");\n    const todayIcon = forecastGrid.querySelector(\".today > .icon\");\n    const todayHigh = forecastGrid.querySelector(\".today > .high\");\n    const todayLow = forecastGrid.querySelector(\".today > .low\");\n    const tomorrowIcon = forecastGrid.querySelector(\".tomorrow > .icon\");\n    const tomorrowHigh = forecastGrid.querySelector(\".tomorrow > .high\");\n    const tomorrowLow = forecastGrid.querySelector(\".tomorrow > .low\");\n    todayIcon.src = todayForecast.day.condition.icon;\n    todayHigh.innerText = todayForecast.day.maxtemp_f;\n    todayLow.innerText = todayForecast.day.mintemp_f;\n    tomorrowIcon.src = tomorrowForecast.day.condition.icon;\n    tomorrowHigh.innerText = tomorrowForecast.day.maxtemp_f;\n    tomorrowLow.innerText = tomorrowForecast.day.mintemp_f;\n    const dayAfterTomorrowIcon = forecastGrid.querySelector(\n      \".day-after-tomorrow > .icon\"\n    );\n    const dayAfterTomorrowHigh = forecastGrid.querySelector(\n      \".day-after-tomorrow > .high\"\n    );\n    const dayAfterTomorrowLow = forecastGrid.querySelector(\n      \".day-after-tomorrow > .low\"\n    );\n    dayAfterTomorrowIcon.src = dayAfterTomorrowForecast.day.condition.icon;\n    dayAfterTomorrowHigh.innerText = dayAfterTomorrowForecast.day.maxtemp_f;\n    dayAfterTomorrowLow.innerText = dayAfterTomorrowForecast.day.mintemp_f;\n  }\n\n  async function displayWeatherData() {\n    const lat = localStorage.getItem(\"madosy_weather_app.lat\");\n    const lon = localStorage.getItem(\"madosy_weather_app.lon\");\n    const weatherData = await getWeatherData(lat, lon);\n    displayCurrentWeatherIcon(weatherData);\n    updateCurrentWeather(weatherData);\n    updateForecast(weatherData);\n    console.log(weatherData);\n  }\n\n  return { updateWeatherData };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherModule);\n\n\n//# sourceURL=webpack://weather-app/./src/weatherModule.js?");

/***/ }),

/***/ "./src/assets/less-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/less-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b86b194394bbf7ea3384.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/less-icon.svg?");

/***/ }),

/***/ "./src/assets/location-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/location-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32d28bdcdb8c58481727.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/location-icon.svg?");

/***/ }),

/***/ "./src/assets/more-icon.svg":
/*!**********************************!*\
  !*** ./src/assets/more-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91b4f5988df2059b8283.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/more-icon.svg?");

/***/ }),

/***/ "./src/assets/weather-icon/thunderstorm.png":
/*!**************************************************!*\
  !*** ./src/assets/weather-icon/thunderstorm.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dafb5fe773d286af4ef9.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/weather-icon/thunderstorm.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;