const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener('submit', event => {
    event.preventDefault();

 
    const email = formEl.elements.email.value.trim();
    const password = formEl.elements.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }


    const formData = {
        [formEl.elements.email.name]: email,
        [formEl.elements.password.name]: password,
    };


    console.log(formData);


    formEl.reset();
});
