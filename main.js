const goods = [{ name: 'Микрофон', images: ['0.jpg'], description: 'конденсаторный микрофон конструкция: настольный для студии для вокала, для стриминга кардиоидная диаграмма', price: 150 },
{ name: 'Клипса', images: ['1.jpg'], description: 'клипса для крепления гофро трубы', price: 20 },
{ name: 'Батарейка', images: ['2.jpg'], description: 'батарейка типоразмер: D технология: щелочная напряжение 1.5 В', price: 40 },
{ name: 'Ремешок', images: ['3.jpg'], description: 'noname Силиконовый ремешок для noname 13 Совместим также с другими моделями', price: 62 },
{ name: 'Наушники', images: ['4.jpg'], description: 'полноразмерные, закрытые динамические чувствительность 108 дБ импеданс 24 Ом разъем mini jack 3.5 mm', price: 207 },
{ name: 'Видеорегистратор', images: ['5.jpg'], description: 'угол обзора 170° экран 2" разрешение видео 1920×1080 при 30 к/с работа от аккумулятора поддержка карт памяти microSD', price: 65 }]


const content = document.querySelector('.content')  // работаем с общим блоком content, содержащим все карточки товара
content.addEventListener('click', function (evt) { // ждем клики, и получаем id кнопок - товара
    const dataId = evt.target.getAttribute('data-id'); // вынес в отдельную переменную получение номера data-id
    if (evt.target.getAttribute('class') == 'button') { // если нажали на кнопку, то получаем ее id и считаем сумму заказа
        // если добавляемый id товара уже есть в ордер, то просто количество + 1 иначе добавляем новую строку
        let index = order.findIndex(item => item.dataId == dataId);
        if (index == -1) { // нет такого индекса
            order.push(new Product(goods[dataId]['name'], goods[dataId]['price'], dataId)); // дополнительно передаем dataId для дальнейшей группировки товаров
        } else { // если индекс есть, то просто + 1 в количество товара
            order[index]['quantity']++;
        }
        drawBasket(order); // считаем сумму в функции
    }
})


// наполняем магазин карточками с товарами
for (let i = 0; i < goods.length; i++) {
    const card = document.createElement('div');
    card.classList.add('block');
    const cardHeader = document.createElement('h3');
    cardHeader.textContent = goods[i]['name'];
    card.appendChild(cardHeader);
    const goodImg = document.createElement('img');
    goodImg.classList.add('cardImg');
    goodImg.setAttribute('src', 'img/' + goods[i]['images']);
    goodImg.setAttribute('data-img', i)
    card.appendChild(goodImg);
    const description = document.createElement('p');
    description.textContent = goods[i]['description'];
    card.appendChild(description);
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = goods[i]['price'] + ' руб';
    card.appendChild(price);
    const button = document.createElement('button');
    button.classList.add('button');
    button.setAttribute('data-id', i);
    button.textContent = 'Купить';
    card.appendChild(button);
    content.appendChild(card);
}


// первый вариант - большой рисунок получаем по клику мыши по нему. Но я остановился на варианте с наведением
// указателя на рисунок

// button.addEventListener('click', function (evt) { // ждем клики, и получаем id изображений
//     if (evt.target.getAttribute('data-img')) {
//         // console.log('img/' + evt.target.getAttribute('data-img') + '.jpg')
//         drawImage('img/' + evt.target.getAttribute('data-img') + '.jpg')
//     }
// })


content.addEventListener('mouseover', function (evt) { // ждем клики, и получаем id изображений
    if (evt.target.getAttribute('data-img')) {
        drawImage('img/' + evt.target.getAttribute('data-img') + '.jpg')
    }
})

content.addEventListener('mouseout', function (evt) { // если указатель мыши ушел, то меняем на картинку "по умолчанию"
    if (evt.target.getAttribute('data-img')) {
        drawImage()
    }
})


// выделение кнопки цветом при наведении на нее мыши
content.addEventListener('mouseover', function (evt) { // если указатель мыши находится над кнопкой, то меняем цвет
    if (evt.target.getAttribute('class') == 'button') {
        evt.target.style.backgroundColor = 'lightblue'
    }
})

content.addEventListener('mouseout', function (evt) { // если указатель мыши ушел, то меняем цвет "по умолчанию"
    if (evt.target.getAttribute('class') == 'button') {
        evt.target.style.backgroundColor = ''
    }
})

const basket = document.querySelector('.basket') // добавляем в basket элемент p c ценой заказа и количеством
const fillBasket = document.createElement('p')

// создание массива заказа
const order = []; // данный массив наполняем функцией конструктором Product


function Product(title, cost, dataId, quantity = 1) {
    this.title = title;
    this.cost = cost;
    this.dataId = dataId;
    this.quantity = quantity;
}

function orderAmount(order) { // функция расчета стоимости заказа
    return order.reduce(function (total, product) {
        return total + product.cost * product.quantity;
    }, 0)
}

function quantityAmount(order) { // функция расчета количества товаров в заказе
    return order.reduce(function (total, product) {
        return total + product.quantity;
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

// ожидаем события click по корзине
const basketPopup = document.querySelector('#basketPopup');
const wrapper = document.createElement('div');

function createPopUp() {
    basket.addEventListener('click', function () {
        closePopup(basketPopup);
        deliveryButton(basketPopup);
        basketPopup.style.display = 'block';
        header();
    })
}

function header() {
    wrapper.textContent = ''; // очищаем экран

    if (order.length) {
        const headerPopup = document.createElement('p');
        headerPopup.classList.add('popupHeading');
        headerPopup.textContent = 'Состав заказа на сумму ' + orderAmount(order) + ' руб.';
        wrapper.appendChild(headerPopup);
        drawPopUp(); // отрисовка части элементов всплывающего окна (в т.ч. кнопки +/- )
    } else {
        const headerPopup = document.createElement('p');
        headerPopup.style.fontSize = '22px';
        headerPopup.textContent = 'Корзина пуста';
        wrapper.appendChild(headerPopup);
    }
    basketPopup.appendChild(wrapper);
}
createPopUp();

function drawPopUp() {
    for (let j = 0; j < order.length; j++) {
        const orderInfo = document.createElement('p');
        orderInfo.style.fontSize = '20px';
        orderInfo.style.paddingBottom = '12px';
        orderInfo.textContent = order[j]['title'] + ' ' + order[j]['quantity'] + ' шт. на сумму ' + order[j]['cost'] * order[j]['quantity'] + ' руб.';
        let buttonPlus = document.createElement('button');
        buttonPlus.textContent = '+';
        buttonPlus.setAttribute('data-index', j);
        buttonPlus.classList.add('plusMinus');
        orderInfo.appendChild(buttonPlus);
        let buttonMinus = document.createElement('button');
        buttonMinus.textContent = '-';
        buttonMinus.classList.add('plusMinus');
        buttonMinus.setAttribute('data-index', j);
        orderInfo.appendChild(buttonMinus);

        buttonMinus.addEventListener('click', function (evt) {
            const indexButton = evt.target.getAttribute('data-index'); // вынес в отдельную переменную получение номера data-id
            order[indexButton]['quantity']--;
            wrapper.textContent = '';
            if (order[indexButton]['quantity'] < 1) {
                order.splice(indexButton, 1); // удаляем из массива order товар, если его кол-во меньше 1
                header();
                drawPopUp();
            }
            drawPopUp();
            header();
        })
        buttonPlus.addEventListener('click', function (evt) {
            const indexButton = evt.target.getAttribute('data-index'); // вынес в отдельную переменную получение номера data-id
            order[indexButton]['quantity']++;
            wrapper.textContent = '';
            drawPopUp();
            header();
        })
        wrapper.appendChild(orderInfo);
    }
}

// закрытие окна корзины / доставки / комментария
function closePopup(elem) {
    const closePopup = document.createElement('button');
    closePopup.textContent = 'X';
    closePopup.classList.add('closePopup');
    elem.appendChild(closePopup);
    closePopup.addEventListener('click', function () {
        elem.style.display = 'none';
        elem.innerHTML = ''; // удаление всех созданных внутни popup элементов. 
        // Без данной строки элементы создаются при каждом открытии корзины и копятся в родительском div.
        drawBasket(order);
    })
}

function deliveryButton(elem) { // кнопка доставка
    const deliveryPopup = document.createElement('button');
    deliveryPopup.textContent = 'Доставка';
    deliveryPopup.classList.add('bottomButton');
    elem.appendChild(deliveryPopup);
    deliveryPopup.addEventListener('click', function () {
        elem.style.display = 'none';
        deliverypopup();
    })
}

const deliveryPopup = document.querySelector('#deliveryPopup');

function deliverypopup() { // отрисовка popup доставки
    deliveryPopup.textContent = '';
    const deliveryWrapper = document.createElement('div');
    const headerDelivery = document.createElement('p');
    headerDelivery.classList.add('popupHeading');
    headerDelivery.textContent = 'Укажите адрес доставки';
    const form = document.createElement('textarea');
    form.setAttribute('cols', '40');
    form.setAttribute('rows', '15');
    form.setAttribute('placeholder', 'Укажите адрес доставки');
    const submit = document.createElement('button');
    submit.textContent = 'Отправить';
    submit.classList.add('submitButton');
    deliveryWrapper.appendChild(headerDelivery)
    deliveryWrapper.appendChild(form);
    deliveryWrapper.appendChild(submit);
    deliveryPopup.style.display = 'block';
    closePopup(deliveryPopup);
    commentsButton(deliveryPopup)
    goodsButton(deliveryPopup)
    deliveryPopup.appendChild(deliveryWrapper)
}

function commentsButton(elem) { // кнопка комментария
    const commentsPopup = document.createElement('button');
    commentsPopup.textContent = 'Оставить комментарий';
    commentsPopup.classList.add('bottomButton');
    elem.appendChild(commentsPopup);
    commentsPopup.addEventListener('click', function () {
        elem.style.display = 'none';
        commentspopup();
    })
}

const commentsPopup = document.querySelector('#commentsPopup');
function commentspopup() { // отрисовка popup комментария
    commentsPopup.textContent = '';
    const commentsWrapper = document.createElement('div');
    const headerComments = document.createElement('p');
    headerComments.classList.add('popupHeading');
    headerComments.textContent = 'Комментарий к заказу';
    const form = document.createElement('textarea');
    form.setAttribute('cols', '40');
    form.setAttribute('rows', '15');
    form.setAttribute('placeholder', 'Комментарий');
    const submit = document.createElement('button');
    submit.textContent = 'Оформить заказ';
    submit.classList.add('submitButton');
    commentsWrapper.appendChild(headerComments)
    commentsWrapper.appendChild(form);
    commentsWrapper.appendChild(submit);
    commentsPopup.style.display = 'block';
    closePopup(commentsPopup);
    deliveryButton(commentsPopup);
    goodsButton(commentsPopup);
    commentsPopup.appendChild(commentsWrapper);
}

function goodsButton(elem) { // кнопка товаров
    const goodsPopup = document.createElement('button');
    goodsPopup.textContent = 'Страница товаров';
    goodsPopup.classList.add('bottomButton');
    goodsPopup.style.left = '30px';
    elem.appendChild(goodsPopup);
    goodsPopup.addEventListener('click', function () {
        elem.style.display = 'none';
        basketPopup.style.display = 'block';
    })
}
