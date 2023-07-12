{/* <button class="key">1</button> */}
const buttonsBlock = document.querySelector('.buttons-block');
const screen = document.querySelector('.screen > span');

const invalidNum = [10,11,12,13,14,15];
const substitute = ['+','0','-','*','/','='];



for(let num = 1; num < 16; num++) {
    
    if (invalidNum.includes(num)) {
        buttonsBlock.innerHTML += `<button class="key">${substitute[invalidNum.indexOf(num)]}</button>`
    } else{
        buttonsBlock.innerHTML += `<button class="key">${num}</button>`
    }
}

//listen for clicks
buttonsBlock.addEventListener('click', (e) => {
    let value = e.target.textContent;
    if (value !== '=') {
        screen.textContent == '0'? screen.textContent = '' : null;
        screen.textContent += value;
    }

    if (value == '=') {
        let result = 0;
        const splitted = screen.textContent.split('')
        console.log(splitted);
        if(splitted.includes('/')) {
            result = parseInt(splitted[splitted.indexOf('/') - 1]) / parseInt(splitted[splitted.indexOf('/') + 1]);
        } else if(splitted.includes('*')) {
            result = parseInt(splitted[splitted.indexOf('*')-1]) * parseInt(splitted[splitted.indexOf('*')+1]);
        } else if(splitted.includes('+')) {
            result = parseInt(splitted[splitted.indexOf('+')-1]) + parseInt(splitted[splitted.indexOf('+')+1]);
        } else {
            result = parseInt(splitted[splitted.indexOf('-')-1]) - parseInt(splitted[splitted.indexOf('-')+1]);
        } 
        
        
        screen.textContent = result;
    }
});