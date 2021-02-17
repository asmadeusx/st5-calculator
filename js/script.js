'use strict';

//#region Получение элементов
// Дисплей
// const display = document.querySelectorAll('.dsp');
const display = document.querySelector('.dsp');
// Кнопки управления
const btnsNum = document.querySelectorAll('.btnNum');
const btnsOper = document.querySelectorAll('.buttons__operations');
const btnCln = document.querySelector('.btnCLN');
const btnDot = document.querySelector('.btnDot');
const btnPlus = document.querySelector('.operations__plus');
const btnMinus = document.querySelector('.operations__minus');
const btnMultiply = document.querySelector('.operations__multiply');
const btnDivide = document.querySelector('.operations__divide');
const btnResult = document.querySelector('.operations__result');
//#endregion

let numA = 0;
let numB = 0;
let mathResult = 0;

btnsNum.forEach(item => {
    item.addEventListener('click', () => {
        display.innerText += item.innerText;
    });
});

btnDot.addEventListener('click', () => {
    display.innerText += '.';
});

btnsOper.forEach(item => {
    item.addEventListener('click', (event) => {
        if (event.target.classList.contains('plus')) {
            display.innerText += '+';
        }
        if (event.target.classList.contains('minus')) {
            display.innerText += '-';
        }
        if (event.target.classList.contains('multiply')) {
            display.innerText += '*';
        }
        if (event.target.classList.contains('divide')) {
            display.innerText += '/';
        }
    });
});

// Кнопка Очищения Дисплея
btnCln.addEventListener('click', () => {
    display.innerHTML = '';
});

function result() {
    let arr = display.innerHTML;
    console.log(arr);
}

// Кнопка Просчета и выдачи результата
btnResult.addEventListener('click', () => {
    result();
});