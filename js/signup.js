var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var inValidateName = document.getElementById("inValidateName");
var inValidateEmail = document.getElementById("inValidateEmail");
var successLabel = document.getElementById("successLabel");
var emailExistsLabel = document.getElementById("emailExistsLabel");
var requiredLabel = document.getElementById("requiredLabel");
var signupBtn = document.getElementById("signupBtn");
var checkValidateName = false, checkValidateEmail = false;;

var users = [];
if (localStorage.getItem("users") == null)
    users = [];
else
    users = JSON.parse(localStorage.getItem("users"));


signupBtn.addEventListener("click", signUP);


nameInput.addEventListener("blur", function () {
    if (validateName(this.value)) {
        checkValidateName = true;
        inValidateName.classList.replace("d-block", "d-none");
    }
    else {
        checkValidateName = false;
        inValidateName.classList.replace("d-none", "d-block");
    }
})
emailInput.addEventListener("blur", function () {
    if (validateEmail(this.value)) {
        checkValidateEmail = true;
        inValidateEmail.classList.replace("d-block", "d-none");
    }
    else {
        checkValidateEmail = false;
        inValidateEmail.classList.replace("d-none", "d-block");
    }
})


function validateName(userName) {
    var regex = /^[A-Z][a-z]{3,20}$/;
    return regex.test(userName);
}
function validateEmail(userEmail) {
    var regex = /^[a-z]{3,10}([1-9]?|[1-9][0-9]{0,2})@[a-z]{5,10}.com$/;
    return regex.test(userEmail);
}

function checkValidate() {
    if (nameInput.value.trim() == "" || emailInput.value.trim() == "" || passwordInput.value.trim() == "") {
        requiredLabel.classList.replace("d-none", "d-block");
        return false;
    }
    else if (checkValidateName == false || checkValidateEmail == false) {
        return false;
    }
    else {
        requiredLabel.classList.replace("d-block", "d-none");
        return true;
    }
}
function notRepeatEmail() {
    var check = false;
    for (var i = 0; i < users.length; i++) {
        if (emailInput.value == users[i].uEmail) {
            check = true;
            break;
        }
    }
    if (check) {
        emailExistsLabel.classList.replace("d-none", "d-block");
        return false;
    }
    else {
        emailExistsLabel.classList.replace("d-block", "d-none");
        return true;
    }
}
function signUP() {
    if (checkValidate()) {
        if (notRepeatEmail()) {
            var user = {
                uName: nameInput.value,
                uEmail: emailInput.value,
                uPassword: passwordInput.value
            };
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            clear();
            emailExistsLabel.classList.replace("d-block", "d-none");
            successLabel.classList.replace("d-none", "d-block");
        }
    }
}
function clear() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}