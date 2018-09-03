// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

//Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];


// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arRay = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arRay, myFunc));


//тестирование

let assert = require('chai').assert

	// 1) проверяем тип данных функции sum 
	describe('sum', function(){
		//прописываем то, что тестируем
		it('Тип данных', function() {
			assert.equal(sum(2,2), true);
		});
	});

	// 2) Переменная num должна быть равна 5
	describe('num', function(){
		it(' Переменная num должна быть ровна 5', function(){
			assert.equal(num, 5);
		});
	});

	// 3) тестируем функцию each
	describe('each', function(){
		//возвращаем значение
		it('Возвращаем значение ', function(){
			assert.typeOf(arRay, 'Array');
		});
		//тип данных
		it('Тип данных', function(){
			assert.lengthOf(arRay, 5);
		});
		//результат 
		it("Результат", function(){
			function test() {
				for (let i = 0; i <= arRay.length; i++){
					assert.equal(arRay[i] === Math.sqrt(arRay[i]));
				}
			}
		});
	});
