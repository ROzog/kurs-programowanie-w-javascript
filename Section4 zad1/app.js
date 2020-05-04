const square = document.createElement('div');
document.body.appendChild(square);

let num = 0;
let goUp = true

const changeSize = function () {

    if ((num < window.innerWidth / 2 && num < window.innerHeight / 2) && goUp) {
        square.style.width = `${num}px`;
        square.style.height = `${num}px`;
        num += 10;
    } else {
        square.style.width = `${num}px`;
        square.style.height = `${num}px`;
        num -= 10;
        num == 0 ? goUp = true : goUp = false;
    }
}

window.addEventListener('scroll', changeSize);

