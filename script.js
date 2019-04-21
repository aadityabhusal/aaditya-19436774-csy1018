function contactValidation(){

	var inputElement = document.getElementsByClassName('material-input');

	for (var i = 0; i < inputElement.length; ++i) {
		inputElement[i].onblur = function(){
			if(this.value == ''){
				this.style.borderBottom = "3px solid #e74c3c";
			}else{
				this.style.borderBottom = "1px solid #bdc3c7";
			}
		}
	    
	}
}
contactValidation();