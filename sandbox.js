const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
// const password = document.getElementById('password');
const passwordPattern = /^^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// const feedback = document.getElementById('passwordPattern-error');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const numberError = document.getElementById('number-error');
const passwrodError = document.getElementById('password-error');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const backToForm = document.querySelector('.back');
const popupContent = document.querySelector('.popup');
const submit = document.querySelector('.input-supmit');

form.addEventListener('submit', e => {
    let nameMessages = []
    if (name.value === '' || name.value == null) {
        nameMessages.push('Name is required')
        name.style.border = '2px solid crimson';
    }

    if (nameMessages.length > 0) {
        nameError.innerText = nameMessages.join(', ')
    } else {
        nameError.style.display = 'none';
        name.style.border = '#ccc9c9 2px solid';
    }
    e.preventDefault();

    // // // ERROR MESSAGE FOR EMAIL

    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Email is required')
        email.style.border = '2px solid crimson';
    }

    if (emailMessages.length > 0) {
        emailError.innerText = emailMessages.join(', ')
    } else {
        emailError.style.display = 'none';
        email.style.border = '#ccc9c9 2px solid';
    }
    e.preventDefault();

    // // // ERROR MESSAGE FOR NUMBER
    let numberMessages = []
    if (number.value === '' || number.value == null) {
        numberMessages.push('Number is required')
        number.style.border = '2px solid crimson';
    }

    if (numberMessages.length > 0) {
        numberError.innerText = numberMessages.join(', ')
    } else {
        numberError.style.display = 'none';
        number.style.border = '#ccc9c9 2px solid';
    }
    e.preventDefault();

    // // // ERROR MESSAGE FOR PASSWORD
    let passwordMessages = []
    if (password.value === '' || password.value == null) {
        passwordMessages.push('Password is required')
        password.style.border = '2px solid crimson';
    }

    if (passwordMessages.length > 0) {
        passwrodError.innerText = passwordMessages.join(', ')
    } else {
        passwrodError.style.display = 'none';
        password.style.border = '#ccc9c9 2px solid';
    }
    e.preventDefault();

    e.target.preventDefault();

});

form.addEventListener('submit', e => {
    if (name.value !== '' && name.value != null && email.value !== '' && email.value != null && number.value !== '' && number.value != null && password.value !== '' && password.value != null) {

        popup.style.display = 'block';

        close.addEventListener('click', e => {
            popup.style.display = 'none';
        })


        backToForm.addEventListener('click', e => {
            popup.style.display = 'none';
        });

    }
});

function myFunction() {
    if (password.type =='password') {
        password.type='text';
    }
    else{
        password.type='password'
    }
}


const changeRegion = document.querySelector('.change');
const regionWrapper = document.querySelector('.region');

changeRegion.addEventListener('click', e => {
    regionWrapper.style.display = 'block';
});

regionWrapper.addEventListener('click', e => {
    regionWrapper.style.display = 'none';
});
