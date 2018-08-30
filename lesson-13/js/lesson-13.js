$(document).ready(function(){ //конструкция, при которой код начинает работать только после загрузки страницы

	$('.main_btna').click(function(){

		$('.overlay').fadeToggle('slow');

		$('.modal').slideToggle('slow');

	});
	
	$('.close').click(function(){
			$('.modal').slideToggle('slow');
			$('.overlay').fadeToggle('slow');
	});		



});