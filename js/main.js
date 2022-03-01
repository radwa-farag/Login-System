var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var incorrectLabel = document.getElementById("incorrectLabel");
var requiredLabel = document.getElementById("requiredLabel");
var loginBtn = document.getElementById("loginBtn");


var users = [];
if (localStorage.getItem("users") == null)
    users = [];
else
    users = JSON.parse(localStorage.getItem("users"));


loginBtn.addEventListener("click", logIn);

function checkValidate() {
    if (emailInput.value.trim() == "" || passwordInput.value.trim() == "") {
        requiredLabel.classList.replace("d-none", "d-block");
        return false;
    }
    else
    {
        requiredLabel.classList.replace( "d-block","d-none");
        return true;
    }
}
function logIn() {
    var check = false;
    var userName = "";
    if (checkValidate()) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].uEmail == emailInput.value && users[i].uPassword == passwordInput.value) {
                check = true;
                userName = users[i].uName;
                break;
            }
        }
        if (check) {
            sessionStorage.setItem("userName", userName);
            window.open("home.html", "_self");
        }
        else
            incorrectLabel.classList.replace("d-none", "d-block");
    }
}