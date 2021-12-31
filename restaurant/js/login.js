var card = document.getElementById('card');
let emailarr = ["admin@gmail.com"];
let passarr = ["admin"];
function showpass(){
    var pass = document.getElementById('password');
    if(pass.type == "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}
function openRegister(){
    card.style.transform="rotateY(180deg)";
}
function openLogin(){
    card.style.transform="rotateY(0deg)";
}
let loginbtn = document.getElementById('login-btn');
let registerbtn = document.getElementById('registerbtn');

//login check
function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    for(let i=0;i<emailarr.length;i++){
        if(emailarr[i]==email && passarr[i]==password){
            err=document.getElementById('error');
            err.innerHTML= "";
            window.location.href = "home.html";
            
        
        }else{
            err=document.getElementById('error');
            err.innerHTML= "Invalid email or password";
            err.style.color="red";
            
        }
    }
};

registerbtn.addEventListener('click',function(){
    
    let email = document.getElementById('newemail').value;
    let password = document.getElementById('newpass').value;
    if (email=="" || password==""){
        err=document.getElementById('errorreg');
        err.innerHTML= "Please fill all the fields";
        err.style.color="red";
        return;
    }else{
    
    let name = document.getElementById('newname').value;
    emailarr.forEach(element => {
        
  
    console.log(element);
        if(element==email){
            err=document.getElementById('errorreg');
            err.innerHTML= "Email already exists";
            err.style.color="red";
            return;
        }else{
            emailarr.push(email);
            passarr.push(password);

            err=document.getElementById('errorreg');
            err.innerHTML= "Account created";
            err.style.color="green";
            return;
            
        }
        
    });
}
});

    