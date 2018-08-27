/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

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



//пишем таймер
let deadline = '2018-08-22';

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
	seconds = Math.floor( (t/1000)%60 ), 
	minutes = Math.floor((t/1000/60)%60),
	hours = Math.floor( (t/(1000*60*60)) );


	return {
		'total': t, 
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

//функция, которая запускает часы
function setClock(id, endtime){

	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = (t.hours < 10) ? '0' + t.minutes : t.minutes;
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

//вызываем функцию щапуска часов
setClock('timer', deadline);


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




 
});


