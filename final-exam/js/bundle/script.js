/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	var propEngineer = require('../parts/propEngineer.js'); //1) модальное окно prop_engineer
	var formMassage = require('../parts/formMassage.js'); //2) форма обратной связи
	var modalPopup = require('../parts/modalPopup.js'); //3) модальное окно prop_engineer
	var timer = require('../parts/timer.js');//4) таймер
	var tabs = require('../parts/tabs.js');//5) табы 
	var img = require('../parts/img.js'); //6) картинки
	var calc = require('../parts/calc.js'); //7) калькулятор


	propEngineer();
	formMassage();
	modalPopup();
	timer();
	tabs();
	img();
	calc();


});
