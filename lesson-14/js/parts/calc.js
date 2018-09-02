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