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