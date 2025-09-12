let loginForm = document.getElementById("login-form");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signUpLink = document.getElementById("signUpLink");
let errorMessage = document.getElementById("error-message");

let userList = [];


if(localStorage.getItem("users")) {
    userList = JSON.parse(localStorage.getItem("users"));
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
})


signUpLink.addEventListener("click", function () {
    window.location.href = "../sign-up/sign-up.html";
});

function loginUser() {
    let userData = {
        email: loginEmail.value,
        password: loginPassword.value
    };


    if (loginValidation(userData)) {
        errorMessage.classList.add("d-none");
        setTimeout(function () {
            window.location.href = "../welcome/welcome.html";
        }, 1000);   
    } else {
        errorMessage.classList.remove("d-none");

    }


}


function loginValidation(userData) {
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email.toLowerCase() === userData.email.toLowerCase() && userList[i].password === userData.password) {
            localStorage.setItem("userName", userList[i].name);
            return true;
        }
    }
    return false;

}