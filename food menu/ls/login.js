let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
    
   
})

function validateInputs(){
     let usernameVal = username.value.trim();
     let emailVal = email.value.trim();
     let passwordVal = password.value.trim();
     let cpasswordVal = cpassword.value.trim();
     

   if(usernameVal ===""){

       setError(username,"Username is requierd")
    }
    else{
        setSuccess(username)
    }  

    if(emailVal === ""){
        
        setError(email,"email is required")
    }
//     else if(validateEmail(email)){
      
//         setError(email,"please enter a valid email")
//    }
    else{
        setSuccess(email)
    }

    if(passwordVal ===""){
        
        setError(password,"password is requierd")
     }
     else if(passwordVal.length<8){
        
        setError(password,"password must be atleast 8 charcters long")
     }
     else{
        setSuccess(password)
     }

     if(cpasswordVal ===""){
        
        setError(cpassword,"confirm password is requierd")
     }
     else if(cpasswordVal!==passwordVal){
   
        setError(cpassword," password does not match")
     }
     else{
        setSuccess(cpassword)
     }
    

}
//element - email, msg - email is reqd
function setError(element,message){
       let divgroup = element.parentElement;
       let errorelement = divgroup.querySelector('.error')

       errorelement.innerText = message;
       divgroup.classList.add('error')
       divgroup.classList.remove('success')
}
function setSuccess(element,message){
    let divgroup = element.parentElement;
    let errorelement = divgroup.querySelector('.error')

    errorelement.innerText = "";
    divgroup.classList.add('success')
    divgroup.classList.remove('error')
}
//  function validateEmail(email){
//    const sd=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//      return sd.text(email);
// }