var email =document.getElementById("email");
var password =document.getElementById("password");
var number =document.getElementById("phonenumber");
var error = document.getElementById("error");
var passerror =document.getElementById("passerror");
var pherror =document.getElementById("pherror");

	

function validate(){
    
	var regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
   
   var phnnmbr = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   
	if(regexp.test(email.value)){
		error.innerHTML = "valid";
	   error.style.color = "green";
	   return true;
	 
	}else
	{
		 error.innerHTML ="invalid";
		 error.style.color = "red";
		 return false;
	 
	}
}

    var tepassword =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(tepassword.test(password.value)){
	passerror.innerhtml = "password is valid"
	error.style.color ="green"
	return true;


}else{
	passerror.innerHTML ="Your password must be at least 8 characters as well as contain at least one uppercase, one lowercase, and one number."; 
	password.style.color = "red";
}
	if(phnnmbr.test(phonenumber.value)){

	}

