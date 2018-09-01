(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{"../parts/calc.js":2,"../parts/message.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6}],2:[function(require,module,exports){
function calc() {

//пишем калькулятор
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;


let lookSymb = /\d/ig;;//записываем в lookSymb через регулярное выражение все числа
		//отслеживаем изменения данных
		persons.addEventListener('input', function(event) {  //прявязываем события
			personsSum = +this.value; //записываем в переменную personsSum числовое значение пользователя 
			total = (daysSum + personsSum)*4000; // записываем формулу рассчета

			let target = event.target.value; //записываем в переменную элемент, над которым произошло событие
            if (!target.match(/\d/ig) || target == '') { // проверяем через регулярку условие, если значение пользователя не число или пустая строка
                persons.value = ''; //то выводим пустую строку
            } 
        
			if (restDays.value =="") { //проверяем, если пустая строка
				totalValue.innerHTML = 0; //то пишем в значении результата 0
				restDays.value = ''; //в инпуте пишем пустую строку
				

			} else { 
				totalValue.innerHTML = total; //в противном случае выводим результат
			}

			if (persons.value =="") { //проверяем, если пустая строка
				totalValue.innerHTML = 0; //то пишем в значении результата 0
				persons.value = ''; //в инпуте пишем пустую строку
				

			} else { 
				totalValue.innerHTML = total; //в противном случае выводим результат
			}
			if(restDays.value == '' || persons.value == '' ) {
			    totalValue.innerHTML = 0;
			    total = 0;
			} 
			
		});

		//аналогичным образом делаем и следующий инпут
		restDays.addEventListener('input', function(event) {
			daysSum = +this.value;
			total = (daysSum + personsSum)*4000;
			
			let target = event.target.value;
                    if (!target.match(/\d/ig) || target == '') {
                        restDays.value = '';
                    } 

			if (restDays.value =="") {
				totalValue.innerHTML = 0;
				restDays.value = '';
				
			} else {
				totalValue.innerHTML = total;
			}
			
		});//конец второй инпут


		//подкручиваем select
		place.addEventListener('change', function(){ //прикручиваем реакцию на изменение селекта
			if ( restDays.value ==""  || persons.value =="" ) { //если в инпутах пользователь оставил пустые строки, то 
				totalValue.innerHTML = 0; //то выводим в строке результата 0
			} else { //в противном случае умножаем результат на коэфициент выбраной строки селекта
				let a = total; 
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});


}

module.exports = calc;
},{}],3:[function(require,module,exports){
function massage() {
	
//работаем с сервером, отправляем форму обратной связи
	//form - сообщения состояния
	let message = new Object();
	message.loading = ' загрузка! ';//процесс загрузки элемента
	message.success = ' спасибо, скоро мы с вами свяжемся!'; // сообщение при успехе
	message.failure = ' что-то пошло не так '; //оповещение о сбое


	//работаем с модальным окном
	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

		//назначаем диву класс
		statusMessage.classList.add('status');

		//работаем с модалкой
		form.addEventListener('submit', function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			//ajax
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			//исправляем ошибки кодировки
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			//получаем данные, которые ввел пользователь
			let formData = new FormData(form);

			//отправляем данные на сервер
			request.send(formData);


			//подтверждаем, что все ОК
			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//добавляем контент на страницу
					}
					//если сервер отказался принимать данные
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			//очищаем все инпуты после отправки формы
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				//очищаемам поля ввода
			}

		});



			//подключаем к форме обратной связи
			let formLid = document.getElementById('form');
			let inputClear = formLid.getElementsByTagName('input');


			//работаем с формой
			formLid.addEventListener('submit', function(event){
				event.preventDefault();
				formLid.appendChild(statusMessage);

				//ajax
				let requestLid = new XMLHttpRequest();
				requestLid.open("POST", 'server.php');

				//исправляем ошибки кодировки
				requestLid.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				//получаем данные, которые ввел пользователь
				let formDataLid = new FormData(formLid);


				//отправляем данные на сервер
				requestLid.send(formDataLid);


				//подтверждаем, что все ОК
				requestLid.onreadystatechange = function() {
					if (requestLid.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (requestLid.readyState === 4) {
						if (requestLid.status == 200 && requestLid.status < 300) {
							statusMessage.innerHTML = message.success;
							//добавляем контент на страницу
						}
						//если сервер отказался принимать данные
						else {
							statusMessage.innerHTML = message.failure;
						}
					}
				};
				//очищаем все инпуты после отправки формы

								
				for (let i = 0; i < inputClear.length; i++) {
					inputClear[i].value = '';
					//очищаемам поля ввода
				}

			});

}

module.exports = massage;
},{}],4:[function(require,module,exports){
function modal() {

	//работаем с модальным окном
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.getElementsByClassName('description-btn');

		//пишем событие для кнопки "узнать больше"
		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			//показываем модалку
			overlay.style.display = 'block';
			//дeлаем, чтоб документ не прокручивался во время модалки
			document.body.style.overflow = 'hidden';
		});	
		//закрывашка для модалки
		close.addEventListener('click', function() {
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			//делаем чтоб документ снова прокручивался
			document.body.style.overflow = '';
		});

		//приписываем модальное окно для кнопки "узнать подробнее"
		let descr = document.querySelector('.info');	

		descr.addEventListener('click', function(event) {
			let target = event.target;

			if (target.className == 'description-btn') {
				for (let mod = 0; mod < descriptionBtn.length; mod++){
					if (target == descriptionBtn[mod]) {
						showTabContent(mod);
						this.classList.add('more-splash');
						//показываем модалку
						overlay.style.display = 'block';
						//дeлаем, чтоб документ не прокручивался во время модалки
						document.body.style.overflow = 'hidden';
						break;
					}
				}
			}

		});//заканчиваем делегирование

}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider() {
	//работаем со слайдером
	//обращаемся к индексу нашего слайда
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'), //кнопки слайдера
		next = document.querySelector('.next'), //кнопки слайдера
		dotsWrap = document.querySelector('.slider-dots'), //точки пагинации
		dots = document.getElementsByClassName('dot'); //обращаемся ко всем точкам пагинации

		showSlides(slideIndex);

	//функция показа слайда
	function showSlides(n) {
		
		//если у нас последник слайд, то мы пересскакиваем на первый
		if (n > slides.length) {
			slideIndex = 1;
		};
		//если у нас первый слайд, то мы перескакиваем на последний
		if (n < 1) {
			slideIndex = slides.length;
		};

		//скрываем все слайды и показываем нужный
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};

		//убираем класс с точек пагинации
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		//показываем активный слайд
		slides[slideIndex-1].style.display = 'block';

		//добавляем класс к активной точке
		dots[slideIndex-1].classList.add('dot-active');


	}

	//функция, которая добавляет/отнимает кол-во слайдов
	function plusSlides (n) {
		showSlides(slideIndex += n);
	}
	//оживляем точки пагинации
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	//вешаем события к кнопкам
	prev.addEventListener('click', function(){

		plusSlides(-1);
	});
	next.addEventListener('click', function(){

		plusSlides(1);
	});


	//привязываем клики к точкам
	dotsWrap.addEventListener('click', function(event){
		//цикл проверка на параметр
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
		let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

			//функция, которая скрывает все табы
			function hideTabContent(a) {
				//цикл, который проверяет кол-во таб контентов
				//и всем им присваивает класс hide (скрывает их)
				for (let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}//конец  цикла
			}//конец функции hideTabContent

			hideTabContent(1);//показываем наш первый таб на странице


			//функция показа табов
			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}//конец цикла
			}//конец функции показа табов


			//делегируем, пишем обработчик событий
			info.addEventListener('click', function(event){
				let target = event.target;
				if (target.className == 'info-header-tab') {
					//ghb помощи цикла перебираем все имеющиеся табы
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						} //конец условия
					} //конец цикла перебора
				}//конец условия
			});//конец делигирования

}

module.exports = tab;
},{}]},{},[1]);
