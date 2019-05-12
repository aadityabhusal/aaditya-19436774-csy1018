
function validate(field){// Validate function Starts
	if(field.value == ''){ //Checking if the field is empty
		field.style.borderBottom = "3px solid #e74c3c"; //Change the border color to red
	}else{
		field.style.borderBottom = "1px solid #bdc3c7"; //Change the border color to grey
	}
}
// Validate function Ends


var menu = document.getElementById('menu');//Menu Section translation starts
function menuOpen(){ //Menu open function
	menu.style.transform = "translate(0,0)"; //Display the menu
}
function menuClose(){//Menu close function
	menu.style.transform = "translate(-120vw,0)";//hide the menu
}
//Menu Section translation starts

//Date display code starts
var fullDate = new Date(); //Using the javascript date function
var date = (fullDate+"").slice(4,15); //Slicing the the whole date to show date month and year only
document.getElementById('date').innerHTML = date;//displaying the date
//Date display code ends

//copyright display starts
var copyrightDate = new Date().getFullYear();//Using the javascript date function and full year function 
document.getElementById('copyright-year').innerHTML = copyrightDate;//displaying the year
//copyright display ends