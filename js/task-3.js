const fieldEl = document.querySelector('#name-input');
console.log(fieldEl);

const spanEl = document.querySelector('#name-output');
console.log(spanEl);


fieldEl.addEventListener('input', () => {
    let fieldValue = fieldEl.value.trim(); 
    if (fieldValue === '') {
        spanEl.textContent = 'Anonymous'; 
    } else {
        spanEl.textContent = fieldValue; 
    }
});