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
