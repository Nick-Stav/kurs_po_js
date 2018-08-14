let money,
 	nameMagaz,
	time,
	price;

// функция
function start(){
	money = +prompt ('Ваш бюджет на месяц?', '');

	// цикл для проверки бюджета
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt ('Ваш бюджет на месяц?');
	}


	nameMagaz = prompt ('Название вашего магазина?', '').toUpperCase();
	time = 21;
}//конец функции старт

// start();

let mainList = {
	moneyMainList: money,
	nameMagazin: nameMagaz,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {// функция для выбора товара
						for (let i = 0; i < 3; i++) {
							let shopProd = prompt('Какой тип товаров будем продавать?', '');

							if ((typeof(shopProd)) === 'string' && (typeof(shopProd)) != null && shopProd != '' && shopProd.length < 50 ) {
								console.log('Все верно!');
								mainList.shopGoods[i] = shopProd;
							} else {
								i = i-1;
							}
						}//конец цикла
					},// КОНЕЦ - функция для выбора товара
	workTime: function workTime (time) { // функция контроля времени открытия магазина
					if (time < 0) {
						console.log("Такого не может быть!");
					} else if (time > 8 && time < 20) {
						console.log("Время работать!");
						mainList.open = true;
						} else if (time < 24){
							console.log ('Уже слишком поздно!');
							} else {
								console.log ('В сутках только 24 часа');
							}
				},	// КОНЕЦ функция контроля времени открытия магазина
	moneyDay: function moneyDay () { // функция расчета бюджета на день
					console.log (' бюджет на 1 день: ' + mainList.moneyMainList/30 );
				}, // КОНЕЦ функция расчета бюджета на день
	discont: function discont(){ // функция дисконтной системы
				price = +prompt ('Введите стоимость покупки', '');
				let skidka = prompt ('Введите промокод для скидки', '');
				let percent = 20; //скидка 

				if (skidka == 'promo') {
					console.log('Стоимость покупки с учетом скидки: ' + (price - (price/100*percent)));
					
				} else {
					console.log('Стоимость покупки: ' + (price));
				}
			}, // КОНЕЦ функция дисконтной системы
	emplNaim: function emplNaim() { //функция найма сотрудников
				for (let s = 1; s < 5; s++) {
					let sotr = prompt ('Введите имя сотрудника, которого принимаете на работу', '');
					mainList.employers[s] = sotr;
					
					
				}
				console.log('Вы наняли сотрудников: '); 
				console.log(mainList.employers);
			}, //КОНЕЦ функция найма сотрудников
	chooseShopItems: function chooseShopItems(){
				let items = prompt (' Перечислите через запятую ваши товары', '');

				mainList.shopItems = items.split(',');
				mainList.shopItems.push(prompt('Подождите еще ', ''));
				mainList.shopItems.sort();
			}

};

mainList.chooseShopItems();
mainList.shopItems.forEach(function(item, i, mainList){
	
	console.log('У нас вы можете купить:' + ++i + '- ' + item );
});


for ( items in mainList.shopItems ) {
	console.log('Наш магазин включает в себя: ' + mainList.shopItems);
};