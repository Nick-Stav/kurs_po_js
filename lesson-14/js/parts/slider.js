function slider() {
	//работаем со слайдером
	//обращаемся к индексу нашего слайда
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'), //кнопки слайдера
		next = document.querySelector('.next'), //кнопки слайдера
		dotsWrap = document.querySelector('.slider-dots'), //точки пагинации
		dots = document.getElementsByClassName('dot'); //обращаемся ко всем точкам пагинации

		showSlides(slideIndex);

	//функция показа слайда
	function showSlides(n) {
		
		//если у нас последник слайд, то мы пересскакиваем на первый
		if (n > slides.length) {
			slideIndex = 1;
		};
		//если у нас первый слайд, то мы перескакиваем на последний
		if (n < 1) {
			slideIndex = slides.length;
		};

		//скрываем все слайды и показываем нужный
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};

		//убираем класс с точек пагинации
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		//показываем активный слайд
		slides[slideIndex-1].style.display = 'block';

		//добавляем класс к активной точке
		dots[slideIndex-1].classList.add('dot-active');


	}

	//функция, которая добавляет/отнимает кол-во слайдов
	function plusSlides (n) {
		showSlides(slideIndex += n);
	}
	//оживляем точки пагинации
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	//вешаем события к кнопкам
	prev.addEventListener('click', function(){

		plusSlides(-1);
	});
	next.addEventListener('click', function(){

		plusSlides(1);
	});


	//привязываем клики к точкам
	dotsWrap.addEventListener('click', function(event){
		//цикл проверка на параметр
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;