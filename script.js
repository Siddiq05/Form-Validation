// const fnameError = document.querySelector(".fname-error");
// const phNoError = document.querySelector(".phNo-error");
// const emailError = document.querySelector(".email-error");
// const msgError = document.querySelector(".msg-error");
// const submitError = document.querySelector(".submit-error");

// const fname = document.getElementById("fname");
// const phNo = document.getElementById("phNo");
// const email = document.getElementById("email");
// const msg = document.getElementById("msg");

// const Button = document.querySelector(".container form button");

// validateFullName = () => {
//   let name = fname.value.trim();

//   if (name == "") {
//     fnameError.innerHTML = "Name is requried";
//     fnameError.style.bottom = "-23pxpx";
//     return false;
//   }
//   if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//     fnameError.style.bottom = "-23px";
//     fnameError.innerHTML = "Write Full Name";
//     return false;
//   }
//   fnameError.innerHTML =
//     '<i class="fa-solid fa-check" style="color: seagreen; "></i>';
//   fnameError.style.bottom = "0px";
//   return true;
// };

// validatephNo = () => {
//   let phone = phNo.value.trim();
//   if (phone == "") {
//     phNoError.innerHTML = "Phone No is requried";
//     phNoError.style.bottom = "-23px";
//     return false;
//   }
//   if (phone.length !== 10) {
//     phNoError.innerHTML = "Phone No should be 10 digits";
//     phNoError.style.bottom = "-23px";
//     return false;
//   }
//   if (!phone.match(/^[0-9]{10}$/)) {
//     phNoError.style.bottom = "-23px";
//     phNoError.innerHTML = "Only Digits please";
//     return false;
//   }
//   phNoError.innerHTML =
//     '<i class="fa-solid fa-check" style="color:seagreen; "></i>';
//   phNoError.style.bottom = "0px";
//   return true;
// };

// validateEmail = () => {
//   let Email = email.value.trim();
//   if (Email == "") {
//     emailError.innerHTML = "Email is requried";
//     emailError.style.bottom = "-23px";
//     return false;
//   }
//   if (!Email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
//     emailError.style.bottom = "-23px";
//     emailError.innerHTML = "";
//     return false;
//   }
//   emailError.innerHTML =
//     '<i class="fa-solid fa-check" style="color:seagreen;"></i>';
//   emailError.style.bottom = "0px";
//   return true;
// };

// validateMsg = () => {
//   let message = msg.value.trim();
//   let req = 30;
//   let left = req - message.length;
//   if (message == "") {
//     msgError.innerHTML = "Message is requried";
//     msgError.style.bottom = "0px";
//     return false;
//   }
//   if (left > 0) {
//     msgError.style.bottom = "0px";
//     msgError.innerHTML = `${left} more characters required`;
//     return false;
//   }
//   msgError.innerHTML =
//     '<i class="fa-solid fa-check" style="color: seagreen; "></i>';
//   msgError.style.bottom = "0px";
//   return true;
// };

// fname.addEventListener("keyup", validateFullName);

// phNo.addEventListener("keyup", validatephNo);

// email.addEventListener("keyup", validateEmail);

// msg.addEventListener("keyup", validateMsg);

// Button.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     !validateFullName() ||
//     !validatephNo() ||
//     !validateEmail() ||
//     !validateMsg()
//   ) {
//     submitError.style.display = "block";
//     submitError.innerHTML = "Please fix the above error to submit";
//     setTimeout(() => {
//       submitError.style.display = "none";
//     }, 3000);
//     return false;
//   } else {
//     submitError.style.cssText = "display: block; color: seagreen;";
//     submitError.innerHTML = "Form submitted successfully";
//     fname.value = "";
//     phNo.value = "";
//     email.value = "";
//     msg.value = "";

//     // You can also reset error messages if needed
//     // fnameError.style.bottom = "-20px";
//     // phNoError.style.bottom = "-20px";
//     // emailError.style.bottom = "-20px";
//     // msgError.style.bottom = "-20px";

//     // Optional: reset validation error messages
//     // fnameError.innerHTML = "";
//     // phNoError.innerHTML = "";
//     // emailError.innerHTML = "";
//     // msgError.innerHTML = "";
//     setTimeout(() => {
//       submitError.style.display = "none";
//     }, 2000);
//     return true;
//   }
// });

const fnameError = document.querySelector(".fname-error");
const phNoError = document.querySelector(".phNo-error");
const emailError = document.querySelector(".email-error");
const msgError = document.querySelector(".msg-error");
const submitError = document.querySelector(".submit-error");

const fname = document.getElementById("fname");
const phNo = document.getElementById("phNo");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

const Button = document.querySelector(".container form button");

const setError = (element, message) => {
  element.innerHTML = message;
  element.style.bottom = "-23px";
};

const setSucess = (element, message) => {
  element.innerHTML =
    '<i class="fa-solid fa-check" style="color: seagreen; "></i>';
  element.style.bottom = "0px";
  if (message) {
    element.innerHTML = message;
    element.style.bottom = "0px";
  }
};

validateFullName = () => {
  let name = fname.value.trim();

  if (name == "") {
    setError(fnameError, "Name is requried");
    // fnameError.innerHTML = "Name is requried";
    // fnameError.style.bottom = "-23px";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    setError(fnameError, "Write Full Name");
    // fnameError.style.bottom = "-23px";
    // fnameError.innerHTML = "Write Full Name";
    return false;
  }
  setSucess(fnameError);
  // fnameError.innerHTML =
  //   '<i class="fa-solid fa-check" style="color: seagreen; "></i>';
  // fnameError.style.bottom = "0px";
  return true;
};

validatephNo = () => {
  let phone = phNo.value.trim();
  if (phone == "") {
    setError(phNoError, "Phone No is requried");
    // phNoError.innerHTML = "Phone No is requried";
    // phNoError.style.bottom = "-23px";
    return false;
  }
  if (phone.length !== 10) {
    setError(phNoError, "Phone No should be 10 digits");
    // phNoError.innerHTML = "Phone No should be 10 digits";
    // phNoError.style.bottom = "-23px";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    setError(phNoError, "Only Digits please");
    // phNoError.style.bottom = "-23px";
    // phNoError.innerHTML = "Only Digits please";
    return false;
  }
  setSucess(phNoError);
  // phNoError.innerHTML =
  //   '<i class="fa-solid fa-check" style="color:seagreen; "></i>';
  // phNoError.style.bottom = "0px";
  return true;
};

validateEmail = () => {
  let Email = email.value.trim();
  if (Email == "") {
    setError(emailError, "Email is requried");
    // emailError.innerHTML = "Email is requried";
    // emailError.style.bottom = "-23px";
    return false;
  }
  if (!Email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    setError(emailError, "Email Invaild");
    // emailError.style.bottom = "-23px";
    // emailError.innerHTML = "Email Invaild";
    return false;
  }
  setSucess(emailError);
  // emailError.innerHTML =
  //   '<i class="fa-solid fa-check" style="color:seagreen;"></i>';
  // emailError.style.bottom = "0px";
  return true;
};

validateMsg = () => {
  let message = msg.value.trim();
  let req = 30;
  let left = req - message.length;
  if (message == "") {
    setSucess(msgError, "Message is requried");
    // msgError.innerHTML = "Message is requried";
    // msgError.style.bottom = "0px";
    return false;
  }
  if (left > 0) {
    setSucess(msgError, `${left} more characters required`);
    // msgError.style.bottom = "0px";
    // msgError.innerHTML = `${left} more characters required`;
    return false;
  }
  setSucess(msgError);
  // msgError.innerHTML =
  //   '<i class="fa-solid fa-check" style="color: seagreen; "></i>';
  // msgError.style.bottom = "0px";
  return true;
};

fname.addEventListener("keyup", validateFullName);

phNo.addEventListener("keyup", validatephNo);

email.addEventListener("keyup", validateEmail);

msg.addEventListener("keyup", validateMsg);

Button.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !validateFullName() ||
    !validatephNo() ||
    !validateEmail() ||
    !validateMsg()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the above error to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else {
    submitError.style.cssText = "display: block; color: seagreen;";
    submitError.innerHTML = "Form submitted successfully";
    fname.value = "";
    phNo.value = "";
    email.value = "";
    msg.value = "";

    // You can also reset error messages if needed
    // fnameError.style.bottom = "-20px";
    // phNoError.style.bottom = "-20px";
    // emailError.style.bottom = "-20px";
    // msgError.style.bottom = "-20px";

    // Optional: reset validation error messages
    // fnameError.innerHTML = "";
    // phNoError.innerHTML = "";
    // emailError.innerHTML = "";
    // msgError.innerHTML = "";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 2000);
    return true;
  }
});
