let userName = document.getElementById("userName");




window.addEventListener("load", function () {
    userName.innerHTML=`I am ${localStorage.getItem("userName")}`
})