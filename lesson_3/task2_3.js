let costOfGoods = [10, 24, 54, 6, 48, 45]; // в магазине есть 6 товаров. Если будут появляться новые товары, то они добавятся в конец массива. Поэтому старые заказы не слетят, т.к. в них нет "новых" товаров.
let client1 = [2, , 1, 4, ,]; // корзина клиента 1, полученная с сайта. (Важно, чтобы она была длиной как массив цен). В данной корзине специальна допущена ошибка.
let client2 = [2, , 1, 4, , 5,]; // эти две корзины правильные по длине
let client3 = [2, , 1, , 2, 5,];

let customerBaskets = []; // в данном массиве храним корзины всех клиентов за месяц. Или это может быть массив заказов одного клиента.
// в дальнейшем этот массив может быть использован для просмотра истории покупок. Рекомендаций самого популярного товара и т.д.

function fillingTheBasket(shopList) { // на вход функции передаем массив с количеством товаров (если кол-во = 0, то это пустое значение в массиве), длина массива = длине массива товаров 
    if (costOfGoods.length != shopList.length)
        return undefined; // если список покупок пришел в некорректном виде (не совпадает длина массива), то return undefined
    let shopBasket = Array(costOfGoods.length).fill(null)  // создаем карточку покупок, равную длине массива товаров. И заполняем все значения null. Т.к. null можно умножать на число.
    for (let i in shopList) {
        if (shopList[i] != undefined)
            shopBasket[i] = shopList[i]; // заполняем только те позиции, где есть цифры, остальные остаются null (null * на число дает 0, undefined дает Nan) дополнительная защита.
    }
    return shopBasket; // Возвращаем готовый список покупок. Если с сайта список будет приходить с уже заполненным null, а не с пустыми значениями, то данная функция не нужна.
    // но на корректность длины массива нужно проверять в любом случае. 
}

let purchasesСlient1 = (fillingTheBasket(client1)); // в данном блоке кода передаем функции fillingTheBasket списки покупок клиентов, и push в customerBusket. Пока в ручную (без функции).
let purchasesСlient2 = (fillingTheBasket(client2));
let purchasesСlient3 = (fillingTheBasket(client3));
customerBaskets.push(purchasesСlient1);
customerBaskets.push(purchasesСlient2);
customerBaskets.push(purchasesСlient3);
console.log('Корзины с количеством товаров \n' + customerBaskets);

function countBasketPrice(baskets) {  // данная функция считает стоимость каждой отдельной корзины покупок и добавляет в общий массив стоимостей покупок.
    let shopBasketPrice = [];
    let sum = 0;
    let total = 0;
    for (let j in baskets) {
        if (baskets[j] == undefined)
            shopBasketPrice.push('error'); // если пришел список с неправильным количеством (сбой на сервере, например) в функцию fillingTheBasket, то данная функция заполняет массив
        // ошибкой (error)
        else {
            for (let r in baskets[j]) { // если же все правильно, то считаем сумму.
                sum = (baskets[j][r] * costOfGoods[r]);
                total += sum;
            }
            shopBasketPrice.push(total);
            sum = 0; // обнуляем счетчики для следующих массивов с покупками.
            total = 0;
        }
    }
    return shopBasketPrice;
}

console.log('Суммы покупок каждой корзины \n' + countBasketPrice(customerBaskets));
