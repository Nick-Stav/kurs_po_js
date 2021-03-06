"use strict";

function formMassage() {
  //работаем с сервером, отправляем форму обратной связи
  //form - сообщения состояния
  var message = new Object();
  message.loading = ' загрузка! '; //процесс загрузки элемента

  message.success = ' спасибо, скоро мы с вами свяжемся!'; // сообщение при успехе

  message.failure = ' что-то пошло не так '; //оповещение о сбое
  //работаем с модальным окном

  var form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'); //назначаем диву класс

  statusMessage.classList.add('status'); //работаем с модалкой

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage); //ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php'); //исправляем ошибки кодировки

    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //получаем данные, которые ввел пользователь

    var formData = new FormData(form); //отправляем данные на сервер

    request.send(formData); //подтверждаем, что все ОК

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success; //добавляем контент на страницу
        } //если сервер отказался принимать данные
        else {
            statusMessage.innerHTML = message.failure;
          }
      }
    }; //очищаем все инпуты после отправки формы


    for (var i = 0; i < input.length; i++) {
      input[i].value = ''; //очищаемам поля ввода
    }
  }); //подключаем к форме обратной связи

  var formLid = document.getElementById('form');
  var inputClear = formLid.getElementsByTagName('input'); //работаем с формой

  formLid.addEventListener('submit', function (event) {
    event.preventDefault();
    formLid.appendChild(statusMessage); //ajax

    var requestLid = new XMLHttpRequest();
    requestLid.open("POST", 'server.php'); //исправляем ошибки кодировки

    requestLid.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //получаем данные, которые ввел пользователь

    var formDataLid = new FormData(formLid); //отправляем данные на сервер

    requestLid.send(formDataLid); //подтверждаем, что все ОК

    requestLid.onreadystatechange = function () {
      if (requestLid.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (requestLid.readyState === 4) {
        if (requestLid.status == 200 && requestLid.status < 300) {
          statusMessage.innerHTML = message.success; //добавляем контент на страницу
        } //если сервер отказался принимать данные
        else {
            statusMessage.innerHTML = message.failure;
          }
      }
    }; //очищаем все инпуты после отправки формы


    for (var i = 0; i < inputClear.length; i++) {
      inputClear[i].value = ''; //очищаемам поля ввода
    }
  });
}

module.exports = formMassage;