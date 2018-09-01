/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {
//табы 
	let tab = require('../parts/tab.js');
//работаем с модальным окном
	let modal = require('../parts/modal.js');
//работаем с сервером, отправляем форму обратной связи
	let message = require('../parts/message.js');
//работаем со слайдером
	let slider = require('../parts/slider.js');
//пишем калькулятор
	let calc = require('../parts/calc.js');

	tab();
	modal();
	message();
	slider();
	calc();

});


