let btnOpenMag = document.getElementById('open-btn');

// блоки с классом ..-value
let nazvMag = document.getElementsByClassName('name-value')[0],
	moneyMag = document.getElementsByClassName('budget-value')[0],
	tovMag = document.getElementsByClassName('goods-value')[0],
	nameMag = document.getElementsByClassName('items-value')[0],
	sotrMag = document.getElementsByClassName('employers-value')[0],
	diskMag = document.getElementsByClassName('discount-value')[0],
	openMag = document.getElementsByClassName('isopen-value')[0],
	moneyDayMag = document.getElementsByClassName('count-budget-value')[0],
	timeMag = document.getElementsByClassName('time-value')[0];

//массив с классом ..-value 
let massValue = [nazvMag, moneyMag, tovMag, nameMag, sotrMag, diskMag, openMag, moneyDayMag, timeMag];

//блоки с классом good-item
let goodOne = document.getElementsByClassName('goods-item')[0],
	goodTwo = document.getElementsByClassName('goods-item')[1],
	goodThree = document.getElementsByClassName('goods-item')[2],
	goodFor = document.getElementsByClassName('goods-item')[3];

//массив с товарами
let goods = [goodOne, goodTwo, goodThree, goodFor];


//последние кнопки через tagName
let btnTag = document.getElementsByTagName('button')[1],
	btnTagTwo = document.getElementsByTagName('button')[2],
	btnTagThree = document.getElementsByTagName('button')[3];

//массив с последними кнопками
let btnTags = [btnTag, btnTagTwo, btnTagThree];


//обращаемся через селектор querySelector
let cssSelOne = document.querySelector('.choose-item'),
	cssSelTwoo = document.querySelector('.time-value'),
	cssSelThree = document.querySelector('.count-budget-value');

//массив с обращениями к селекторам
let massSel = [cssSelOne, cssSelTwoo, cssSelThree];

//по селектору вывода всех сотрудников
let sotr = document.querySelectorAll('.hire-employers-item');

// console.log(sotr);
