import { setFormValue, submitSignUpForm, validateEmail, validatePassword, getValidationStatus } from "./utils.js"

const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'
const password_repeat_id = 'password-repeat'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
const sign_in_form_id = 'sign_in_form'
const sign_up_btn_id = 'sign_up_btn'

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value, (value) => value.length > 0);

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => setFormValue(last_name_id, e.target.value, (value) => value.length > 0);

const email = document.getElementById(email_id);
email.oninput = (e) => {
  setFormValue(email_id, e.target.value, validateEmail);
  updateSubmitButtonState();
};

const password = document.getElementById(password_id);
password.oninput = (e) => {
  setFormValue(password_id, e.target.value, validatePassword);
  updateSubmitButtonState();
};

const passwordRepeat = document.getElementById(password_repeat_id);
passwordRepeat.oninput = (e) => {
  setFormValue(password_repeat_id, e.target.value, (value) => value === password.value);
  updateSubmitButtonState();
};

const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const sign_up_btn = document.getElementById(sign_up_btn_id);

sign_up_btn.disabled = !getValidationStatus(); 

const updateSubmitButtonState = () => {
  sign_up_btn.disabled = !getValidationStatus();
};

updateSubmitButtonState();

sign_up_btn.onclick = (e) => {
  e.preventDefault();
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT");
    return;
  }
  console.log("FORM IS FINE");
  location.reload();
};

const sign_in_form = document.getElementById(sign_in_form_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none";
  sign_in_form.style.display = "";
};

const formFields = document.querySelectorAll("#sign_up_form input");
formFields.forEach((field) => {
  field.addEventListener("input", updateSubmitButtonState);
});
