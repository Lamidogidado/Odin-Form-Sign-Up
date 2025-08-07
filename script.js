// Get references to all form elements
const form = document.querySelector('.account-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Get all form fields to manage error states
const allFields = form.querySelectorAll('.form-field');

// Add a 'submit' event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();
    
    // Reset all previous error states
    allFields.forEach(field => {
        field.classList.remove('error');
    });

    // Run the validation checks
    let isFormValid = true;

    // Check First Name
    if (firstName.value.trim() === '') {
        firstName.closest('.form-field').classList.add('error');
        isFormValid = false;
    }

    // Check Last Name
    if (lastName.value.trim() === '') {
        lastName.closest('.form-field').classList.add('error');
        isFormValid = false;
    }

    // Check Email
    if (email.value.trim() === '' || !email.checkValidity()) {
        email.closest('.form-field').classList.add('error');
        isFormValid = false;
    }

    // Check Phone Number (optional, based on your needs)
    if (phone.value.trim() === '') {
        phone.closest('.form-field').classList.add('error');
        isFormValid = false;
    }

    // Check Passwords
    if (password.value.trim() === '') {
        password.closest('.form-field').classList.add('error');
        isFormValid = false;
    } else if (password.value !== confirmPassword.value) {
        password.closest('.form-field').classList.add('error');
        confirmPassword.closest('.form-field').classList.add('error');
        isFormValid = false;
    }

    // If all checks pass, submit the form
    if (isFormValid) {
        alert('Account created successfully!');
        form.submit();
    }
});