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
		};//конец  цикла
	};//конец функции hideTabContent

	hideTabContent(1);//показываем наш первый таб на странице


	//функция показа табов
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		};//конец цикла
	};//конец функции показа табов


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
			}; //конец цикла перебора
		};//конец условия
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
};

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
		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

		
};//конец функции setClock

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
	for (let mod = 0; mod < descriptionBtn.length; mod++) {
		descriptionBtn[mod].addEventListener('click', function() {
		this.classList.add('more-splash');
		//показываем модалку
		overlay.style.display = 'block';
		//дeлаем, чтоб документ не прокручивался во время модалки
		document.body.style.overflow = 'hidden';
	});	
	//закрывашка для модалки
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		descriptionBtn[mod].classList.remove('more-splash');
		//делаем чтоб документ снова прокручивался
		document.body.style.overflow = '';
	});
	};


});


