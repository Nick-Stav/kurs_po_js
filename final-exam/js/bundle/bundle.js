(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	let propEngineer = require('../parts/propEngineer.js'); //1) модальное окно prop_engineer
	// let formMassage = require('../parts/formMassage.js'); //2) форма обратной связи
	let modalPopup = require('../parts/modalPopup.js'); //2) модальное окно prop_engineer

	propEngineer();
	// formMassage();
	modalPopup();


});
},{"../parts/modalPopup.js":2,"../parts/propEngineer.js":3}],2:[function(require,module,exports){
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
		
	


},{}]},{},[1]);
