let number = 0, finishNumber = 100; startNumber = number; // задаем диапазон и в startNumber запоминаем начальное число, т.к. number будет увеличиваться
let simpleNumber = []; // массив, в который будем добавлять простые числа
while (number <= finishNumber) {
    let total = 0; // с каждым новым числом обнуляем счетчик чисел, которые делятся без остатка
    for (let i = 2; i <= number; i++) { // на 0 делить нельзя. На 1 будут делиться все числа, поэтому начинаем с 2. Проверяем до текущего number, не забегая вперед.
        if (number % i == 0) // если число делится без остатка, то увеличиваем total
            total += 1;
    }
    if (total == 1) // после выхода из цикла for проверяем - если total равен 1, то это простое число. Добавляем его в массив.
        simpleNumber.push(number);
    number++;
}
alert('Простыe числа в диапазоне ' + startNumber + ' - ' + finishNumber + ' = \n' + simpleNumber);
