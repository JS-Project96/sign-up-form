let pwd1 = document.querySelector('.pwd1');
let pwd2 = document.querySelector('.pwd2');
let hint = document.querySelector('.hint');

function checkPassword() {
    if (pwd1.value != pwd2.value) {
        pwd1.style.borderColor = 'red';
        pwd2.style.borderColor = 'red';
        hint.style.display = 'block';
        return false;
    } else {
        pwd1.style.borderColor = 'green';
        pwd2.style.borderColor = 'green';
        hint.style.display = 'none';
        return true;
    }
};

pwd1.addEventListener('keyup', () => {
    if (pwd2.value.length != 0) checkPassword();
})

pwd2.addEventListener('keyup', checkPassword);