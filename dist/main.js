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

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.productoController = void 0;\nvar producto_controller_1 = __importDefault(__webpack_require__(/*! ./producto.controller */ \"./src/controllers/producto.controller.ts\"));\nexports.productoController = producto_controller_1.default;\n\n\n//# sourceURL=webpack://back/./src/controllers/index.ts?");

/***/ }),

/***/ "./src/controllers/producto.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/producto.controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar productoController = {\n    all: function (req, res) {\n        res.json(\"Hola\");\n    },\n    byId: function (req, res) {\n        res.json(\"Id\");\n    },\n    create: function (req, res) {\n        res.json(\"create\");\n    },\n    update: function (req, res) {\n        res.json(\"update\");\n    },\n    remove: function (req, res) {\n        res.json(\"remove\");\n    },\n};\nexports.default = productoController;\n\n\n//# sourceURL=webpack://back/./src/controllers/producto.controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverHttp = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar _routes_1 = __importDefault(__webpack_require__(/*! @routes */ \"./src/routes/index.ts\"));\nvar app = express_1.default();\nexports.serverHttp = http_1.default.createServer(app); //Socket Io\napp.use(express_1.default.json());\napp.use(_routes_1.default);\nvar PORT = 8080;\nvar HOST = \"127.0.0.1\";\nvar server = exports.serverHttp.listen(PORT, HOST, function () {\n    return console.log(\"Server running in \" + HOST + \":\" + PORT);\n});\nserver.on(\"error\", function (error) { return console.log(\"Error \" + error); });\n\n\n//# sourceURL=webpack://back/./src/index.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar producto_routes_1 = __importDefault(__webpack_require__(/*! ./producto.routes */ \"./src/routes/producto.routes.ts\"));\nvar routes = express_1.Router();\nroutes.use(\"/productos\", producto_routes_1.default);\nexports.default = routes;\n\n\n//# sourceURL=webpack://back/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/producto.routes.ts":
/*!***************************************!*\
  !*** ./src/routes/producto.routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar _controllers_1 = __webpack_require__(/*! @controllers */ \"./src/controllers/index.ts\");\nvar productoRouter = express_1.Router();\nproductoRouter\n    .get(\"/\", _controllers_1.productoController.all)\n    .get(\"/:id\", _controllers_1.productoController.byId)\n    .post(\"/\", _controllers_1.productoController.create)\n    .patch(\"/:id\", _controllers_1.productoController.update)\n    .delete(\"/:id\", _controllers_1.productoController.remove);\nexports.default = productoRouter;\n\n\n//# sourceURL=webpack://back/./src/routes/producto.routes.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;