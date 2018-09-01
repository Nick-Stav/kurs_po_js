function modal() {

	//работаем с модальным окном
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.getElementsByClassName('description-btn');

		//пишем событие для кнопки "узнать больше"
		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			//показываем модалку
			overlay.style.display = 'block';
			//дeлаем, чтоб документ не прокручивался во время модалки
			document.body.style.overflow = 'hidden';
		});	
		//закрывашка для модалки
		close.addEventListener('click', function() {
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			//делаем чтоб документ снова прокручивался
			document.body.style.overflow = '';
		});

		//приписываем модальное окно для кнопки "узнать подробнее"
		let descr = document.querySelector('.info');	

		descr.addEventListener('click', function(event) {
			let target = event.target;

			if (target.className == 'description-btn') {
				for (let mod = 0; mod < descriptionBtn.length; mod++){
					if (target == descriptionBtn[mod]) {
						showTabContent(mod);
						this.classList.add('more-splash');
						//показываем модалку
						overlay.style.display = 'block';
						//дeлаем, чтоб документ не прокручивался во время модалки
						document.body.style.overflow = 'hidden';
						break;
					}
				}
			}

		});//заканчиваем делегирование

}

module.exports = modal;