const inPassword = document.querySelector("#password");
const inPasswordConfirm = document.querySelector("#password-confirm");
const formRowPassword = document.querySelector(".form-input.password");
const passMismatch = document.createElement("p");

passMismatch.textContent = "Passwords do not match";
passMismatch.classList = "pass-mismatch";
formRowPassword.appendChild(passMismatch);
passMismatch.hidden = true;

function checkPasswordMatch() {
  passMismatch.hidden = true;
  if (inPassword.value !== inPasswordConfirm.value) {
    if (inPassword.value.length > 0 && inPasswordConfirm.value.length > 0) {
      passMismatch.hidden = false;
    }
  }
}

inPassword.addEventListener("keyup", checkPasswordMatch);
inPasswordConfirm.addEventListener("keyup", checkPasswordMatch);
