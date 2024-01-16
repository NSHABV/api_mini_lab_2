const formValues = {} 
const formValidation = {}  



export function validatePassword(value) {
  const minLength = 6;
  const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);
  const hasUpperCase = /[A-Z]+/.test(password);
  const passwordField = document.getElementById('password');
  const isValid = value.length >= minLength && hasSpecialChars && hasUpperCase;;
  if (isValid) {
    passwordField.classList.remove('invalid');
  } else {
    passwordField.classList.add('invalid');
  }
  return isValid;
}

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email)
    .toLowerCase()
    .match(regExp);
}


export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus);
};

export const setFormValue = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue.trim(); 
  if (validator !== undefined) {
    formValidation[valueKey] = validator(formValues[valueKey]);
  }
};
export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT");
    return false;
  }
  console.log("FORM IS FINE");
  console.log(formValues);
  return true;
};