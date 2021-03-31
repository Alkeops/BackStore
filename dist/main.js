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

/***/ "./src/config/enviroment.conf.ts":
/*!***************************************!*\
  !*** ./src/config/enviroment.conf.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MONGODB_GLOBAL_DB = exports.MONGODB_GLOBAL_URI = exports.MONGODB_GLOBAL_USER = exports.MONGODB_GLOBAL_PASS = void 0;\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nvar MONGODB_GLOBAL_PORT = process.env.MONGODB_PORT || \"27017\";\nvar MONGODB_GLOBAL_URI = process.env.MONGODB_URI || \"mongodb://127.0.0.1:\" + MONGODB_GLOBAL_PORT;\nexports.MONGODB_GLOBAL_URI = MONGODB_GLOBAL_URI;\nvar MONGODB_GLOBAL_USER = process.env.MONGODB_USER || \"\";\nexports.MONGODB_GLOBAL_USER = MONGODB_GLOBAL_USER;\nvar MONGODB_GLOBAL_PASS = process.env.MONGODB_PASS || \"\";\nexports.MONGODB_GLOBAL_PASS = MONGODB_GLOBAL_PASS;\nvar MONGODB_GLOBAL_DB = process.env.MONGODB_DB || \"back-store\";\nexports.MONGODB_GLOBAL_DB = MONGODB_GLOBAL_DB;\n\n\n//# sourceURL=webpack://back/./src/config/enviroment.conf.ts?");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mongoInit = void 0;\nvar mongoose_conf_1 = __webpack_require__(/*! ./mongoose.conf */ \"./src/config/mongoose.conf.ts\");\nObject.defineProperty(exports, \"mongoInit\", ({ enumerable: true, get: function () { return mongoose_conf_1.mongoInit; } }));\n\n\n//# sourceURL=webpack://back/./src/config/index.ts?");

/***/ }),

/***/ "./src/config/mongoose.conf.ts":
/*!*************************************!*\
  !*** ./src/config/mongoose.conf.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mongoInit = void 0;\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar enviroment_conf_1 = __webpack_require__(/*! @config/enviroment.conf */ \"./src/config/enviroment.conf.ts\");\nvar mongoInit = mongoose.connect(enviroment_conf_1.MONGODB_GLOBAL_URI, {\n    autoIndex: true,\n    useCreateIndex: true,\n    useNewUrlParser: true,\n    useFindAndModify: false,\n    useUnifiedTopology: true,\n    dbName: enviroment_conf_1.MONGODB_GLOBAL_DB,\n    user: enviroment_conf_1.MONGODB_GLOBAL_USER,\n    pass: enviroment_conf_1.MONGODB_GLOBAL_PASS,\n}, function (error) {\n    if (error)\n        return console.log(error);\n    console.log(\"Connected\");\n});\nexports.mongoInit = mongoInit;\n\n\n//# sourceURL=webpack://back/./src/config/mongoose.conf.ts?");

/***/ }),

/***/ "./src/controllers/carrito.controller.ts":
/*!***********************************************!*\
  !*** ./src/controllers/carrito.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar _services_1 = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nvar Service = new _services_1.CarritoServices();\nvar carritoController = {\n    all: function (req, res) {\n        var response = Service.all();\n        res.status(response.status.code).json(response);\n    },\n    byId: function (req, res) {\n        var response = Service.byId(req.params.id);\n        res.status(response.status.code).json(response);\n    },\n    create: function (req, res) {\n        var response = Service.post(__assign(__assign({}, req.body), { id: uuid_1.v4(), timestamp: +new Date() }));\n        res.status(response.status.code).json(response);\n    },\n    remove: function (req, res) {\n        var response = Service.delete(req.params.id);\n        res.status(response.status.code).json(response);\n    },\n};\nexports.default = carritoController;\n\n\n//# sourceURL=webpack://back/./src/controllers/carrito.controller.ts?");

/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.carritoController = exports.productoController = void 0;\nvar producto_controller_1 = __webpack_require__(/*! ./producto.controller */ \"./src/controllers/producto.controller.ts\");\nObject.defineProperty(exports, \"productoController\", ({ enumerable: true, get: function () { return producto_controller_1.productoController; } }));\nvar carrito_controller_1 = __importDefault(__webpack_require__(/*! ./carrito.controller */ \"./src/controllers/carrito.controller.ts\"));\nexports.carritoController = carrito_controller_1.default;\n\n\n//# sourceURL=webpack://back/./src/controllers/index.ts?");

/***/ }),

/***/ "./src/controllers/producto.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/producto.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.productoController = void 0;\nvar _services_1 = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\nvar Service = new _services_1.ProductosServices();\nvar productoController = {\n    all: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.all()];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    byId: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.byId(req.params.id)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    create: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.post(req.body)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    update: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.update(req.params.id, req.body)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    remove: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.delete(req.params.id)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n};\nexports.productoController = productoController;\n\n\n//# sourceURL=webpack://back/./src/controllers/producto.controller.ts?");

/***/ }),

/***/ "./src/databases/models/index.ts":
/*!***************************************!*\
  !*** ./src/databases/models/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductoModel = void 0;\nvar producto_model_1 = __webpack_require__(/*! ./producto.model */ \"./src/databases/models/producto.model.ts\");\nObject.defineProperty(exports, \"ProductoModel\", ({ enumerable: true, get: function () { return producto_model_1.ProductoModel; } }));\nvar models = {\n    ProductoModel: producto_model_1.ProductoModel,\n};\nexports.default = models;\n\n\n//# sourceURL=webpack://back/./src/databases/models/index.ts?");

/***/ }),

/***/ "./src/databases/models/producto.model.ts":
/*!************************************************!*\
  !*** ./src/databases/models/producto.model.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductoModel = void 0;\nvar mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar productoSchema = new mongoose_1.Schema({\n    name: {\n        type: String,\n        required: true,\n        index: true,\n        unique: true,\n        default: null,\n    },\n    price: {\n        type: Number,\n        required: true,\n        default: null,\n    },\n    thumbnail: {\n        type: String,\n        required: false,\n        default: null,\n    },\n    description: {\n        type: String,\n        required: false,\n        default: null,\n    },\n    stock: { type: Number, required: true, default: null },\n    code: {\n        type: String,\n        required: true,\n        unique: true,\n        default: function () { return \"CODE-\" + Date.now(); },\n    },\n}, {\n    timestamps: true,\n});\nexports.ProductoModel = mongoose_1.default.model(\"Producto\", productoSchema, \"Producto\");\n\n\n//# sourceURL=webpack://back/./src/databases/models/producto.model.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverHttp = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar _routes_1 = __importDefault(__webpack_require__(/*! @routes */ \"./src/routes/index.ts\"));\nvar _config_1 = __webpack_require__(/*! @config */ \"./src/config/index.ts\");\nvar app = express_1.default();\nvar mongoInits = _config_1.mongoInit;\nexports.serverHttp = http_1.default.createServer(app); //Socket Io\napp.use(express_1.default.json());\napp.use(_routes_1.default);\nvar PORT = 8080;\nvar HOST = \"127.0.0.1\";\nvar server = exports.serverHttp.listen(PORT, HOST, function () {\n    return console.log(\"Server running in \" + HOST + \":\" + PORT);\n});\nserver.on(\"error\", function (error) { return console.log(\"Error \" + error); });\n\n\n//# sourceURL=webpack://back/./src/index.ts?");

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateUser = exports.validateProducto = void 0;\nvar producto_validate_1 = __webpack_require__(/*! ./producto.validate */ \"./src/middlewares/producto.validate.ts\");\nObject.defineProperty(exports, \"validateProducto\", ({ enumerable: true, get: function () { return producto_validate_1.validateProducto; } }));\nvar user_validate_1 = __webpack_require__(/*! ./user.validate */ \"./src/middlewares/user.validate.ts\");\nObject.defineProperty(exports, \"validateUser\", ({ enumerable: true, get: function () { return user_validate_1.validateUser; } }));\n\n\n//# sourceURL=webpack://back/./src/middlewares/index.ts?");

/***/ }),

/***/ "./src/middlewares/producto.validate.ts":
/*!**********************************************!*\
  !*** ./src/middlewares/producto.validate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateProducto = void 0;\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar initialData = {\n    price: 0,\n    thumbnail: \"\",\n    name: \"\",\n    description: \"\",\n    stock: 0,\n    code: \"\",\n};\nvar validateKeys = function (parameters, res, next) {\n    var arrayError = [];\n    Object.keys(parameters).map(function (element) {\n        if (!initialData.hasOwnProperty(element)) {\n            arrayError.push(element);\n        }\n    });\n    if (arrayError.length) {\n        var response = _utils_1.returnForApiProductos(400, \"[ \" + arrayError.join(\" || \").toUpperCase() + \" ] no \" + (arrayError.length > 1 ? \"son\" : \"es\") + \" una propiedad valida\", []);\n        res.status(response.status.code).json(response);\n        return next(JSON.stringify(response));\n    }\n    return;\n};\nvar validateProducto = {\n    dataUpdate: function (req, res, next) {\n        var parameters = req.body;\n        /* Valida si las las keys mandadas en el json existen en el \"schema\" producto, si no existen se responde con la llave que no coincide.*/\n        validateKeys(parameters, res, next);\n        return next();\n    },\n    dataCreated: function (req, res, next) {\n        var parameters = req.body;\n        if (Object.keys(parameters).length !== Object.keys(initialData).length) {\n            var response = _utils_1.returnForApiProductos(400, \"Faltan datos para crear el Producto\", []);\n            res.status(response.status.code).json(response);\n            return next(JSON.stringify(response));\n        }\n        validateKeys(parameters, res, next);\n        return next();\n    },\n};\nexports.validateProducto = validateProducto;\n\n\n//# sourceURL=webpack://back/./src/middlewares/producto.validate.ts?");

/***/ }),

/***/ "./src/middlewares/user.validate.ts":
/*!******************************************!*\
  !*** ./src/middlewares/user.validate.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateUser = void 0;\nvar validateUser = {\n    isAdmin: function (req, res, next) {\n        var baseUrl = req.baseUrl, apiKey = req.query.apiKey, methods = req.route.methods;\n        if (apiKey !== \"admin\") {\n            res.status(401).json({\n                error: -1,\n                description: \"ruta [ \" + baseUrl + \" ] m\\u00E9todo [ \" + Object.keys(methods)[0].toUpperCase() + \" ] no autorizado\",\n            });\n            next(\"Unauthorized\");\n        }\n        next();\n    },\n};\nexports.validateUser = validateUser;\n\n\n//# sourceURL=webpack://back/./src/middlewares/user.validate.ts?");

/***/ }),

/***/ "./src/routes/carrito.routes.ts":
/*!**************************************!*\
  !*** ./src/routes/carrito.routes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar _controllers_1 = __webpack_require__(/*! @controllers */ \"./src/controllers/index.ts\");\nvar carritoRouter = express_1.Router();\ncarritoRouter\n    .get(\"/\", _controllers_1.carritoController.all)\n    .get(\"/:id\", _controllers_1.carritoController.byId)\n    .post(\"/\", _controllers_1.carritoController.create)\n    .delete(\"/:id\", _controllers_1.carritoController.remove);\nexports.default = carritoRouter;\n\n\n//# sourceURL=webpack://back/./src/routes/carrito.routes.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar producto_routes_1 = __importDefault(__webpack_require__(/*! ./producto.routes */ \"./src/routes/producto.routes.ts\"));\nvar carrito_routes_1 = __importDefault(__webpack_require__(/*! ./carrito.routes */ \"./src/routes/carrito.routes.ts\"));\nvar routes = express_1.Router();\nroutes.use(\"/productos\", producto_routes_1.default);\nroutes.use(\"/carrito\", carrito_routes_1.default);\nexports.default = routes;\n\n\n//# sourceURL=webpack://back/./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/producto.routes.ts":
/*!***************************************!*\
  !*** ./src/routes/producto.routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar _controllers_1 = __webpack_require__(/*! @controllers */ \"./src/controllers/index.ts\");\nvar _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\nvar productoRouter = express_1.Router();\nproductoRouter\n    .get(\"/\", _controllers_1.productoController.all)\n    .get(\"/:id\", _controllers_1.productoController.byId)\n    .post(\"/\", _middlewares_1.validateUser.isAdmin, _middlewares_1.validateProducto.dataCreated, _controllers_1.productoController.create)\n    .patch(\"/:id\", _middlewares_1.validateUser.isAdmin, _middlewares_1.validateProducto.dataUpdate, _controllers_1.productoController.update)\n    .delete(\"/:id\", _middlewares_1.validateUser.isAdmin, _controllers_1.productoController.remove);\nexports.default = productoRouter;\n\n\n//# sourceURL=webpack://back/./src/routes/producto.routes.ts?");

/***/ }),

/***/ "./src/services/carrito.services.ts":
/*!******************************************!*\
  !*** ./src/services/carrito.services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CarritoServices = void 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar DIRFOLDER = __dirname + \"/carrito.txt\";\nvar initialState = {\n    idCarrito: \"H1N1\",\n    producto: [],\n};\nif (!fs.existsSync(DIRFOLDER))\n    fs.writeFileSync(DIRFOLDER, JSON.stringify(initialState));\n//Practicamente lo mismo que la clase ProductosServices\nvar CarritoServices = /** @class */ (function () {\n    function CarritoServices() {\n        var _this = this;\n        this.init = function () {\n            var read = fs.readFileSync(DIRFOLDER);\n            var data = JSON.parse(read);\n            return (_this.state = data);\n        };\n        this.all = function () {\n            return _utils_1.returnForApiCarrito(200, \"All Ok\", _this.state);\n        };\n        this.byId = function (id) {\n            var element = _this.state.producto.find(function (element) { return element.id === id; });\n            if (!element)\n                return _utils_1.returnForApiCarrito(404, \"Not Found\", []);\n            return _utils_1.returnForApiCarrito(200, \"All clear\", [element]);\n        };\n        this.post = function (producto) {\n            _this.state.producto.push(producto);\n            _this.rewriteFile();\n            return _utils_1.returnForApiCarrito(201, \"Producto Agregado al carrito\", [producto]);\n        };\n        this.delete = function (id) {\n            _this.state.producto = _this.state.producto.filter(function (element) { return element.id !== id; });\n            _this.rewriteFile();\n            console.log(_this.state);\n            return _utils_1.returnForApiCarrito(200, \"Elemento borrado del carrito\", []);\n        };\n        this.rewriteFile = function () {\n            fs.writeFileSync(DIRFOLDER, JSON.stringify(_this.state));\n        };\n        this.state = initialState;\n        this.init();\n    }\n    return CarritoServices;\n}());\nexports.CarritoServices = CarritoServices;\n\n\n//# sourceURL=webpack://back/./src/services/carrito.services.ts?");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CarritoServices = exports.ProductosServices = void 0;\nvar producto_services_1 = __webpack_require__(/*! ./producto.services */ \"./src/services/producto.services.ts\");\nObject.defineProperty(exports, \"ProductosServices\", ({ enumerable: true, get: function () { return producto_services_1.ProductosServices; } }));\nvar carrito_services_1 = __webpack_require__(/*! ./carrito.services */ \"./src/services/carrito.services.ts\");\nObject.defineProperty(exports, \"CarritoServices\", ({ enumerable: true, get: function () { return carrito_services_1.CarritoServices; } }));\n\n\n//# sourceURL=webpack://back/./src/services/index.ts?");

/***/ }),

/***/ "./src/services/producto.services.ts":
/*!*******************************************!*\
  !*** ./src/services/producto.services.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductosServices = void 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar models_1 = __webpack_require__(/*! @databases/models */ \"./src/databases/models/index.ts\");\n//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.\nvar ProductosServices = /** @class */ (function () {\n    function ProductosServices() {\n        var _this = this;\n        //Devuelve todo lo que halla en el array\n        this.all = function () { return __awaiter(_this, void 0, void 0, function () {\n            var respuesta;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, models_1.ProductoModel.find({})];\n                    case 1:\n                        respuesta = _a.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(200, \"All clear\", respuesta)];\n                }\n            });\n        }); };\n        //Metodo repetido para la clase abstracta**\n        this.byId = function (id) { return __awaiter(_this, void 0, void 0, function () {\n            var element, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, models_1.ProductoModel.findById(id)];\n                    case 1:\n                        element = _a.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(200, \"All clear\", [element])];\n                    case 2:\n                        error_1 = _a.sent();\n                        console.log(error_1);\n                        return [2 /*return*/, _utils_1.returnForApiProductos(404, \"Not Found\", [])];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        //Post de un nuevo Producto con la interface Producto falta validar si el producto ya existe\n        this.post = function (producto) { return __awaiter(_this, void 0, void 0, function () {\n            var nuevoProducto, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        nuevoProducto = new models_1.ProductoModel(producto);\n                        return [4 /*yield*/, nuevoProducto.save()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(201, \"Producto creado\", [producto])];\n                    case 2:\n                        error_2 = _a.sent();\n                        console.log(error_2);\n                        return [2 /*return*/, _utils_1.returnForApiProductos(500, \"Error\", [error_2])];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.delete = function (id) { return __awaiter(_this, void 0, void 0, function () {\n            var deletedCount, error_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, models_1.ProductoModel.deleteOne({ _id: id })];\n                    case 1:\n                        deletedCount = (_a.sent()).deletedCount;\n                        if (!deletedCount)\n                            return [2 /*return*/, _utils_1.returnForApiProductos(404, \"Not Found\", [])];\n                        return [2 /*return*/, _utils_1.returnForApiProductos(200, \"Producto eliminado correctamente\", [])];\n                    case 2:\n                        error_3 = _a.sent();\n                        console.log(error_3);\n                        return [2 /*return*/, _utils_1.returnForApiProductos(500, \"Error\", [])];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.update = function (id, data) { return __awaiter(_this, void 0, void 0, function () {\n            var element, counter, _i, _a, key, response, error_4;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _b.trys.push([0, 3, , 4]);\n                        return [4 /*yield*/, models_1.ProductoModel.findById(id)];\n                    case 1:\n                        element = _b.sent();\n                        counter = 0;\n                        for (_i = 0, _a = Object.keys(data); _i < _a.length; _i++) {\n                            key = _a[_i];\n                            if (data[key] !== element[key])\n                                counter++;\n                        }\n                        if (!counter) {\n                            return [2 /*return*/, _utils_1.returnForApiProductos(418, \"El producto ya esta actualizado\", [\n                                    element,\n                                ])];\n                        }\n                        return [4 /*yield*/, models_1.ProductoModel.findByIdAndUpdate({ _id: id }, __assign({}, data), { new: true })];\n                    case 2:\n                        response = _b.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(202, \"Actualizado\", [response])];\n                    case 3:\n                        error_4 = _b.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(500, \"Error\", [error_4])];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n    }\n    return ProductosServices;\n}());\nexports.ProductosServices = ProductosServices;\n\n\n//# sourceURL=webpack://back/./src/services/producto.services.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.returnForApiCarrito = exports.returnForApiProductos = void 0;\nvar return_producto_1 = __webpack_require__(/*! ./return.producto */ \"./src/utils/return.producto.ts\");\nObject.defineProperty(exports, \"returnForApiProductos\", ({ enumerable: true, get: function () { return return_producto_1.returnForApiProductos; } }));\nObject.defineProperty(exports, \"returnForApiCarrito\", ({ enumerable: true, get: function () { return return_producto_1.returnForApiCarrito; } }));\n\n\n//# sourceURL=webpack://back/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/return.producto.ts":
/*!**************************************!*\
  !*** ./src/utils/return.producto.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.returnForApiCarrito = exports.returnForApiProductos = void 0;\nvar returnForApiProductos = function (code, desc, data) {\n    return {\n        status: {\n            code: code,\n            desc: desc,\n        },\n        data: data,\n        timestamp: +new Date(),\n    };\n};\nexports.returnForApiProductos = returnForApiProductos;\nvar returnForApiCarrito = function (code, desc, data) {\n    return {\n        status: {\n            code: code,\n            desc: desc,\n        },\n        data: data,\n        timestamp: +new Date(),\n    };\n};\nexports.returnForApiCarrito = returnForApiCarrito;\n\n\n//# sourceURL=webpack://back/./src/utils/return.producto.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

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