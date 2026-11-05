const form = document.querySelector('form');
const firstNameInput = document.querySelector('#first_name_input');
const lastNameInput = document.querySelector('#last_name_input');
const emailInput = document.querySelector('#email_input');
const passwordInput = document.querySelector('#password_input');

function showError(input) {
    const inputContainer = input.closest('.inputContainer');
    const errorText = inputContainer.querySelector('.errorTxt');

    input.classList.add('errorInput');

    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', errorText.id);

    errorText.classList.remove('hidden');
    inputContainer.querySelector('.errorIcon').classList.remove('hidden');
}

function clearError(input) {
    const inputContainer = input.closest('.inputContainer');

    input.classList.remove('errorInput');
    input.setAttribute('aria-invalid', 'false');
    input.removeAttribute('aria-describedby');

    inputContainer.querySelector('.errorTxt').classList.add('hidden');
    inputContainer.querySelector('.errorIcon').classList.add('hidden');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (firstNameInput.value.trim() === '') {
        showError(firstNameInput);
    } else {
        clearError(firstNameInput);
    }

    if (lastNameInput.value.trim() === '') {
        showError(lastNameInput);
    } else {
        clearError(lastNameInput);
    }

    if (emailInput.value.trim() === '' || !emailInput.validity.valid) {
        showError(emailInput);
    } else {
        clearError(emailInput);
    }

    if (passwordInput.value === '') {
        showError(passwordInput);
    } else {
        clearError(passwordInput);
    }

    const firstInvalidInput = [
        firstNameInput,
        lastNameInput,
        emailInput,
        passwordInput
    ].find(input => input.classList.contains('errorInput'));

    if (firstInvalidInput) {
        firstInvalidInput.focus();
    }
});
