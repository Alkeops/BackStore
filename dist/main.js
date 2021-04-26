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

/***/ "./node_modules/express-session/index.js":
/*!***********************************************!*\
  !*** ./node_modules/express-session/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/*!\n * express-session\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2014-2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer\nvar cookie = __webpack_require__(/*! cookie */ \"cookie\");\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\")\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-session');\nvar deprecate = __webpack_require__(/*! depd */ \"depd\")('express-session');\nvar onHeaders = __webpack_require__(/*! on-headers */ \"./node_modules/on-headers/index.js\")\nvar parseUrl = __webpack_require__(/*! parseurl */ \"parseurl\");\nvar signature = __webpack_require__(/*! cookie-signature */ \"cookie-signature\")\nvar uid = __webpack_require__(/*! uid-safe */ \"./node_modules/uid-safe/index.js\").sync\n\nvar Cookie = __webpack_require__(/*! ./session/cookie */ \"./node_modules/express-session/session/cookie.js\")\nvar MemoryStore = __webpack_require__(/*! ./session/memory */ \"./node_modules/express-session/session/memory.js\")\nvar Session = __webpack_require__(/*! ./session/session */ \"./node_modules/express-session/session/session.js\")\nvar Store = __webpack_require__(/*! ./session/store */ \"./node_modules/express-session/session/store.js\")\n\n// environment\n\nvar env = \"development\";\n\n/**\n * Expose the middleware.\n */\n\nexports = module.exports = session;\n\n/**\n * Expose constructors.\n */\n\nexports.Store = Store;\nexports.Cookie = Cookie;\nexports.Session = Session;\nexports.MemoryStore = MemoryStore;\n\n/**\n * Warning message for `MemoryStore` usage in production.\n * @private\n */\n\nvar warning = 'Warning: connect.session() MemoryStore is not\\n'\n  + 'designed for a production environment, as it will leak\\n'\n  + 'memory, and will not scale past a single process.';\n\n/**\n * Node.js 0.8+ async implementation.\n * @private\n */\n\n/* istanbul ignore next */\nvar defer = typeof setImmediate === 'function'\n  ? setImmediate\n  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }\n\n/**\n * Setup session store with the given `options`.\n *\n * @param {Object} [options]\n * @param {Object} [options.cookie] Options for cookie\n * @param {Function} [options.genid]\n * @param {String} [options.name=connect.sid] Session ID cookie name\n * @param {Boolean} [options.proxy]\n * @param {Boolean} [options.resave] Resave unmodified sessions back to the store\n * @param {Boolean} [options.rolling] Enable/disable rolling session expiration\n * @param {Boolean} [options.saveUninitialized] Save uninitialized sessions to the store\n * @param {String|Array} [options.secret] Secret for signing session ID\n * @param {Object} [options.store=MemoryStore] Session store\n * @param {String} [options.unset]\n * @return {Function} middleware\n * @public\n */\n\nfunction session(options) {\n  var opts = options || {}\n\n  // get the cookie options\n  var cookieOptions = opts.cookie || {}\n\n  // get the session id generate function\n  var generateId = opts.genid || generateSessionId\n\n  // get the session cookie name\n  var name = opts.name || opts.key || 'connect.sid'\n\n  // get the session store\n  var store = opts.store || new MemoryStore()\n\n  // get the trust proxy setting\n  var trustProxy = opts.proxy\n\n  // get the resave session option\n  var resaveSession = opts.resave;\n\n  // get the rolling session option\n  var rollingSessions = Boolean(opts.rolling)\n\n  // get the save uninitialized session option\n  var saveUninitializedSession = opts.saveUninitialized\n\n  // get the cookie signing secret\n  var secret = opts.secret\n\n  if (typeof generateId !== 'function') {\n    throw new TypeError('genid option must be a function');\n  }\n\n  if (resaveSession === undefined) {\n    deprecate('undefined resave option; provide resave option');\n    resaveSession = true;\n  }\n\n  if (saveUninitializedSession === undefined) {\n    deprecate('undefined saveUninitialized option; provide saveUninitialized option');\n    saveUninitializedSession = true;\n  }\n\n  if (opts.unset && opts.unset !== 'destroy' && opts.unset !== 'keep') {\n    throw new TypeError('unset option must be \"destroy\" or \"keep\"');\n  }\n\n  // TODO: switch to \"destroy\" on next major\n  var unsetDestroy = opts.unset === 'destroy'\n\n  if (Array.isArray(secret) && secret.length === 0) {\n    throw new TypeError('secret option array must contain one or more strings');\n  }\n\n  if (secret && !Array.isArray(secret)) {\n    secret = [secret];\n  }\n\n  if (!secret) {\n    deprecate('req.secret; provide secret option');\n  }\n\n  // notify user that this store is not\n  // meant for a production environment\n  /* istanbul ignore next: not tested */\n  if (env === 'production' && store instanceof MemoryStore) {\n    console.warn(warning);\n  }\n\n  // generates the new session\n  store.generate = function(req){\n    req.sessionID = generateId(req);\n    req.session = new Session(req);\n    req.session.cookie = new Cookie(cookieOptions);\n\n    if (cookieOptions.secure === 'auto') {\n      req.session.cookie.secure = issecure(req, trustProxy);\n    }\n  };\n\n  var storeImplementsTouch = typeof store.touch === 'function';\n\n  // register event listeners for the store to track readiness\n  var storeReady = true\n  store.on('disconnect', function ondisconnect() {\n    storeReady = false\n  })\n  store.on('connect', function onconnect() {\n    storeReady = true\n  })\n\n  return function session(req, res, next) {\n    // self-awareness\n    if (req.session) {\n      next()\n      return\n    }\n\n    // Handle connection as if there is no session if\n    // the store has temporarily disconnected etc\n    if (!storeReady) {\n      debug('store is disconnected')\n      next()\n      return\n    }\n\n    // pathname mismatch\n    var originalPath = parseUrl.original(req).pathname || '/'\n    if (originalPath.indexOf(cookieOptions.path || '/') !== 0) return next();\n\n    // ensure a secret is available or bail\n    if (!secret && !req.secret) {\n      next(new Error('secret option required for sessions'));\n      return;\n    }\n\n    // backwards compatibility for signed cookies\n    // req.secret is passed from the cookie parser middleware\n    var secrets = secret || [req.secret];\n\n    var originalHash;\n    var originalId;\n    var savedHash;\n    var touched = false\n\n    // expose store\n    req.sessionStore = store;\n\n    // get the session ID from the cookie\n    var cookieId = req.sessionID = getcookie(req, name, secrets);\n\n    // set-cookie\n    onHeaders(res, function(){\n      if (!req.session) {\n        debug('no session');\n        return;\n      }\n\n      if (!shouldSetCookie(req)) {\n        return;\n      }\n\n      // only send secure cookies via https\n      if (req.session.cookie.secure && !issecure(req, trustProxy)) {\n        debug('not secured');\n        return;\n      }\n\n      if (!touched) {\n        // touch session\n        req.session.touch()\n        touched = true\n      }\n\n      // set cookie\n      setcookie(res, name, req.sessionID, secrets[0], req.session.cookie.data);\n    });\n\n    // proxy end() to commit the session\n    var _end = res.end;\n    var _write = res.write;\n    var ended = false;\n    res.end = function end(chunk, encoding) {\n      if (ended) {\n        return false;\n      }\n\n      ended = true;\n\n      var ret;\n      var sync = true;\n\n      function writeend() {\n        if (sync) {\n          ret = _end.call(res, chunk, encoding);\n          sync = false;\n          return;\n        }\n\n        _end.call(res);\n      }\n\n      function writetop() {\n        if (!sync) {\n          return ret;\n        }\n\n        if (chunk == null) {\n          ret = true;\n          return ret;\n        }\n\n        var contentLength = Number(res.getHeader('Content-Length'));\n\n        if (!isNaN(contentLength) && contentLength > 0) {\n          // measure chunk\n          chunk = !Buffer.isBuffer(chunk)\n            ? Buffer.from(chunk, encoding)\n            : chunk;\n          encoding = undefined;\n\n          if (chunk.length !== 0) {\n            debug('split response');\n            ret = _write.call(res, chunk.slice(0, chunk.length - 1));\n            chunk = chunk.slice(chunk.length - 1, chunk.length);\n            return ret;\n          }\n        }\n\n        ret = _write.call(res, chunk, encoding);\n        sync = false;\n\n        return ret;\n      }\n\n      if (shouldDestroy(req)) {\n        // destroy session\n        debug('destroying');\n        store.destroy(req.sessionID, function ondestroy(err) {\n          if (err) {\n            defer(next, err);\n          }\n\n          debug('destroyed');\n          writeend();\n        });\n\n        return writetop();\n      }\n\n      // no session to save\n      if (!req.session) {\n        debug('no session');\n        return _end.call(res, chunk, encoding);\n      }\n\n      if (!touched) {\n        // touch session\n        req.session.touch()\n        touched = true\n      }\n\n      if (shouldSave(req)) {\n        req.session.save(function onsave(err) {\n          if (err) {\n            defer(next, err);\n          }\n\n          writeend();\n        });\n\n        return writetop();\n      } else if (storeImplementsTouch && shouldTouch(req)) {\n        // store implements touch method\n        debug('touching');\n        store.touch(req.sessionID, req.session, function ontouch(err) {\n          if (err) {\n            defer(next, err);\n          }\n\n          debug('touched');\n          writeend();\n        });\n\n        return writetop();\n      }\n\n      return _end.call(res, chunk, encoding);\n    };\n\n    // generate the session\n    function generate() {\n      store.generate(req);\n      originalId = req.sessionID;\n      originalHash = hash(req.session);\n      wrapmethods(req.session);\n    }\n\n    // inflate the session\n    function inflate (req, sess) {\n      store.createSession(req, sess)\n      originalId = req.sessionID\n      originalHash = hash(sess)\n\n      if (!resaveSession) {\n        savedHash = originalHash\n      }\n\n      wrapmethods(req.session)\n    }\n\n    function rewrapmethods (sess, callback) {\n      return function () {\n        if (req.session !== sess) {\n          wrapmethods(req.session)\n        }\n\n        callback.apply(this, arguments)\n      }\n    }\n\n    // wrap session methods\n    function wrapmethods(sess) {\n      var _reload = sess.reload\n      var _save = sess.save;\n\n      function reload(callback) {\n        debug('reloading %s', this.id)\n        _reload.call(this, rewrapmethods(this, callback))\n      }\n\n      function save() {\n        debug('saving %s', this.id);\n        savedHash = hash(this);\n        _save.apply(this, arguments);\n      }\n\n      Object.defineProperty(sess, 'reload', {\n        configurable: true,\n        enumerable: false,\n        value: reload,\n        writable: true\n      })\n\n      Object.defineProperty(sess, 'save', {\n        configurable: true,\n        enumerable: false,\n        value: save,\n        writable: true\n      });\n    }\n\n    // check if session has been modified\n    function isModified(sess) {\n      return originalId !== sess.id || originalHash !== hash(sess);\n    }\n\n    // check if session has been saved\n    function isSaved(sess) {\n      return originalId === sess.id && savedHash === hash(sess);\n    }\n\n    // determine if session should be destroyed\n    function shouldDestroy(req) {\n      return req.sessionID && unsetDestroy && req.session == null;\n    }\n\n    // determine if session should be saved to store\n    function shouldSave(req) {\n      // cannot set cookie without a session ID\n      if (typeof req.sessionID !== 'string') {\n        debug('session ignored because of bogus req.sessionID %o', req.sessionID);\n        return false;\n      }\n\n      return !saveUninitializedSession && cookieId !== req.sessionID\n        ? isModified(req.session)\n        : !isSaved(req.session)\n    }\n\n    // determine if session should be touched\n    function shouldTouch(req) {\n      // cannot set cookie without a session ID\n      if (typeof req.sessionID !== 'string') {\n        debug('session ignored because of bogus req.sessionID %o', req.sessionID);\n        return false;\n      }\n\n      return cookieId === req.sessionID && !shouldSave(req);\n    }\n\n    // determine if cookie should be set on response\n    function shouldSetCookie(req) {\n      // cannot set cookie without a session ID\n      if (typeof req.sessionID !== 'string') {\n        return false;\n      }\n\n      return cookieId !== req.sessionID\n        ? saveUninitializedSession || isModified(req.session)\n        : rollingSessions || req.session.cookie.expires != null && isModified(req.session);\n    }\n\n    // generate a session if the browser doesn't send a sessionID\n    if (!req.sessionID) {\n      debug('no SID sent, generating session');\n      generate();\n      next();\n      return;\n    }\n\n    // generate the session object\n    debug('fetching %s', req.sessionID);\n    store.get(req.sessionID, function(err, sess){\n      // error handling\n      if (err && err.code !== 'ENOENT') {\n        debug('error %j', err);\n        next(err)\n        return\n      }\n\n      try {\n        if (err || !sess) {\n          debug('no session found')\n          generate()\n        } else {\n          debug('session found')\n          inflate(req, sess)\n        }\n      } catch (e) {\n        next(e)\n        return\n      }\n\n      next()\n    });\n  };\n};\n\n/**\n * Generate a session ID for a new session.\n *\n * @return {String}\n * @private\n */\n\nfunction generateSessionId(sess) {\n  return uid(24);\n}\n\n/**\n * Get the session ID cookie from request.\n *\n * @return {string}\n * @private\n */\n\nfunction getcookie(req, name, secrets) {\n  var header = req.headers.cookie;\n  var raw;\n  var val;\n\n  // read from cookie header\n  if (header) {\n    var cookies = cookie.parse(header);\n\n    raw = cookies[name];\n\n    if (raw) {\n      if (raw.substr(0, 2) === 's:') {\n        val = unsigncookie(raw.slice(2), secrets);\n\n        if (val === false) {\n          debug('cookie signature invalid');\n          val = undefined;\n        }\n      } else {\n        debug('cookie unsigned')\n      }\n    }\n  }\n\n  // back-compat read from cookieParser() signedCookies data\n  if (!val && req.signedCookies) {\n    val = req.signedCookies[name];\n\n    if (val) {\n      deprecate('cookie should be available in req.headers.cookie');\n    }\n  }\n\n  // back-compat read from cookieParser() cookies data\n  if (!val && req.cookies) {\n    raw = req.cookies[name];\n\n    if (raw) {\n      if (raw.substr(0, 2) === 's:') {\n        val = unsigncookie(raw.slice(2), secrets);\n\n        if (val) {\n          deprecate('cookie should be available in req.headers.cookie');\n        }\n\n        if (val === false) {\n          debug('cookie signature invalid');\n          val = undefined;\n        }\n      } else {\n        debug('cookie unsigned')\n      }\n    }\n  }\n\n  return val;\n}\n\n/**\n * Hash the given `sess` object omitting changes to `.cookie`.\n *\n * @param {Object} sess\n * @return {String}\n * @private\n */\n\nfunction hash(sess) {\n  // serialize\n  var str = JSON.stringify(sess, function (key, val) {\n    // ignore sess.cookie property\n    if (this === sess && key === 'cookie') {\n      return\n    }\n\n    return val\n  })\n\n  // hash\n  return crypto\n    .createHash('sha1')\n    .update(str, 'utf8')\n    .digest('hex')\n}\n\n/**\n * Determine if request is secure.\n *\n * @param {Object} req\n * @param {Boolean} [trustProxy]\n * @return {Boolean}\n * @private\n */\n\nfunction issecure(req, trustProxy) {\n  // socket is https server\n  if (req.connection && req.connection.encrypted) {\n    return true;\n  }\n\n  // do not trust proxy\n  if (trustProxy === false) {\n    return false;\n  }\n\n  // no explicit trust; try req.secure from express\n  if (trustProxy !== true) {\n    return req.secure === true\n  }\n\n  // read the proto from x-forwarded-proto header\n  var header = req.headers['x-forwarded-proto'] || '';\n  var index = header.indexOf(',');\n  var proto = index !== -1\n    ? header.substr(0, index).toLowerCase().trim()\n    : header.toLowerCase().trim()\n\n  return proto === 'https';\n}\n\n/**\n * Set cookie on response.\n *\n * @private\n */\n\nfunction setcookie(res, name, val, secret, options) {\n  var signed = 's:' + signature.sign(val, secret);\n  var data = cookie.serialize(name, signed, options);\n\n  debug('set-cookie %s', data);\n\n  var prev = res.getHeader('Set-Cookie') || []\n  var header = Array.isArray(prev) ? prev.concat(data) : [prev, data];\n\n  res.setHeader('Set-Cookie', header)\n}\n\n/**\n * Verify and decode the given `val` with `secrets`.\n *\n * @param {String} val\n * @param {Array} secrets\n * @returns {String|Boolean}\n * @private\n */\nfunction unsigncookie(val, secrets) {\n  for (var i = 0; i < secrets.length; i++) {\n    var result = signature.unsign(val, secrets[i]);\n\n    if (result !== false) {\n      return result;\n    }\n  }\n\n  return false;\n}\n\n\n//# sourceURL=webpack://back/./node_modules/express-session/index.js?");

/***/ }),

/***/ "./node_modules/express-session/session/cookie.js":
/*!********************************************************!*\
  !*** ./node_modules/express-session/session/cookie.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * Connect - session - Cookie\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n */\n\nvar cookie = __webpack_require__(/*! cookie */ \"cookie\")\nvar deprecate = __webpack_require__(/*! depd */ \"depd\")('express-session')\n\n/**\n * Initialize a new `Cookie` with the given `options`.\n *\n * @param {IncomingMessage} req\n * @param {Object} options\n * @api private\n */\n\nvar Cookie = module.exports = function Cookie(options) {\n  this.path = '/';\n  this.maxAge = null;\n  this.httpOnly = true;\n\n  if (options) {\n    if (typeof options !== 'object') {\n      throw new TypeError('argument options must be a object')\n    }\n\n    for (var key in options) {\n      if (key !== 'data') {\n        this[key] = options[key]\n      }\n    }\n  }\n\n  if (this.originalMaxAge === undefined || this.originalMaxAge === null) {\n    this.originalMaxAge = this.maxAge\n  }\n};\n\n/*!\n * Prototype.\n */\n\nCookie.prototype = {\n\n  /**\n   * Set expires `date`.\n   *\n   * @param {Date} date\n   * @api public\n   */\n\n  set expires(date) {\n    this._expires = date;\n    this.originalMaxAge = this.maxAge;\n  },\n\n  /**\n   * Get expires `date`.\n   *\n   * @return {Date}\n   * @api public\n   */\n\n  get expires() {\n    return this._expires;\n  },\n\n  /**\n   * Set expires via max-age in `ms`.\n   *\n   * @param {Number} ms\n   * @api public\n   */\n\n  set maxAge(ms) {\n    if (ms && typeof ms !== 'number' && !(ms instanceof Date)) {\n      throw new TypeError('maxAge must be a number or Date')\n    }\n\n    if (ms instanceof Date) {\n      deprecate('maxAge as Date; pass number of milliseconds instead')\n    }\n\n    this.expires = typeof ms === 'number'\n      ? new Date(Date.now() + ms)\n      : ms;\n  },\n\n  /**\n   * Get expires max-age in `ms`.\n   *\n   * @return {Number}\n   * @api public\n   */\n\n  get maxAge() {\n    return this.expires instanceof Date\n      ? this.expires.valueOf() - Date.now()\n      : this.expires;\n  },\n\n  /**\n   * Return cookie data object.\n   *\n   * @return {Object}\n   * @api private\n   */\n\n  get data() {\n    return {\n      originalMaxAge: this.originalMaxAge\n      , expires: this._expires\n      , secure: this.secure\n      , httpOnly: this.httpOnly\n      , domain: this.domain\n      , path: this.path\n      , sameSite: this.sameSite\n    }\n  },\n\n  /**\n   * Return a serialized cookie string.\n   *\n   * @return {String}\n   * @api public\n   */\n\n  serialize: function(name, val){\n    return cookie.serialize(name, val, this.data);\n  },\n\n  /**\n   * Return JSON representation of this cookie.\n   *\n   * @return {Object}\n   * @api private\n   */\n\n  toJSON: function(){\n    return this.data;\n  }\n};\n\n\n//# sourceURL=webpack://back/./node_modules/express-session/session/cookie.js?");

/***/ }),

/***/ "./node_modules/express-session/session/memory.js":
/*!********************************************************!*\
  !*** ./node_modules/express-session/session/memory.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * express-session\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Store = __webpack_require__(/*! ./store */ \"./node_modules/express-session/session/store.js\")\nvar util = __webpack_require__(/*! util */ \"util\")\n\n/**\n * Shim setImmediate for node.js < 0.10\n * @private\n */\n\n/* istanbul ignore next */\nvar defer = typeof setImmediate === 'function'\n  ? setImmediate\n  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }\n\n/**\n * Module exports.\n */\n\nmodule.exports = MemoryStore\n\n/**\n * A session store in memory.\n * @public\n */\n\nfunction MemoryStore() {\n  Store.call(this)\n  this.sessions = Object.create(null)\n}\n\n/**\n * Inherit from Store.\n */\n\nutil.inherits(MemoryStore, Store)\n\n/**\n * Get all active sessions.\n *\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.all = function all(callback) {\n  var sessionIds = Object.keys(this.sessions)\n  var sessions = Object.create(null)\n\n  for (var i = 0; i < sessionIds.length; i++) {\n    var sessionId = sessionIds[i]\n    var session = getSession.call(this, sessionId)\n\n    if (session) {\n      sessions[sessionId] = session;\n    }\n  }\n\n  callback && defer(callback, null, sessions)\n}\n\n/**\n * Clear all sessions.\n *\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.clear = function clear(callback) {\n  this.sessions = Object.create(null)\n  callback && defer(callback)\n}\n\n/**\n * Destroy the session associated with the given session ID.\n *\n * @param {string} sessionId\n * @public\n */\n\nMemoryStore.prototype.destroy = function destroy(sessionId, callback) {\n  delete this.sessions[sessionId]\n  callback && defer(callback)\n}\n\n/**\n * Fetch session by the given session ID.\n *\n * @param {string} sessionId\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.get = function get(sessionId, callback) {\n  defer(callback, null, getSession.call(this, sessionId))\n}\n\n/**\n * Commit the given session associated with the given sessionId to the store.\n *\n * @param {string} sessionId\n * @param {object} session\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.set = function set(sessionId, session, callback) {\n  this.sessions[sessionId] = JSON.stringify(session)\n  callback && defer(callback)\n}\n\n/**\n * Get number of active sessions.\n *\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.length = function length(callback) {\n  this.all(function (err, sessions) {\n    if (err) return callback(err)\n    callback(null, Object.keys(sessions).length)\n  })\n}\n\n/**\n * Touch the given session object associated with the given session ID.\n *\n * @param {string} sessionId\n * @param {object} session\n * @param {function} callback\n * @public\n */\n\nMemoryStore.prototype.touch = function touch(sessionId, session, callback) {\n  var currentSession = getSession.call(this, sessionId)\n\n  if (currentSession) {\n    // update expiration\n    currentSession.cookie = session.cookie\n    this.sessions[sessionId] = JSON.stringify(currentSession)\n  }\n\n  callback && defer(callback)\n}\n\n/**\n * Get session from the store.\n * @private\n */\n\nfunction getSession(sessionId) {\n  var sess = this.sessions[sessionId]\n\n  if (!sess) {\n    return\n  }\n\n  // parse\n  sess = JSON.parse(sess)\n\n  if (sess.cookie) {\n    var expires = typeof sess.cookie.expires === 'string'\n      ? new Date(sess.cookie.expires)\n      : sess.cookie.expires\n\n    // destroy expired session\n    if (expires && expires <= Date.now()) {\n      delete this.sessions[sessionId]\n      return\n    }\n  }\n\n  return sess\n}\n\n\n//# sourceURL=webpack://back/./node_modules/express-session/session/memory.js?");

/***/ }),

/***/ "./node_modules/express-session/session/session.js":
/*!*********************************************************!*\
  !*** ./node_modules/express-session/session/session.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("/*!\n * Connect - session - Session\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * MIT Licensed\n */\n\n\n\n/**\n * Expose Session.\n */\n\nmodule.exports = Session;\n\n/**\n * Create a new `Session` with the given request and `data`.\n *\n * @param {IncomingRequest} req\n * @param {Object} data\n * @api private\n */\n\nfunction Session(req, data) {\n  Object.defineProperty(this, 'req', { value: req });\n  Object.defineProperty(this, 'id', { value: req.sessionID });\n\n  if (typeof data === 'object' && data !== null) {\n    // merge data into this, ignoring prototype properties\n    for (var prop in data) {\n      if (!(prop in this)) {\n        this[prop] = data[prop]\n      }\n    }\n  }\n}\n\n/**\n * Update reset `.cookie.maxAge` to prevent\n * the cookie from expiring when the\n * session is still active.\n *\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'touch', function touch() {\n  return this.resetMaxAge();\n});\n\n/**\n * Reset `.maxAge` to `.originalMaxAge`.\n *\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'resetMaxAge', function resetMaxAge() {\n  this.cookie.maxAge = this.cookie.originalMaxAge;\n  return this;\n});\n\n/**\n * Save the session data with optional callback `fn(err)`.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'save', function save(fn) {\n  this.req.sessionStore.set(this.id, this, fn || function(){});\n  return this;\n});\n\n/**\n * Re-loads the session data _without_ altering\n * the maxAge properties. Invokes the callback `fn(err)`,\n * after which time if no exception has occurred the\n * `req.session` property will be a new `Session` object,\n * although representing the same session.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'reload', function reload(fn) {\n  var req = this.req\n  var store = this.req.sessionStore\n\n  store.get(this.id, function(err, sess){\n    if (err) return fn(err);\n    if (!sess) return fn(new Error('failed to load session'));\n    store.createSession(req, sess);\n    fn();\n  });\n  return this;\n});\n\n/**\n * Destroy `this` session.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'destroy', function destroy(fn) {\n  delete this.req.session;\n  this.req.sessionStore.destroy(this.id, fn);\n  return this;\n});\n\n/**\n * Regenerate this request's session.\n *\n * @param {Function} fn\n * @return {Session} for chaining\n * @api public\n */\n\ndefineMethod(Session.prototype, 'regenerate', function regenerate(fn) {\n  this.req.sessionStore.regenerate(this.req, fn);\n  return this;\n});\n\n/**\n * Helper function for creating a method on a prototype.\n *\n * @param {Object} obj\n * @param {String} name\n * @param {Function} fn\n * @private\n */\nfunction defineMethod(obj, name, fn) {\n  Object.defineProperty(obj, name, {\n    configurable: true,\n    enumerable: false,\n    value: fn,\n    writable: true\n  });\n};\n\n\n//# sourceURL=webpack://back/./node_modules/express-session/session/session.js?");

/***/ }),

/***/ "./node_modules/express-session/session/store.js":
/*!*******************************************************!*\
  !*** ./node_modules/express-session/session/store.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * Connect - session - Store\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Cookie = __webpack_require__(/*! ./cookie */ \"./node_modules/express-session/session/cookie.js\")\nvar EventEmitter = __webpack_require__(/*! events */ \"events\").EventEmitter\nvar Session = __webpack_require__(/*! ./session */ \"./node_modules/express-session/session/session.js\")\nvar util = __webpack_require__(/*! util */ \"util\")\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = Store\n\n/**\n * Abstract base class for session stores.\n * @public\n */\n\nfunction Store () {\n  EventEmitter.call(this)\n}\n\n/**\n * Inherit from EventEmitter.\n */\n\nutil.inherits(Store, EventEmitter)\n\n/**\n * Re-generate the given requests's session.\n *\n * @param {IncomingRequest} req\n * @return {Function} fn\n * @api public\n */\n\nStore.prototype.regenerate = function(req, fn){\n  var self = this;\n  this.destroy(req.sessionID, function(err){\n    self.generate(req);\n    fn(err);\n  });\n};\n\n/**\n * Load a `Session` instance via the given `sid`\n * and invoke the callback `fn(err, sess)`.\n *\n * @param {String} sid\n * @param {Function} fn\n * @api public\n */\n\nStore.prototype.load = function(sid, fn){\n  var self = this;\n  this.get(sid, function(err, sess){\n    if (err) return fn(err);\n    if (!sess) return fn();\n    var req = { sessionID: sid, sessionStore: self };\n    fn(null, self.createSession(req, sess))\n  });\n};\n\n/**\n * Create session from JSON `sess` data.\n *\n * @param {IncomingRequest} req\n * @param {Object} sess\n * @return {Session}\n * @api private\n */\n\nStore.prototype.createSession = function(req, sess){\n  var expires = sess.cookie.expires\n  var originalMaxAge = sess.cookie.originalMaxAge\n\n  sess.cookie = new Cookie(sess.cookie);\n\n  if (typeof expires === 'string') {\n    // convert expires to a Date object\n    sess.cookie.expires = new Date(expires)\n  }\n\n  // keep originalMaxAge intact\n  sess.cookie.originalMaxAge = originalMaxAge\n\n  req.session = new Session(req, sess);\n  return req.session;\n};\n\n\n//# sourceURL=webpack://back/./node_modules/express-session/session/store.js?");

/***/ }),

/***/ "./node_modules/on-headers/index.js":
/*!******************************************!*\
  !*** ./node_modules/on-headers/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("/*!\n * on-headers\n * Copyright(c) 2014 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = onHeaders\n\n/**\n * Create a replacement writeHead method.\n *\n * @param {function} prevWriteHead\n * @param {function} listener\n * @private\n */\n\nfunction createWriteHead (prevWriteHead, listener) {\n  var fired = false\n\n  // return function with core name and argument list\n  return function writeHead (statusCode) {\n    // set headers from arguments\n    var args = setWriteHeadHeaders.apply(this, arguments)\n\n    // fire listener\n    if (!fired) {\n      fired = true\n      listener.call(this)\n\n      // pass-along an updated status code\n      if (typeof args[0] === 'number' && this.statusCode !== args[0]) {\n        args[0] = this.statusCode\n        args.length = 1\n      }\n    }\n\n    return prevWriteHead.apply(this, args)\n  }\n}\n\n/**\n * Execute a listener when a response is about to write headers.\n *\n * @param {object} res\n * @return {function} listener\n * @public\n */\n\nfunction onHeaders (res, listener) {\n  if (!res) {\n    throw new TypeError('argument res is required')\n  }\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('argument listener must be a function')\n  }\n\n  res.writeHead = createWriteHead(res.writeHead, listener)\n}\n\n/**\n * Set headers contained in array on the response object.\n *\n * @param {object} res\n * @param {array} headers\n * @private\n */\n\nfunction setHeadersFromArray (res, headers) {\n  for (var i = 0; i < headers.length; i++) {\n    res.setHeader(headers[i][0], headers[i][1])\n  }\n}\n\n/**\n * Set headers contained in object on the response object.\n *\n * @param {object} res\n * @param {object} headers\n * @private\n */\n\nfunction setHeadersFromObject (res, headers) {\n  var keys = Object.keys(headers)\n  for (var i = 0; i < keys.length; i++) {\n    var k = keys[i]\n    if (k) res.setHeader(k, headers[k])\n  }\n}\n\n/**\n * Set headers and other properties on the response object.\n *\n * @param {number} statusCode\n * @private\n */\n\nfunction setWriteHeadHeaders (statusCode) {\n  var length = arguments.length\n  var headerIndex = length > 1 && typeof arguments[1] === 'string'\n    ? 2\n    : 1\n\n  var headers = length >= headerIndex + 1\n    ? arguments[headerIndex]\n    : undefined\n\n  this.statusCode = statusCode\n\n  if (Array.isArray(headers)) {\n    // handle array case\n    setHeadersFromArray(this, headers)\n  } else if (headers) {\n    // handle object case\n    setHeadersFromObject(this, headers)\n  }\n\n  // copy leading arguments\n  var args = new Array(Math.min(length, headerIndex))\n  for (var i = 0; i < args.length; i++) {\n    args[i] = arguments[i]\n  }\n\n  return args\n}\n\n\n//# sourceURL=webpack://back/./node_modules/on-headers/index.js?");

/***/ }),

/***/ "./node_modules/random-bytes/index.js":
/*!********************************************!*\
  !*** ./node_modules/random-bytes/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * random-bytes\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\")\n\n/**\n * Module variables.\n * @private\n */\n\nvar generateAttempts = crypto.randomBytes === crypto.pseudoRandomBytes ? 1 : 3\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = randomBytes\nmodule.exports.sync = randomBytesSync\n\n/**\n * Generates strong pseudo-random bytes.\n *\n * @param {number} size\n * @param {function} [callback]\n * @return {Promise}\n * @public\n */\n\nfunction randomBytes(size, callback) {\n  // validate callback is a function, if provided\n  if (callback !== undefined && typeof callback !== 'function') {\n    throw new TypeError('argument callback must be a function')\n  }\n\n  // require the callback without promises\n  if (!callback && !global.Promise) {\n    throw new TypeError('argument callback is required')\n  }\n\n  if (callback) {\n    // classic callback style\n    return generateRandomBytes(size, generateAttempts, callback)\n  }\n\n  return new Promise(function executor(resolve, reject) {\n    generateRandomBytes(size, generateAttempts, function onRandomBytes(err, str) {\n      if (err) return reject(err)\n      resolve(str)\n    })\n  })\n}\n\n/**\n * Generates strong pseudo-random bytes sync.\n *\n * @param {number} size\n * @return {Buffer}\n * @public\n */\n\nfunction randomBytesSync(size) {\n  var err = null\n\n  for (var i = 0; i < generateAttempts; i++) {\n    try {\n      return crypto.randomBytes(size)\n    } catch (e) {\n      err = e\n    }\n  }\n\n  throw err\n}\n\n/**\n * Generates strong pseudo-random bytes.\n *\n * @param {number} size\n * @param {number} attempts\n * @param {function} callback\n * @private\n */\n\nfunction generateRandomBytes(size, attempts, callback) {\n  crypto.randomBytes(size, function onRandomBytes(err, buf) {\n    if (!err) return callback(null, buf)\n    if (!--attempts) return callback(err)\n    setTimeout(generateRandomBytes.bind(null, size, attempts, callback), 10)\n  })\n}\n\n\n//# sourceURL=webpack://back/./node_modules/random-bytes/index.js?");

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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar express_session_1 = __importDefault(__webpack_require__(/*! express-session */ \"./node_modules/express-session/index.js\"));\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\nvar _routes_1 = __importDefault(__webpack_require__(/*! @routes */ \"./src/routes/index.ts\"));\nvar _config_1 = __webpack_require__(/*! @config */ \"./src/config/index.ts\");\nvar enviroment_conf_1 = __webpack_require__(/*! @config/enviroment.conf */ \"./src/config/enviroment.conf.ts\");\nvar app = express_1.default();\nvar serverHttp = http_1.default.createServer(app); //Socket Io\n/* export const io = require(\"socket.io\")(serverHttp);\nio.on(\"connection\", (socket: any) => {\n  console.log(\"conectado\")\n  let mensajesGuardados: any = [];\n  socket.emit(\n    \"mensajes\",\n    mensajesGuardados.length > 0 ? mensajesGuardados : \"Sin mensajes\"\n  );\n}) */\nvar mongoInits = _config_1.mongoInit;\napp.use(express_1.default.json());\napp.use(express_session_1.default({\n    secret: \"melon\",\n    resave: true,\n    saveUninitialized: true\n}));\napp.use(_routes_1.default);\nvar server = serverHttp.listen(enviroment_conf_1.GLOBAL_PORT, enviroment_conf_1.BASE_GLOBAL_URL, function () {\n    return console.log(\"Server running in \" + enviroment_conf_1.BASE_GLOBAL_URL + \":\" + enviroment_conf_1.GLOBAL_PORT);\n});\nserver.on(\"error\", function (error) { return console.log(\"Error \" + error); });\n\n\n//# sourceURL=webpack://back/./src/index.ts?");

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

/***/ "./node_modules/uid-safe/index.js":
/*!****************************************!*\
  !*** ./node_modules/uid-safe/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * uid-safe\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar randomBytes = __webpack_require__(/*! random-bytes */ \"./node_modules/random-bytes/index.js\")\n\n/**\n * Module variables.\n * @private\n */\n\nvar EQUAL_END_REGEXP = /=+$/\nvar PLUS_GLOBAL_REGEXP = /\\+/g\nvar SLASH_GLOBAL_REGEXP = /\\//g\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = uid\nmodule.exports.sync = uidSync\n\n/**\n * Create a unique ID.\n *\n * @param {number} length\n * @param {function} [callback]\n * @return {Promise}\n * @public\n */\n\nfunction uid (length, callback) {\n  // validate callback is a function, if provided\n  if (callback !== undefined && typeof callback !== 'function') {\n    throw new TypeError('argument callback must be a function')\n  }\n\n  // require the callback without promises\n  if (!callback && !global.Promise) {\n    throw new TypeError('argument callback is required')\n  }\n\n  if (callback) {\n    // classic callback style\n    return generateUid(length, callback)\n  }\n\n  return new Promise(function executor (resolve, reject) {\n    generateUid(length, function onUid (err, str) {\n      if (err) return reject(err)\n      resolve(str)\n    })\n  })\n}\n\n/**\n * Create a unique ID sync.\n *\n * @param {number} length\n * @return {string}\n * @public\n */\n\nfunction uidSync (length) {\n  return toString(randomBytes.sync(length))\n}\n\n/**\n * Generate a unique ID string.\n *\n * @param {number} length\n * @param {function} callback\n * @private\n */\n\nfunction generateUid (length, callback) {\n  randomBytes(length, function (err, buf) {\n    if (err) return callback(err)\n    callback(null, toString(buf))\n  })\n}\n\n/**\n * Change a Buffer into a string.\n *\n * @param {Buffer} buf\n * @return {string}\n * @private\n */\n\nfunction toString (buf) {\n  return buf.toString('base64')\n    .replace(EQUAL_END_REGEXP, '')\n    .replace(PLUS_GLOBAL_REGEXP, '-')\n    .replace(SLASH_GLOBAL_REGEXP, '_')\n}\n\n\n//# sourceURL=webpack://back/./node_modules/uid-safe/index.js?");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");;

/***/ }),

/***/ "cookie-signature":
/*!***********************************!*\
  !*** external "cookie-signature" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("cookie-signature");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

module.exports = require("debug");;

/***/ }),

/***/ "depd":
/*!***********************!*\
  !*** external "depd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("depd");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");;

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

/***/ "parseurl":
/*!***************************!*\
  !*** external "parseurl" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("parseurl");;

/***/ }),

/***/ "safe-buffer":
/*!******************************!*\
  !*** external "safe-buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("safe-buffer");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");;

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