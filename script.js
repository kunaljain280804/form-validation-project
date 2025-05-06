// script.js

// 1. Get the form and all input fields
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// 2. Get all error message containers
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// 3. Add event listener on form submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop actual form submission
  validateForm();
});

// 4. Validation function
function validateForm() {
  let isValid = true; // Assume valid

  // Validate Full Name
  if (fullName.value.trim().length < 5) {
    nameError.innerText = "Name must be at least 5 characters.";
    isValid = false;
  } else {
    nameError.innerText = "";
  }

  // Validate Email
  if (!email.value.includes('@')) {
    emailError.innerText = "Email must contain @.";
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  // Validate Phone
  const phoneValue = phone.value.trim();
  if (phoneValue.length !== 10 || isNaN(phoneValue) || phoneValue === '1234567890') {
    phoneError.innerText = "Phone must be 10 digits and not 1234567890.";
    isValid = false;
  } else {
    phoneError.innerText = "";
  }

  // Validate Password
  const passwordValue = password.value;
  const userName = fullName.value.toLowerCase();
  if (passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue.toLowerCase() === userName) {
    passwordError.innerText = "Password must be 8+ chars, not 'password' or your name.";
    isValid = false;
  } else {
    passwordError.innerText = "";
  }

  // Validate Confirm Password
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerText = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.innerText = "";
  }

  // Final check
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}
