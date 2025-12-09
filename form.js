const Email = document.getElementById('#span_email')  
const Password = document.getElementById('#span_password')  
const Error  = document.getElementById('#span_error')
const Form = document.getElementById('#form')
const InputEmail = document.getElementById('#inputEmail')
const InputPassword = document.getElementById ('#inputPassword')

Form.addEventListener("submit",function (event) {
    event.preventDefault(); 

    const emailvalue = InputEmail.value.trim();
    const Password = InputPassword.value;

    const validEmail = emailvalue.endsWith("@gmail.com");

    const hasUpper = /[A-Z]/.test(Password);
    const hasLower = /[a-z]/.test(Password);
    const hasNumber = /[0-9]/.test(Password);
    const hasSpecial =/[!@#$%^&*(,.?:{}|<>]/.test(Password);
    const ValidPassword = 
        hasLower && hasUpper && hasNumber && hasSpecial ;

if(!validEmail){
    Error.textContent =
    "Please Enter Valid Emaild ending with @gmail.com";
    return;
}

})

