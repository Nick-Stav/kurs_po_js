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