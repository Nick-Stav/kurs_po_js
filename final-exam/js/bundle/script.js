/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	let propEngineer = require('../parts/propEngineer.js'); //1) модальное окно prop_engineer
	// let formMassage = require('../parts/formMassage.js'); //1) форма обратной связи

	propEngineer();
	// formMassage();


});
