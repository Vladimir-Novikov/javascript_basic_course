// задание 3
alert('Задание 3');

function compareNumbers(a, b) {
    if (a >= 0 && b >= 0)
        return 'Числа положительные: ' + a + ', ' + b + ', их разность = ' + (a - b);
    else if (a < 0 && b < 0)
        return 'Числа отрицательные: ' + a + ', ' + b + ', их произведение = ' + (a * b);
    else
        return 'Числа имеют разные знаки: ' + a + ', ' + b + ', их сумма = ' + (a + b);
}

alert(compareNumbers(5, 4));
alert(compareNumbers(-5, 4));
alert(compareNumbers(-5, -4));
