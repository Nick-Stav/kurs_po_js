let money,
 	nameMagaz,
	time,
	price;

// функция
function start(){
	money = +prompt ('Ваш бюджет на месяц?');

	// цикл для проверки бюджета
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt ('Ваш бюджет на месяц?');
	}


	nameMagaz = prompt ('Название вашего магазина?').toUpperCase();
	time = 21;
}//конец функции старт

// start();

let mainList = {
	moneyMainList: money,
	nameMagazin: nameMagaz,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};
 
// функция для выбора товара
function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let shopProd = prompt('Какой тип товаров будем продавать?');

		if ((typeof(shopProd)) === 'string' && (typeof(shopProd)) != null && shopProd != '' && shopProd.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = shopProd;
		} else {
			i = i-1;
		}
	}//конец цикла
}// КОНЕЦ - функция для выбора товара

// chooseGoods();

// функция контроля времени открытия магазина
function workTime (time) {
	if (time < 0) {
		console.log("Такого не может быть!");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
		} else if (time < 24){
			console.log ('Уже слишком поздно!');
			} else {
				console.log ('В сутках только 24 часа');
			}
}		
// workTime(18); 

// функция расчета бюджета на день
function moneyDay () {
	console.log (' бюджет на 1 день: ' + mainList.moneyMainList/30 );
}

// функция дисконтной системы

function discont(){
	price = +prompt ('Введите стоимость покупки');
	let skidka = prompt ('Введите промокод для скидки');
	let percent = 20; //скидка 

	if (skidka == 'promo') {
		console.log('Стоимость покупки с учетом скидки: ' + (price - (price/100*percent)));
		
	} else {
		console.log('Стоимость покупки: ' + (price));
	}
}

//функция найма сотрудников
function emplNaim() {
	
	for (let s = 1; s < 5; s++) {
		let sotr = prompt ('Введите имя сотрудника, которого принимаете на работу');
		mainList.employers[s] = sotr;
		
		
	}
	console.log('Вы наняли сотрудников: '); 
	console.log(mainList.employers);
}

emplNaim();
// moneyDay();
// discont();
// console.log (mainList.shopGoods);


