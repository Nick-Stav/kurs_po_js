function formMassage () {
	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы с Вами свяжемся";
		message.failure = "Что-то пошло не так...";

		let form = document.getElementsByTagName('form'),
			statusMessage = document.createElement('div');

		function setCursorPosition(pos, elem) {
		    elem.focus();
		    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		    else if (elem.createTextRange) {
		        var range = elem.createTextRange();
		        range.collapse(true);
		        range.moveEnd("character", pos);
		        range.moveStart("character", pos);
		        range.select();
		    }
		}

		function mask(event) {
		    var matrix = "_ (___) ___ ____",
		        i = 0,
		        def = matrix.replace(/\D/g, ""),
		        val = this.value.replace(/\D/g, "");
		    if (def.length >= val.length) val = def;
		    this.value = matrix.replace(/./g, function(a) {
		        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		    });
		    if (event.type == "blur") {
		        if (this.value.length == 2) this.value = "";
		    } else setCursorPosition(this.value.length, this);
		}
		    
		for (let i = 0; i < form.length; i++) {
			let input = form[i].getElementsByTagName('input'),
				input_tel = document.getElementsByName("user_phone");

			input_tel[i].addEventListener("input", mask);
		    input_tel[i].addEventListener("focus", mask);
		    input_tel[i].addEventListener("blur", mask);
			form[i].addEventListener('submit', (event) => {
				form[i].appendChild(statusMessage);
				event.preventDefault();

				//AJAX
				let request = new XMLHttpRequest();
				request.open("POST", 'server.php');

				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = new FormData(form[i]);
		
				request.send(formData);
				
				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							console.log(form[i]);
							statusMessage.innerHTML = message.success;
						}
						else {
							statusMessage.innerHTML = message.failure;
						}
					}
				};
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
				
			});
		}


}

module.exports = formMassage;