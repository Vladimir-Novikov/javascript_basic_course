// Создание необходимых переменных
let letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
let cell; // данная переменная используется в 3 частях (цифры, буквы, ячейки)
let drawFig; // для рисунков (фигуры)

// находим элемент body
const body = document.querySelector('body');

// создание элемента main - в него будут добавляться ветки, а потом за одну оперцию подключим все на страницу
const main = document.createElement('div');
main.classList.add('main');

// заголовок
const title = document.createElement('div');
title.classList.add('title');
const titleText = document.createElement('h2');
titleText.textContent = 'Chess Board';
title.appendChild(titleText);
main.appendChild(title);

// глобальная доска с цифрами/буквами и самой доской для игры
const board = document.createElement('div');
board.classList.add('board');
main.appendChild(board);

// размещение цифр и букв на глобальной доске. Каждые в своих div
const lettersLine = document.createElement('div');
lettersLine.classList.add('lettersDiv');

for (let letter = 0; letter < 9; letter++) {
    cell = document.createElement('div');
    cell.textContent = letters[letter];
    lettersLine.appendChild(cell);
    cell.classList.add('letters');
}

board.appendChild(lettersLine);

const numbersLine = document.createElement('div');
numbersLine.classList.add('numbersDiv');

for (let number = 0; number < 8; number++) {
    cell = document.createElement('div');
    cell.textContent = numbers[number];
    numbersLine.appendChild(cell);
    cell.classList.add('letters');
}

board.appendChild(numbersLine);

/* создание игровой доски. Т.к. на доске 64 поля (от 0 до 63), в будущем их можно удобно
использовать для передвижения фигур, независимо от цифро/буквенных блоков*/
const chessBoard = document.createElement('div');
chessBoard.classList.add('chessBoard');

var flag = true;
for (let i = 0; i < 64; i++) {
    cell = document.createElement('div');
    drawFig = document.createElement('img'); // в каждый div добавили тег img, для рисунков фигур 
    drawFig.setAttribute('id', i); // назначили каждой ячейке img свой id
    cell.appendChild(drawFig);
    chessBoard.appendChild(cell);

    // cell.textContent = i // используется для отладки (нахождения номера поля)

    cell.classList.add('cell');

    if (i % 8 == 0) { // замена значения при переходе на новую 'строку'
        flag = !flag;
    }

    if (flag) {
        cell.classList.add('black');
        flag = !flag;
    } else {
        flag = !flag;
    }
}

board.appendChild(chessBoard);

// и в самом конце - добавляем всю собранную ветку в body
body.appendChild(main);

// в данном блоке рисуем фигуры на доске
function drawFigure() {
    for (let num = 0; num < 64; num++) {
        if (num == 0 || num == 7) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/bRook.png');
        }
        if (num == 56 || num == 63) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/wRook.png');
        }
        if (num == 2 || num == 5) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/bBishop.png');
        }
        if (num == 1 || num == 6) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/bKnight.png');
        }
        if (num == 57 || num == 62) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/wKnight.png');
        }
        if (num > 7 && num < 16) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/bPawn.png');
        }
        if (num == 58 || num == 61) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/wBishop.png');
        }
        if (num > 47 && num < 56) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/wPawn.png');
        }
        if (num == 3) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/bQueen2.png');
        }
        if (num == 4) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/bKing2.png');
        }
        if (num == 59) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/wQueen2.png');
        }
        if (num == 60) {
            const fig = document.getElementById(num);
            fig.setAttribute('src', 'img/wKing2.png');
        }
    }
}
drawFigure();
