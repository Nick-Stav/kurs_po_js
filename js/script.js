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
	let shopProd = prompt (" Какой тип товаров будем продавать?");
	mainList.shopGoods [i] = shopProd;
}//конец цикла



console.log (' бюджет на 1 день: ' + mainList.moneyMainList/30 );
console.log (mainList.shopGoods);
