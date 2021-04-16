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

/***/ "./node_modules/normalizr/dist/normalizr.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/normalizr/dist/normalizr.es.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"denormalize\": () => (/* binding */ denormalize$1),\n/* harmony export */   \"normalize\": () => (/* binding */ normalize$1),\n/* harmony export */   \"schema\": () => (/* binding */ schema)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\n/**\n * Helpers to enable Immutable compatibility *without* bringing in\n * the 'immutable' package as a dependency.\n */\n\n/**\n * Check if an object is immutable by checking if it has a key specific\n * to the immutable library.\n *\n * @param  {any} object\n * @return {bool}\n */\nfunction isImmutable(object) {\n  return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map\n  object._map && object._map.hasOwnProperty('__ownerID'))); // Immutable.Record\n}\n/**\n * Denormalize an immutable entity.\n *\n * @param  {Schema} schema\n * @param  {Immutable.Map|Immutable.Record} input\n * @param  {function} unvisit\n * @param  {function} getDenormalizedEntity\n * @return {Immutable.Map|Immutable.Record}\n */\n\nfunction denormalizeImmutable(schema, input, unvisit) {\n  return Object.keys(schema).reduce(function (object, key) {\n    // Immutable maps cast keys to strings on write so we need to ensure\n    // we're accessing them using string keys.\n    var stringKey = \"\" + key;\n\n    if (object.has(stringKey)) {\n      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));\n    } else {\n      return object;\n    }\n  }, input);\n}\n\nvar getDefaultGetId = function getDefaultGetId(idAttribute) {\n  return function (input) {\n    return isImmutable(input) ? input.get(idAttribute) : input[idAttribute];\n  };\n};\n\nvar EntitySchema = /*#__PURE__*/function () {\n  function EntitySchema(key, definition, options) {\n    if (definition === void 0) {\n      definition = {};\n    }\n\n    if (options === void 0) {\n      options = {};\n    }\n\n    if (!key || typeof key !== 'string') {\n      throw new Error(\"Expected a string key for Entity, but found \" + key + \".\");\n    }\n\n    var _options = options,\n        _options$idAttribute = _options.idAttribute,\n        idAttribute = _options$idAttribute === void 0 ? 'id' : _options$idAttribute,\n        _options$mergeStrateg = _options.mergeStrategy,\n        mergeStrategy = _options$mergeStrateg === void 0 ? function (entityA, entityB) {\n      return _extends({}, entityA, entityB);\n    } : _options$mergeStrateg,\n        _options$processStrat = _options.processStrategy,\n        processStrategy = _options$processStrat === void 0 ? function (input) {\n      return _extends({}, input);\n    } : _options$processStrat,\n        _options$fallbackStra = _options.fallbackStrategy,\n        fallbackStrategy = _options$fallbackStra === void 0 ? function (key, schema) {\n      return undefined;\n    } : _options$fallbackStra;\n    this._key = key;\n    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);\n    this._idAttribute = idAttribute;\n    this._mergeStrategy = mergeStrategy;\n    this._processStrategy = processStrategy;\n    this._fallbackStrategy = fallbackStrategy;\n    this.define(definition);\n  }\n\n  var _proto = EntitySchema.prototype;\n\n  _proto.define = function define(definition) {\n    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {\n      var _extends2;\n\n      var schema = definition[key];\n      return _extends({}, entitySchema, (_extends2 = {}, _extends2[key] = schema, _extends2));\n    }, this.schema || {});\n  };\n\n  _proto.getId = function getId(input, parent, key) {\n    return this._getId(input, parent, key);\n  };\n\n  _proto.merge = function merge(entityA, entityB) {\n    return this._mergeStrategy(entityA, entityB);\n  };\n\n  _proto.fallback = function fallback(id, schema) {\n    return this._fallbackStrategy(id, schema);\n  };\n\n  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {\n    var _this = this;\n\n    var id = this.getId(input, parent, key);\n    var entityType = this.key;\n\n    if (!(entityType in visitedEntities)) {\n      visitedEntities[entityType] = {};\n    }\n\n    if (!(id in visitedEntities[entityType])) {\n      visitedEntities[entityType][id] = [];\n    }\n\n    if (visitedEntities[entityType][id].some(function (entity) {\n      return entity === input;\n    })) {\n      return id;\n    }\n\n    visitedEntities[entityType][id].push(input);\n\n    var processedEntity = this._processStrategy(input, parent, key);\n\n    Object.keys(this.schema).forEach(function (key) {\n      if (processedEntity.hasOwnProperty(key) && typeof processedEntity[key] === 'object') {\n        var schema = _this.schema[key];\n        var resolvedSchema = typeof schema === 'function' ? schema(input) : schema;\n        processedEntity[key] = visit(processedEntity[key], processedEntity, key, resolvedSchema, addEntity, visitedEntities);\n      }\n    });\n    addEntity(this, processedEntity, input, parent, key);\n    return id;\n  };\n\n  _proto.denormalize = function denormalize(entity, unvisit) {\n    var _this2 = this;\n\n    if (isImmutable(entity)) {\n      return denormalizeImmutable(this.schema, entity, unvisit);\n    }\n\n    Object.keys(this.schema).forEach(function (key) {\n      if (entity.hasOwnProperty(key)) {\n        var schema = _this2.schema[key];\n        entity[key] = unvisit(entity[key], schema);\n      }\n    });\n    return entity;\n  };\n\n  _createClass(EntitySchema, [{\n    key: \"key\",\n    get: function get() {\n      return this._key;\n    }\n  }, {\n    key: \"idAttribute\",\n    get: function get() {\n      return this._idAttribute;\n    }\n  }]);\n\n  return EntitySchema;\n}();\n\nvar PolymorphicSchema = /*#__PURE__*/function () {\n  function PolymorphicSchema(definition, schemaAttribute) {\n    if (schemaAttribute) {\n      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {\n        return input[schemaAttribute];\n      } : schemaAttribute;\n    }\n\n    this.define(definition);\n  }\n\n  var _proto = PolymorphicSchema.prototype;\n\n  _proto.define = function define(definition) {\n    this.schema = definition;\n  };\n\n  _proto.getSchemaAttribute = function getSchemaAttribute(input, parent, key) {\n    return !this.isSingleSchema && this._schemaAttribute(input, parent, key);\n  };\n\n  _proto.inferSchema = function inferSchema(input, parent, key) {\n    if (this.isSingleSchema) {\n      return this.schema;\n    }\n\n    var attr = this.getSchemaAttribute(input, parent, key);\n    return this.schema[attr];\n  };\n\n  _proto.normalizeValue = function normalizeValue(value, parent, key, visit, addEntity, visitedEntities) {\n    var schema = this.inferSchema(value, parent, key);\n\n    if (!schema) {\n      return value;\n    }\n\n    var normalizedValue = visit(value, parent, key, schema, addEntity, visitedEntities);\n    return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : {\n      id: normalizedValue,\n      schema: this.getSchemaAttribute(value, parent, key)\n    };\n  };\n\n  _proto.denormalizeValue = function denormalizeValue(value, unvisit) {\n    var schemaKey = isImmutable(value) ? value.get('schema') : value.schema;\n\n    if (!this.isSingleSchema && !schemaKey) {\n      return value;\n    }\n\n    var id = this.isSingleSchema ? undefined : isImmutable(value) ? value.get('id') : value.id;\n    var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];\n    return unvisit(id || value, schema);\n  };\n\n  _createClass(PolymorphicSchema, [{\n    key: \"isSingleSchema\",\n    get: function get() {\n      return !this._schemaAttribute;\n    }\n  }]);\n\n  return PolymorphicSchema;\n}();\n\nvar UnionSchema = /*#__PURE__*/function (_PolymorphicSchema) {\n  _inheritsLoose(UnionSchema, _PolymorphicSchema);\n\n  function UnionSchema(definition, schemaAttribute) {\n    if (!schemaAttribute) {\n      throw new Error('Expected option \"schemaAttribute\" not found on UnionSchema.');\n    }\n\n    return _PolymorphicSchema.call(this, definition, schemaAttribute) || this;\n  }\n\n  var _proto = UnionSchema.prototype;\n\n  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {\n    return this.normalizeValue(input, parent, key, visit, addEntity, visitedEntities);\n  };\n\n  _proto.denormalize = function denormalize(input, unvisit) {\n    return this.denormalizeValue(input, unvisit);\n  };\n\n  return UnionSchema;\n}(PolymorphicSchema);\n\nvar ValuesSchema = /*#__PURE__*/function (_PolymorphicSchema) {\n  _inheritsLoose(ValuesSchema, _PolymorphicSchema);\n\n  function ValuesSchema() {\n    return _PolymorphicSchema.apply(this, arguments) || this;\n  }\n\n  var _proto = ValuesSchema.prototype;\n\n  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {\n    var _this = this;\n\n    return Object.keys(input).reduce(function (output, key, index) {\n      var _extends2;\n\n      var value = input[key];\n      return value !== undefined && value !== null ? _extends({}, output, (_extends2 = {}, _extends2[key] = _this.normalizeValue(value, input, key, visit, addEntity, visitedEntities), _extends2)) : output;\n    }, {});\n  };\n\n  _proto.denormalize = function denormalize(input, unvisit) {\n    var _this2 = this;\n\n    return Object.keys(input).reduce(function (output, key) {\n      var _extends3;\n\n      var entityOrId = input[key];\n      return _extends({}, output, (_extends3 = {}, _extends3[key] = _this2.denormalizeValue(entityOrId, unvisit), _extends3));\n    }, {});\n  };\n\n  return ValuesSchema;\n}(PolymorphicSchema);\n\nvar validateSchema = function validateSchema(definition) {\n  var isArray = Array.isArray(definition);\n\n  if (isArray && definition.length > 1) {\n    throw new Error(\"Expected schema definition to be a single schema, but found \" + definition.length + \".\");\n  }\n\n  return definition[0];\n};\n\nvar getValues = function getValues(input) {\n  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {\n    return input[key];\n  });\n};\n\nvar normalize = function normalize(schema, input, parent, key, visit, addEntity, visitedEntities) {\n  schema = validateSchema(schema);\n  var values = getValues(input); // Special case: Arrays pass *their* parent on to their children, since there\n  // is not any special information that can be gathered from themselves directly\n\n  return values.map(function (value, index) {\n    return visit(value, parent, key, schema, addEntity, visitedEntities);\n  });\n};\nvar denormalize = function denormalize(schema, input, unvisit) {\n  schema = validateSchema(schema);\n  return input && input.map ? input.map(function (entityOrId) {\n    return unvisit(entityOrId, schema);\n  }) : input;\n};\n\nvar ArraySchema = /*#__PURE__*/function (_PolymorphicSchema) {\n  _inheritsLoose(ArraySchema, _PolymorphicSchema);\n\n  function ArraySchema() {\n    return _PolymorphicSchema.apply(this, arguments) || this;\n  }\n\n  var _proto = ArraySchema.prototype;\n\n  _proto.normalize = function normalize(input, parent, key, visit, addEntity, visitedEntities) {\n    var _this = this;\n\n    var values = getValues(input);\n    return values.map(function (value, index) {\n      return _this.normalizeValue(value, parent, key, visit, addEntity, visitedEntities);\n    }).filter(function (value) {\n      return value !== undefined && value !== null;\n    });\n  };\n\n  _proto.denormalize = function denormalize(input, unvisit) {\n    var _this2 = this;\n\n    return input && input.map ? input.map(function (value) {\n      return _this2.denormalizeValue(value, unvisit);\n    }) : input;\n  };\n\n  return ArraySchema;\n}(PolymorphicSchema);\n\nvar _normalize = function normalize(schema, input, parent, key, visit, addEntity, visitedEntities) {\n  var object = _extends({}, input);\n\n  Object.keys(schema).forEach(function (key) {\n    var localSchema = schema[key];\n    var resolvedLocalSchema = typeof localSchema === 'function' ? localSchema(input) : localSchema;\n    var value = visit(input[key], input, key, resolvedLocalSchema, addEntity, visitedEntities);\n\n    if (value === undefined || value === null) {\n      delete object[key];\n    } else {\n      object[key] = value;\n    }\n  });\n  return object;\n};\n\nvar _denormalize = function denormalize(schema, input, unvisit) {\n  if (isImmutable(input)) {\n    return denormalizeImmutable(schema, input, unvisit);\n  }\n\n  var object = _extends({}, input);\n\n  Object.keys(schema).forEach(function (key) {\n    if (object[key] != null) {\n      object[key] = unvisit(object[key], schema[key]);\n    }\n  });\n  return object;\n};\n\nvar ObjectSchema = /*#__PURE__*/function () {\n  function ObjectSchema(definition) {\n    this.define(definition);\n  }\n\n  var _proto = ObjectSchema.prototype;\n\n  _proto.define = function define(definition) {\n    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {\n      var _extends2;\n\n      var schema = definition[key];\n      return _extends({}, entitySchema, (_extends2 = {}, _extends2[key] = schema, _extends2));\n    }, this.schema || {});\n  };\n\n  _proto.normalize = function normalize() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _normalize.apply(void 0, [this.schema].concat(args));\n  };\n\n  _proto.denormalize = function denormalize() {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _denormalize.apply(void 0, [this.schema].concat(args));\n  };\n\n  return ObjectSchema;\n}();\n\nvar visit = function visit(value, parent, key, schema, addEntity, visitedEntities) {\n  if (typeof value !== 'object' || !value) {\n    return value;\n  }\n\n  if (typeof schema === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {\n    var method = Array.isArray(schema) ? normalize : _normalize;\n    return method(schema, value, parent, key, visit, addEntity, visitedEntities);\n  }\n\n  return schema.normalize(value, parent, key, visit, addEntity, visitedEntities);\n};\n\nvar addEntities = function addEntities(entities) {\n  return function (schema, processedEntity, value, parent, key) {\n    var schemaKey = schema.key;\n    var id = schema.getId(value, parent, key);\n\n    if (!(schemaKey in entities)) {\n      entities[schemaKey] = {};\n    }\n\n    var existingEntity = entities[schemaKey][id];\n\n    if (existingEntity) {\n      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);\n    } else {\n      entities[schemaKey][id] = processedEntity;\n    }\n  };\n};\n\nvar schema = {\n  Array: ArraySchema,\n  Entity: EntitySchema,\n  Object: ObjectSchema,\n  Union: UnionSchema,\n  Values: ValuesSchema\n};\nvar normalize$1 = function normalize(input, schema) {\n  if (!input || typeof input !== 'object') {\n    throw new Error(\"Unexpected input given to normalize. Expected type to be \\\"object\\\", found \\\"\" + (input === null ? 'null' : typeof input) + \"\\\".\");\n  }\n\n  var entities = {};\n  var addEntity = addEntities(entities);\n  var visitedEntities = {};\n  var result = visit(input, input, null, schema, addEntity, visitedEntities);\n  return {\n    entities: entities,\n    result: result\n  };\n};\n\nvar unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {\n  var entity = getEntity(id, schema);\n\n  if (entity === undefined && schema instanceof EntitySchema) {\n    entity = schema.fallback(id, schema);\n  }\n\n  if (typeof entity !== 'object' || entity === null) {\n    return entity;\n  }\n\n  if (!cache[schema.key]) {\n    cache[schema.key] = {};\n  }\n\n  if (!cache[schema.key][id]) {\n    // Ensure we don't mutate it non-immutable objects\n    var entityCopy = isImmutable(entity) ? entity : _extends({}, entity); // Need to set this first so that if it is referenced further within the\n    // denormalization the reference will already exist.\n\n    cache[schema.key][id] = entityCopy;\n    cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);\n  }\n\n  return cache[schema.key][id];\n};\n\nvar getUnvisit = function getUnvisit(entities) {\n  var cache = {};\n  var getEntity = getEntities(entities);\n  return function unvisit(input, schema) {\n    if (typeof schema === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {\n      var method = Array.isArray(schema) ? denormalize : _denormalize;\n      return method(schema, input, unvisit);\n    }\n\n    if (input === undefined || input === null) {\n      return input;\n    }\n\n    if (schema instanceof EntitySchema) {\n      return unvisitEntity(input, schema, unvisit, getEntity, cache);\n    }\n\n    return schema.denormalize(input, unvisit);\n  };\n};\n\nvar getEntities = function getEntities(entities) {\n  var isImmutable$1 = isImmutable(entities);\n  return function (entityOrId, schema) {\n    var schemaKey = schema.key;\n\n    if (typeof entityOrId === 'object') {\n      return entityOrId;\n    }\n\n    if (isImmutable$1) {\n      return entities.getIn([schemaKey, entityOrId.toString()]);\n    }\n\n    return entities[schemaKey] && entities[schemaKey][entityOrId];\n  };\n};\n\nvar denormalize$1 = function denormalize(input, schema, entities) {\n  if (typeof input !== 'undefined') {\n    return getUnvisit(entities)(input, schema);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://back/./node_modules/normalizr/dist/normalizr.es.js?");

/***/ }),

/***/ "./src/config/enviroment.conf.ts":
/*!***************************************!*\
  !*** ./src/config/enviroment.conf.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MONGODB_GLOBAL_DB = exports.MONGODB_GLOBAL_URI = exports.MONGODB_GLOBAL_USER = exports.MONGODB_GLOBAL_PASS = exports.GLOBAL_PORT = exports.BASE_GLOBAL_URL = void 0;\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\n//URL & PORT ENV VARS\nvar BASE_GLOBAL_URL = process.env.BASE_URL || \"127.0.0.1\";\nexports.BASE_GLOBAL_URL = BASE_GLOBAL_URL;\nvar PORT = process.env.PORT || \"8080\";\nvar GLOBAL_PORT = +PORT; //CONVERTIR STRING A NUMERO\nexports.GLOBAL_PORT = GLOBAL_PORT;\n//MONGO ENV_VARS\nvar MONGODB_GLOBAL_PORT = process.env.MONGODB_PORT || \"27017\";\nvar MONGODB_GLOBAL_URI = process.env.MONGODB_URI || \"mongodb://127.0.0.1:\" + MONGODB_GLOBAL_PORT;\nexports.MONGODB_GLOBAL_URI = MONGODB_GLOBAL_URI;\nvar MONGODB_GLOBAL_USER = process.env.MONGODB_USER || \"\";\nexports.MONGODB_GLOBAL_USER = MONGODB_GLOBAL_USER;\nvar MONGODB_GLOBAL_PASS = process.env.MONGODB_PASS || \"\";\nexports.MONGODB_GLOBAL_PASS = MONGODB_GLOBAL_PASS;\nvar MONGODB_GLOBAL_DB = process.env.MONGODB_DB || \"back-store\";\nexports.MONGODB_GLOBAL_DB = MONGODB_GLOBAL_DB;\n\n\n//# sourceURL=webpack://back/./src/config/enviroment.conf.ts?");

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

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.productoController = void 0;\nvar _services_1 = __webpack_require__(/*! @services */ \"./src/services/index.ts\");\nvar Service = new _services_1.ProductosServices();\nvar productoController = {\n    all: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.all(req.query)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    byId: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.byId(req.params.id)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    create: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.post(req.body)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    update: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.update(req.params.id, req.body)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    remove: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n        var response;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Service.delete(req.params.id)];\n                case 1:\n                    response = _a.sent();\n                    res.status(response.status.code).json(response);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n};\nexports.productoController = productoController;\n\n\n//# sourceURL=webpack://back/./src/controllers/producto.controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.io = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar _routes_1 = __importDefault(__webpack_require__(/*! @routes */ \"./src/routes/index.ts\"));\nvar _config_1 = __webpack_require__(/*! @config */ \"./src/config/index.ts\");\nvar enviroment_conf_1 = __webpack_require__(/*! @config/enviroment.conf */ \"./src/config/enviroment.conf.ts\");\nvar normalizr = __webpack_require__(/*! normalizr */ \"./node_modules/normalizr/dist/normalizr.es.js\");\nvar schema = normalizr.schema;\nvar author = new schema.Entity(\"author\", {}, { idAttribute: \"id\" });\nvar complete = new schema.Entity(\"mensajes\", {\n    author: author\n}, { idAttribute: \"text\" });\nvar app = express_1.default();\nvar serverHttp = http_1.default.createServer(app); //Socket Io\nexports.io = __webpack_require__(/*! socket.io */ \"socket.io\")(serverHttp);\nexports.io.on(\"connection\", function (socket) {\n    console.log(\"conectado\");\n    var mensajesGuardados = [\n        {\n            author: {\n                id: \"m_adan2012@outlook.com\",\n                nombre: \"Manuel\",\n                apellido: \"Adan\",\n                edad: 30,\n                alias: \"alkeops\",\n                avatar: \"http://algo.com\",\n            },\n            text: \"Hola Mucho gusto\",\n        },\n        {\n            author: {\n                id: \"m_adan2012@outlook.com\",\n                nombre: \"Manuel\",\n                apellido: \"Adan\",\n                edad: 30,\n                alias: \"alkeops\",\n                avatar: \"http://algo.com\",\n            },\n            text: \"Mi nombre es Manuel\",\n        },\n        {\n            author: {\n                id: \"m_adan2012@outlook.com\",\n                nombre: \"Manuel\",\n                apellido: \"Adan\",\n                edad: 30,\n                alias: \"alkeops\",\n                avatar: \"http://algo.com\",\n            },\n            text: \"Hago esto\",\n        },\n        {\n            author: {\n                id: \"m_adan2012@outlook.com\",\n                nombre: \"Manuel\",\n                apellido: \"Adan\",\n                edad: 30,\n                alias: \"alkeops\",\n                avatar: \"http://algo.com\",\n            },\n            text: \"Y estoy aqui\",\n        },\n        {\n            author: {\n                id: \"m_adan2022@outlook.com\",\n                nombre: \"Manuel\",\n                apellido: \"Adan\",\n                edad: 30,\n                alias: \"alkeops\",\n                avatar: \"http://algo.com\",\n            },\n            text: \"Y tambien aqui\",\n        },\n        {\n            author: {\n                id: \"m_adan2022@outlook.com\",\n                nombre: \"Manuel\",\n                apellido: \"Adan\",\n                edad: 30,\n                alias: \"alkeops\",\n                avatar: \"http://algo.com\",\n            },\n            text: \"Y por aqui\",\n        },\n    ];\n    console.log(normalizr.normalize(mensajesGuardados, [complete]));\n    socket.emit(\"mensajes\", mensajesGuardados.length > 0 ? normalizr.normalize(mensajesGuardados, [complete]) : \"Sin mensajes\");\n});\nvar mongoInits = _config_1.mongoInit;\napp.use(express_1.default.json());\napp.use(_routes_1.default);\nvar server = serverHttp.listen(enviroment_conf_1.GLOBAL_PORT, enviroment_conf_1.BASE_GLOBAL_URL, function () {\n    return console.log(\"Server running in \" + enviroment_conf_1.BASE_GLOBAL_URL + \":\" + enviroment_conf_1.GLOBAL_PORT);\n});\nserver.on(\"error\", function (error) { return console.log(\"Error \" + error); });\n\n\n//# sourceURL=webpack://back/./src/index.ts?");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateProducto = void 0;\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar initialData = {\n    price: 0,\n    thumbnail: \"\",\n    name: \"\",\n    description: \"\",\n    stock: 0,\n    code: \"\",\n};\nvar queryAvailable = {\n    nm: \"\",\n    min: 0,\n    max: 0,\n};\nvar validateKeys = function (parameters, dataForCompare, string, res, next) {\n    var arrayError = [];\n    Object.keys(parameters).map(function (element) {\n        if (!dataForCompare.hasOwnProperty(element)) {\n            arrayError.push(element);\n        }\n    });\n    if (arrayError.length) {\n        var response = _utils_1.returnForApiProductos(400, \"[ \" + arrayError.join(\" || \").toUpperCase() + \" ] no \" + (arrayError.length > 1 ? \"son\" : \"es\") + \" una \" + string + \" valida\", []);\n        res.status(response.status.code).json(response);\n        return next(JSON.stringify(response));\n    }\n    return;\n};\nvar validateProducto = {\n    dataUpdate: function (req, res, next) {\n        var parameters = req.body;\n        /* Valida si las las keys mandadas en el json existen en el \"schema\" producto, si no existen se responde con la llave que no coincide.*/\n        validateKeys(parameters, initialData, \"propiedad\", res, next);\n        return next();\n    },\n    dataCreated: function (req, res, next) {\n        var parameters = req.body;\n        if (Object.keys(parameters).length !== Object.keys(initialData).length) {\n            var response = _utils_1.returnForApiProductos(400, \"Faltan datos para crear el Producto\", []);\n            res.status(response.status.code).json(response);\n            return next(JSON.stringify(response));\n        }\n        validateKeys(parameters, initialData, \"propiedad\", res, next);\n        return next();\n    },\n    validateQuery: function (req, res, next) {\n        if (!req.query)\n            return next();\n        var parameters = req.query;\n        validateKeys(parameters, queryAvailable, \"query\", res, next);\n        return next();\n    },\n};\nexports.validateProducto = validateProducto;\n\n\n//# sourceURL=webpack://back/./src/middlewares/producto.validate.ts?");

/***/ }),

/***/ "./src/middlewares/user.validate.ts":
/*!******************************************!*\
  !*** ./src/middlewares/user.validate.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateUser = void 0;\nvar validateUser = {\n    isAdmin: function (req, res, next) {\n        var baseUrl = req.baseUrl, apiKey = req.query.apiKey, methods = req.route.methods;\n        if (apiKey !== \"admin\") {\n            res.status(401).json({\n                error: -1,\n                description: \"ruta [ \" + baseUrl + \" ] m\\u00E9todo [ \" + Object.keys(methods)[0].toUpperCase() + \" ] no autorizado\",\n            });\n            next(\"Unauthorized\");\n        }\n        next();\n    },\n};\nexports.validateUser = validateUser;\n\n\n//# sourceURL=webpack://back/./src/middlewares/user.validate.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductoModel = void 0;\nvar producto_model_1 = __webpack_require__(/*! ./producto.model */ \"./src/models/producto.model.ts\");\nObject.defineProperty(exports, \"ProductoModel\", ({ enumerable: true, get: function () { return producto_model_1.ProductoModel; } }));\n\n\n//# sourceURL=webpack://back/./src/models/index.ts?");

/***/ }),

/***/ "./src/models/producto.model.ts":
/*!**************************************!*\
  !*** ./src/models/producto.model.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductoModel = void 0;\nvar mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\nvar mongoose_unique_validator_1 = __importDefault(__webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\"));\nvar productoSchema = new mongoose_1.Schema({\n    name: {\n        type: String,\n        required: true,\n        index: true,\n        unique: true,\n        default: null,\n    },\n    price: {\n        type: Number,\n        required: true,\n        default: null,\n    },\n    thumbnail: {\n        type: String,\n        required: false,\n        default: null,\n    },\n    description: {\n        type: String,\n        required: false,\n        default: null,\n    },\n    stock: { type: Number, required: true, default: null },\n    code: {\n        type: String,\n        required: true,\n        unique: true,\n        default: function () { return \"CODE-\" + Date.now(); },\n    },\n}, {\n    timestamps: true,\n});\nproductoSchema.plugin(mongoose_unique_validator_1.default);\nexports.ProductoModel = mongoose_1.default.model(\"Producto\", productoSchema, \"Producto\");\n\n\n//# sourceURL=webpack://back/./src/models/producto.model.ts?");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar _controllers_1 = __webpack_require__(/*! @controllers */ \"./src/controllers/index.ts\");\nvar _middlewares_1 = __webpack_require__(/*! @middlewares */ \"./src/middlewares/index.ts\");\nvar productoRouter = express_1.Router();\nproductoRouter\n    .get(\"/\", _middlewares_1.validateProducto.validateQuery, _controllers_1.productoController.all)\n    .get(\"/:id\", _controllers_1.productoController.byId)\n    .post(\"/\", _middlewares_1.validateUser.isAdmin, _middlewares_1.validateProducto.dataCreated, _controllers_1.productoController.create)\n    .patch(\"/:id\", _middlewares_1.validateUser.isAdmin, _middlewares_1.validateProducto.dataUpdate, _controllers_1.productoController.update)\n    .delete(\"/:id\", _middlewares_1.validateUser.isAdmin, _controllers_1.productoController.remove);\nexports.default = productoRouter;\n\n\n//# sourceURL=webpack://back/./src/routes/producto.routes.ts?");

/***/ }),

/***/ "./src/services/carrito.services.ts":
/*!******************************************!*\
  !*** ./src/services/carrito.services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CarritoServices = void 0;\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar DIRFOLDER = __dirname + \"/carrito.txt\";\nvar initialState = {\n    idCarrito: \"H1N1\",\n    producto: [],\n};\nif (!fs.existsSync(DIRFOLDER))\n    fs.writeFileSync(DIRFOLDER, JSON.stringify(initialState));\n//Practicamente lo mismo que la clase ProductosServices\nvar CarritoServices = /** @class */ (function () {\n    function CarritoServices() {\n        var _this = this;\n        this.init = function () {\n            var read = fs.readFileSync(DIRFOLDER);\n            var data = JSON.parse(read);\n            return (_this.state = data);\n        };\n        this.all = function () {\n            return _utils_1.returnForApiCarrito(200, \"All Ok\", _this.state);\n        };\n        this.byId = function (id) {\n            var element = false;\n            if (!element)\n                return _utils_1.returnForApiCarrito(404, \"Not Found\", []);\n            return _utils_1.returnForApiCarrito(200, \"All clear\", [element]);\n        };\n        this.post = function (producto) {\n            _this.state.producto.push(producto);\n            _this.rewriteFile();\n            return _utils_1.returnForApiCarrito(201, \"Producto Agregado al carrito\", [producto]);\n        };\n        this.delete = function (id) {\n            _this.state.producto = _this.state.producto.filter(function (element) { return element; });\n            _this.rewriteFile();\n            console.log(_this.state);\n            return _utils_1.returnForApiCarrito(200, \"Elemento borrado del carrito\", []);\n        };\n        this.rewriteFile = function () {\n            fs.writeFileSync(DIRFOLDER, JSON.stringify(_this.state));\n        };\n        this.state = initialState;\n        this.init();\n    }\n    return CarritoServices;\n}());\nexports.CarritoServices = CarritoServices;\n\n\n//# sourceURL=webpack://back/./src/services/carrito.services.ts?");

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

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProductosServices = void 0;\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nvar _models_1 = __webpack_require__(/*! @models */ \"./src/models/index.ts\");\n//TODO Servicios para Productos, probablemente crear una clase abstracta para todos los servicios y extender de ella.\nvar ProductosServices = /** @class */ (function () {\n    function ProductosServices() {\n        var _this = this;\n        //Devuelve todo lo que halla en el array\n        this.all = function (query) { return __awaiter(_this, void 0, void 0, function () {\n            var querys, respuesta;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        querys = _utils_1.getQuerysFilter(query);\n                        return [4 /*yield*/, _models_1.ProductoModel.find(querys).exec()];\n                    case 1:\n                        respuesta = _a.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(200, \"All clear\", respuesta)];\n                }\n            });\n        }); };\n        //Metodo repetido para la clase abstracta**\n        this.byId = function (id) { return __awaiter(_this, void 0, void 0, function () {\n            var element, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, _models_1.ProductoModel.findById(id)];\n                    case 1:\n                        element = _a.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(200, \"All clear\", [element])];\n                    case 2:\n                        error_1 = _a.sent();\n                        console.log(error_1);\n                        return [2 /*return*/, _utils_1.returnForApiProductos(404, \"Not Found\", [])];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        //Post de un nuevo Producto con la interface Producto falta validar si el producto ya existe\n        this.post = function (producto) { return __awaiter(_this, void 0, void 0, function () {\n            var nuevoProducto, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        nuevoProducto = new _models_1.ProductoModel(producto);\n                        return [4 /*yield*/, nuevoProducto.save()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(201, \"Producto creado\", [producto])];\n                    case 2:\n                        error_2 = _a.sent();\n                        console.log(error_2);\n                        return [2 /*return*/, _utils_1.returnForApiProductos(500, \"Error\", [error_2])];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.delete = function (id) { return __awaiter(_this, void 0, void 0, function () {\n            var response, error_3;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, _models_1.ProductoModel.findByIdAndDelete(id)];\n                    case 1:\n                        response = _a.sent();\n                        if (!response)\n                            return [2 /*return*/, _utils_1.returnForApiProductos(404, \"Not Found\", [])];\n                        return [2 /*return*/, _utils_1.returnForApiProductos(200, \"Producto eliminado correctamente\", [\n                                response,\n                            ])];\n                    case 2:\n                        error_3 = _a.sent();\n                        console.log(error_3);\n                        return [2 /*return*/, _utils_1.returnForApiProductos(500, \"Error\", [])];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        this.update = function (id, data) { return __awaiter(_this, void 0, void 0, function () {\n            var element, counter, _i, _a, key, response, error_4;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _b.trys.push([0, 3, , 4]);\n                        return [4 /*yield*/, _models_1.ProductoModel.findById(id)];\n                    case 1:\n                        element = _b.sent();\n                        counter = 0;\n                        /* Comparacion si hay algo que actualizar\n                        TODO pasar a middleware*/\n                        for (_i = 0, _a = Object.keys(data); _i < _a.length; _i++) {\n                            key = _a[_i];\n                            if (data[key] !== element[key])\n                                counter++;\n                        }\n                        if (!counter) {\n                            return [2 /*return*/, _utils_1.returnForApiProductos(418, \"El producto ya esta actualizado\", [\n                                    element,\n                                ])];\n                        }\n                        return [4 /*yield*/, _models_1.ProductoModel.findByIdAndUpdate(id, __assign({}, data), { new: true, runValidators: true, context: \"query\" }\n                            /* Opciones en este caso si new=true significa que devuelve el objeto actualizado,\n                          sin parametros deevuelve el objeto anttes de actual */\n                            )];\n                    case 2:\n                        response = _b.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(202, \"Actualizado\", [response])];\n                    case 3:\n                        error_4 = _b.sent();\n                        return [2 /*return*/, _utils_1.returnForApiProductos(500, \"Error\", [error_4])];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        }); };\n    }\n    return ProductosServices;\n}());\nexports.ProductosServices = ProductosServices;\n\n\n//# sourceURL=webpack://back/./src/services/producto.services.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getQuerysFilter = exports.returnForApiCarrito = exports.returnForApiProductos = void 0;\nvar return_producto_1 = __webpack_require__(/*! ./return.producto */ \"./src/utils/return.producto.ts\");\nObject.defineProperty(exports, \"returnForApiProductos\", ({ enumerable: true, get: function () { return return_producto_1.returnForApiProductos; } }));\nObject.defineProperty(exports, \"returnForApiCarrito\", ({ enumerable: true, get: function () { return return_producto_1.returnForApiCarrito; } }));\nvar manageQuerys_1 = __webpack_require__(/*! ./manageQuerys */ \"./src/utils/manageQuerys.ts\");\nObject.defineProperty(exports, \"getQuerysFilter\", ({ enumerable: true, get: function () { return manageQuerys_1.getQuerysFilter; } }));\n\n\n//# sourceURL=webpack://back/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/manageQuerys.ts":
/*!***********************************!*\
  !*** ./src/utils/manageQuerys.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getQuerysFilter = void 0;\nvar getQuerysFilter = function (query) {\n    var querys = {};\n    for (var _i = 0, _a = Object.keys(query); _i < _a.length; _i++) {\n        var q = _a[_i];\n        if (q === \"nm\") {\n            querys = __assign(__assign({}, querys), { name: { $regex: query[q], $options: \"i\" } });\n        }\n        if (q === \"min\") {\n            querys = __assign(__assign({}, querys), { price: { $gte: query[q] } });\n        }\n        if (q === \"max\") {\n            querys = __assign(__assign({}, querys), { price: __assign(__assign({}, querys.price), { $lte: query[q] }) });\n        }\n    }\n    return querys;\n};\nexports.getQuerysFilter = getQuerysFilter;\n\n\n//# sourceURL=webpack://back/./src/utils/manageQuerys.ts?");

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

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("mongoose-unique-validator");;

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;