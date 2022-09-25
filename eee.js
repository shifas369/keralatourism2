var email=document.getElementById("email");

var phone=document.getElementById("password");

var password=document.getElementById("phonenumber")

var error=document.getElementById("error");

var pherror=document.getElementById("passerror");

var passerror=document.getElementById("pherror");


function validate(){

let regex = /^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;

  let phn=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

 let repassword=/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/;

 var mediumpassword = /^(((?=.[a-z])(?=.[A-Z]))|((?=.[a-z])(?=.[0-9]))|((?=.[A-Z])(?=.[0-9])))(?=.{6,})/;

 if(regex.test(email.value)){
   emailerror.innerHTML="***valid";

 emailerror.style.color="green"
 email.style.border="2px solid green"



 }

 else{

        error.innerHTML="***invalid"

        error.style.color="red"

        email.style.border="2px solid red"

        return false;

    }

    if(phn.test(phone.value)){

        pherror.innerHTML="***valid";

        pherror.style.color="green"

        phone.style.border="2px solid green"

        

    }

    else{

        pherror.innerHTML="****invalid"

        pherror.style.color="red"

        phone.style.border="2px solid red"

        return false;

    }

    if(repassword.test(password.value)){

        passerror.innerHTML="***valid";

        passerror.style.color="green"

        password.style.border="2px solid green"

        

    }else if(mediumpassword.test(password.value)){

        passerror.innerHTML="*****valid";

        passerror.style.color="orange"

        password.style.border="2px solid orange"

    }

    else{

        passerror.innerHTML="*Make sure it contain at least 8 characters including numbers,uppercase and lowercase"

        passerror.style.color="red"

        password.style.border="2px solid red"

        return false;

    }

}





