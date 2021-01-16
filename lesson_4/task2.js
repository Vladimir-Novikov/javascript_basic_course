// задание 2 и 3

// создаем объекты - описание товаров. Содержит id это код товара, modelNumber - артикул производителя, описание, и ссылка на веб сайт производителя.
let product1 = { id: 'id_001', modelNumber: 'z1', description: 'Описание товара 1', website: 'www.123.org' };
let product2 = { id: 'id_002', modelNumber: 'x2', description: 'Описание товара 2', website: 'www.wiki.org' };
let product3 = { id: 'id_003', modelNumber: 't5', description: 'Описание товара 3', website: 'www.solo.org' };
let product4 = { id: 'id_004', modelNumber: 'c4', description: 'Описание товара 4', website: 'www.qwe.org' };
let product5 = { id: 'id_005', modelNumber: 'u6', description: 'Описание товара 5', website: 'www.tot.org' };
let product6 = { id: 'id_006', modelNumber: 'o8', description: 'Описание товара 6', website: 'www.sam.org' };

// цены вынес в отдельный объект. Сделал это для того, чтобы цены можно было менять, и при этом сохранять старые (для истории изменения цен).
// Но для этого нужно создавать еще объекты, в которых будем хранить эти цены. Сделал по аналогии с базами данных.
// получается, что на данный момент можно цены записать в описание товаров, но на мой взгляд, если смотреть дальше, то цены удобно хранить отдельно.

let priсes = { id_001: 10, id_002: 3, id_003: 4, id_004: 14, id_005: 20, id_006: 25 };

// Заказы покупателей. К заказам пришлось добавлять номер заказа. Пытался достать имя заказа, чтобы вставлять в итоговый объект. 
// Но поискав информацию в сети ничего не нашел, где-то писали, что это вообще невозможно.

let order1 = { orderId: 1, id_002: 2, id_004: 1, id_006: 3 };
let order2 = { orderId: 2, id_001: 1, id_004: 2, id_005: 1, id_006: 2 };
let order3 = { orderId: 3, id_002: 2, id_005: 3, id_006: 3 };

// Функция - конструктор. Вызываем ее из другой функции и создаем объект - номер заказа : сумма.

function OrdersValue(orderId, cost) {
    this.orderId = orderId,
        this.cost = cost;
}

function orderAmount(order) {
    let total = 0;
    for (key in order) {   // находим номер заказа и пропускаем его
        if (key == 'orderId')
            sub = 0;
        else {   // здесь считаем. Умножаем кол-во товаров из заказа на цену товара. Ориентируемся на объект priсes по ключу.
            sub = order[key] * priсes[key]
            total += sub
        }
    }
    let orderProcessing = new OrdersValue(  // передаем данные в функцию - конструктор
        orderId = order.orderId,   // номер заказа
        total    // сумму
    )
    return orderProcessing;
}

console.log(orderAmount(order1))
console.log(orderAmount(order2))
console.log(orderAmount(order3))
