const prices = [150, 20, 40, 62, 207, 65, 48, 78]; // стоимости товаров. В будущем желательно создать массив массивов с описанием, ценами и т.д.

const button = document.querySelector('.content')  // работаем с общим блоком content, содержащим все карточки товара
button.addEventListener('click', function (evt) { // ждем клики, и получаем id кнопок - товара
    const dataId = evt.target.getAttribute('data-id'); // вынес в отдельную переменную получение номера data-id
    if (evt.target.getAttribute('class') == 'button') { // если нажали на кнопку, то получаем ее id и считаем сумму заказа
        order.push(new Product('Товар ' + dataId, prices[dataId]));
        // console.log(dataId, order); // отладочная информация
        drawBasket(order); // считаем сумму в функции
    }
})

// первый вариант - большой рисунок получаем по клику мыши по нему. Но я остановился на варианте с наведением
// указателя на рисунок

// button.addEventListener('click', function (evt) { // ждем клики, и получаем id изображений
//     if (evt.target.getAttribute('data-img')) {
//         // console.log('img/' + evt.target.getAttribute('data-img') + '.jpg')
//         drawImage('img/' + evt.target.getAttribute('data-img') + '.jpg')
//     }
// })


button.addEventListener('mouseover', function (evt) { // ждем клики, и получаем id изображений
    if (evt.target.getAttribute('data-img')) {
        drawImage('img/' + evt.target.getAttribute('data-img') + '.jpg')
    }
})

button.addEventListener('mouseout', function (evt) { // если указатель мыши ушел, то меняем на картинку "по умолчанию"
    if (evt.target.getAttribute('data-img')) {
        drawImage()
    }
})


// выделение кнопки цветом при наведении на нее мыши
button.addEventListener('mouseover', function (evt) { // если указатель мыши находится над кнопкой, то меняем цвет
    if (evt.target.getAttribute('class') == 'button') {
        evt.target.style.backgroundColor = 'lightblue'
    }
})

button.addEventListener('mouseout', function (evt) { // если указатель мыши ушел, то меняем цвет "по умолчанию"
    if (evt.target.getAttribute('class') == 'button') {
        evt.target.style.backgroundColor = ''
    }
})

const basket = document.querySelector('.basket') // добавляем в basket элемент p c ценой заказа и количеством
const fillBasket = document.createElement('p')

// создание массива заказа
const order = []; // данный наполняем функцией конструктором Product

function Product(title, cost, quntity = 1) {
    this.title = title;
    this.cost = cost;
    this.quntity = quntity;
}

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
        fillBasket.textContent = 'Корзина пуста';
    } else {
        fillBasket.textContent = 'В корзине ' + quantityAmount(order) + ' товаров. На сумму ' + orderAmount(order) + ' руб.';
    }
    basket.appendChild(fillBasket);
}

drawBasket(order); // вызываем функцию, чтобы даже пустая корзина была отражена на странице

// выводим большое фото товара

const bigImg = document.querySelector('.bigImg');
const drawImg = document.createElement('img');
drawImg.classList.add('bigImage');

function drawImage(imageId = 'img/00.jpg') {
    drawImg.setAttribute('src', imageId);
    bigImg.appendChild(drawImg);
}

drawImage();
