setInterval(myFuncSuper, 1000);

function myFuncSuper() {

let data = new Date(),
	hour = ( data.getHours() < 10 ) ? '0' + data.getHours() : data.getHours(),
	min = ( data.getMinutes() < 10 ) ? '0' + data.getMinutes() : data.getMinutes(),
	sec = ( data.getSeconds() < 10 ) ? '0' + data.getSeconds() : data.getSeconds();    


let time  = hour + ":" +  min + ":" +  sec;

document.getElementById('timer').innerHTML = time;  

}