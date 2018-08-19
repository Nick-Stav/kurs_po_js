/*jshint esversion: 6 */

let money,
	price,
	nameMagaz;

let mainList = {
	moneyMainList: money,
	nameMagazin: nameMagaz,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
};


let btnOpenMag = document.getElementById('open-btn');

// блоки с классом ..-value
let nazvShop = document.getElementsByClassName('name-value')[0],
	moneyShop = document.getElementsByClassName('budget-value')[0],
	tovShop = document.getElementsByClassName('goods-value')[0],
	nameShop = document.getElementsByClassName('items-value')[0],
	emplShop = document.getElementsByClassName('employers-value')[0],
	diskShop = document.getElementsByClassName('discount-value')[0],
	openShop = document.getElementsByClassName('isopen-value')[0],
	moneyDayShop = document.getElementsByClassName('count-budget-value')[0],
	timeShop = document.getElementsByClassName('time-value')[0];

	moneyDayShop.readOnly = true;

//массив с классом ..-value 
let massValue = [nazvShop, moneyShop, tovShop, nameShop, emplShop, diskShop, openShop, moneyDayShop, timeShop];

//блоки с классом good-item
let goods = document.getElementsByClassName('goods-item'),
	goodOne = document.getElementsByClassName('goods-item')[0],
	goodTwo = document.getElementsByClassName('goods-item')[1],
	goodThree = document.getElementsByClassName('goods-item')[2],
	goodFor = document.getElementsByClassName('goods-item')[3];

//массив с товарами
let goodds = [goodOne, goodTwo, goodThree, goodFor];


//последние кнопки через tagName
let btnTag = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employerBtn = document.getElementsByTagName('button')[3];
	//отключаем активность кнопок
	employerBtn.disabled = true;
	btnTag.disabled = true;
	budgetBtn.disabled = true;

//массив с последними кнопками
let btnTags = [btnTag, budgetBtn, employerBtn];


//обращаемся через селектор querySelector
let cssSelOne = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudValue = document.querySelector('.count-budget-value');

//массив с обращениями к селекторам
let massSel = [cssSelOne, timeValue, countBudValue];

//по селектору вывода всех сотрудников
let empItem = document.querySelectorAll('.hire-employers-item');
	
// console.log(empItem);

//*******начинаем работать со страницей (6 урок)*********
//кнопка "открыть магазин"
btnOpenMag.addEventListener('click', () => {
	money = +prompt ('Ваш бюджет на месяц?', '');

	// цикл для проверки бюджета
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt ('Ваш бюджет на месяц?');
	}

	moneyShop.textContent = money;

	nazvShop.textContent = prompt ('Название вашего магазина?', '').toUpperCase();
	//дисконтная система
	let discont = confirm ("Включить функцию дисконтной системы?");
		if (discont == true) {
			diskShop.style.backgroundColor = 'green';
		} else {
			diskShop.style.backgroundColor = 'red';
		}
});

//работаем с категориями товаров
btnTag.addEventListener('click', () => {
	for (let i = 0; i < goods.length; i++) {
		let shopProd = goods[i].value;

		if ((typeof(shopProd)) === 'string' && (typeof(shopProd)) != null && shopProd.length < 50 ) {
			
			mainList.shopGoods[i] = shopProd;
			tovShop.textСontent = mainList.shopGoods;
			console.log('Все верно!');
		} else {
			i = i-1;
		}
	}//конец цикла
});

//вводим продукты через запятую
cssSelOne.addEventListener('change', () => {
	let items = cssSelOne.value;

	if (isNaN(items) || items != "") {

		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		nameShop.textContent = mainList.shopItems;
	}
});

//работаем с блоком времени
timeValue.addEventListener('change',  () => {
	let time = timeValue.value;

	if (time < 0) {
		console.log("Такого не может быть!");
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
		mainList.open = true;
		} else if (time < 24){
			console.log ('Уже слишком поздно!');
			mainList.open = false;
			} else {
				console.log ('В сутках только 24 часа');
				mainList.open = false;
			}
	if(mainList.open == true) {
		openShop.style.backgroundColor = 'green';
		employerBtn.disabled = false;
		btnTag.disabled = false;
		budgetBtn.disabled = false;
	} else {
		openShop.style.backgroundColor = 'red';
		employerBtn.disabled = true;
		btnTag.disabled = true;
		budgetBtn.disabled = true;
	}
});

//функция рассчета дневного бюджета
budgetBtn.addEventListener('click', () => {
	countBudValue.value = money / 30;
});

//нанимаем сотрудников
employerBtn.addEventListener('click', () => {
	for (let i = 0; i < empItem.length; i++) {
			let name = empItem[i].value;
			mainList.employers[i] = name;
			
			emplShop.textContent += mainList.employers[i] + ', ';
		}
		
	//КОНЕЦ функция найма сотрудников
});

//дисконтная система
