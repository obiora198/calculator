{/* <button class="key">1</button> */}
const buttonsBlock = document.querySelector('.buttons-block');
const screen = document.querySelector('.screen > span');

for(let num = 1; num < 13; num++) {
    if (num === 10) {
        buttonsBlock.innerHTML += `<button class="key">+</button>`
    } else if (num === 11) {
        buttonsBlock.innerHTML += `<button class="key">0</button>`
    } else if (num === 12) {
        buttonsBlock.innerHTML += `<button class="key">=</button>`
    } else{
        buttonsBlock.innerHTML += `<button class="key">${num}</button>`
    }
}

//listen for clicks
buttonsBlock.addEventListener('click', (e) => {
    let value = e.target.textContent;
    if (value !== '=') {
        screen.textContent == '0'? screen.textContent = '' : null;
        screen.textContent += value
    }

    if (value == '=') {
        const splitted = screen.textContent.split('+');
        const result = parseInt(splitted[0]) + parseInt(splitted[1]);
        screen.textContent = result;
    }
});