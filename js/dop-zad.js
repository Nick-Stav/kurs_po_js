var num = "33721";
var arr = num.split('');
var res = 1;

for (let i = 0; i < arr.length; i++) {
	
	res *= arr[i];
	
}

var kvadr = Math.pow(res,3);
var kvadrStr = new String(kvadr);

var resKvadr = kvadrStr.split('');

document.write (resKvadr[0] + resKvadr[1]);