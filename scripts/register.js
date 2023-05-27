const passwordField = document.getElementById("password");
const confPasswordField = document.getElementById("password-conf");
let isValidated = [false, false, false, false];
function nameValidation(e) {
  validateName(e);
}

function validateName(nameField) {
  let regex = /^[a-z ]+$/i;
  let name = nameField.value;
  if (regex.test(name) || name.length === 0) {
    setCorrect(nameField);
    isValidated[nameField.id] = true;
  } else {
    setWrong(nameField);
    isValidated[nameField.id] = false;
  }
}

function validateEmail(emailField) {
  let regex = /^[a-z]+@([a-z]+)\.[a-z]+$/i;
  let email = emailField.value;
  if (regex.test(email) | (email.length === 0)) {
    setCorrect(emailField);
    isValidated[2] = true;
  } else {
    setWrong(emailField);
    isValidated[2] = false;
  }
}

function validatePassword() {
  let password = passwordField.value;
  let confPassword = confPasswordField.value;
  if (password == confPassword) {
    setCorrect(passwordField);
    setCorrect(confPasswordField);
    isValidated[3] = true;
  } else {
    setWrong(passwordField);
    setWrong(confPasswordField);
    isValidated[3] = true;
  }
}

function register() {

    for (i = 0; i < isValidated.length; i++){
        if (isValidated[i] === false) {
            alert("Wrong input");
            return;
        }
    }

  window.location.href = "index.html";
}

function setWrong(element) {
  element.classList.add("wrong");
}

function setCorrect(element) {
  element.classList.remove("wrong");
}
