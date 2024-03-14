let userRegisterDetail = {
    userName:'',
    userEmail:'',
    userPassword:''
}

let userLoginDetail = {
    userEmail:'',
    userPassword:''
}

function setDisplay(){
    displayLogin();
}

function displayLogin(){
    let registerForm = document.getElementById('register-form');
    registerForm.style.visibility = 'hidden';

    let loginForm = document.getElementById('login-form');
    loginForm.style.visibility = 'visible';

    let sub = document.getElementById('sub')
    sub.innerHTML ='<h3>Please Login.</h3>'

    console.log('registerform Hidden');
}

function displayRegister(){
    let loginForm = document.getElementById('login-form');
    loginForm.style.visibility = 'hidden';

    let registerForm = document.getElementById('register-form');
    registerForm.style.visibility = 'visible';

    let sub = document.getElementById('sub')
    sub.innerHTML ='<h3>Please Register.</h3>'


    console.log('loginform Hidden');
}


function register(){
    let name = document.getElementById('registerName')
    userRegisterDetail.userName = name.value;
    let email = document.getElementById('registerEmail')
    userRegisterDetail.userEmail = email.value;
    let password = document.getElementById('registerPassword')
    userRegisterDetail.userPassword = password.value;  
    displayLogin();
    console.log(userRegisterDetail)
}

function login(){
    let email = document.getElementById('loginEmail')
    userLoginDetail.userEmail = email.value;
    let password = document.getElementById('loginPassword')
    userLoginDetail.userPassword = password.value;
    console.log(userLoginDetail)
    window.location.href = 'userDetails.html'
}

function updateDetails(){
    let name = document.getElementById('name');
    name.innerText = userRegisterDetail.userName.toString
}