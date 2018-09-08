let headerBtn = document.getElementsByClassName('header_btn')[0],
	popupEngineer = document.getElementsByClassName('popup_engineer')[0],
	closeModalHead = document.getElementsByClassName('popup_close')[1];
	


//событие клик по кнопке в голове, показывает модалку
headerBtn.addEventListener('click', (event) => popupEngineer.style.display = 'flex');

//событие клик по кнопке в голове, закрывает модалку
closeModalHead.addEventListener('click', (event) => popupEngineer.style.display = 'none');

//событие клик по полю экрана, закрывает модалку
popupEngineer.addEventListener('click', (event) => popupEngineer.style.display = 'none');