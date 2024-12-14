



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
console.log(inputEl);

const createBtn = document.querySelector('[data-create]');
console.log(createBtn);

const destroyBtn = document.querySelector('[data-destroy]');
console.log(destroyBtn);

const boxContainer = document.querySelector('#boxes');
console.log(boxContainer);


function createBoxes(amount) {
  const elBox = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = getRandomHexColor();
    div.style.marginBottom = '5px';
    elBox.push(div);
    size += 10;
  }

  boxContainer.innerHTML = ''; 
  boxContainer.append(...elBox);
}


function destroyBoxes() {
  boxContainer.innerHTML = '';
}


createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = ''; 
  } else {
    alert('Введіть число від 1 до 100!');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
