$(document).ready(function(){ //конструкция, при которой код начинает работать только после загрузки страницы

	//модалка на кнопку "выбрать тур"
	$('.main_btna').click(function(){

		$('.overlay').fadeToggle('slow');

		$('.modal').slideToggle('slow');

	});

	//модалка на кнопку "получить консультацию"
	$('.main_btn').click(function(){

		$('.overlay').fadeToggle('slow');

		$('.modal').slideToggle('slow');

	});

	//модалка на кнопку "расписание туров"
	$('a[href*="#sheldure"]').click(function(){

		$('.overlay').fadeToggle('slow');

		$('.modal').slideToggle('slow');

	});
	
	$('.close').click(function(){
			$('.modal').slideToggle('slow');
			$('.overlay').fadeToggle('slow');
	});		



});
