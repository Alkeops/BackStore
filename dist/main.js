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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nvar _services_1 = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\nvar Service = new _services_1.ProductosServices();\nvar productoController = {\n    all: function (req, res) {\n        res.status(200);\n        res.json(Service.all());\n    },\n    byId: function (req, res) {\n        var item = Service.byId(req.params.id);\n        res.status(item ? 200 : 404).json(item || \"No Encontrado\");\n    },\n    create: function (req, res) {\n        var _a = req.body, price = _a.price, name = _a.name, description = _a.description, stock = _a.stock, code = _a.code, thumbnail = _a.thumbnail;\n        var newProduct = {\n            price: price,\n            name: name,\n            description: description,\n            stock: stock,\n            code: code,\n            thumbnail: thumbnail,\n            id: uuid_1.v4(),\n            timestamp: +new Date(),\n        };\n        Service.post(newProduct);\n        res.status(201).json(newProduct);\n    },\n    update: function (req, res) {\n        var id = req.params.id;\n        var object = req.body;\n        var elementUpdated = Service.update(id, object);\n        res.status(202).json(elementUpdated);\n    },\n    remove: function (req, res) {\n        Service.delete(req.params.id);\n        res.status(200).json(\"Borrado\");\n    },\n};\nexports.default = productoController;\n\n\n//# sourceURL=webpack://back/./src/controllers/producto.controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverHttp = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar _routes_1 = __importDefault(__webpack_require__(/*! @routes */ \"./src/routes/index.ts\"));\nvar app = express_1.default();\nexports.serverHttp = http_1.default.createServer(app); //Socket Io\napp.use(express_1.default.json());\napp.use(_routes_1.default);\nvar PORT = 8080;\nvar HOST = \"127.0.0.1\";\nvar server = exports.serverHttp.listen(PORT, HOST, function () {\n    return console.log(\"Server running in \" + HOST + \":\" + PORT);\n});\nserver.on(\"error\", function (error) { return console.log(\"Error \" + error); });\n\n\n//# sourceURL=webpack://back/./src/index.ts?");

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateProducto = void 0;\nvar producto_validate_1 = __webpack_require__(/*! ./producto.validate */ \"./src/middlewares/producto.validate.ts\");\nObject.defineProperty(exports, \"validateProducto\", ({ enumerable: true, get: function () { return producto_validate_1.validateProducto; } }));\n\n\n//# sourceURL=webpack://back/./src/middlewares/index.ts?");

/***/ }),

/***/ "./src/middlewares/producto.validate.ts":
/*!**********************************************!*\
  !*** ./src/middlewares/producto.validate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateProducto = void 0;\nvar initialData = {\n    price: 0,\n    thumbnail: \"\",\n    name: \"\",\n    description: \"\",\n    stock: 0,\n    code: \"\",\n};\nvar validateProducto = {\n    dataUpdate: function (req, res, next) {\n        var parameters = req.body;\n        Object.keys(parameters).map(function (element) {\n            if (!initialData.hasOwnProperty(element)) {\n                res\n                    .status(400)\n                    .json(\"[ \" + element.toUpperCase() + \" ] no es una propiedad valida\");\n                return next(\"[ \" + element.toUpperCase() + \" ] no es una propiedad valida\");\n            }\n        });\n        return next();\n    },\n};\nexports.validateProducto = validateProducto;\n\n\n//# sourceURL=webpack://back/./src/middlewares/producto.validate.ts?");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar _controllers_1 = __webpack_require__(/*! @controllers */ \"./src/controllers/index.ts\");\nvar _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\nvar productoRouter = express_1.Router();\nproductoRouter\n    .get(\"/\", _controllers_1.productoController.all)\n    .get(\"/:id\", _controllers_1.productoController.byId)\n    .post(\"/\", _controllers_1.productoController.create)\n    .patch(\"/:id\", _middlewares_1.validateProducto.dataUpdate, _controllers_1.productoController.update)\n    .delete(\"/:id\", _controllers_1.productoController.remove);\nexports.default = productoRouter;\n\n\n//# sourceURL=webpack://back/./src/routes/producto.routes.ts?");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductosServices = void 0;\nvar producto_services_1 = __webpack_require__(/*! ./producto.services */ \"./src/services/producto.services.ts\");\nObject.defineProperty(exports, \"ProductosServices\", ({ enumerable: true, get: function () { return producto_services_1.ProductosServices; } }));\n\n\n//# sourceURL=webpack://back/./src/services/index.ts?");

/***/ }),

/***/ "./src/services/producto.services.ts":
/*!*******************************************!*\
  !*** ./src/services/producto.services.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductosServices = void 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar DIRFOLDER = __dirname + \"/productos.txt\";\nif (!fs.existsSync(DIRFOLDER))\n    fs.writeFileSync(DIRFOLDER, JSON.stringify([]));\n//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.\nvar ProductosServices = /** @class */ (function () {\n    function ProductosServices() {\n        var _this = this;\n        this.init = function () {\n            //Inicializa y llena el array del state con el archivo txt\n            var read = fs.readFileSync(DIRFOLDER);\n            var data = JSON.parse(read);\n            return (_this.state = data);\n        };\n        //Devuelve todo lo que halla en el array\n        this.all = function () { return _this.state; };\n        //Metodo repetido para la clase abstracta**\n        this.byId = function (id) { return _this.state.find(function (element) { return element.id === id; }); };\n        this.post = function (producto) {\n            //Post de un nuevo Producto con la interface Producto\n            _this.state.push(producto);\n            return _this.rewriteFile();\n        };\n        //Metodo repetido para clase abstracta**\n        this.delete = function (id) {\n            _this.state = _this.state.filter(function (element) { return element.id !== id; });\n            return _this.rewriteFile();\n        };\n        this.update = function (id, data) {\n            /* Usa el metodo para traer el elemento preciso con el ID y se clona en una nueva variable, esto porque la asignacion simple solo guarda la referencia\n            del objeto pero no el objeto en si */\n            var element = Object.assign({}, _this.byId(id));\n            //Elimina el elemento del archivo\n            _this.delete(id);\n            //Agrega el viejo elemento y lo que sean los datos que vienen de la data\n            var elementUpdated = __assign(__assign({}, element), data);\n            _this.post(elementUpdated);\n            //Cuando sea una base de datos y no un archivo se puede actualizar directamente el producto sin eliminarlo del array, por ahora no tiene sentido hacer dos procesos\n            return elementUpdated;\n        };\n        this.rewriteFile = function () {\n            fs.writeFileSync(DIRFOLDER, JSON.stringify(_this.state));\n        };\n        this.state = [];\n        this.init();\n    }\n    return ProductosServices;\n}());\nexports.ProductosServices = ProductosServices;\n\n\n//# sourceURL=webpack://back/./src/services/producto.services.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");;

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