"use strict";

function tab() {
  var tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0]; //функция, которая скрывает все табы

  function hideTabContent(a) {
    //цикл, который проверяет кол-во таб контентов
    //и всем им присваивает класс hide (скрывает их)
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    } //конец  цикла

  } //конец функции hideTabContent


  hideTabContent(1); //показываем наш первый таб на странице
  //функция показа табов

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    } //конец цикла

  } //конец функции показа табов
  //делегируем, пишем обработчик событий


  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'info-header-tab') {
      //ghb помощи цикла перебираем все имеющиеся табы
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        } //конец условия

      } //конец цикла перебора

    } //конец условия

  }); //конец делигирования
  //работаем с модальным окном

  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.getElementsByClassName('description-btn'); //пишем событие для кнопки "узнать больше"

  more.addEventListener('click', function () {
    this.classList.add('more-splash'); //показываем модалку

    overlay.style.display = 'block'; //дeлаем, чтоб документ не прокручивался во время модалки

    document.body.style.overflow = 'hidden';
  }); //закрывашка для модалки

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash'); //делаем чтоб документ снова прокручивался

    document.body.style.overflow = '';
  }); //приписываем модальное окно для кнопки "узнать подробнее"

  var descr = document.querySelector('.info');
  descr.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'description-btn') {
      for (var mod = 0; mod < descriptionBtn.length; mod++) {
        if (target == descriptionBtn[mod]) {
          showTabContent(mod);
          this.classList.add('more-splash'); //показываем модалку

          overlay.style.display = 'block'; //дeлаем, чтоб документ не прокручивался во время модалки

          document.body.style.overflow = 'hidden';
          break;
        }
      }
    }
  }); //заканчиваем делегирование
}

module.exports = tab;