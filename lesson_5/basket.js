// отрисовка дизайна страницы
const body = document.querySelector('body');
const header = document.createElement('div');
header.classList.add('header');

const top_box = document.createElement('div');
top_box.classList.add('top');
header.appendChild(top_box);

const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Интернет магазин'
top_box.appendChild(logo);

// создание элемента "корзина, с сообщением Корзина пуста"
const basket = document.createElement('div');
basket.classList.add('basket');
basket.textContent = 'Корзина пуста';
top_box.appendChild(basket);

body.appendChild(header);

// создание массивов заказов
const order = []; // данный наполняем функцией конструктором Product
const order1 = []; // данный массив пустой
const order2 = [{ title: 'Товар 3', cost: 14, quntity: 2 }, // а в этом товары уже добавлены
{ title: 'Товар 4', cost: 20, quntity: 6 }
];

function Product(title, cost, quntity = 1) {
    this.title = title;
    this.cost = cost;
    this.quntity = quntity;
}

order.push(new Product('Товар 1', 20, 5));
order.push(new Product('Товар 2', 30));

function orderAmount(order) { // функция расчета стоимости заказа
    return order.reduce(function (total, product) {
        return total + product.cost * product.quntity;
    }, 0)
}

function quantityAmount(order) { // функция расчета количества товаров в заказе
    return order.reduce(function (total, product) {
        return total + product.quntity;
    }, 0)
}

function drawBasket(order) { // функция отрисовки корзины в зависимости от заказа
    if (!quantityAmount(order)) {
        basket.textContent = 'Корзина пуста';
    } else {
        basket.textContent = 'В корзине ' + quantityAmount(order) + ' товаров. На сумму ' + orderAmount(order) + ' руб.';
    }
    top_box.appendChild(basket);
}

// изначально корзина пуста. Затем запускаю функцию отрисовки с разными заказами
setTimeout(drawBasket, 2000, order); // В корзине 6 товаров. На сумму 130 руб.
setTimeout(drawBasket, 5000, order1); // Корзина пуста. Т.к. передан пустой массив
setTimeout(drawBasket, 7000, order2); // В корзине 8 товаров. На сумму 148 руб.
