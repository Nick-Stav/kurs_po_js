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


