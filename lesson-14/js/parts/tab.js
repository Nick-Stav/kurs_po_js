function tab() {
		let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

			//функция, которая скрывает все табы
			function hideTabContent(a) {
				//цикл, который проверяет кол-во таб контентов
				//и всем им присваивает класс hide (скрывает их)
				for (let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}//конец  цикла
			}//конец функции hideTabContent

			hideTabContent(1);//показываем наш первый таб на странице


			//функция показа табов
			function showTabContent(b) {
				if (tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}//конец цикла
			}//конец функции показа табов


			//делегируем, пишем обработчик событий
			info.addEventListener('click', function(event){
				let target = event.target;
				if (target.className == 'info-header-tab') {
					//ghb помощи цикла перебираем все имеющиеся табы
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						} //конец условия
					} //конец цикла перебора
				}//конец условия
			});//конец делигирования

}

module.exports = tab;