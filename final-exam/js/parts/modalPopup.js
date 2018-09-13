"use strict";

function modalPopup() {
  var popup = document.getElementsByClassName('popup')[0],
      //модалка
  callBackHead = document.getElementsByClassName('phone_link')[0],
      //надпись в шапке
  callBackBottom = document.getElementsByClassName('phone_link')[1],
      //надпись в подвале
  closeModalPopup = document.getElementsByClassName('popup_close')[0],
      //крестик закрываем модалку
  closeModalPopupBack = document.getElementsByClassName('popup_dialog')[0]; //back закрываем модалку
  //вызываем модалку при клике на надпись в шапке

  callBackHead.addEventListener('click', function (event) {
    return popup.style.display = 'flex';
  }); //вызываем модалку при клике на надпись в подвале

  callBackBottom.addEventListener('click', function (event) {
    return popup.style.display = 'flex';
  }); //закрываем модалку (крестик)

  closeModalPopup.addEventListener('click', function (event) {
    return popup.style.display = 'none';
  }); //закрываем модалку (back)

  closeModalPopupBack.addEventListener('click', function (event) {
    return popup.style.display = 'none';
  }); //вызываем окно popup через 60 сек

  function timePopup() {
    popup.style.display = 'flex';
  }

  setTimeout(timePopup, 60000);
}

module.exports = modalPopup;
