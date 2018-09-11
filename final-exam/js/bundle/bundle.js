(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', function() {//проверка на то, что страница загрузилась т.е. скрипты начнут рабоать после загрузки страницы

	let propEngineer = require('../parts/propEngineer.js'); //1) модальное окно prop_engineer
	// let formMassage = require('../parts/formMassage.js'); //2) форма обратной связи
	let modalPopup = require('../parts/modalPopup.js'); //3) модальное окно prop_engineer
	let timer = require('../parts/timer.js');//4) таймер
	let tabs = require('../parts/tabs.js');//5) табы 
	let img = require('../parts/img.js'); //6) картинки



	propEngineer();
	// formMassage();
	modalPopup();
	timer();
	tabs();
	img();


});
},{"../parts/img.js":2,"../parts/modalPopup.js":3,"../parts/propEngineer.js":4,"../parts/tabs.js":5,"../parts/timer.js":6}],2:[function(require,module,exports){
let photo = document.getElementsByClassName('photo')[0],//взяли большой раздел со всеми фотками
	photoDiv = document.createElement('div'),// создали новый див
	aImag = document.getElementsByClassName('imgClass'),//картинки в ссылках
	image = document.getElementsByClassName('image'); //объявляем картинку
	
	photoDiv.classList.add("div_bg"); //добавили класс диву
	photo.appendChild(photoDiv);

let bgDiv = document.getElementsByClassName("div_bg")[0]; //объявили этот див	

	for (let i = 0; i < aImag.length; i++) {
		aImag[i].onclick = function(event) {
			return false;
		};
	}

	//делегирование 
	photo.addEventListener('click', function (event){

		let target = event.target;
		if (target.matches('.image')) {
			for (let i = 0; i < image.length; i++) {
				if (target == image[i]) {
					event.target.cloneNode(true);
					event.target.classList.add("overlay");
					bgDiv.style.display = 'flex';
					break;
				}
			}
		}
	});

	//закрываем модалку при клике на bg
bgDiv.addEventListener('click', function (event) { 
	bgDiv.style.display = 'none';
	
	for (let i = 0; i < image.length; i++) {
		image[i].classList.remove("overlay");
	}
	
});

},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
let headerBtn = document.getElementsByClassName('header_btn')[0],
	popupEngineer = document.getElementsByClassName('popup_engineer')[0],
	closeModalHead = document.getElementsByClassName('popup_close')[1],
	closeModalBack = document.getElementsByClassName('popup_dialog')[1];

	


//событие клик по кнопке в голове, показывает модалку
headerBtn.addEventListener('click', (event) => popupEngineer.style.display = 'flex');

//событие клик по кнопке в голове, закрывает модалку
closeModalHead.addEventListener('click', (event) => popupEngineer.style.display = 'none');

//событие клик по полю экрана, закрывает модалку
closeModalBack.addEventListener('click', (event) => popupEngineer.style.display = 'none');
		
	


},{}],5:[function(require,module,exports){
let tabs = document.getElementsByClassName('glazing_slider')[0],//список табов
        tab = document.querySelectorAll('.tab'),//сами табы
        tabContent = document.getElementsByClassName('tab_content');//содержание табов

        //скрываем табы
        function hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
                tab[i].classList.remove('active');

            }
        }

		//оставляем активным первый таб
        hideTabContent(1);

        //показываем таб
        function ShowTabContent (b) {
            if (tabContent[b].classList.contains('hide')) {
                hideTabContent(0);
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
                tab[b].classList.add('active');

            }
        }


        //событие
        tabs.addEventListener('click', function(event) {
            let target = event.target;
            if(target.matches('.tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        ShowTabContent(i);
                        break;
                    }
                }
            }

        });


// табы для отделки

let tabsRem = document.getElementsByClassName('decoration_slider')[0],//список табов
    tabOne = document.querySelectorAll('.tabOne'), //сами табы
    tabContentTwo = document.getElementsByClassName('tabContentTwo'); //содержание табов

     function hideTabContentTwo (a) {
            for (let i = a; i < tabContentTwo.length; i++) {
                tabContentTwo[i].classList.remove('show');
                tabContentTwo[i].classList.add('hide');
                tabOne[i].classList.remove('active');

            }
        }

        //оставляем активным первый таб
        hideTabContentTwo(1);

        //показываем таб
        function ShowTabContentTwo (b) {
            if (tabContentTwo[b].classList.contains('hide')) {
                hideTabContentTwo(0);
                tabContentTwo[b].classList.remove('hide');
                tabContentTwo[b].classList.add('show');
                tabOne[b].classList.add('active');

            }
        }

        //событие
        tabsRem.addEventListener('click', function(event) {
            let target = event.target;
            if(target.matches('.tabOne')) {
                for (let i = 0; i < tabOne.length; i++) {
                    if (target == tabOne[i]) {
                        ShowTabContentTwo(i);
                        break;
                    }
                }
            }

        });
},{}],6:[function(require,module,exports){
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
