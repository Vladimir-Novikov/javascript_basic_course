// вариант 1 Через функцию-конструктор

function ExpandNumber(hundreds, tens, units) {
    this.hundreds = hundreds,
        this.tens = tens,
        this.units = units;
}

function expandNumber(num) { // в данной фунции обрабатываем число, и вызываем функцию-конструктор с помощью new
    if (num >= 0 && num < 999) {
        let expNum = new ExpandNumber(
            Math.trunc(num / 100), // сотни удаление дробной части без округления (trunc)
            Math.trunc(num / 10) % 10, // десятки удаление дробной части без округления
            num % 10 // единицы
        )
        return expNum;
    }
    else console.log('Введено число вне диапазона 0 - 999');
    return {}; // если число вне диапазоно, то выводим сообщение и возвращаем пустой объект
}

console.log('Вариант 1. Раскладываем число, и создаем объект с помощью конструктора new');
console.log(expandNumber(3230));
console.log(expandNumber(906));
console.log(expandNumber(23));
console.log(expandNumber(4));

// вариант 2 Через обычную функцию, с приведением к строке и поиску по индексу

function expandNumber2(number) {
    let expandNumber = {}; // создаем пустой объект, и дальше в зависимости от его длины будем заполнять
    let strNumber = String(number);
    if (number >= 0 && number < 999) { // проверяем, что число в диапазоне от 0 до 999
        if (strNumber.length == 3) {
            expandNumber.hundreds = Number(strNumber[0]),
                expandNumber.tens = Number(strNumber[1]),
                expandNumber.units = Number(strNumber[2]);
        }
        else if (strNumber.length == 2) {
            expandNumber.hundreds = 0,
                expandNumber.tens = Number(strNumber[0]),
                expandNumber.units = Number(strNumber[1]);
        }
        else {
            expandNumber.hundreds = 0,
                expandNumber.tens = 0,
                expandNumber.units = Number(strNumber[0]);
        }
    }
    else console.log('Введено число вне диапазона 0 - 999');
    return expandNumber;
}

console.log('Вариант 2. С помощью обычной функции и раскладывания числа по индексу');
console.log(expandNumber2(1203))
console.log(expandNumber2(123))
console.log(expandNumber2(13))
console.log(expandNumber2(4))

// вариант 3. С ключевым словом this, обозначающее текущий объект, с которым ведется работа.

let expandNumber3 = {
    hundreds: 0,
    tens: 0,
    units: 0,
    expandNumber: function (num) { // в данной фунции обрабатываем число, и записываем данные в этот объект с помощью this
        if (num >= 0 && num < 999) {
            this.hundreds = Math.trunc(num / 100), // сотни удаление дробной части без округления (trunc)
                this.tens = Math.trunc(num / 10) % 10, // десятки удаление дробной части без округления
                this.units = num % 10 // единицы
        }
        else {
            console.log('Введено число вне диапазона 0 - 999');
        }
    }
}

console.log('Вариант 3. С ключевым словом this, обозначающее текущий объект, с которым ведется работа.');
expandNumber3.expandNumber(1906);
console.log('hundreds: ' + expandNumber3.hundreds, 'tens: ' + expandNumber3.tens, 'units: ' + expandNumber3.units)
expandNumber3.expandNumber(906);
console.log('hundreds: ' + expandNumber3.hundreds, 'tens: ' + expandNumber3.tens, 'units: ' + expandNumber3.units)
expandNumber3.expandNumber(23);
console.log('hundreds: ' + expandNumber3.hundreds, 'tens: ' + expandNumber3.tens, 'units: ' + expandNumber3.units)
expandNumber3.expandNumber(4);
console.log('hundreds: ' + expandNumber3.hundreds, 'tens: ' + expandNumber3.tens, 'units: ' + expandNumber3.units)
