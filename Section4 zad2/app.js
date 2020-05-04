let div = document.createElement('div');
document.body.appendChild(div);
document.body.style.height = '10000px';
div.style.width = '100%';
div.style.position = 'fixed';

let num = 0;
let grow = true;

const playWithMe = function () {
    if (grow && num < window.innerHeight / 2) {
        num += 20;
        div.style.height = num + 'px';
        div.style.backgroundColor = 'green';
    } else {
        num -= 20;
        div.style.height = num + 'px';
        div.style.backgroundColor = 'red';
        num == 0 ? grow = true : grow = false;
    }
}

window.addEventListener('scroll', playWithMe);

