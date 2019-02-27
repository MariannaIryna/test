

$(document).ready(function () {
//функція виклику таймера
function get_timer() {
	
	//Дата
	var date_new = "March 8,2019 00:00";
	//Обєкт дати 
	var date_t = new Date(date_new);
	//Обект текущей дати
	var date = new Date();
	//скільки мілісекуунд пройде
	var timer = date_t - date;
	
	//Провіряю чи не закінчився відлік
	//
	//к-сть мілісекунд в змінній date_t буде більше ніж в змінній date
	if(date_t > date) {
		
		//Днів до дати
		var day = parseInt(timer/(60*60*1000*24));
		if(day < 10) {
			day = '0' + day;
		}
		
		day = day.toString();
			
		var hour = parseInt(timer/(60*60*1000))%24;
		if(hour < 10) {
			hour = '0' + hour;
		}
		hour = hour.toString();
			
		//Скільки хвилин до дати
		
		var min = parseInt(timer/(1000*60))%60;
		if(min < 10) {
			min = '0' + min;
		}
		min = min.toString();
			
		//Скільки секунд до дати 
		var sec = parseInt(timer/1000)%60;
	
		if(sec < 10) {
			sec = '0' + sec;
		}
		sec = sec.toString();
		
		//Дні
		//Для десятків 
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day0"),day[0]);
		}
		else {
			$("#day0").html(day[0]);
		}
		//Для одиниць
		if(hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day1"),day[1]);
		}
		else {
			$("#day1").html(day[1]);
		}
		//Години
		//Для десятків 
		if(hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour0"),hour[0]);
		}
		else {
			$("#hour0").html(hour[0]);
		}
		//Для одиниць
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour1"),hour[1]);
		}
		else {
			$("#hour1").html(hour[1]);
		}
			
		//Хвилини
		
		if(min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#min0"),min[0]);
		}
		else {
			$("#min0").html(min[0]);
		}
		//Для одиниць
		if(sec[0] == 5 && sec[1] == 9) {
			animation($("#min1"),min[1]);
		}
		else {
			$("#min1").html(min[1]);
		}
			
		//секунди
		
		if(sec[1] == 9) {
			animation($("#sec0"),sec[0]);
		}
		else {
			$("#sec0").html(sec[0]);
		}
		animation($("#sec1"),sec[1]);	
		//Переодически вызываем созданную функцию, 
		//інтервал виклику одна секунда(1000 мілісекунд)
		setTimeout(get_timer,1000);
	}
	else {
		$("#clock").html("<span id='stop'>Відлік закінченний!!!</span>");
	}
	
}

function animation(vibor,param) {
	vibor.html(param)
		.css({'marginTop':'-20px','opacity':'0'})
		.animate({'marginTop':'0px','opacity':'1'});
}

get_timer();
});