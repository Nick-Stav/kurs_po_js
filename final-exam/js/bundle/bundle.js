(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	let propEngineer = require('../parts/propEngineer.js'); //1) модальное окно prop_engineer
	// let formMassage = require('../parts/formMassage.js'); //2) форма обратной связи
	let modalPopup = require('../parts/modalPopup.js'); //3) модальное окно prop_engineer
	let timer = require('../parts/timer.js');//4) таймер



	propEngineer();
	// formMassage();
	modalPopup();
	timer();


});
},{"../parts/modalPopup.js":2,"../parts/propEngineer.js":3,"../parts/timer.js":4}],2:[function(require,module,exports){
let popup = document.getElementsByClassName('popup')[0],//модалка
	callBackHead = document.getElementsByClassName('phone_link')[0],//надпись в шапке
	callBackBottom = document.getElementsByClassName('phone_link')[1],//надпись в подвале
	closeModalPopup = document.getElementsByClassName('popup_close')[0],//крестик закрываем модалку
	closeModalPopupBack = document.getElementsByClassName('popup_dialog')[0];//back закрываем модалку

//вызываем модалку при клике на надпись в шапке
callBackHead.addEventListener('click', (event) => popup.style.display = 'flex');

//вызываем модалку при клике на надпись в подвале
callBackBottom.addEventListener('click', (event) => popup.style.display = 'flex');

//закрываем модалку (крестик)
closeModalPopup.addEventListener('click', (event) => popup.style.display = 'none');
//закрываем модалку (back)
closeModalPopupBack.addEventListener('click', (event) => popup.style.display = 'none');



//вызываем окно popup через 60 сек
function timePopup() {
	popup.style.display = 'flex';
}

setTimeout(timePopup, 60000);
},{}],3:[function(require,module,exports){
let headerBtn = document.getElementsByClassName('header_btn')[0],
	popupEngineer = document.getElementsByClassName('popup_engineer')[0],
	closeModalHead = document.getElementsByClassName('popup_close')[1],
	closeModalBack = document.getElementsByClassName('popup_dialog')[1],
	callBackHead = document.getElementsByClassName('phone_link')[0],
	callBackBottom = document.getElementsByClassName('phone_link')[1];;
	


//событие клик по кнопке в голове, показывает модалку
headerBtn.addEventListener('click', (event) => popupEngineer.style.display = 'flex');

//событие клик по кнопке в голове, закрывает модалку
closeModalHead.addEventListener('click', (event) => popupEngineer.style.display = 'none');

//событие клик по полю экрана, закрывает модалку
closeModalBack.addEventListener('click', (event) => popupEngineer.style.display = 'none');
		
	


},{}],4:[function(require,module,exports){
let deadline = '2019/07/04';

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
	seconds = Math.floor( (t/1000)%60 ), 
	minutes = Math.floor((t/1000/60)%60),
	hours = Math.floor( (t/(1000*60*60)) %24),
	days = Math.floor( (t/(1000*60*60*24)) );


	return {
		'total': t,
		'days' : days, 
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

//функция, которая запускает часы
function setClock(id, endtime){

	let timer = document.getElementsByClassName('timer')[0],
		days = timer.querySelector('.days'),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			days.innerHTML = (t.days < 10) ? '0' + t.days : t.days;
			hours.innerHTML = (t.hours < 10) ? '0' + t.hours : t.hours;
			minutes.innerHTML = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
			seconds.innerHTML = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

			//остановка таймера
			if (t.total <= 0) {
				let timeInterval;
				clearInterval(timeInterval);
				timer.innerHTML = '00:00:00';
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

		
}//конец функции setClock

//вызываем функцию запуска часов
setClock('timer', deadline);


},{}]},{},[1]);
