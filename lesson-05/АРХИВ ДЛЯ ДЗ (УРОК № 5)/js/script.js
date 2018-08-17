let btnMenu1 = document.getElementsByClassName("menu-item")[1],
	btnMenu2 = document.getElementsByClassName("menu-item")[2],
	btnParent = document.getElementsByClassName("menu")[0],
	newBtn = document.createElement('li'),
	titleParent = document.getElementsByClassName("column")[1],
	divTitle = document.getElementsByClassName("title")[0],
	newDiv = document.createElement('div'),
	rekl = document.getElementsByClassName("adv")[0],
	askOne = prompt('Как ты относишься к технике apple?'),
	answer = document.getElementById("prompt");

newBtn.classList.add('menu-item');


document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

btnParent.insertBefore(btnMenu2, btnMenu1);
btnParent.appendChild(newBtn);
newBtn.innerHTML = 'Пятый пункт';

titleParent.removeChild(divTitle);

titleParent.insertBefore(newDiv,document.getElementsByClassName("adv")[0]);
newDiv.classList.add('title');

newDiv.innerHTML = 'Мы продаем только подлинную технику Apple';

titleParent.removeChild(rekl);

answer.innerHTML = askOne;



// console.log(divTitle);