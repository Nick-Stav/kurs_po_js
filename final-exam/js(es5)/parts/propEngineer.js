"use strict";

function propEngineer() {
  var headerBtn = document.getElementsByClassName('header_btn')[0],
      popupEngineer = document.getElementsByClassName('popup_engineer')[0],
      closeModalHead = document.getElementsByClassName('popup_close')[1],
      closeModalBack = document.getElementsByClassName('popup_dialog')[1]; //событие клик по кнопке в голове, показывает модалку

  headerBtn.addEventListener('click', function (event) {
    return popupEngineer.style.display = 'flex';
  }); //событие клик по кнопке в голове, закрывает модалку

  closeModalHead.addEventListener('click', function (event) {
    return popupEngineer.style.display = 'none';
  }); //событие клик по полю экрана, закрывает модалку

  closeModalBack.addEventListener('click', function (event) {
    return popupEngineer.style.display = 'none';
  });
}

module.exports = propEngineer;