// задание 8
alert('Задание 8');

function degree(number, degreeOfNumber) {
    if (degreeOfNumber < 1)
        return 1;
    return number * degree(number, degreeOfNumber - 1);
}


var num1 = 2, num2 = 3; // укажите число и степень в которую нужно его возвести
alert('Результат возведения числа ' + num1 + ' в степень ' + num2 + ' = ' + degree(num1, num2));
