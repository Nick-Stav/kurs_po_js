(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../parts/calc.js":2,"../parts/formMassage.js":3,"../parts/img.js":4,"../parts/modalPopup.js":5,"../parts/propEngineer.js":6,"../parts/tabs.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function calc() {
    //Calc
    let popupCalcBtn = document.getElementsByClassName('popup_calc_btn'),
        popupCalc = document.getElementsByClassName('popup_calc')[0],
        popupBalconIcons = document.getElementsByClassName('icons_image'),//
        popupBalconBigIcons = popupCalc.getElementsByClassName('big_image'),//
        messageText = '',
        imageValue = '',
        windowWidth = document.getElementById('width'),
        windowHeight = document.getElementById('height'),
        popupCalcNextBtn = document.getElementsByClassName('popup_calc_button')[0],
        popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
        popupTypeOfWork = document.getElementById('view_type'),
        selectValue = "tree",
        checkbox = document.getElementsByClassName("checkbox"),
        checkboxCustom = document.getElementsByClassName("checkbox-custom"),
        checkboxLabel = document.getElementsByClassName("label"),
        styleOfMaterial = '',
        popupCalcProfileNextBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
        popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
        messagePost = new Object(),
        target = null;

        messagePost.loading = 'Идет отправка';
        messagePost.success = 'Спасибо, письмо отправлено';
        messagePost.failure = 'К сожелению что-то пошло не так';

        popupCalc.style.top = 'auto';
        popupCalc.style.left = 'auto';

        popupCalcNextBtn.disabled = true;

for (let i = 0; i < popupBalconIcons.length; i++){
    popupBalconIcons[i].style.top = 'inherit';
    popupBalconIcons[i].style.left = 'inherit';
}

function tabHideBalcon(elementNumber) {

for(let i = elementNumber; i < popupBalconBigIcons.length; i++) {

    popupBalconBigIcons[i].classList.add('hide');
    popupBalconBigIcons[i].classList.remove('show');
}
}

function windowCaclulator() {

for (let i = 0; i < popupCalcBtn.length; i++){

    popupCalcBtn[i].addEventListener('click', function() {

        popupCalc.style.display = 'block';
    });
}

tabHideBalcon(1);

function tabShowBalcon(number) {

    if (popupBalconBigIcons[number].classList.contains('hide')){

        tabHideBalcon(0);

        popupBalconBigIcons[number].classList.remove('hide');
        popupBalconBigIcons[number].classList.add('show');
    }
}

for (let j = 0; j < popupBalconIcons.length; j++){

    popupBalconIcons[j].addEventListener('click', function() {

        target = event.target;

        if(target.classList.contains('icons_image') ||target.classList.contains('balcon_icons')) {

            for(let i = 0; i < popupBalconIcons.length; i++) {

                if (target == popupBalconIcons[i]) {

                    tabShowBalcon(i);

                    imageValue = popupBalconIcons[i].alt;

                    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

                    break;

                }
            }
        }
    });
}

windowWidth.addEventListener('change', function(){

    if (windowWidth.value == '' || isNaN(windowWidth.value)) {
        popupCalcNextBtn.disabled = true;
        popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";

    } else {
        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
        if (windowHeight.value == '' || isNaN(windowHeight.value)) {
        popupCalcNextBtn.disabled = true;
        
    } else {
        popupCalcNextBtn.disabled = false;
        }
    }
        return messageText;
});

windowHeight.addEventListener('change', function(){

    if (windowHeight.value == '' || isNaN(windowHeight.value)) {
        popupCalcNextBtn.disabled = true;
        popupCalcBtn.textContent = "Введите пожалуйста ширину в милиметрах";

    } else {

    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;
        
        if (windowWidth.value == '' || isNaN(windowWidth.value)) {
            popupCalcNextBtn.disabled = true;

        } else {
            popupCalcNextBtn.disabled = false;
        }
    }
        return messageText;
});


popupCalcNextBtn.addEventListener('click', function() {

    popupCalc.style.display = 'none';

    popupCalcProfile.style.display = 'block';

});

popupCalcProfileNextBtn.addEventListener('click', function() {

    popupCalcProfile.style.display = 'none';

    popupCalcEnd.style.display = 'block';

    sendForm(popupCalcEnd);
});

popupTypeOfWork.addEventListener('change', function() {

    selectValue = this.options[this.selectedIndex].value;

    messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + ' тип материала:' + selectValue + 'клиент так же желает вид окон:' + styleOfMaterial;

    return messageText;
});

for (let i = 0; i < checkbox.length; i++) {

    checkbox[i].addEventListener('change', function(){

        if(checkbox[0].checked == true) {

            styleOfMaterial = checkboxCustom[0].id;

            checkbox[1].disabled = true;
            checkboxCustom[1].disabled = true;
            checkboxLabel[1].disabled = true;

        } else {

            if(checkbox[1].checked == true) {

            styleOfMaterial = checkboxCustom[1].id;

            checkbox[0].disabled = true;
            checkboxCustom[0].disabled = true;
            checkboxLabel[0].disabled = true;

            } else {

                checkbox[0].disabled = false;
                checkboxCustom[0].disabled = false;
                checkboxLabel[0].disabled = false;
                checkbox[1].disabled = false;
                checkboxCustom[1].disabled = false;
                checkboxLabel[1].disabled = false;				}
        }

        messageText = 'Клиент желает окно в форме ' + imageValue + ' размеры окна ширина:' + windowWidth.value + 'мм высота:' + windowHeight.value + 'мм тип материала:' + selectValue + 'клиент так же желает вид окон: ' + styleOfMaterial;
        
        return messageText;
    });
}

function sendForm(element) {
    let input = element.getElementsByTagName('input'),
        inputName = input[0],
        inputPhone = input[1],
        popupForm = element.getElementsByClassName('form')[0],
        statusMessage = document.createElement('div'),
        elementBtn = element.getElementsByClassName('btn-block')[0];

    function clearInput(){
        for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        }
    }

    clearInput();

    elementBtn.disabled = true;

    statusMessage.classList.add('status');

    popupForm.appendChild(statusMessage);

    element.style.display = 'block';

    inputPhone.addEventListener('change', function(){

        if(isNaN(inputPhone.value) || inputPhone.value == '') {

            statusMessage.innerHTML = "Введите пожалуйста ваш номер телефона, а не набор букв";

            elementBtn.disabled = true;

            } else {

                statusMessage.innerHTML = "Спасибо, теперь все правильно, проверьте ваши данные и если все правильно то смело нажимайте кнопку заказать звонок";

                elementBtn.disabled = false;

                messagePost.txt = "Вам пришло сообщение от " + inputName.value + " что бы ему позвонить наберите " + inputPhone.value  + messageText;

            }
    });
    
    element.addEventListener('submit', function(elem) {

        elem.preventDefault();

        
        function postData(data) {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');

                request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

                request.onreadystatechange = function() {

                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status === 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };

                request.send(data);

            });
        } // postData

        postData(messagePost.txt)
            .then( () => statusMessage.innerHTML = messagePost.loading)
            .then( () => {
                statusMessage.innerHTML = messagePost.success;
                setTimeout( () => {
                    statusMessage.innerHTML = '';
                }, 3000);
                })
            .catch( () => statusMessage.innerHTML = messagePost.failure)
            .then(clearInput);
    
    });
}
}

windowCaclulator();


let popupCalcCloseBotton = document.getElementsByClassName('popup_calc_close')[0];

popupCalcCloseBotton.addEventListener('click', function() {

popupCalc.style.display = 'none';

tabHideBalcon(0);

popupBalconBigIcons[0].classList.remove('hide');
popupBalconBigIcons[0].classList.add('show');

windowWidth.value = null;

windowHeight.value = null;

});
let popupCalcProfileCloseBotton = document.getElementsByClassName('popup_calc_profile_close')[0];

popupCalcProfileCloseBotton.addEventListener('click', function() {

popupCalcProfile.style.display = 'none';

tabHideBalcon(0);

popupBalconBigIcons[0].classList.remove('hide');
popupBalconBigIcons[0].classList.add('show');

windowWidth.value = null;

windowHeight.value = null;

popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];

checkbox[0].checked = false;

checkbox[1].checked = false;

checkbox.value = null;
});

let popupCalcEndCloseBotton = document.getElementsByClassName('popup_calc_end_close')[0];

popupCalcEndCloseBotton.addEventListener('click', function() {

popupCalcEnd.style.display = 'none';

tabHideBalcon(0);

popupBalconBigIcons[0].classList.remove('hide');
popupBalconBigIcons[0].classList.add('show');

windowWidth.value = null;

windowHeight.value = null;

popupTypeOfWork.options[popupTypeOfWork.selectedIndex] = popupTypeOfWork.options[0];

checkbox[0].checked = false;

checkbox[1].checked = false;

checkbox.value = null;
});
}

module.exports = calc;
},{}],3:[function(require,module,exports){
function formMassage () {
	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы с Вами свяжемся";
		message.failure = "Что-то пошло не так...";

		let form = document.getElementsByTagName('form'),
			statusMessage = document.createElement('div');

		function setCursorPosition(pos, elem) {
		    elem.focus();
		    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		    else if (elem.createTextRange) {
		        var range = elem.createTextRange();
		        range.collapse(true);
		        range.moveEnd("character", pos);
		        range.moveStart("character", pos);
		        range.select();
		    }
		}

		function mask(event) {
		    var matrix = "_ (___) ___ ____",
		        i = 0,
		        def = matrix.replace(/\D/g, ""),
		        val = this.value.replace(/\D/g, "");
		    if (def.length >= val.length) val = def;
		    this.value = matrix.replace(/./g, function(a) {
		        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		    });
		    if (event.type == "blur") {
		        if (this.value.length == 2) this.value = "";
		    } else setCursorPosition(this.value.length, this);
		}
		    
		for (let i = 0; i < form.length; i++) {
			let input = form[i].getElementsByTagName('input'),
				input_tel = document.getElementsByName("user_phone");

			input_tel[i].addEventListener("input", mask);
		    input_tel[i].addEventListener("focus", mask);
		    input_tel[i].addEventListener("blur", mask);
			form[i].addEventListener('submit', (event) => {
				form[i].appendChild(statusMessage);
				event.preventDefault();

				//AJAX
				let request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = new FormData(form[i]);
		
				request.send(formData);
				
				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							console.log(form[i]);
							statusMessage.innerHTML = message.success;
						}
						else {
							statusMessage.innerHTML = message.failure;
						}
					}
				};
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
				
			});
		}


}

module.exports = formMassage;
},{}],4:[function(require,module,exports){
function img() {
	let imageWorks = document.querySelector('.works'),//блок портфолио
		// link_image = imageWorks.getElementsByTagName('a'),
		image = imageWorks.getElementsByTagName('img'),
		divImage = document.createElement('div');
		divImage.classList.add('div-image');
		document.body.appendChild(divImage);
		




	for (let i = 0; i < image.length; i++){
		if (image[i].classList.contains('lupa') == true) {
			image[i].classList.add('image-gallery');
			image[i].remove();
		} else {
			console.log('None');
		}
	}
	for (let i = 0; i < image.length; i++){
		image[i].addEventListener('click', function(event){
			event.preventDefault('link_image');
			
			let index = i+1;
			let imageNew = image[i].src = 'img/our_works/big_img/'+index+'.png';
			image.src = 'img/our_works/'+index+'.png';
			let imgQwe = divImage.getElementsByTagName('img');
			divImage.innerHTML = '<div class="bigImg">' + '<img src="'+imageNew+'">' + '</div>';



			

			document.onmousewheel=document.onwheel=function(){ 
				return false;
			};
			document.addEventListener("MozMousePixelScroll",function(){return false;},false);
			document.onkeydown=function(e) {
				if (e.keyCode>=33&&e.keyCode<=40) return false;
			};

			
			divImage.style.cssText="position: fixed; \
			    overflow: hidden; \
			    width: 100%; \
			    height: 100%; \
			    background-color: rgba(0, 0, 0, .35); \
			    top: 0; \
			    text-align: center; \
			    padding-bottom: 50px; \
			  ";

			image[i].style.display = 'none';

			divImage.addEventListener('click', function(){
				image[i].style.display = 'block';
				divImage.style.display = 'none';
				image[i].src = 'img/our_works/'+index+'.png';

				document.onmousewheel=document.onwheel=function(){ 
					return true;
				};
				document.addEventListener("MozMousePixelScroll",function(){return true;},true);
				document.onkeydown=function(e) {
					if (e.keyCode>=33&&e.keyCode<=40) return true;
				};
			});



			event.preventDefault('link_image');

		});
	}
}
module.exports = img;
},{}],5:[function(require,module,exports){
function modalPopup() {

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
}
module.exports = modalPopup;
},{}],6:[function(require,module,exports){
function propEngineer() {

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
		
	
}
module.exports = propEngineer;
},{}],7:[function(require,module,exports){
function tabs() {

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



let tabsRem = document.querySelectorAll('.decoration_item'),//таб
    tabAll = document.querySelector('.decoration_slider'), //все табы
    tabTwoActive = document.querySelectorAll('.no_click'), //активный таб
    tabContentTwo = document.querySelectorAll('.tabContentTwo'); //содержание табов


    console.log(tabAll);
    //скрываем табы
     function hideTabContentTwo (a) {
            for (let i = a; i < tabContentTwo.length; i++) {
                tabContentTwo[i].classList.remove('show');
                tabContentTwo[i].classList.add('hide');
                tabTwoActive[i].classList.remove('after_click');

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
                tabTwoActive[b].classList.add('after_click');

            }
        }

        //событие
        tabAll.addEventListener('click', function(event) {
            let target = event.target;
            if(target.matches('.decoration_slider')) {
                for (let i = 0; i < tabsRem.length; i++) {
                    if (target == tabsRem[i]) {
                        ShowTabContentTwo(i);
                        break;
                    }
                }
            }

        });

    }
module.exports = tabs;
 
},{}],8:[function(require,module,exports){
function timer() {

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

}
module.exports = timer;
},{}]},{},[1]);
