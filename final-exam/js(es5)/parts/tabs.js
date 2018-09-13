"use strict";

function tabs() {
  var tabs = document.getElementsByClassName('glazing_slider')[0],
      //список табов
  tab = document.querySelectorAll('.tab'),
      //сами табы
  tabContent = document.getElementsByClassName('tab_content'); //содержание табов
  //скрываем табы

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].classList.remove('active');
    }
  } //оставляем активным первый таб


  hideTabContent(1); //показываем таб

  function ShowTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tab[b].classList.add('active');
    }
  } //событие


  tabs.addEventListener('click', function (event) {
    var target = event.target;

    if (target.matches('.tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          ShowTabContent(i);
          break;
        }
      }
    }
  }); // табы для отделки

  var tabsRem = document.querySelectorAll('.decoration_item'),
      //таб
  tabAll = document.querySelector('.decoration_slider'),
      //все табы
  tabTwoActive = document.querySelectorAll('.no_click'),
      //активный таб
  tabContentTwo = document.querySelectorAll('.tabContentTwo'); //содержание табов

  console.log(tabAll); //скрываем табы

  function hideTabContentTwo(a) {
    for (var i = a; i < tabContentTwo.length; i++) {
      tabContentTwo[i].classList.remove('show');
      tabContentTwo[i].classList.add('hide');
      tabTwoActive[i].classList.remove('after_click');
    }
  } //оставляем активным первый таб


  hideTabContentTwo(1); //показываем таб

  function ShowTabContentTwo(b) {
    if (tabContentTwo[b].classList.contains('hide')) {
      hideTabContentTwo(0);
      tabContentTwo[b].classList.remove('hide');
      tabContentTwo[b].classList.add('show');
      tabTwoActive[b].classList.add('after_click');
    }
  } //событие


  tabAll.addEventListener('click', function (event) {
    var target = event.target;

    if (target.matches('.decoration_slider')) {
      for (var i = 0; i < tabsRem.length; i++) {
        if (target == tabsRem[i]) {
          ShowTabContentTwo(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;