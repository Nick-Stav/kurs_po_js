(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	let tab = require('../parts/tab.js'); //1) табы + модалка
	let timer = require('../parts/timer.js'); //2) таймер 
	let formMassage = require('../parts/formMassage.js'); //3) форма обратной связи
	let slider = require('../parts/slider.js'); //4) слайдер 
	let calc = require('../parts/calc.js'); //5) калькулятор

	tab();
	timer();
	formMassage();
	slider();
	calc();


});



},{"../parts/calc.js":23,"../parts/formMassage.js":24,"../parts/slider.js":25,"../parts/tab.js":26,"../parts/timer.js":27}],2:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":13}],3:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],4:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],5:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":7}],6:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":9,"./_is-object":13}],7:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],8:[function(require,module,exports){
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

},{"./_defined":4,"./_fails":7,"./_hide":11,"./_redefine":17,"./_wks":21}],9:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],10:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],11:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":5,"./_object-dp":15,"./_property-desc":16}],12:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":5,"./_dom-create":6,"./_fails":7}],13:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],14:[function(require,module,exports){
module.exports = false;

},{}],15:[function(require,module,exports){
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

},{"./_an-object":2,"./_descriptors":5,"./_ie8-dom-define":12,"./_to-primitive":19}],16:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],17:[function(require,module,exports){
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

},{"./_core":3,"./_global":9,"./_has":10,"./_hide":11,"./_uid":20}],18:[function(require,module,exports){
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

},{"./_core":3,"./_global":9,"./_library":14}],19:[function(require,module,exports){
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

},{"./_is-object":13}],20:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],21:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":9,"./_shared":18,"./_uid":20}],22:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":8}],23:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.match");

function calc() {
  //пишем калькулятор
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  var lookSymb = /\d/ig; //записываем в lookSymb через регулярное выражение все числа
  //отслеживаем изменения данных

  persons.addEventListener('input', function (event) {
    //прявязываем события
    personsSum = +this.value; //записываем в переменную personsSum числовое значение пользователя 

    total = (daysSum + personsSum) * 4000; // записываем формулу рассчета

    var target = event.target.value; //записываем в переменную элемент, над которым произошло событие

    if (!target.match(/\d/ig) || target == '') {
      // проверяем через регулярку условие, если значение пользователя не число или пустая строка
      persons.value = ''; //то выводим пустую строку
    }

    if (restDays.value == "") {
      //проверяем, если пустая строка
      totalValue.innerHTML = 0; //то пишем в значении результата 0

      restDays.value = ''; //в инпуте пишем пустую строку
    } else {
      totalValue.innerHTML = total; //в противном случае выводим результат
    }

    if (persons.value == "") {
      //проверяем, если пустая строка
      totalValue.innerHTML = 0; //то пишем в значении результата 0

      persons.value = ''; //в инпуте пишем пустую строку
    } else {
      totalValue.innerHTML = total; //в противном случае выводим результат
    }

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
      total = 0;
    }
  }); //аналогичным образом делаем и следующий инпут

  restDays.addEventListener('input', function (event) {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;
    var target = event.target.value;

    if (!target.match(/\d/ig) || target == '') {
      restDays.value = '';
    }

    if (restDays.value == "") {
      totalValue.innerHTML = 0;
      restDays.value = '';
    } else {
      totalValue.innerHTML = total;
    }
  }); //конец второй инпут
  //подкручиваем select

  place.addEventListener('change', function () {
    //прикручиваем реакцию на изменение селекта
    if (restDays.value == "" || persons.value == "") {
      //если в инпутах пользователь оставил пустые строки, то 
      totalValue.innerHTML = 0; //то выводим в строке результата 0
    } else {
      //в противном случае умножаем результат на коэфициент выбраной строки селекта
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;
},{"core-js/modules/es6.regexp.match":22}],24:[function(require,module,exports){
"use strict";

function formMassage() {
  //работаем с сервером, отправляем форму обратной связи
  //form - сообщения состояния
  var message = new Object();
  message.loading = ' загрузка! '; //процесс загрузки элемента

  message.success = ' спасибо, скоро мы с вами свяжемся!'; // сообщение при успехе

  message.failure = ' что-то пошло не так '; //оповещение о сбое
  //работаем с модальным окном

  var form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'); //назначаем диву класс

  statusMessage.classList.add('status'); //работаем с модалкой

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage); //ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php'); //исправляем ошибки кодировки

    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //получаем данные, которые ввел пользователь

    var formData = new FormData(form); //отправляем данные на сервер

    request.send(formData); //подтверждаем, что все ОК

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; //добавляем контент на страницу
        } //если сервер отказался принимать данные
        else {
            statusMessage.innerHTML = message.failure;
          }
      }
    }; //очищаем все инпуты после отправки формы


    for (var i = 0; i < input.length; i++) {
      input[i].value = ''; //очищаемам поля ввода
    }
  }); //подключаем к форме обратной связи

  var formLid = document.getElementById('form');
  var inputClear = formLid.getElementsByTagName('input'); //работаем с формой

  formLid.addEventListener('submit', function (event) {
    event.preventDefault();
    formLid.appendChild(statusMessage); //ajax

    var requestLid = new XMLHttpRequest();
    requestLid.open("POST", 'server.php'); //исправляем ошибки кодировки

    requestLid.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //получаем данные, которые ввел пользователь

    var formDataLid = new FormData(formLid); //отправляем данные на сервер

    requestLid.send(formDataLid); //подтверждаем, что все ОК

    requestLid.onreadystatechange = function () {
      if (requestLid.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (requestLid.readyState === 4) {
        if (requestLid.status == 200 && requestLid.status < 300) {
          statusMessage.innerHTML = message.success; //добавляем контент на страницу
        } //если сервер отказался принимать данные
        else {
            statusMessage.innerHTML = message.failure;
          }
      }
    }; //очищаем все инпуты после отправки формы


    for (var i = 0; i < inputClear.length; i++) {
      inputClear[i].value = ''; //очищаемам поля ввода
    }
  });
}

module.exports = formMassage;
},{}],25:[function(require,module,exports){
"use strict";

function slider() {
  //работаем со слайдером
  //обращаемся к индексу нашего слайда
  var slideIndex = 1,
      slides = document.getElementsByClassName('slider-item'),
      prev = document.querySelector('.prev'),
      //кнопки слайдера
  next = document.querySelector('.next'),
      //кнопки слайдера
  dotsWrap = document.querySelector('.slider-dots'),
      //точки пагинации
  dots = document.getElementsByClassName('dot'); //обращаемся ко всем точкам пагинации

  showSlides(slideIndex); //функция показа слайда

  function showSlides(n) {
    //если у нас последник слайд, то мы пересскакиваем на первый
    if (n > slides.length) {
      slideIndex = 1;
    } //если у нас первый слайд, то мы перескакиваем на последний


    if (n < 1) {
      slideIndex = slides.length;
    } //скрываем все слайды и показываем нужный


    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    } //убираем класс с точек пагинации


    for (var _i = 0; _i < dots.length; _i++) {
      dots[_i].classList.remove('dot-active');
    } //показываем активный слайд


    slides[slideIndex - 1].style.display = 'block'; //добавляем класс к активной точке

    dots[slideIndex - 1].classList.add('dot-active');
  } //функция, которая добавляет/отнимает кол-во слайдов


  function plusSlides(n) {
    showSlides(slideIndex += n);
  } //оживляем точки пагинации


  function currentSlide(n) {
    showSlides(slideIndex = n);
  } //вешаем события к кнопкам


  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  }); //привязываем клики к точкам

  dotsWrap.addEventListener('click', function (event) {
    //цикл проверка на параметр
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
},{}],26:[function(require,module,exports){
"use strict";

function tab() {
  var tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0]; //функция, которая скрывает все табы

  function hideTabContent(a) {
    //цикл, который проверяет кол-во таб контентов
    //и всем им присваивает класс hide (скрывает их)
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    } //конец  цикла

  } //конец функции hideTabContent


  hideTabContent(1); //показываем наш первый таб на странице
  //функция показа табов

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    } //конец цикла

  } //конец функции показа табов
  //делегируем, пишем обработчик событий


  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'info-header-tab') {
      //ghb помощи цикла перебираем все имеющиеся табы
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        } //конец условия

      } //конец цикла перебора

    } //конец условия

  }); //конец делигирования
  //работаем с модальным окном

  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.getElementsByClassName('description-btn'); //пишем событие для кнопки "узнать больше"

  more.addEventListener('click', function () {
    this.classList.add('more-splash'); //показываем модалку

    overlay.style.display = 'block'; //дeлаем, чтоб документ не прокручивался во время модалки

    document.body.style.overflow = 'hidden';
  }); //закрывашка для модалки

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash'); //делаем чтоб документ снова прокручивался

    document.body.style.overflow = '';
  }); //приписываем модальное окно для кнопки "узнать подробнее"

  var descr = document.querySelector('.info');
  descr.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'description-btn') {
      for (var mod = 0; mod < descriptionBtn.length; mod++) {
        if (target == descriptionBtn[mod]) {
          showTabContent(mod);
          this.classList.add('more-splash'); //показываем модалку

          overlay.style.display = 'block'; //дeлаем, чтоб документ не прокручивался во время модалки

          document.body.style.overflow = 'hidden';
          break;
        }
      }
    }
  }); //заканчиваем делегирование
}

module.exports = tab;
},{}],27:[function(require,module,exports){
"use strict";

function timer() {
  //пишем таймер
  var deadline = '2018-09-11';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } //функция, которая запускает часы


  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.innerHTML = t.hours < 10 ? '0' + t.minutes : t.minutes;
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
  //вызываем функцию щапуска часов


  setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
