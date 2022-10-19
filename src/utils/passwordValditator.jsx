import { toastWarnNotify } from "./customToastify";

const minimumPass = 8;
export const validatePassword = (password) => {
  return password.length >= minimumPass;
};

export const validateNewPasswords = (password1, password2) => {
  return password1 === password2;
};

export const validatePasswordsandRegister = (
  NewPassword1,
  NewPassword2,
  navigate,
  data,
  loginCredentials,
  dispatch,
) => {
    if (validatePassword(NewPassword1) && validatePassword(NewPassword2)) {
      if (validateNewPasswords(NewPassword1, NewPassword2)) {
        //TODO register function 
        // dispatch(changePassword({ navigate, data, loginCredentials }))
       
      } else {
        return toastWarnNotify(
          "The password cannot be matched. Please enter the same two digits."
        );
      }
    } else {
      return toastWarnNotify(
        "The password length must be at least 8 digits.."
      );
    }
  } 
