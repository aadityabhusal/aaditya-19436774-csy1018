function validate(field){
	if(field.value == ''){
		field.style.borderBottom = "3px solid #e74c3c";
	}else{
		field.style.borderBottom = "1px solid #bdc3c7";
	}
}

var menu = document.getElementById('menu');
function menuOpen(){
	menu.style.transform = "translate(0,0)";
}
function menuClose(){
	menu.style.transform = "translate(-120vw,0)";
}

var fullDate = new Date();
var date = (fullDate+"").slice(4,15);
document.getElementById('date').innerHTML = date;

var copyrightDate = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML = copyrightDate;