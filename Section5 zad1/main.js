// tutaj rozwiązanie
const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let fontSize = 10;



const playTheGame = () => {
    li.forEach(el => {
        if (!el.style.display) {
            el.style.display = 'block';
        }
        el.style.fontSize = fontSize + 'px';
    });
    fontSize++;
}

btn.addEventListener('click', playTheGame);