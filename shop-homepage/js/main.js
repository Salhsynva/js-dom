
const pElements = [...document.querySelectorAll('p')];

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')

let pSize = 16;

plusBtn.addEventListener('click', e => {
    pElements.forEach(el => {
        pSize++;
        el.style.fontSize = `${pSize}px `;
    });
})

minusBtn.addEventListener('click', e => {
    pElements.forEach(el => {
        pSize--;
        el.style.fontSize = `${pSize}px`
    })
})


const colorInput = document.querySelector('#color-input');
const colorBtn = document.querySelector('#color-btn');

let color;

colorBtn.addEventListener('click', e => {
    color = colorInput.value;
    pElements.forEach(el=> {
        el.style.color = color;
    })
    
})






