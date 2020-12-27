// задание 5
alert('Задания 5 и 6');


function plus(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

// задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'plus':
            alert('Сумма чисел ' + arg1 + ' и ' + arg2 + ' = ' + plus(arg1, arg2));
            break;
        case 'minus':
            alert('Разность чисел ' + arg1 + ' и ' + arg2 + ' = ' + minus(arg1, arg2));
            break;
        case 'multiplication':
            alert('Произведение чисел ' + arg1 + ' и ' + arg2 + ' = ' + multiplication(arg1, arg2));
            break;
        case 'division':
            alert('Деление числа ' + arg1 + ' на ' + arg2 + ' = ' + division(arg1, arg2));
            break;
        default:
            alert('Неизвестный оператор ' + operation);
    }
}

mathOperation(5, 4, 'plus');
mathOperation(5, 4, 'minus');
mathOperation(15, 4, 'multiplication');
mathOperation(25, 4, 'division');
mathOperation(5, 4, 'degree');
