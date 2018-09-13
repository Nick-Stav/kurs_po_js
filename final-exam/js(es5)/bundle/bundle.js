(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	let propEngineer = require('../parts/propEngineer.js'); //1) модальное окно prop_engineer
	let formMassage = require('../parts/formMassage.js'); //2) форма обратной связи
	let modalPopup = require('../parts/modalPopup.js'); //3) модальное окно prop_engineer
	let timer = require('../parts/timer.js');//4) таймер
	let tabs = require('../parts/tabs.js');//5) табы 
	let img = require('../parts/img.js'); //6) картинки
	let calc = require('../parts/calc.js'); //7) калькулятор


	propEngineer();
	formMassage();
	modalPopup();
	timer();
	tabs();
	img();
	calc();


});
},{"../parts/calc.js":50,"../parts/formMassage.js":51,"../parts/img.js":52,"../parts/modalPopup.js":53,"../parts/propEngineer.js":54,"../parts/tabs.js":55,"../parts/timer.js":56}],2:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],3:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],4:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":23}],5:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":6,"./_wks":46}],6:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],7:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],8:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":2}],9:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],10:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":13}],11:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":16,"./_is-object":23}],12:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":7,"./_ctx":8,"./_global":16,"./_hide":18,"./_redefine":35}],13:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],14:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":9,"./_fails":13,"./_hide":18,"./_redefine":35,"./_wks":46}],15:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":4,"./_ctx":8,"./_is-array-iter":22,"./_iter-call":24,"./_to-length":42,"./core.get-iterator-method":47}],16:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],17:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],18:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":10,"./_object-dp":30,"./_property-desc":33}],19:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":16}],20:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":10,"./_dom-create":11,"./_fails":13}],21:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],22:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":26,"./_wks":46}],23:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],24:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":4}],25:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":46}],26:[function(require,module,exports){
module.exports = {};

},{}],27:[function(require,module,exports){
module.exports = false;

},{}],28:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":6,"./_global":16,"./_task":40}],29:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":2}],30:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":4,"./_descriptors":10,"./_ie8-dom-define":20,"./_to-primitive":43}],31:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],32:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":4,"./_is-object":23,"./_new-promise-capability":29}],33:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],34:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":35}],35:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":7,"./_global":16,"./_has":17,"./_hide":18,"./_uid":44}],36:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":10,"./_global":16,"./_object-dp":30,"./_wks":46}],37:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":17,"./_object-dp":30,"./_wks":46}],38:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":7,"./_global":16,"./_library":27}],39:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":2,"./_an-object":4,"./_wks":46}],40:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":6,"./_ctx":8,"./_dom-create":11,"./_global":16,"./_html":19,"./_invoke":21}],41:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],42:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":41}],43:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":23}],44:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],45:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":16}],46:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":16,"./_shared":38,"./_uid":44}],47:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":5,"./_core":7,"./_iterators":26,"./_wks":46}],48:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":2,"./_an-instance":3,"./_classof":5,"./_core":7,"./_ctx":8,"./_export":12,"./_for-of":15,"./_global":16,"./_is-object":23,"./_iter-detect":25,"./_library":27,"./_microtask":28,"./_new-promise-capability":29,"./_perform":31,"./_promise-resolve":32,"./_redefine-all":34,"./_set-species":36,"./_set-to-string-tag":37,"./_species-constructor":39,"./_task":40,"./_user-agent":45,"./_wks":46}],49:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":14}],50:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.promise");

function calc() {
  //Calc
  var popupCalcBtn = document.getElementsByClassName('popup_calc_btn'),
      popupCalc = document.getElementsByClassName('popup_calc')[0],
      popupBalconIcons = document.getElementsByClassName('icons_image'),
      //
  popupBalconBigIcons = popupCalc.getElementsByClassName('big_image'),
      //
  messageText = '',
      imageValue = '',
      windowWidth = document.getElementById('width'),
      windowHeight = document.getElementById('height'),
      popupCalcNextBtn = document.getElementsByClassName('popup_calc_button')[0],
      popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
      popupTypeOfWork = document.getElementById('view_type'),
      selectValue = "tree",
      checkbox = document.getElementsByClassName("checkbox"),
      checkboxCustom = document.getElementsByClassName("checkbox-custom"),
      checkboxLabel = document.getElementsByClassName("label"),
      styleOfMaterial = '',
      popupCalcProfileNextBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
      popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
      messagePost = new Object(),
      target = null;
  messagePost.loading = 'Идет отправка';
  messagePost.success = 'Спасибо, письмо отправлено';
  messagePost.failure = 'К сожелению что-то пошло не так';
  popupCalc.style.top = 'auto';
  popupCalc.style.left = 'auto';
  popupCalcNextBtn.disabled = true;

  for (var i = 0; i < popupBalconIcons.length; i++) {
    popupBalconIcons[i].style.top = 'inherit';
    popupBalconIcons[i].style.left = 'inherit';
  }

  function tabHideBalcon(elementNumber) {
    for (var _i = elementNumber; _i < popupBalconBigIcons.length; _i++) {
      popupBalconBigIcons[_i].classList.add('hide');

      popupBalconBigIcons[_i].classList.remove('show');
    }
  }

  function windowCaclulator() {
    for (var _i2 = 0; _i2 < popupCalcBtn.length; _i2++) {
      popupCalcBtn[_i2].addEventListener('click', function () {
        popupCalc.style.display = 'block';
      });
    }

    tabHideBalcon(1);

    function tabShowBalcon(number) {
      if (popupBalconBigIcons[number].classList.contains('hide')) {
        tabHideBalcon(0);
        popupBalconBigIcons[number].classList.remove('hide');
        popupBalconBigIcons[number].classList.add('show');
      }
    }

    for (var j = 0; j < popupBalconIcons.length; j++) {
      popupBalconIcons[j].addEventListener('click', function () {
        target = event.target;

        if (target.classList.contains('icons_image') || target.classList.contains('balcon_icons')) {
          for (var _i3 = 0; _i3 < popupBalconIcons.length; _i3++) {
            if (target == popupBalconIcons[_i3]) {
              tabShowBalcon(_i3);
              imageValue = popupBalconIcons[_i3].alt;
              messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
              break;
            }
          }
        }
      });
    }

    windowWidth.addEventListener('change', function () {
      if (windowWidth.value == '' || isNaN(windowWidth.value)) {
        popupCalcNextBtn.disabled = true;
        popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";
      } else {
        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

        if (windowHeight.value == '' || isNaN(windowHeight.value)) {
          popupCalcNextBtn.disabled = true;
        } else {
          popupCalcNextBtn.disabled = false;
        }
      }

      return messageText;
    });
    windowHeight.addEventListener('change', function () {
      if (windowHeight.value == '' || isNaN(windowHeight.value)) {
        popupCalcNextBtn.disabled = true;
        popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";
      } else {
        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

        if (windowWidth.value == '' || isNaN(windowWidth.value)) {
          popupCalcNextBtn.disabled = true;
        } else {
          popupCalcNextBtn.disabled = false;
        }
      }

      return messageText;
    });
    popupCalcNextBtn.addEventListener('click', function () {
      popupCalc.style.display = 'none';
      popupCalcProfile.style.display = 'block';
    });
    popupCalcProfileNextBtn.addEventListener('click', function () {
      popupCalcProfile.style.display = 'none';
      popupCalcEnd.style.display = 'block';
      sendForm(popupCalcEnd);
    });
    popupTypeOfWork.addEventListener('change', function () {
      selectValue = this.options[this.selectedIndex].value;
      messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
      return messageText;
    });

    for (var _i4 = 0; _i4 < checkbox.length; _i4++) {
      checkbox[_i4].addEventListener('change', function () {
        if (checkbox[0].checked == true) {
          styleOfMaterial = checkboxCustom[0].id;
          checkbox[1].disabled = true;
          checkboxCustom[1].disabled = true;
          checkboxLabel[1].disabled = true;
        } else {
          if (checkbox[1].checked == true) {
            styleOfMaterial = checkboxCustom[1].id;
            checkbox[0].disabled = true;
            checkboxCustom[0].disabled = true;
            checkboxLabel[0].disabled = true;
          } else {
            checkbox[0].disabled = false;
            checkboxCustom[0].disabled = false;
            checkboxLabel[0].disabled = false;
            checkbox[1].disabled = false;
            checkboxCustom[1].disabled = false;
            checkboxLabel[1].disabled = false;
          }
        }

        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + 'мм тип материала:' + selectValue + 'клиент так же желает вид окон: ' + styleOfMaterial;
        return messageText;
      });
    }

    function sendForm(element) {
      var input = element.getElementsByTagName('input'),
          inputName = input[0],
          inputPhone = input[1],
          popupForm = element.getElementsByClassName('form')[0],
          statusMessage = document.createElement('div'),
          elementBtn = element.getElementsByClassName('btn-block')[0];

      function clearInput() {
        for (var _i5 = 0; _i5 < input.length; _i5++) {
          input[_i5].value = '';
        }
      }

      clearInput();
      elementBtn.disabled = true;
      statusMessage.classList.add('status');
      popupForm.appendChild(statusMessage);
      element.style.display = 'block';
      inputPhone.addEventListener('change', function () {
        if (isNaN(inputPhone.value) || inputPhone.value == '') {
          statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";
          elementBtn.disabled = true;
        } else {
          statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";
          elementBtn.disabled = false;
          messagePost.txt = "Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value + messageText;
        }
      });
      element.addEventListener('submit', function (elem) {
        elem.preventDefault();

        function postData(data) {
          return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

            request.onreadystatechange = function () {
              if (request.readyState < 4) {
                resolve();
              } else if (request.readyState === 4) {
                if (request.status === 200 && request.status < 300) {
                  resolve();
                } else {
                  reject();
                }
              }
            };

            request.send(data);
          });
        } // postData


        postData(messagePost.txt).then(function () {
          return statusMessage.innerHTML = messagePost.loading;
        }).then(function () {
          statusMessage.innerHTML = messagePost.success;
          setTimeout(function () {
            statusMessage.innerHTML = '';
          }, 3000);
        }).catch(function () {
          return statusMessage.innerHTML = messagePost.failure;
        }).then(clearInput);
      });
    }
  }

  windowCaclulator();
  var popupCalcCloseBotton = document.getElementsByClassName('popup_calc_close')[0];
  popupCalcCloseBotton.addEventListener('click', function () {
    popupCalc.style.display = 'none';
    tabHideBalcon(0);
    popupBalconBigIcons[0].classList.remove('hide');
    popupBalconBigIcons[0].classList.add('show');
    windowWidth.value = null;
    windowHeight.value = null;
  });
  var popupCalcProfileCloseBotton = document.getElementsByClassName('popup_calc_profile_close')[0];
  popupCalcProfileCloseBotton.addEventListener('click', function () {
    popupCalcProfile.style.display = 'none';
    tabHideBalcon(0);
    popupBalconBigIcons[0].classList.remove('hide');
    popupBalconBigIcons[0].classList.add('show');
    windowWidth.value = null;
    windowHeight.value = null;
    popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];
    checkbox[0].checked = false;
    checkbox[1].checked = false;
    checkbox.value = null;
  });
  var popupCalcEndCloseBotton = document.getElementsByClassName('popup_calc_end_close')[0];
  popupCalcEndCloseBotton.addEventListener('click', function () {
    popupCalcEnd.style.display = 'none';
    tabHideBalcon(0);
    popupBalconBigIcons[0].classList.remove('hide');
    popupBalconBigIcons[0].classList.add('show');
    windowWidth.value = null;
    windowHeight.value = null;
    popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];
    checkbox[0].checked = false;
    checkbox[1].checked = false;
    checkbox.value = null;
  });
}

module.exports = calc;
},{"core-js/modules/es6.promise":48}],51:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

function formMassage() {
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с Вами свяжемся";
  message.failure = "Что-то пошло не так...";
  var form = document.getElementsByTagName('form'),
      statusMessage = document.createElement('div');

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = "_ (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });

    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }

  var _loop = function _loop(i) {
    var input = form[i].getElementsByTagName('input'),
        input_tel = document.getElementsByName("user_phone");
    input_tel[i].addEventListener("input", mask);
    input_tel[i].addEventListener("focus", mask);
    input_tel[i].addEventListener("blur", mask);
    form[i].addEventListener('submit', function (event) {
      form[i].appendChild(statusMessage);
      event.preventDefault(); //AJAX

      var request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var formData = new FormData(form[i]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            console.log(form[i]);
            statusMessage.innerHTML = message.success;
          } else {
            statusMessage.innerHTML = message.failure;
          }
        }
      };

      for (var _i = 0; _i < input.length; _i++) {
        input[_i].value = '';
      }
    });
  };

  for (var i = 0; i < form.length; i++) {
    _loop(i);
  }
}

module.exports = formMassage;
},{"core-js/modules/es6.regexp.replace":49}],52:[function(require,module,exports){
"use strict";

function img() {
  var imageWorks = document.querySelector('.works'),
      //блок портфолио
  link_image = imageWorks.getElementsByTagName('a'),
      //ссылки в блоке портфолио
  image = imageWorks.getElementsByTagName('img'),
      //все картинки
  divImage = document.createElement('div'); //создаем новый блок

  divImage.classList.add('div-image'); //вешаем класс в див

  document.body.appendChild(divImage); //выводим див
  //убираем лишний элемент - лупу

  for (var i = 0; i < image.length; i++) {
    if (image[i].classList.contains('lupa') == true) {
      image[i].classList.add('image-gallery');
      image[i].remove();
    } else {
      console.log('None');
    }
  }

  var _loop = function _loop(_i) {
    image[_i].addEventListener('click', function (event) {
      event.preventDefault('link_image'); //убираем дефолтное действие
      //работаем с адресом картинки

      var index = _i + 1;
      var imageNew = image[_i].src = 'img/our_works/big_img/' + index + '.png';
      image.src = 'img/our_works/' + index + '.png';
      var imgQwe = divImage.getElementsByTagName('img');
      divImage.innerHTML = '<div class="bigImg">' + '<img src="' + imageNew + '">' + '</div>'; //запрещаем прокрутку

      document.onmousewheel = document.onwheel = function () {
        return false;
      };

      document.addEventListener("MozMousePixelScroll", function () {
        return false;
      }, false);

      document.onkeydown = function (e) {
        if (e.keyCode >= 33 && e.keyCode <= 40) return false;
      };

      divImage.style.cssText = "position: fixed; \
			    overflow: hidden; \
			    width: 100%; \
			    height: 100%; \
			    background-color: rgba(0, 0, 0, .35); \
			    top: 0; \
			    text-align: center; \
			    padding-bottom: 50px; \
			  ";
      image[_i].style.display = 'none'; //картинка в новом блоке

      divImage.addEventListener('click', function () {
        image[_i].style.display = 'block';
        divImage.style.display = 'none';
        image[_i].src = 'img/our_works/' + index + '.png';

        document.onmousewheel = document.onwheel = function () {
          return true;
        };

        document.addEventListener("MozMousePixelScroll", function () {
          return true;
        }, true);

        document.onkeydown = function (e) {
          if (e.keyCode >= 33 && e.keyCode <= 40) return true;
        };
      });
      event.preventDefault('link_image');
    });
  };

  for (var _i = 0; _i < image.length; _i++) {
    _loop(_i);
  }
}

module.exports = img;
},{}],53:[function(require,module,exports){
"use strict";

function modalPopup() {
  var popup = document.getElementsByClassName('popup')[0],
      //модалка
  callBackHead = document.getElementsByClassName('phone_link')[0],
      //надпись в шапке
  callBackBottom = document.getElementsByClassName('phone_link')[1],
      //надпись в подвале
  closeModalPopup = document.getElementsByClassName('popup_close')[0],
      //крестик закрываем модалку
  closeModalPopupBack = document.getElementsByClassName('popup_dialog')[0]; //back закрываем модалку
  //вызываем модалку при клике на надпись в шапке

  callBackHead.addEventListener('click', function (event) {
    return popup.style.display = 'flex';
  }); //вызываем модалку при клике на надпись в подвале

  callBackBottom.addEventListener('click', function (event) {
    return popup.style.display = 'flex';
  }); //закрываем модалку (крестик)

  closeModalPopup.addEventListener('click', function (event) {
    return popup.style.display = 'none';
  }); //закрываем модалку (back)

  closeModalPopupBack.addEventListener('click', function (event) {
    return popup.style.display = 'none';
  }); //вызываем окно popup через 60 сек

  function timePopup() {
    popup.style.display = 'flex';
  }

  setTimeout(timePopup, 60000);
}

module.exports = modalPopup;
},{}],54:[function(require,module,exports){
"use strict";

function propEngineer() {
  var headerBtn = document.getElementsByClassName('header_btn')[0],
      popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      closeModalHead = document.getElementsByClassName('popup_close')[1],
      closeModalBack = document.getElementsByClassName('popup_dialog')[1]; //событие клик по кнопке в голове, показывает модалку

  headerBtn.addEventListener('click', function (event) {
    return popupEngineer.style.display = 'flex';
  }); //событие клик по кнопке в голове, закрывает модалку

  closeModalHead.addEventListener('click', function (event) {
    return popupEngineer.style.display = 'none';
  }); //событие клик по полю экрана, закрывает модалку

  closeModalBack.addEventListener('click', function (event) {
    return popupEngineer.style.display = 'none';
  });
}

module.exports = propEngineer;
},{}],55:[function(require,module,exports){
"use strict";

function tabs() {
  var tabs = document.getElementsByClassName('glazing_slider')[0],
      //список табов
  tab = document.querySelectorAll('.tab'),
      //сами табы
  tabContent = document.getElementsByClassName('tab_content'); //содержание табов
  //скрываем табы

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].classList.remove('active');
    }
  } //оставляем активным первый таб


  hideTabContent(1); //показываем таб

  function ShowTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tab[b].classList.add('active');
    }
  } //событие


  tabs.addEventListener('click', function (event) {
    var target = event.target;

    if (target.matches('.tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          ShowTabContent(i);
          break;
        }
      }
    }
  }); // табы для отделки

  var tabsRem = document.querySelectorAll('.decoration_item'),
      //таб
  tabAll = document.querySelector('.decoration_slider'),
      //все табы
  tabTwoActive = document.querySelectorAll('.no_click'),
      //активный таб
  tabContentTwo = document.querySelectorAll('.tabContentTwo'); //содержание табов

  console.log(tabAll); //скрываем табы

  function hideTabContentTwo(a) {
    for (var i = a; i < tabContentTwo.length; i++) {
      tabContentTwo[i].classList.remove('show');
      tabContentTwo[i].classList.add('hide');
      tabTwoActive[i].classList.remove('after_click');
    }
  } //оставляем активным первый таб


  hideTabContentTwo(1); //показываем таб

  function ShowTabContentTwo(b) {
    if (tabContentTwo[b].classList.contains('hide')) {
      hideTabContentTwo(0);
      tabContentTwo[b].classList.remove('hide');
      tabContentTwo[b].classList.add('show');
      tabTwoActive[b].classList.add('after_click');
    }
  } //событие


  tabAll.addEventListener('click', function (event) {
    var target = event.target;

    if (target.matches('.decoration_slider')) {
      for (var i = 0; i < tabsRem.length; i++) {
        if (target == tabsRem[i]) {
          ShowTabContentTwo(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;
},{}],56:[function(require,module,exports){
"use strict";

function timer() {
  var deadline = '2019/07/04';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } //функция, которая запускает часы


  function setClock(id, endtime) {
    var timer = document.getElementsByClassName('timer')[0],
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.innerHTML = t.days < 10 ? '0' + t.days : t.days;
      hours.innerHTML = t.hours < 10 ? '0' + t.hours : t.hours;
      minutes.innerHTML = t.minutes < 10 ? '0' + t.minutes : t.minutes;
      seconds.innerHTML = t.seconds < 10 ? '0' + t.seconds : t.seconds; //остановка таймера

      if (t.total <= 0) {
        var _timeInterval;

        clearInterval(_timeInterval);
        timer.innerHTML = '00:00:00';
      }
    }

    updateClock();
    var timeInterval = setInterval(updateClock, 1000);
  } //конец функции setClock
  //вызываем функцию запуска часов


  setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
