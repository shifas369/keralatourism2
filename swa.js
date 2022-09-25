var phonenumber=document.getElementById("phonenumber");
 var pherror=document.getElementById("pherror");

  eval(validate)  
    

var expression=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
if(expression.test(phonenumber.value){
    pherror.innerText = "phone number is correct";
    pherror.style.color ="green";
    phonenumber.style.border="solid 2px green";
    
}
else{
    pherror.innerText="phone number must have 10 digits";
    pherror.style.color="red";
    phonenumber.style.border="solid 2px red";
    
}
  
