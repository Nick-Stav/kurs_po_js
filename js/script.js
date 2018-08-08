let money = +prompt ('Ваш бюджет на месяц?');
let nameMagaz = prompt ('Название вашего магазина?');
let a = prompt ('Какой тип товаров будем продавать?');
let b = prompt ('Какой тип товаров будем продавать?');
let c = prompt ('Какой тип товаров будем продавать?');

let mainList = {
	moneyMainList: money/30,
	nameMagazin: nameMagaz,
	shopGoods: [a,b,c],
	employers: [],
	open: true
}

console.log (' бюджет на 1 день: ' + mainList.moneyMainList );