document.write ('<h3>' + "Доп задание 1:" + '</h3><br>');

let week = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота'];
let now = new Date();
let day = now.getDay();


for (let i = 0; i < week.length; i++) {
	if ( i == day){
		document.write ('<i>' + week[day] + '</i> <br>');
	} else if (week[i] == 'суббота' || week[i] == 'воскресение') {
		document.write ('<b>' + week[i] + '</b>' + '<br>');
	} else {
		document.write (week[i] + '<br>');
	}

}



document.write ('<h3>' + "Доп задание 2:" + '</h3><br><p>Посмотри записи в консоли! </p>');

let arr = ['3456','74545','1243','345','6675','56868','74545'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == '3' || arr[i][0] == '7') {
		console.log(arr[i]);
	}
}
