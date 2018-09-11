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
