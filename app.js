const board = document.querySelector('#board');
const colors = ['#00FFFF', '#9400D3', '#FFD700', '#FF0000', '#5a62ff', '#9ef3f1', '#7FFF00', '#fa2dd7'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div'); //создаем элемент div
    square.classList.add('square'); //добавление класса

    //добавляем слушателя событий
    square.addEventListener('mouseover', () => setColor(square)); //square.addEventListener('mouseover', setColor) //в функцию setColor передаем const square, для которого хотим передать цвет
    square.addEventListener('mouseleave', () => removeColor(square)); //square.addEventListener('mouseover', removeColor)
    board.append(square); // добавляем в селектор board элемент square
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}  //function setColor(event) const element = event.target

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
} //function removeColor(event) const element = event.target

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

