let money = +prompt ('Ваш бюджет на месяц?');
let nameMagaz = prompt ('Название вашего магазина?');




let mainList = {
	moneyMainList: money,
	nameMagazin: nameMagaz,
	shopGoods: [],
	employers: {},
	open: false
};



for (let i = 0; i < 3; i++) {
	let shopProd = prompt('Какой тип товаров будем продавать?');

	if ((typeof(shopProd)) === 'string' && (typeof(shopProd)) != null && shopProd != '' && shopProd.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = shopProd;
	} else {
		i = i-1;
	}
}//конец цикла


// вторая версия цикла
// let i = 0;
// while (i < 3) {
// 	let shopProd = prompt('Какой тип товаров будем продавать?');

// 	if ((typeof(shopProd)) === 'string' && (typeof(shopProd)) != null && shopProd != '' && shopProd.length < 50 ) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = shopProd;
// 	} else {
// 		i = i-1;
// 	}
// 	i++;
// }

// третья версия цикла
// let i = 0;
// do {
	
// 	let shopProd = prompt('Какой тип товаров будем продавать?');

// 	if ((typeof(shopProd)) === 'string' && (typeof(shopProd)) != null && shopProd != '' && shopProd.length < 50 ) {
// 		console.log('Все верно!');
// 		mainList.shopGoods[i] = shopProd;
// 	} else {
// 		i = i-1;
// 	}
// 	i++;
// } while (i < 3);

console.log (' бюджет на 1 день: ' + mainList.moneyMainList/30 );
console.log (mainList.shopGoods);


