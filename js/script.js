'use strict';

//#region Получение элементов
// Дисплей
const display = document.querySelectorAll('.dsp');
// Кнопки управления
const btnsNum = document.querySelectorAll('.btnNum');
const btnCln = document.querySelector('.btnCLN');
const btnDot = document.querySelector('.btnDot');
const btnPlus = document.querySelector('.operations__plus');
const btnMinus = document.querySelector('.operations__minus');
const btnMultiply = document.querySelector('.operations__multiply');
const btnDivide = document.querySelector('.operations__divide');
const btnResult = document.querySelector('.operations__result');
//#endregion

console.log(display);
console.log('====');
// console.log(btnsNum);
// console.log('====');
// console.log(btnCln);
// console.log('====');
// console.log(btnDot);
// console.log('====');
console.log(btnPlus);
console.log('====');
console.log(btnMinus);
console.log('====');
console.log(btnMultiply);
console.log('====');
console.log(btnDivide);
console.log('====');
console.log(btnResult);
console.log('====');

// Кнопка Очищения Дисплея
btnCln.addEventListener('click', () => {
    display.forEach((e) => {
        e.innerHTML = '';
    });
});

function OperToDisplay(target) {
    target.addEventListener('click', () => {
        display[1].innerHTML = target.innerHTML;
    });
}

OperToDisplay(btnPlus);
OperToDisplay(btnMinus);
OperToDisplay(btnMultiply);
OperToDisplay(btnDivide);