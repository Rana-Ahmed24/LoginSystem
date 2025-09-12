let form = document.getElementById("registered-form");
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let signupBtn = document.getElementById("signupBtn");
let signInLink = document.getElementById("signInLink");
let nameMsg = document.getElementById("nameMsg");
let emailMsg = document.getElementById("emailMsg");
let passwordMsg = document.getElementById("passwordMsg");
let existMsg = document.getElementById("existMsg");

let userList = [];




if (localStorage.getItem("users")) {
    userList = JSON.parse(localStorage.getItem("users"));
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateAllInputs(signupName, nameMsg) && validateAllInputs(signupEmail, emailMsg) && validateAllInputs(signupPassword, passwordMsg)) {
        addUser();
        form.reset();    }
}
)



signInLink.addEventListener("click", function (e) {
    window.location.href = "../sign-in/login.html";
});







function validateAllInputs(element,alertMsg) {
    let regex = {
      signupName: /^[A-Za-z\s]{3,}$/,
      signupEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      signupPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    };

    let text = element.value
    
    if (regex[element.id].test(text)) {
        alertMsg.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        alertMsg.classList.replace("d-none", "d-block");
        return false;
    }

}

function addUser() {
    if (!isExistingUser(signupEmail.value)) {
        let user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    };
    userList.push(user);
        localStorage.setItem("users", JSON.stringify(userList));
        existMsg.classList.replace("d-block", "d-none");
        setTimeout(function () {
            window.location.href = "../../sign in/login.html";
        }, 2000);
    }
    else {
        existMsg.classList.replace("d-none", "d-block");
    }
}

function isExistingUser(userEmail) {
   for (let i = 0; i < userList.length; i++) {
       if (userList[i].email === userEmail) {
           return true;
       }
   }
   return false;
}