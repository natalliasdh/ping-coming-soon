const formNotify = document.querySelector("#formstyle");
const email = document.querySelector("#email");
const buttonNotify = document.querySelector("#notify");
const divError = document.querySelector("#warning");
const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

formNotify.addEventListener('submit', (event) => {
    event.preventDefault();
});


buttonNotify.addEventListener('click', () => {
    if ((email.value == '') || (!regEmail.test(email.value))) {
        divError.textContent = "Please provide a valid email address";
        email.style.borderColor = "red";
    } else {
        divError.textContent = "";
        email.value = "";
        email.style.borderColor = "#C2D3FF";
    }
});