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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MONGODB_GLOBAL_URI = exports.MONGODB_GLOBAL_USER = exports.MONGODB_GLOBAL_PASS = void 0;\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nvar MONGODB_GLOBAL_PORT = process.env.MONGODB_PORT || \"27017\";\nvar MONGODB_GLOBAL_URI = process.env.MONGODB_URI || \"mongodb://127.0.0.1:\" + MONGODB_GLOBAL_PORT;\nexports.MONGODB_GLOBAL_URI = MONGODB_GLOBAL_URI;\nvar MONGODB_GLOBAL_USER = process.env.MONGODB_USER || \"\";\nexports.MONGODB_GLOBAL_USER = MONGODB_GLOBAL_USER;\nvar MONGODB_GLOBAL_PASS = process.env.MONGODB_PASS || \"\";\nexports.MONGODB_GLOBAL_PASS = MONGODB_GLOBAL_PASS;\n\n\n//# sourceURL=webpack://back/./src/config/enviroment.conf.ts?");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mongoose = void 0;\nvar mongoose_conf_1 = __webpack_require__(/*! ./mongoose.conf */ \"./src/config/mongoose.conf.ts\");\nObject.defineProperty(exports, \"mongoose\", ({ enumerable: true, get: function () { return mongoose_conf_1.mongoose; } }));\n\n\n//# sourceURL=webpack://back/./src/config/index.ts?");

/***/ }),

/***/ "./src/config/mongoose.conf.ts":
/*!*************************************!*\
  !*** ./src/config/mongoose.conf.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mongoose = void 0;\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nexports.mongoose = mongoose;\nvar enviroment_conf_1 = __webpack_require__(/*! ./enviroment.conf */ \"./src/config/enviroment.conf.ts\");\nmongoose.connect(enviroment_conf_1.MONGODB_GLOBAL_URI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    user: enviroment_conf_1.MONGODB_GLOBAL_USER,\n    pass: enviroment_conf_1.MONGODB_GLOBAL_PASS,\n});\n\n\n//# sourceURL=webpack://back/./src/config/mongoose.conf.ts?");

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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.carritoController = exports.productoController = void 0;\nvar producto_controller_1 = __importDefault(__webpack_require__(/*! ./producto.controller */ \"./src/controllers/producto.controller.ts\"));\nexports.productoController = producto_controller_1.default;\nvar carrito_controller_1 = __importDefault(__webpack_require__(/*! ./carrito.controller */ \"./src/controllers/carrito.controller.ts\"));\nexports.carritoController = carrito_controller_1.default;\n\n\n//# sourceURL=webpack://back/./src/controllers/index.ts?");

/***/ }),

/***/ "./src/controllers/producto.controller.ts":
/*!************************************************!*\
  !*** ./src/controllers/producto.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar uuid_1 = __webpack_require__(/*! uuid */ \"uuid\");\nvar _services_1 = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\nvar Service = new _services_1.ProductosServices();\nvar productoController = {\n    all: function (req, res) {\n        var response = Service.all();\n        res.status(response.status.code).json(response);\n    },\n    byId: function (req, res) {\n        var response = Service.byId(req.params.id);\n        res.status(response.status.code).json(response);\n    },\n    create: function (req, res) {\n        var newProduct = __assign(__assign({}, req.body), { id: uuid_1.v4(), timestamp: +new Date() });\n        var response = Service.post(newProduct);\n        res.status(response.status.code).json(response);\n    },\n    update: function (req, res) {\n        var response = Service.update(req.params.id, req.body);\n        res.status(response.status.code).json(response);\n    },\n    remove: function (req, res) {\n        Service.delete(req.params.id);\n        res.status(200).json(\"Borrado\");\n    },\n};\nexports.default = productoController;\n\n\n//# sourceURL=webpack://back/./src/controllers/producto.controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.serverHttp = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar _routes_1 = __importDefault(__webpack_require__(/*! @routes */ \"./src/routes/index.ts\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/config/index.ts\");\nvar app = express_1.default();\nvar Cat = config_1.mongoose.model(\"Cat\", { name: String });\nvar kitty = new Cat({ name: \"Zildjian\" });\nkitty.save().then(function () { return console.log(\"meow\"); });\nexports.serverHttp = http_1.default.createServer(app); //Socket Io\napp.use(express_1.default.json());\napp.use(_routes_1.default);\nvar PORT = 8080;\nvar HOST = \"127.0.0.1\";\nvar server = exports.serverHttp.listen(PORT, HOST, function () {\n    return console.log(\"Server running in \" + HOST + \":\" + PORT);\n});\nserver.on(\"error\", function (error) { return console.log(\"Error \" + error); });\n\n\n//# sourceURL=webpack://back/./src/index.ts?");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar productoController_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@controllers/productoController;'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\nvar productoRouter = express_1.Router();\nproductoRouter\n    .get(\"/\", productoController_1.productoController.all)\n    .get(\"/:id\", productoController_1.productoController.byId)\n    .post(\"/\", _middlewares_1.validateUser.isAdmin, _middlewares_1.validateProducto.dataCreated, productoController_1.productoController.create)\n    .patch(\"/:id\", _middlewares_1.validateUser.isAdmin, _middlewares_1.validateProducto.dataUpdate, productoController_1.productoController.update)\n    .delete(\"/:id\", _middlewares_1.validateUser.isAdmin, productoController_1.productoController.remove);\nexports.default = productoRouter;\n\n\n//# sourceURL=webpack://back/./src/routes/producto.routes.ts?");

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

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductosServices = void 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar DIRFOLDER = __dirname + \"/productos.txt\";\nif (!fs.existsSync(DIRFOLDER))\n    fs.writeFileSync(DIRFOLDER, JSON.stringify([]));\n//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.\nvar ProductosServices = /** @class */ (function () {\n    function ProductosServices() {\n        var _this = this;\n        //Inicializa y llena el array del state con el archivo txt\n        this.init = function () {\n            var read = fs.readFileSync(DIRFOLDER);\n            var data = JSON.parse(read);\n            return (_this.state = data);\n        };\n        //Devuelve todo lo que halla en el array\n        this.all = function () { return _utils_1.returnForApiProductos(200, \"All clear\", _this.state); };\n        //Metodo repetido para la clase abstracta**\n        this.byId = function (id) {\n            var element = _this.state.find(function (element) { return element.id === id; });\n            if (!element)\n                return _utils_1.returnForApiProductos(404, \"Not Found\", []);\n            return _utils_1.returnForApiProductos(200, \"All clear\", [element]);\n        };\n        //Post de un nuevo Producto con la interface Producto falta validar si el producto ya existe\n        this.post = function (producto) {\n            _this.state.push(producto);\n            _this.rewriteFile();\n            return _utils_1.returnForApiProductos(201, \"Producto creado\", [producto]);\n        };\n        //Metodo repetido para clase abstracta**\n        //TODO Comprobar si el id existe\n        this.delete = function (id) {\n            _this.state = _this.state.filter(function (element) { return element.id !== id; });\n            return _this.rewriteFile();\n        };\n        this.update = function (id, data) {\n            /* Usa el metodo para traer el elemento preciso con el ID y se clona en una nueva variable, esto porque la asignacion simple solo guarda la referencia\n            del objeto pero no el objeto en si */\n            var element = Object.assign({}, _this.state.find(function (element) { return element.id === id; }));\n            if (!Object.keys(element).length)\n                return _utils_1.returnForApiProductos(418, \"No existe el producto\", []);\n            /*\n            Se hace un conteo de las veces que un valor de una llave de data se repite en el elemento. Si el counter es igual al numero de keys en data significa que los datos ya estaban actualizados\n            */\n            var counter = 0;\n            var wrongType = false;\n            Object.keys(data).forEach(function (e) {\n                if (element[e] === data[e])\n                    counter++;\n                if (typeof element[e] !== typeof data[e])\n                    wrongType = true;\n            });\n            if (wrongType)\n                return _utils_1.returnForApiProductos(418, \"No coinciden los tipos\", []);\n            if (counter === Object.keys(data).length)\n                return _utils_1.returnForApiProductos(418, \"El producto ya esta actualizado\", []);\n            //Elimina el elemento del archivo\n            _this.delete(id);\n            //Agrega el viejo elemento y lo que sean los datos que vienen de la data\n            var elementUpdated = __assign(__assign({}, element), data);\n            _this.post(elementUpdated);\n            //Cuando sea una base de datos y no un archivo se puede actualizar directamente el producto sin eliminarlo del array, por ahora no tiene sentido hacer dos procesos\n            return _utils_1.returnForApiProductos(202, \"Actualizado\", [elementUpdated]);\n        };\n        this.rewriteFile = function () {\n            fs.writeFileSync(DIRFOLDER, JSON.stringify(_this.state));\n        };\n        this.state = [];\n        this.init();\n    }\n    return ProductosServices;\n}());\nexports.ProductosServices = ProductosServices;\n\n\n//# sourceURL=webpack://back/./src/services/producto.services.ts?");

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